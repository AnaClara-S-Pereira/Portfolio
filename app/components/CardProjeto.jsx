export default function CardProjeto({ url, titulo, descricao, tecnologias, repo }) {
  const techs = tecnologias.split("|").map((t) => t.trim());

  return (
    <div className="group relative bg-[#131313] border border-white/10 rounded-3xl hover:border-[#692CB6]/60 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(105,44,182,0.35)] transition-all duration-500 shadow-xl flex flex-col">
      {/* CARD PREVIEW */}
      <div className="relative h-56 w-full overflow-hidden bg-white rounded-t-3xl border-b border-white/10">
        <iframe
          src={url}
          className="w-[323%] h-[730px] origin-top-left scale-[0.31] pointer-events-none group-hover:scale-[0.33] transition-transform duration-700"
          title={titulo}
          loading="lazy"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${titulo}`}
          className="absolute inset-0 z-20 cursor-pointer"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#8B5CF6] transition-colors">
          {titulo}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
          {descricao}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-bold text-[#c4b5fd] bg-[#692CB6]/15 border border-[#692CB6]/30 px-3 py-1 rounded-full tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-[11px] font-black uppercase tracking-widest text-white bg-[#692CB6]/20 border border-[#692CB6] hover:bg-[#692CB6] px-4 py-2.5 rounded-full transition-colors"
          >
            Ver projeto
          </a>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-[11px] font-black uppercase tracking-widest text-zinc-300 border border-white/15 hover:border-[#8B5CF6] hover:text-white px-4 py-2.5 rounded-full transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
