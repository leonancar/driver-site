import { Target, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sobre a Driver Consultoria
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Driver Consultoria Empresarial é especializada em transformar pequenas e médias empresas
                em operações organizadas, lucrativas e prontas para crescer de forma sustentável.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nossa metodologia se baseia em diagnóstico preciso, planejamento estratégico personalizado
                e implementação prática de soluções que geram resultados reais.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trabalhamos lado a lado com empresários que buscam sair do improviso e construir
                negócios sólidos, com processos definidos, equipes alinhadas e finanças sob controle
                na cidade de São Paulo e em toda a região Sudeste.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnóstico Estruturado</h3>
                  <p className="text-gray-600">
                    Identificamos com precisão os pontos críticos que impedem o crescimento da sua empresa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle2 className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementação Prática</h3>
                  <p className="text-gray-600">
                    Soluções aplicáveis que saem do papel e se tornam realidade no dia a dia do negócio.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Acompanhamento por Indicadores</h3>
                  <p className="text-gray-600">
                    Monitoramento contínuo através de KPIs que medem o progresso e garantem resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Nosso Foco
            </h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Lucro consistente, organização operacional e crescimento sustentável através de processos
              inteligentes e gestão estratégica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
