import React, { useState, useEffect } from 'react';
import {
  Heart,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield,
  ArrowRight,
  Sparkles,
  Cross,
  MessageCircle,
  Phone,
  User,
} from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProof, setCurrentProof] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      text: 'Em 3 semanas, meu marido voltou para casa após 2 anos separados. Glória a Deus!',
      author: 'Ana e João',
      location: 'São Paulo, SP',
    },
    {
      text: 'As orações deste método nos ensinaram a perdoar. Hoje somos felizes de novo.',
      author: 'Rafael e Luíza',
      location: 'Rio de Janeiro, RJ',
    },
    {
      text: 'Depois da traição, achamos que era o fim. Hoje, nosso casamento é mais forte que nunca!',
      author: 'Carla e Marcos',
      location: 'Belo Horizonte, MG',
    },
  ];

  const socialProofs = [
    {
      image: '/IMG_3934.jpeg',
      name: 'Allana',
      testimony:
        'Tem me ajudado muito, são palavras reconfortantes e cheias de muita unção. O Senhor nos fala através de grandes e pequenas coisas.',
      highlight: 'Palavras reconfortantes e cheias de unção',
    },
    {
      image: '/IMG_3935.jpeg',
      name: 'Participante',
      testimony:
        'Estou no meu 4º dia hoje e já estou vendo o milagre impossível de Deus acontecer. E eu não vou parar, estou firme durante os 21 dias em nome de Jesus.',
      highlight: 'Milagre impossível de Deus acontecendo em 4 dias',
    },
    {
      image: '/IMG_3936.jpeg',
      name: 'Enne Michelly',
      testimony:
        'Estou adorando esses devocionais, tem sido reconfortante e fazendo não desistir do meu propósito. Estou muito feliz depois de meses longe de casa, meu marido voltou e nos reconciliamos.',
      highlight: 'Marido voltou após meses separados',
    },
    {
      image: '/IMG_3937.jpeg',
      name: 'Participante',
      testimony:
        'Olha nem sei como te agradecer, depois de seguir os 21 dias certinhos do propósito eu tenho visto uma grande diferença no meu marido que não via há anos. Já consigo ver Deus trabalhando nele e no nosso casamento!',
      highlight: 'Grande diferença no marido após 21 dias',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const proofInterval = setInterval(() => {
      setCurrentProof((prev) => (prev + 1) % socialProofs.length);
    }, 5000);
    return () => clearInterval(proofInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const fadeInClass = (id) =>
    `transform transition-all duration-1000 ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  const handleCTAClick = () => {
    window.open('https://go.goatpayments.com.br/ssa1s7p1td', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-900/30 to-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.imgur.com/48gxyuP.jpeg')`,
          }}
        ></div>

        {/* Floating golden particles */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <Sparkles className="text-amber-400 w-4 h-4 opacity-60" />
            </div>
          ))}
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <Cross className="text-amber-400 w-12 h-12 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
            <span className="text-amber-300">✨ Deus Está Preparando</span>
            <br />
            <span className="text-white">um Novo Começo para</span>
            <br />
            <span className="text-amber-300">Seu Relacionamento</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 font-light leading-relaxed max-w-3xl mx-auto">
            O Método de 21 Dias que Restaurou Casamentos em Crise
            <br />
            Através da Oração e da Fé
          </p>
          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 group"
          >
            INICIAR AGORA
            <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Problems Section */}
      <section
        id="problems"
        className="py-20 bg-gradient-to-b from-black to-purple-950 relative"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-repeat opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l-15-15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${fadeInClass('problems')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-300">
              💔 Você Já Sentiu Que Seu
              <br />
              Relacionamento Não Tem Mais Jeito?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔥', text: 'Brigas que se repetem sem solução' },
              { icon: '🌫️', text: 'Solidão mesmo estando juntos' },
              { icon: '⏳', text: 'Mágoas que parecem impossíveis de perdoar' },
              { icon: '💔', text: 'Medo de um divórcio iminente' },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:scale-105 ${fadeInClass(
                  'problems'
                )}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="text-amber-400 w-6 h-6 mr-4 flex-shrink-0" />
                <span className="text-lg">
                  {item.icon} {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 ${fadeInClass('problems')}`}>
            <p className="text-xl text-amber-200 font-light">
              O que você faria se soubesse que há um{' '}
              <span className="text-amber-400 font-semibold">
                caminho espiritual
              </span>{' '}
              para mudar tudo isso?
            </p>
          </div>
        </div>
      </section>

      {/* Who Am I Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-purple-950 to-amber-900/20 relative"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-purple-500/5"></div>
          <svg
            className="absolute top-0 w-full h-32 text-purple-400/10 rotate-180"
            fill="currentColor"
            viewBox="0 0 1440 320"
          >
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${fadeInClass('about')}`}>
            <div className="inline-flex items-center bg-amber-600/20 border border-amber-500/30 rounded-full px-6 py-3 mb-6">
              <User className="text-amber-400 w-5 h-5 mr-2" />
              <span className="text-amber-300 font-semibold">
                Minha Jornada
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-300">
              ✨ Quem Sou Eu
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className={`bg-gradient-to-br from-black/40 to-amber-900/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-amber-500/20 shadow-2xl shadow-amber-500/10 ${fadeInClass(
                'about'
              )}`}
            >
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
                  <Cross className="text-white w-12 h-12" />
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-amber-100 text-xl md:text-2xl text-center italic mb-8">
                  "Você já se sentiu perdido na busca pelo seu propósito? Eu
                  também já estive lá..."
                </p>

                <div className="grid md:grid-cols-1 gap-8">
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      Há alguns anos, eu era como você:{' '}
                      <span className="text-amber-300 font-semibold">
                        buscava respostas sobre amor, propósito e a voz de Deus
                      </span>
                      . Minha jornada não foi diferente da de tantos outros que
                      se encontram em relacionamentos feridos, corações partidos
                      e sonhos que pareciam impossíveis de realizar.
                    </p>

                    <p className="text-gray-300">
                      Passei por momentos de profunda crise espiritual e
                      relacional. Havia noites em que me perguntava se Deus
                      realmente escutava minhas orações, se havia esperança para
                      os relacionamentos que pareciam perdidos para sempre.{' '}
                      <span className="text-amber-300 font-semibold">
                        Foi nesse vale de lágrimas que descobri uma verdade
                        transformadora
                      </span>
                      .
                    </p>

                    <div className="bg-gradient-to-r from-amber-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20">
                      <p className="text-amber-200 text-center italic text-xl">
                        "A cura começa quando nos permitimos olhar para dentro e
                        reconectar com o essencial: nossa fé, nosso propósito e
                        nossos relacionamentos."
                      </p>
                    </div>

                    <p className="text-gray-300">
                      Através de um despertar espiritual profundo, compreendi
                      que{' '}
                      <span className="text-amber-300 font-semibold">
                        Deus não nos abandona em nossas lutas
                      </span>
                      . Ele nos convida a uma jornada de 21 dias - um período
                      bíblico de transformação - onde podemos reconstruir nossos
                      votos: com a vida, com os outros e com o Criador.
                    </p>

                    <p className="text-gray-300">
                      O{' '}
                      <span className="text-amber-300 font-semibold">
                        "Propósito de 21 Dias"
                      </span>{' '}
                      nasceu dessa missão pessoal de restaurar vidas. Não é
                      apenas um método, mas um convite silencioso à jornada mais
                      importante:{' '}
                      <span className="text-amber-300 font-semibold">
                        a de voltar para casa, para o essencial
                      </span>
                      .
                    </p>

                    <div className="bg-gradient-to-br from-purple-900/30 to-black/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
                      <p className="text-purple-200 text-center">
                        <span className="text-amber-300 font-bold">
                          Minha missão
                        </span>{' '}
                        é simples: ajudar pessoas como você a redescobrirem que{' '}
                        <span className="text-amber-300 font-semibold">
                          todo relacionamento pode ser restaurado quando
                          colocamos Deus no centro
                        </span>
                        . Cada oração, cada dia desses 21 dias, é um passo de
                        volta ao amor verdadeiro.
                      </p>
                    </div>

                    <p className="text-gray-300 text-center">
                      Hoje, tenho o privilégio de testemunhar{' '}
                      <span className="text-amber-300 font-semibold">
                        centenas de casais redescobrindo o amor
                      </span>
                      , pessoas encontrando seu propósito e relacionamentos
                      sendo restaurados pelo poder da fé.
                    </p>

                    <p className="text-amber-200 text-center text-xl font-light italic">
                      Se você chegou até aqui, saiba que{' '}
                      <span className="text-amber-300 font-semibold">
                        não foi por acaso
                      </span>
                      . Deus tem um propósito especial para sua vida e seus
                      relacionamentos. ✨
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section
        id="social-proof"
        className="py-20 bg-gradient-to-b from-amber-900/20 to-black relative"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-amber-500/5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${fadeInClass('social-proof')}`}>
            <div className="inline-flex items-center bg-green-600/20 border border-green-500/30 rounded-full px-6 py-3 mb-6">
              <MessageCircle className="text-green-400 w-5 h-5 mr-2" />
              <span className="text-green-300 font-semibold">
                Resultados Reais Comprovados!
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-300">
              📱 Veja o Que Nossos Participantes
              <br />
              <span className="text-white">Estão Falando Agora!</span>
            </h2>
            <p className="text-xl text-amber-200 font-light max-w-3xl mx-auto">
              <strong>
                Nada vale mais do que a opinião de quem já experimentou!
              </strong>
              <br />
              Centenas de casais já transformaram seus relacionamentos com o
              Propósito de 21 Dias
            </p>
          </div>

          {/* Live Testimonials Carousel */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-3xl">
              {socialProofs.map((proof, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    index === currentProof
                      ? 'translate-x-0 opacity-100'
                      : index < currentProof
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  } ${index === currentProof ? 'block' : 'absolute inset-0'}`}
                >
                  <div className="bg-gradient-to-br from-green-900/20 to-amber-900/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-green-500/20">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img
                            src={proof.image}
                            alt={`Depoimento de ${proof.name}`}
                            className="w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-amber-500/30"
                          />
                          <div className="absolute -top-3 -right-3 bg-green-500 text-white p-2 rounded-full">
                            <Phone className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="text-amber-400 w-6 h-6 fill-current"
                            />
                          ))}
                        </div>
                        <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                          "{proof.testimony}"
                        </blockquote>
                        <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-4 mb-6">
                          <p className="text-amber-300 font-bold text-lg">
                            ✨ Destaque: {proof.highlight}
                          </p>
                        </div>
                        <cite className="text-amber-300 font-semibold text-xl block">
                          — {proof.name}
                        </cite>
                        <p className="text-green-400 text-sm mt-2 font-semibold">
                          ✅ Depoimento Verificado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Proof indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {socialProofs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProof(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProof
                      ? 'bg-green-400 w-8'
                      : 'bg-green-400/30 hover:bg-green-400/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Key Benefits from Social Proof */}
          <div
            className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 ${fadeInClass(
              'social-proof'
            )}`}
          >
            {[
              {
                icon: <Heart className="w-12 h-12 text-green-400" />,
                title: 'Reconciliação Comprovada',
                description:
                  'Casais separados há meses voltando a se reconciliar através da oração',
                stat: 'Em apenas 4 dias',
              },
              {
                icon: <Sparkles className="w-12 h-12 text-amber-400" />,
                title: 'Milagres Impossíveis',
                description:
                  'Transformações que pareciam impossíveis acontecendo na vida real',
                stat: 'Resultados visíveis',
              },
              {
                icon: <Cross className="w-12 h-12 text-purple-400" />,
                title: 'Fortaleza Espiritual',
                description:
                  'Palavras reconfortantes que fortalecem a fé e o propósito do casal',
                stat: '21 dias de poder',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-black/40 to-green-900/40 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/20`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-amber-300 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-center">
                  <span className="text-green-300 font-bold text-sm">
                    ⚡ {item.stat}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className={`text-center ${fadeInClass('social-proof')}`}>
            <div className="bg-gradient-to-r from-green-900/30 to-amber-900/30 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/30 max-w-4xl mx-auto mb-8">
              <p className="text-2xl text-amber-200 font-light mb-4">
                <strong className="text-amber-300">Mais de 500 casais</strong>{' '}
                já transformaram seus relacionamentos!
              </p>
              <p className="text-lg text-green-300">
                ✝️{' '}
                <strong>
                  Juntos, já alcançamos centenas de reconciliações em apenas 21
                  dias!
                </strong>
              </p>
            </div>
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 group"
            >
              EU QUERO FAZER PARTE DESSE GRUPO!
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        id="solution"
        className="py-20 bg-gradient-to-b from-black to-amber-900/20 relative"
      >
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 w-full h-32 text-amber-400/10"
            fill="currentColor"
            viewBox="0 0 1440 320"
          >
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${fadeInClass('solution')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-300">
              ✨ Como o Propósito de 21 Dias
              <br />
              Vai Te Ajudar?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Cross className="w-12 h-12 text-amber-400" />,
                title: 'Orações Guiadas em Vídeo',
                description:
                  'Conexão diária com Deus através de orações específicas para casais',
              },
              {
                icon: <Heart className="w-12 h-12 text-amber-400" />,
                title: 'Cronograma Baseado na Bíblia',
                description:
                  'Passos práticos fundamentados na Palavra de Deus para cada dia',
              },
              {
                icon: <Users className="w-12 h-12 text-amber-400" />,
                title: 'Rituais de Reconexão',
                description:
                  'Atividades especiais para casais se reaproximarem espiritualmente',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-black/40 to-purple-900/40 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 ${fadeInClass(
                  'solution'
                )}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-amber-300 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-b from-amber-900/20 to-purple-950 relative"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${fadeInClass('testimonials')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-300">
              🌟 Veja o Que Deus Fez
              <br />
              Por Outros Casais
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden rounded-2xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    index === currentTestimonial
                      ? 'translate-x-0 opacity-100'
                      : index < currentTestimonial
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  } ${
                    index === currentTestimonial ? 'block' : 'absolute inset-0'
                  }`}
                >
                  <div className="bg-gradient-to-br from-amber-100/10 to-amber-200/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-amber-500/20 text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-amber-400 w-6 h-6 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-amber-100 mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <cite className="text-amber-300 font-semibold text-lg block">
                      — {testimonial.author}
                    </cite>
                    <p className="text-amber-200/80 text-sm mt-2">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-amber-400 w-8'
                      : 'bg-amber-400/30 hover:bg-amber-400/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Offer Section */}
      <section
        id="offer"
        className="py-20 bg-gradient-to-br from-amber-900/30 via-purple-950 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-purple-500/10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-12 ${fadeInClass('offer')}`}>
            <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-6">
              <Clock className="text-red-400 w-5 h-5 mr-2" />
              <span className="text-red-300 font-semibold">
                Por Tempo Limitado!
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-300">
              ⏳ Acesso Imediato +<br />
              Bônus Exclusivos
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div
              className={`bg-gradient-to-br from-black/60 to-purple-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 ${fadeInClass(
                'offer'
              )}`}
            >
              <div className="text-center mb-8">
                <div className="text-6xl md:text-8xl font-bold text-gray-400 line-through mb-2">
                  R$ 197
                </div>
                <div className="text-5xl md:text-7xl font-bold text-amber-400 mb-4">
                  R$ 27,00
                </div>
                <div className="text-xl text-amber-200"></div>
              </div>

              <div className="flex items-center justify-center mb-8 p-4 bg-green-900/30 border border-green-500/30 rounded-xl">
                <Shield className="text-green-400 w-6 h-6 mr-3" />
                <span className="text-green-300 font-semibold">
                  ✝️ 7 Dias de Garantia: Se Não Ver Mudanças, Devolvemos Seu
                  Investimento
                </span>
              </div>

              <button
                onClick={handleCTAClick}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-6 px-8 rounded-2xl text-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 group"
              >
                SIM, EU QUERO A MINHA CURA!
                <div className="text-sm mt-2 opacity-90">
                  🔒 Pagamento 100% Seguro
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Cross className="text-amber-400 w-8 h-8 mr-3" />
            <span className="text-xl font-bold text-amber-300">
              Propósito de 21 Dias
            </span>
          </div>
          <p className="text-gray-400">
            © 2024 - Transformando relacionamentos através da fé
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
