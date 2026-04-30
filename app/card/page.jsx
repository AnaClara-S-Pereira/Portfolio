export default function CardProjeto({ url, titulo, descricao, tecnologias }) {
  return (
    <div className="group relative bg-[#131313] border border-white/5 rounded-3xl hover:shadow-[#692CB6]/50 transition-all duration-500 shadow-xl flex flex-col w-full max-w-[380px]">
      {/* CARD PREVIEW */}
      <div className="relative h-56 w-full overflow-hidden bg-black rounded-3xl">
        <iframe
          src={url}
          className="w-[1200px] h-[800px] origin-top-left scale-[0.31] pointer-events-none opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0"
          title={titulo}
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 cursor-pointer"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black text-white group-hover:text-[#692CB6] transition-colors">
            {titulo}
          </h3>
        </div>

        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
          {descricao}
        </p>

        <div className="flex gap-6 mb-8">
          <span className="text-[11px] font-bold text-zinc-400 bg-white/5 px-3 py-1 rounded-full tracking-wide">
            {tecnologias}
          </span>
        </div>
      </div>
    </div>
  );
}
