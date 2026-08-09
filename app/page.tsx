"use client";
import React from "react";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import CardProjeto from "./card/page";

const tecnologias = [
  { nome: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { nome: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { nome: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { nome: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { nome: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { nome: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { nome: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { nome: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { nome: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { nome: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { nome: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
];

export default function PortfolioHub() {
  return (
    <div className="bg-[#0a0a0d] min-h-screen text-zinc-200 font-sans selection:bg-[#692CB6]/40 selection:text-white overflow-x-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] md:h-[500px] bg-[#692CB6]/15 blur-[120px] md:blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-[35%] -left-40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/15 blur-[120px] md:blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-[70%] -right-40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#692CB6]/15 blur-[120px] md:blur-[180px] pointer-events-none rounded-full" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex justify-between items-center">
          <div className="relative w-8 h-8 md:w-10 md:h-10 hover:opacity-80 transition-opacity cursor-pointer">
            <Image src="/logo.png" alt="A.S" fill sizes="40px" className="object-contain" />
          </div>

          <div className="hidden md:flex gap-6 lg:gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
            <a href="#home" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Início</a>
            <a href="#tecnologias" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Tecnologias</a>
            <a href="#sobre" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Sobre</a>
            <a href="#portfolios" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Projetos</a>
            <a href="#contato" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Contato</a>
          </div>
        </div>
      </nav>
      {/*HEADER*/}
      <header id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:py-0 px-6 overflow-hidden">
        <div className="absolute inset-0 hidden md:flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
          <h1 className="text-[22vw] font-black text-white/[0.04] leading-none uppercase tracking-tighter whitespace-nowrap">
            SANTOS
          </h1>
        </div>

        <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between relative z-10 gap-8 md:gap-0">

          <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter leading-[0.95] md:leading-[0.9]">
              ANA <br />
              <span className="text-transparent md:ml-7 bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-purple-300 to-indigo-200 pr-2">
                CLARA
              </span>
            </h1>
            <p className="text-zinc-300 text-xs sm:text-base md:text-xl font-medium mt-3 md:mt-6 mb-6 md:mb-10 max-w-xs sm:max-w-md leading-relaxed">
              Desenvolvedora Web | React.js | TypeScript | Next.js | Tailwind CSS | JavaScript | MySQL
            </p>

            <a href="/AnaClaraSantosPereira_Curriculo.pdf" download="Currículo_Ana_Clara_Santos_Pereira.pdf">
              <button className="flex items-center border-2 border-[#692CB6] gap-3 text-white font-black px-7 py-3.5 md:px-10 md:py-5 rounded-full uppercase text-[11px] md:text-xs tracking-widest bg-[#692CB6]/20 hover:bg-[#692CB6] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(105,44,182,0.5)]">
                Download CV
                <Download size={15} />
              </button>
            </a>
          </div>

          <div className="relative z-10 mb-5 md:mb-0 md:translate-x-0 lg:-translate-x-12">
            <div className="absolute -inset-2.5 border border-[#692CB6]/40 rounded-full animate-pulse" />
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] overflow-hidden rounded-full border-[5px] md:border-[6px] border-[#18181c] shadow-[0_0_40px_rgba(105,44,182,0.35)] group">
              <Image
                src="/profile.jpeg"
                alt="Ana Clara"
                fill
                priority
                className="cursor-pointer -mt-2  group-hover:scale-105 transition-all duration-700 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </div>

        </div>
      </header>

      {/* SEÇÃO TECNOLOGIAS */}
      <section id="tecnologias" className="py-16 md:py-24 px-4 sm:px-6 relative z-10 bg-[#0f0f14]/60 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-10 md:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8B5CF6] font-bold mb-2">Stack Técnica</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight text-center">
              Tecnologias & Ferramentas
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#692CB6] to-purple-400 rounded-full mt-4" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
            {tecnologias.map((tech) => (
              <div
                key={tech.nome}
                className="group flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 md:mb-3 transition-all duration-300 group-hover:-translate-y-2 group-hover:drop-shadow-[0_10px_20px_rgba(139,92,246,0.6)]">
                  <Image
                    src={tech.src}
                    alt={tech.nome}
                    fill
                    className="object-contain filter grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors tracking-wide">
                  {tech.nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE MIM */}
      <section id="sobre" className="relative py-16 md:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-10 md:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8B5CF6] font-bold mb-2">Minha História</span>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight text-center">
              Sobre mim
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-[#692CB6] to-purple-400 rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* CARD DE CÓDIGO */}
            <div className="bg-[#15151a] border border-white/15 rounded-2xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] font-mono text-xs sm:text-sm relative overflow-hidden group hover:border-[#8B5CF6]/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-zinc-400 ml-2">desenvolvedora.ts</span>
              </div>

              <div className="space-y-2 leading-relaxed">
                <p className="text-purple-300"><span className="text-pink-400">const</span> desenvolvedora = &#123;</p>
                <p className="pl-4 text-zinc-200">nome: <span className="text-emerald-300">&quot;Ana Clara Santos&quot;</span>,</p>
                <p className="pl-4 text-zinc-200">foco: <span className="text-emerald-300">&quot;Full Stack &amp; UI/UX Design&quot;</span>,</p>
                <p className="pl-4 text-zinc-200">localizacao: <span className="text-emerald-300">&quot;Brasil&quot;</span>,</p>
                <p className="pl-4 text-zinc-200">
                  paixao: <span className="text-emerald-300">&quot;Criar interfaces autênticas e modernas&quot;</span>,
                </p>
                <p className="pl-4 text-zinc-200">
                  proposito: <span className="text-emerald-300">&quot;Inovação com propósito e valor real&quot;</span>,
                </p>
                <p className="text-purple-300">&#125;;</p>
              </div>
            </div>

            {/* LADO DIREITO */}
            <div className="space-y-4 md:space-y-6 text-zinc-300 text-sm sm:text-base md:text-md leading-relaxed text-left">
              <p>
                Minha história na tecnologia começou no ensino técnico (AMS), onde aprendi a base de lógica de programação. Hoje, cursando Análise e Desenvolvimento de Sistemas, foco meus projetos na linguagem <span className="text-white font-semibold">React.js, Next.js e TypeScript</span>.
              </p>
              <p>
                Gosto de pensar em problemas reais e transformar em interfaces <span className="text-white font-medium">autênticas, bonitas e fáceis de usar</span>. Para mim, o código só faz sentido quando resolve alguma dor de verdade ou ajuda um grupo de pessoas que realmente precisa.
              </p>
              <p className="text-zinc-400">
                Estou sempre criando projetos práticos para evoluir e quero trocar experiências com times que também acreditam em tecnologia com propósito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="portfolios" className="py-16 md:py-28 px-4 sm:px-6 bg-[#0e0e12] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center mb-10 md:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8B5CF6] font-bold mb-2">Portfólio</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight text-center">
              Projetos em Destaque
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#692CB6] to-purple-400 rounded-full mt-4" />
          </div>

          <div className="flex items-center justify-center w-full">
            <CardProjeto
              url="https://bug-cost.vercel.app/"
              titulo="BugCost"
              descricao="Traduza erros técnicos em prejuízo real, visualizando o impacto financeiro."
              tecnologias="TypeScript | Node.js | Next.js"
            />
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="w-full py-16 md:py-24 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#181820] via-[#121218] to-[#181820] border border-white/15 rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8B5CF6] font-bold mb-2 block">
                Vamos Conversar?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-wide mb-3">
                Entre em Contato
              </h2>
              <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Sinta-se à vontade para enviar uma mensagem sobre parcerias, oportunidades ou para trocar uma ideia!
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-5 w-full md:w-auto shrink-0">
              <a
                href="mailto:pereira.anaclara1303@gmail.com"
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#692CB6]/20 border border-[#8B5CF6]/40 hover:border-[#8B5CF6] px-4 sm:px-6 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold text-white transition-all hover:bg-[#692CB6] hover:scale-105 w-full sm:w-auto overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <Mail size={16} className="text-purple-300 shrink-0" />
                <span className="truncate">pereira.anaclara1303@gmail.com</span>
              </a>

              {/* REDES SOCIAIS */}
              <div className="flex gap-4 items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/ana-pereira-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 border border-white/10 rounded-full hover:border-[#8B5CF6] hover:bg-[#692CB6] text-white hover:scale-110 transition-all"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/AnaClara-S-Pereira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 border border-white/10 rounded-full hover:border-[#8B5CF6] hover:bg-[#692CB6] text-white hover:scale-110 transition-all"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 sm:py-8 text-center bg-[#07070a] border-t border-white/10 px-4">
        <p className="text-[10px] sm:text-[11px] tracking-widest uppercase text-zinc-400">
          © 2026 - Desenvolvido por Ana Clara Santos. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}