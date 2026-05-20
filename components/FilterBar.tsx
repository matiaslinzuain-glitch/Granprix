"use client";

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  sortBy?: string;
  onSortChange?: (sort: string) => void;
  showSort?: boolean;
}

const CATEGORIES = [
  { value: "todo", label: "Todo" },
  { value: "remeras", label: "Remeras" },
  { value: "pantalones", label: "Pantalones" },
  { value: "buzos", label: "Buzos" },
  { value: "camperas", label: "Camperas" },
];

const SORT_OPTIONS = [
  { value: "default", label: "Ordenar" },
  { value: "precio-asc", label: "Menor precio" },
  { value: "precio-desc", label: "Mayor precio" },
  { value: "nuevo", label: "Más nuevos" },
];

export default function FilterBar({
  activeCategory,
  onCategoryChange,
  sortBy = "default",
  onSortChange,
  showSort = false,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      {/* Filtros de categoría */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`text-xs font-medium tracking-wider uppercase px-5 py-2.5 transition-all duration-200 ${
              activeCategory === cat.value
                ? "bg-[#d4a853] text-black"
                : "border border-[#2a2a2a] text-[#9a9a9a] hover:border-[#d4a853] hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Ordenamiento */}
      {showSort && onSortChange && (
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-[#111111] border border-[#2a2a2a] text-[#9a9a9a] text-xs tracking-wider uppercase px-4 py-2.5 focus:outline-none focus:border-[#d4a853] cursor-pointer"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
