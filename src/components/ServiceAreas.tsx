import { DollarSign, TrendingUp, Users, Settings } from 'lucide-react';

export default function ServiceAreas() {
  const areas = [
    {
      icon: DollarSign,
      title: 'Gestão Financeira',
      description:
        'Organize suas finanças, controle fluxo de caixa, reduza custos desnecessários e aumente a lucratividade. Transforme números em decisões estratégicas.',
      color: 'blue',
    },
    {
      icon: TrendingUp,
      title: 'Gestão Comercial e Vendas',
      description:
        'Estruture processos de vendas eficientes, defina estratégias comerciais assertivas e construa um time comercial de alta performance que gera resultados consistentes.',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Recursos Humanos',
      description:
        'Desenvolva equipes motivadas e produtivas, implemente políticas de RH eficazes, otimize recrutamento e retenção de talentos alinhados com a cultura da empresa.',
      color: 'blue',
    },
    {
      icon: Settings,
      title: 'Processos e Performance',
      description:
        'Crie processos padronizados, elimine gargalos operacionais, implemente indicadores de performance e construa uma operação eficiente e escalável.',
      color: 'blue',
    },
  ];

  return (
    <section id="areas-atuacao" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Áreas de Atuação
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para transformar cada área crítica do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-blue-600"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
