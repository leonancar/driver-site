import { Award, Users2, Target, TrendingUp, Eye, Handshake } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: Handshake,
      title: 'Atendimento Personalizado',
      description: 'Cada empresa é única. Desenvolvemos soluções customizadas para sua realidade específica.',
    },
    {
      icon: Target,
      title: 'Diagnóstico Estratégico',
      description: 'Análise profunda e estruturada para identificar com precisão os pontos críticos do negócio.',
    },
    {
      icon: TrendingUp,
      title: 'Visão Prática e Orientada a Lucro',
      description: 'Foco em resultados reais e mensuráveis que impactam diretamente na lucratividade.',
    },
    {
      icon: Award,
      title: 'Metodologia Estruturada',
      description: 'Processo comprovado que guia sua empresa do diagnóstico até os resultados sustentáveis.',
    },
    {
      icon: Eye,
      title: 'Acompanhamento Próximo',
      description: 'Presença constante ao lado do empresário durante toda a jornada de transformação.',
    },
    {
      icon: Users2,
      title: 'Foco em Pequenas e Médias Empresas',
      description: 'Especialização em negócios que precisam estruturação e crescimento organizado.',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nossos Diferenciais
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que torna a Driver Consultoria a parceira ideal para transformar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => {
              const Icon = differential.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{differential.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{differential.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
