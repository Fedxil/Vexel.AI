export function VexelLogo({ size = 26, showText = true, dark = false }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      {/* Logo Geometris Vector-Pixel */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="0.5"
          y="0.5"
          width="27"
          height="27"
          fill={dark ? "#161B22" : "#FFFFFF"}
          stroke={dark ? "#30363D" : "#0B0D10"}
        />
        {/* Pixel & Vector V-Grid */}
        <rect
          x="5"
          y="6"
          width="4"
          height="4"
          fill={dark ? "#FFFFFF" : "#0B0D10"}
        />
        <rect x="19" y="6" width="4" height="4" fill="#0052FF" />
        <rect
          x="7"
          y="11"
          width="4"
          height="4"
          fill={dark ? "#FFFFFF" : "#0B0D10"}
        />
        <rect
          x="17"
          y="11"
          width="4"
          height="4"
          fill={dark ? "#FFFFFF" : "#0B0D10"}
        />
        <rect
          x="10"
          y="16"
          width="8"
          height="4"
          fill={dark ? "#FFFFFF" : "#0B0D10"}
        />
        <rect x="12" y="20" width="4" height="3" fill="#0052FF" />
      </svg>
      {showText && (
        <span
          className={`font-heading font-bold tracking-tight text-lg ${
            dark ? "text-white" : "text-ink-primary"
          }`}
        >
          Vexel<span className="text-signal">.ai</span>
        </span>
      )}
    </span>
  );
}
