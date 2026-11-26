import { useState } from "react";
import { WorkspaceSidebar } from "../components/workspace/WorkspaceSidebar";
import { ChatMessageFeed } from "../components/workspace/ChatMessageFeed";
import { ChatComposerBar } from "../components/workspace/ChatComposerBar";
import { WorkspaceSettingsModal } from "../components/workspace/WorkspaceSettingsModal";

function generateResponsePayload({ prompt, model, platform, attachment }) {
  const source = attachment || "wireframe-app.fig";
  const latencyMap = {
    "Vexel Trace": "0,38 dtk",
    "Vexel Frame": "1,20 dtk",
    "Vexel Kernel": "2,45 dtk",
  };

  if (platform === "Mobile") {
    return {
      latency: latencyMap[model] || "1,20 dtk",
      fileName: "lib/screens/synthesized_screen.dart",
      summary: `Komponen Flutter responsif berhasil disusun dari ${source} menggunakan ${model} dengan struktur widget modular dan token warna tema Refract.`,
      code: `// Sintesis oleh ${model} | Sumber: ${source}
import 'package:flutter/material.dart';

class SynthesizedScreen extends StatelessWidget {
  const SynthesizedScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8F9FA),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: Colors.white,
              border: Border.all(color: const Color(0xFFE2E5E9)),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'VEXEL MOBILE RELEASE',
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF0052FF),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  '${prompt.replaceAll("'", "\\'")}',
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w700,
                    color: Color(0xFF0B0D10),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}`,
    };
  }

  return {
    latency: latencyMap[model] || "1,20 dtk",
    fileName:
      model === "Vexel Kernel"
        ? "src/api/routes/synthesizedEndpoint.js"
        : "src/components/SynthesizedSection.jsx",
    summary: `Berhasil menyusun kode produksi dari ${source} menggunakan ${model} dengan standar Swiss-grid 1px border dan kompatibilitas React 19 + Tailwind v4.`,
    code: `// Sintesis oleh ${model} | Sumber: ${source}
import React from 'react';

export function SynthesizedSection({ items = ['Terverifikasi', 'Siap Rilis', 'Zero Drift'] }) {
  return (
    <section className="bg-white border border-border-hairline p-6 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-border-hairline">
        <span className="font-mono text-xs font-semibold text-signal">
          {model.toUpperCase()} • OUTPUT
        </span>
        <span className="font-mono text-xs text-ink-muted">${source}</span>
      </div>

      <h2 className="text-lg font-bold text-ink-primary">
        ${prompt.replace(/`/g, "'")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-border-hairline">
        {items.map((status) => (
          <div key={status} className="p-4 border-r border-b border-border-hairline font-mono text-xs">
            {status}
          </div>
        ))}
      </div>
    </section>
  );
}`,
  };
}

const INITIAL_SESSIONS = [
  {
    id: "ses-1",
    title: "Slicing dashboard wireframe",
    project: "vexel-web",
    hasUpdate: true,
    messages: [],
  },
  {
    id: "ses-2",
    title: "Skema autentikasi JWT & RBAC",
    project: "api-service",
    hasUpdate: false,
    messages: [],
  },
  {
    id: "ses-3",
    title: "Fix responsive grid navbar",
    project: "monorepo",
    hasUpdate: true,
    messages: [],
  },
  {
    id: "ses-4",
    title: "Komponen checkout Flutter",
    project: "vexel-web",
    hasUpdate: false,
    messages: [],
  },
];

export function WorkspacePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [sessions, setSessions] = useState(INITIAL_SESSIONS);
  const [activeSessionId, setActiveSessionId] = useState("new");

  const [repo, setRepo] = useState("vexel-web");
  const [branch, setBranch] = useState("main");
  const [platform, setPlatform] = useState("Web");
  const [model, setModel] = useState("Vexel Frame");
  const [attachedFile, setAttachedFile] = useState("");

  const activeSession = sessions.find((s) => s.id === activeSessionId);
  const currentMessages = activeSession ? activeSession.messages : [];

  const handleNewChat = () => {
    setActiveSessionId("new");
    setAttachedFile("");
  };

  const handleSendMessage = (promptText, overrideOptions = {}) => {
    const usedModel = overrideOptions.model || model;
    const usedPlatform = overrideOptions.platform || platform;
    const usedAttachment = overrideOptions.attachment ?? attachedFile;

    const now = new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg = {
      id: `u-${Date.now()}`,
      role: "user",
      text: promptText,
      repo,
      branch,
      platform: usedPlatform,
      attachment: usedAttachment,
      time: now,
    };

    const generated = generateResponsePayload({
      prompt: promptText,
      model: usedModel,
      platform: usedPlatform,
      attachment: usedAttachment,
    });

    const aiMsg = {
      id: `a-${Date.now() + 1}`,
      role: "assistant",
      model: usedModel,
      latency: generated.latency,
      summary: generated.summary,
      fileName: generated.fileName,
      code: generated.code,
      time: now,
    };

    if (activeSessionId === "new" || !activeSession) {
      const newId = `ses-${Date.now()}`;
      const shortTitle =
        promptText.length > 34 ? `${promptText.slice(0, 34)}...` : promptText;

      setSessions((prev) => [
        {
          id: newId,
          title: shortTitle,
          project: repo,
          hasUpdate: true,
          messages: [userMsg, aiMsg],
        },
        ...prev,
      ]);
      setActiveSessionId(newId);
    } else {
      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? {
                ...s,
                hasUpdate: true,
                messages: [...s.messages, userMsg, aiMsg],
              }
            : s,
        ),
      );
    }

    setAttachedFile("");
  };

  const handleQuickPrompt = (starter) => {
    setModel(starter.model);
    setPlatform(starter.platform);
    handleSendMessage(starter.label, {
      model: starter.model,
      platform: starter.platform,
    });
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-white text-ink-primary">
      {/* Sidebar Kiri: Histori Chat, New Chat, Projects, & Settings */}
      <WorkspaceSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
        sessions={sessions}
        activeSessionId={activeSessionId}
        onSelectSession={(id) => {
          setActiveSessionId(id);
          const found = sessions.find((s) => s.id === id);
          if (found) setRepo(found.project);
        }}
        onNewChat={handleNewChat}
        activeRepo={repo}
        onSelectRepo={setRepo}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Area Utama Bersih (Tanpa Top Header/Toolbar) */}
      <main className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">
        {/* Tombol kecil pembuka sidebar hanya muncul saat sidebar ditutup */}
        {!sidebarOpen && (
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            title="Buka sidebar riwayat chat"
            className="absolute top-4 left-4 z-20 p-2 bg-canvas hover:bg-white border border-border-hairline text-ink-primary transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="16" />
              <line x1="9" y1="4" x2="9" y2="20" />
            </svg>
          </button>
        )}

        {/* Feed Chat / Empty State */}
        <ChatMessageFeed
          messages={currentMessages}
          repo={repo}
          branch={branch}
          onQuickPrompt={handleQuickPrompt}
        />

        {/* Bar Chat Bawah (Repo, Branch, Tanda +, Model Picker, & Kirim) */}
        <ChatComposerBar
          repo={repo}
          onChangeRepo={setRepo}
          branch={branch}
          onChangeBranch={setBranch}
          platform={platform}
          onChangePlatform={setPlatform}
          model={model}
          onChangeModel={setModel}
          attachedFile={attachedFile}
          onAttachFile={setAttachedFile}
          onSendMessage={handleSendMessage}
        />
      </main>

      {/* Modal Settings */}
      <WorkspaceSettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
}
