function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-white/10 bg-[rgba(39,53,76,0.6)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;
