function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-[#38debb]">
      {children}
    </span>
  );
}

export default SectionLabel;
