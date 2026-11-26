import { RouterProvider, useRouter } from "./router/Router";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { PricingPage } from "./pages/PricingPage";
import { AboutPage } from "./pages/AboutPage";
import { WorkspacePage } from "./pages/WorkspacePage";

function AppRoutes() {
  const { path } = useRouter();

  if (path === "/workspace") {
    return <WorkspacePage />;
  }

  let ActivePage = HomePage;
  if (path === "/produk") ActivePage = ProductPage;
  else if (path === "/harga") ActivePage = PricingPage;
  else if (path === "/tentang-kami") ActivePage = AboutPage;

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink-primary">
      <Navbar />
      <div className="flex-1">
        <ActivePage />
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}
