import { Building2, Clock3, LineChart, MapPin } from 'lucide-react';

const indicators = [
  { icon: Building2, value: '+120', label: 'empresas atendidas' },
  { icon: LineChart, value: '22%', label: 'ganho médio em margem operacional' },
  { icon: Clock3, value: '90 dias', label: 'para implementar melhorias prioritárias' },
];

export default function TrustSignals() {
  return (
    <section id="prova-social" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Resultados Comprovados</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Atuação consultiva para PMEs em São Paulo, Grande São Paulo e região Sudeste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {indicators.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-gray-200 p-8 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="text-blue-700" size={28} />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{item.value}</p>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="rounded-2xl bg-gray-50 p-8 border border-gray-200">
              <p className="text-lg text-gray-700 italic mb-4">
                "Em quatro meses, saímos do caos no fluxo de caixa para previsibilidade financeira e metas comerciais claras."
              </p>
              <footer className="text-gray-900 font-semibold">Diretora, indústria de alimentos | São Paulo - SP</footer>
            </blockquote>

            <blockquote className="rounded-2xl bg-gray-50 p-8 border border-gray-200">
              <p className="text-lg text-gray-700 italic mb-4">
                "A consultoria trouxe processo para vendas e operação. Hoje a equipe executa com padrão e indicador."
              </p>
              <footer className="text-gray-900 font-semibold">Sócio, empresa de serviços | Campinas - SP</footer>
            </blockquote>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-gray-600 text-sm">
            <MapPin size={16} />
            Atendimento presencial e remoto para empresas da região Sudeste.
          </p>
        </div>
      </div>
    </section>
  );
}
