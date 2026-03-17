export function Footer() {
  return (
    <footer className="h-64 bg-neutral flex flex-col items-center justify-center relative overflow-hidden text-center pb-12">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
      
      <h2 className="text-4xl md:text-6xl font-bold text-error tracking-widest uppercase mb-4 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] animate-pulse">
        Game Over
      </h2>
      
      <p className="text-neutral-content/80 font-mono tracking-widest text-sm animate-bounce mt-4">
        INSERT COIN TO CONTINUE...
      </p>

      <div className="mt-8 text-neutral-content/50 text-xs flex gap-4 font-mono">
        <span>© {new Date().getFullYear()} ThumeenaDev</span>
        <span>|</span>
        <span>CREDIT 0</span>
      </div>
    </footer>
  );
}
