export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-mono text-2xl font-bold ${className}`}>
      <span className="text-primary">&lt;</span>
      <span className="text-foreground">ce</span>
      <span className="text-primary">/&gt;</span>
    </div>
  )
}
