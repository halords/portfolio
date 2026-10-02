interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * The halords monogram — an "H" with an angled crossbar (forward motion)
 * and the signature gold corner cut.
 */
export function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="halords-mark">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <circle cx="16" cy="16" r="16" fill="#4a7c6f" />
      <g clipPath="url(#halords-mark)">
        {/* Left vertical bar of H */}
        <rect x="7" y="7" width="4" height="18" fill="#ffffff" />
        {/* Right vertical bar of H */}
        <rect x="21" y="7" width="4" height="18" fill="#ffffff" />
        {/* Angled crossbar */}
        <polygon points="11,13 21,16 21,19 11,16" fill="#ffffff" />
        {/* Gold corner cut */}
        <polygon points="26,0 32,0 32,6" fill="#b5863a" />
      </g>
    </svg>
  );
}
