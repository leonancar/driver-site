import { Search, FileText, Rocket, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Diagnóstico Empresarial',
      description:
        'Análise profunda da situação atual do seu negócio, identificando gargalos, oportunidades e pontos críticos que impedem o crescimento.',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Plano Estratégico',
      description:
        'Desenvolvimento de um plano de ação personalizado com metas claras, prazos definidos e estratégias específicas para cada área do negócio.',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Implementação',
      description:
        'Execução prática das estratégias definidas, com acompanhamento próximo para garantir que as mudanças sejam implementadas corretamente.',
    },
    {
      icon: BarChart3,
      number: '04',
      title: 'Acompanhamento por Indicadores',
      description:
        'Monitoramento contínuo através de KPIs estratégicos, ajustes de rota quando necessário e garantia de resultados sustentáveis.',
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Metodologia</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do diagnóstico à execução: conheça as 4 etapas do nosso processo consultivo que identifica seus pontos fortes e maximiza a eficiência operacional do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="mb-6 relative inline-block">
                      <div className="absolute -top-4 -left-4 text-7xl font-bold text-blue-100 z-0">
                        {step.number}
                      </div>
                      <div className="relative z-10 bg-gradient-to-br from-blue-600 to-blue-800 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="text-white" size={36} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-blue-200"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
