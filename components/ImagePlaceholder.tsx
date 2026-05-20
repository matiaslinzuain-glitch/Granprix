interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  icon?: "shirt" | "person";
}

export default function ImagePlaceholder({
  label = "foto del producto",
  className = "",
  icon = "shirt",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-[#1a1a1a] flex flex-col items-center justify-center gap-3 ${className}`}
    >
      {icon === "shirt" ? (
        <svg
          className="w-16 h-16 text-[#333333]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 6l3-3 3 3M18 6l3-3-3-3M3 6c0 0 2 1 6 1s6-1 6-1M15 6l3-3M9 3l3 3m0 0v14m0-14C12 6 10 7 9 9v9h6V9c-1-2-3-3-3-3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M6 6v14h12V6"
          />
        </svg>
      ) : (
        <svg
          className="w-20 h-20 text-[#333333]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      )}
      <span className="text-[#444444] text-xs tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}
