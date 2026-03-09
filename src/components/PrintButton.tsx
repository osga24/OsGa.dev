"use client";

export default function PrintButton({ label = "Export PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="cv-print-hidden inline-flex items-center border border-[#111827] px-3 py-1.5 text-xs font-semibold text-[#111827] transition hover:bg-[#111827] hover:text-white"
    >
      {label}
    </button>
  );
}
