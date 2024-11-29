import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import logo from "../../assets/logo2.png";
import profile from "../../assets/profile.jpg";
import style from "./index.module.css";
import hero1 from "../../assets/hero1.mp4";
import hero2 from "../../assets/hero2.mp4";
import hero3 from "../../assets/hero3.mp4";
import hero4 from "../../assets/hero4.mp4";
import ci from "../../assets/ci.png";
import nakine from "../../assets/nakine.jpg";
import cipropaganda from "../../assets/cipropaganda.jpg";
import cipropaganda2 from "../../assets/cipropaganda2.jpg";
import cipropaganda3 from "../../assets/cipropaganda3.jpg";
import cipropaganda4 from "../../assets/cipropaganda4.jpg";
import nakinePropaganda from "../../assets/nakinePropaganda.jpg";
import nakinePropaganda2 from "../../assets/nakinePropaganda2.jpg";
import nakinePropaganda3 from "../../assets/nakinePropaganda3.jpg";
import nakinePropaganda4 from "../../assets/nakinePropaganda4.jpg";
import { FaInstagram, FaSquareInstagram, FaWhatsapp } from "react-icons/fa6";
import { SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import capcut from "../../assets/capcut.png";
import { TbWriting } from "react-icons/tb";

export function Home() {
  const [counterPublicityOne, setCounterPublicityOne] = useState(0);
  const [counterPublicityTwo, setCounterPublicityTwo] = useState(0);
  const [inputMesageText, setInputMesageText] = useState("");

  const onChangeInputMesageText = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const str = value.charAt(0).toUpperCase() + value.slice(1);
    setInputMesageText(str);
  };

  useEffect(() => {
    let counterPublicityOne = 0;
    let counterPublicityTwo = 0;

    const intervalPublicityOne = setInterval(() => {
      if (counterPublicityOne === 3) {
        counterPublicityOne = 0;
      } else {
        counterPublicityOne++;
      }
      setCounterPublicityOne(counterPublicityOne);
    }, 3000);

    const intervalPublicityTwo = setInterval(() => {
      if (counterPublicityTwo === 3) {
        counterPublicityTwo = 0;
      } else {
        counterPublicityTwo++;
      }
      setCounterPublicityTwo(counterPublicityTwo);
    }, 3500);

    return () => {
      clearInterval(intervalPublicityOne);
      clearInterval(intervalPublicityTwo);
    };
  }, []);

  return (
    <>
      <section className={style.HeroSection}>
        <img src={logo} alt="Logo" />
        <video autoPlay loop muted playsInline>
          <source src={hero1} />
        </video>
        <video autoPlay loop muted playsInline>
          <source src={hero2} />
        </video>
        <video autoPlay loop muted playsInline>
          <source src={hero3} />
        </video>
        <video autoPlay loop muted playsInline>
          <source src={hero4} />
        </video>
      </section>
      <section className={style.WorksSection}>
        <h2>
          Confira meus <span>Trabalhos</span> em algumas <span>Empresas</span>
        </h2>
        <div>
          <div className={style.Card}>
            <a
              href="https://www.instagram.com/comercialitagua/"
              target="_blank"
            >
              <img src={ci} alt="profile publicity one" />
            </a>
            <img
              src={cipropaganda}
              alt="publicity"
              style={{
                display: counterPublicityOne === 0 ? "block" : "none",
              }}
            />
            <img
              src={cipropaganda2}
              alt="publicity"
              style={{
                display: counterPublicityOne === 1 ? "block" : "none",
              }}
            />
            <img
              src={cipropaganda3}
              alt="publicity"
              style={{
                display: counterPublicityOne === 2 ? "block" : "none",
              }}
            />
            <img
              src={cipropaganda4}
              alt="publicity"
              style={{
                display: counterPublicityOne === 3 ? "block" : "none",
              }}
            />
          </div>
          <div className={style.Card}>
            <a
              href="https://www.instagram.com/restaurantenakine/"
              target="_blank"
            >
              <img src={nakine} alt="" />
            </a>
            <img
              src={nakinePropaganda}
              alt="publicity"
              style={{
                display: counterPublicityTwo === 0 ? "block" : "none",
              }}
            />
            <img
              src={nakinePropaganda2}
              alt="publicity"
              style={{
                display: counterPublicityTwo === 1 ? "block" : "none",
              }}
            />
            <img
              src={nakinePropaganda3}
              alt="publicity"
              style={{
                display: counterPublicityTwo === 2 ? "block" : "none",
              }}
            />
            <img
              src={nakinePropaganda4}
              alt="publicity"
              style={{
                display: counterPublicityTwo === 3 ? "block" : "none",
              }}
            />
          </div>
        </div>
      </section>
      <section id="servicos" className={style.ServicesSection}>
        <h2>
          <span>Serviços</span> a sua <span>disposição</span>
        </h2>
        <div className={style.CardContainer}>
          <div className={style.Card}>
            <SiAdobepremierepro />
            <p>
              - Edição e produção de vídeos profissionais com
              <span> Adobe Premiere</span>, incluindo correcção de cor, efeitos
              visuais, animação de títulos e finalização.
            </p>
            <p>
              - Criação de vídeos para diversas plataformas:{" "}
              <b>Redes sociais</b>,<b>YouTube</b>, <b>Websites</b> e muito mais.
            </p>
            <p>
              - Produção de vídeos <b>corporativos</b>, <b>institucionais</b> e{" "}
              <b>promocionais</b>
            </p>
          </div>
          <div className={style.Card}>
            <SiAdobephotoshop />
            <p>
              - Edição e tratamento de imagens profissionais com
              <span> Adobe Photoshop</span>.
            </p>
            <p>
              - Transformação de suas fotos em obras de arte e
              <b> criação de visuais impactantes</b> para suas
              <b> redes sociais</b> e <b>materiais de marketing</b>.
            </p>
            <p>
              - Correção de <b>imperfeições</b>, <b>ajuste de cores</b>, criação
              de <b> composições incríveis</b> e muito mais.
            </p>
          </div>
          <div className={style.Card}>
            <img src={capcut} alt="" />
            <p>
              - Edição de vídeos ágil e criativa com <span>CapCut</span>. Crie
              conteúdos incríveis para suas redes sociais em poucos minutos.
            </p>
            <p>
              - Transformação de <b>vídeos</b> em verdadeiras
              <b> obras de arte</b> com os recursos avançados do CapCut.
            </p>
            <p>
              - Edição rápida e eficaz para <b>TikTok</b>,
              <b> Instagram Reels </b>e muito mais.
            </p>
            <p>
              - Criação de <b>conteúdos engajadores</b> e <b>divertidos</b> para
              suas <b>redes sociais</b>
            </p>
          </div>
          <div className={style.Card}>
            <FaSquareInstagram />
            <p>
              - Deixe seu <b>Instagram</b> nas minhas mãos, crio
              <b> estratégias personalizadas </b> para atrair mais
              <b> seguidores</b> e<b> impulsionar</b> seus resultados.
            </p>
            <p>
              - Gerenciamento completo de sua conta no <b>Instagram</b>.
            </p>
            <p>
              - <b>Criação de conteúdo</b>, <b>engajamento</b> com a comunidade
              e aumento do alcance da sua marca.
            </p>
          </div>
          <div className={style.Card}>
            <TbWriting />
            <p>
              - <b>Copywriting criativo e estratégico:</b> crio textos
              personalizados para o seu negócio, desde posts para redes sociais
              até páginas de vendas.
            </p>
            <p>
              - <b>Transforme suas ideias</b> em palavras poderosas.
            </p>
            <p>
              - <b>Escrevo textos que conectam</b> com o seu público e
              <b> impulsionam</b> seus <b>resultados</b>.
            </p>
          </div>
        </div>
      </section>
      <section id="sobre" className={style.SkillsSection}>
        <div>
          <h1>Sobre mim</h1>
          <p>
            <span>Anailton Passos</span> é um criador multimídia apaixonado,
            especializado em edição de vídeo e design gráfico. Com experiência
            em Adobe Premiere e CapCut, ele transforma ideias em conteúdos
            visuais impactantes. Sua proficiência em Photoshop permite que ele
            crie imagens cativantes que complementam suas produções
            audiovisuais. Além disso, <b>Anailton</b> é um especialista em
            copywriting, capaz de elaborar textos persuasivos que engajam o
            público nas redes sociais. Com um forte entendimento de marketing
            digital, <b>Anailton</b> utiliza sua experiência em social media
            para desenvolver estratégias eficazes que ampliam a presença online
            de marcas e produtos. Sua habilidade em criar conteúdos que ressoam
            com o público torna-o um ativo valioso para qualquer equipe.
          </p>
        </div>
        <div>
          <img src={profile} alt="" />
        </div>
      </section>
      <section className={style.ContactSection}>
        <hr />
        <h1>Entre em Contato</h1>
        <footer id="contato">
          <div>
            <a href="https://www.instagram.com/videosdonah/">
              <img src={logo} alt="" />
            </a>
            <span>
              <a href="https://www.instagram.com/videosdonah/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://wa.me/+5512991458637" target="_blank">
                <FaWhatsapp />
              </a>
            </span>
          </div>

          <form onSubmit={(event: FormEvent) => event.preventDefault()}>
            <input
              type="text"
              placeholder="Digite sua mensagem"
              onChange={onChangeInputMesageText}
              value={inputMesageText}
            />
            <button
              onClick={() => {
                window.open(
                  `https://wa.me/+5512991458637?text=${inputMesageText}`,
                  "_blank"
                );
                setInputMesageText("");
              }}
            >
              Enviar mensagem
            </button>
          </form>
        </footer>
      </section>
    </>
  );
}
