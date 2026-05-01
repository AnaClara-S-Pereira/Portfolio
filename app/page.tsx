"use client";
import React from "react";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import CardProjeto from "./card/page";

export default function PortfolioHub() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-zinc-300 font-sans selection:bg-[#692CB6]/30 overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="relative w-10 h-10">
            <Image src="/Logo.png" alt="A.S" fill className="" sizes="20" />
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-white transition-colors">
              Início
            </a>

            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre
            </a>

            <a
              href="#portfolios"
              className="hover:text-white transition-colors"
            >
              Projetos
            </a>

            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>

      <header
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 px-6"
      >
        {/* TEXTO DE FUNDO */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <h1 className="text-[25vw] font-black text-white/5 leading-none uppercase select-none">
            SANTOS
          </h1>
        </div>

        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* LADO ESQUERDO: TEXTO */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter leading-[0.9]">
              ANA
              <br />
              <span className="text-transparent ml-7 bg-clip-text bg-gradient-to-r from-[#692CB6] to-purple-400 pr-4">
                CLARA
              </span>
            </h1>
            <p className="text-zinc-500 text-lg md:text-xl font-medium mt-6 mb-10 max-w-md leading-relaxed">
              Desenvolvedora Web | React.js | TypeScript | Next.js | Tailwind
              CSS | JavaScript | MYSQL
            </p>
            {/*CURRÍCULO*/}
            <a
              href="/Ana_Pereira_Curriculo.pdf"
              download="Currículo_Ana_Clara_Santos_Pereira.pdf"
            >
              <button className="flex items-center border-2 border-[#692CB6] gap-3 text-white font-black px-10 py-5 rounded-full uppercase text-xs tracking-widest hover:bg-[#692CB6] transition-all duration-150 cursor-pointer hover:scale-105">
                Dowload CV
                <Download size={16} />
              </button>
            </a>
          </div>

          {/* LADO DIREITO: FOTO */}
          <div className="relative mt-16 md:mt-0">
            {/* CÍRCULO FOTO*/}
            <div className="absolute -inset-4 border border-[#692CB6]/20 rounded-full" />

            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] overflow-hidden rounded-full border-[8px] border-[#131313] shadow-[0_0_50px_rgba(105,44,182,0.1)]">
              <Image
                src="/Profile.png"
                alt="Ana Clara"
                fill
                priority
                className="cursor-pointer hover:scale-105 transition-all duration-700"
                sizes="30"
              />
            </div>
          </div>
        </div>
      </header>

      {/* SEÇÃO SOBRE MIM */}
      <section
        id="sobre"
        className="relative flex flex-col items-center justify-center scroll-mt-70"
      >
        <div className="relative z-10 text-center max-w-3xl mt-15 ">
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Sobre mim
          </h3>
          <div className="w-30 border-2 rounded ml-[42%] -mt-4 mb-10"></div>

          <div className="space-y-6 text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
            <p>
              Como Desenvolvedora
              <span className="text-zinc-100"> Web</span>, tenho sólida
              experiência em projetos pessoais e acadêmicos, utilizando
              tecnologias modernas como TypeScript, Tailwind CSS, React.js e
              Next.js.
            </p>
            <p>
              Sou apaixonada em criar interfaces
              <span className="text-zinc-100 italic"> autênticas e limpas</span>
              , que passem de forma direta uma mensagem e sejam inspiradoras.
              Meu objetivo é continuar evoluindo em projetos cada vez mais
              desafiadores e contribuir com times que prezam pela inovação e
              autênticidade.
            </p>
          </div>
        </div>
      </section>
      {/*SITES PORTIFÓLIO*/}

      <section
        id="portfolios"
        className="bg-[#0c0c0c] py-32 px-6 flex justify-center items-center"
      >
        <div className="max-w-7xl mx-auto w-full cursor-pointer">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
              Projetos
            </h2>
            <div className="h-1 w-20 bg-[#692CB6] rounded-full" />
          </div>

          {/* CARDS*/}
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

      <section
        id="contato"
        className="w-full flex flex-col items-center justify-center bg-[#131313] w-full p-13"
      >
        <div className="bg-[#0c0c0c] rounded-xl p-8 md:w-[70%]">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4">
              Contato
            </h2>
            <div className="h-1 w-20 bg-[#692CB6] rounded-full" />
            <div className="flex flex-row gap-8">
              {/*LINKEDIN*/}
              <div className="flex justify-center items-center mt-10">
                <a
                  href="https://www.linkedin.com/in/ana-pereira-dev/"
                  target="_blank"
                >
                  <FaLinkedin
                    size={50}
                    className="hover:text-zinc-500 transition-all duration-150 cursor-pointer"
                  />
                </a>
              </div>
              {/*GITHUB*/}
              <div className="flex justify-center items-center mt-10">
                <a href="https://github.com/AnaClara-S-Pereira" target="_blank">
                  <FaGithub
                    size={50}
                    className="hover:text-zinc-500 transition-all duration-150 cursor-pointer"
                  />
                </a>
              </div>
              {/*EMAIL*/}
              <div className="flex justify-center items-center mt-10">
                <a href="mailto:pereira.anaclara1303@gmail.com" target="_blank">
                  <Mail
                    size={50}
                    className="hover:text-zinc-500 transition-all duration-150 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-10 text-center bg-[#260b47]">
        <p className="text-[10px] tracking-wide uppercase text-zinc-400">
          Copyright © 2026 Ana Santos. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
