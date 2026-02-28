const faqs = [
  {
    question: 'Como funciona o diagnóstico empresarial gratuito?',
    answer:
      'Você responde um formulário rápido e nossa equipe analisa os pontos críticos da sua operação para indicar prioridades de melhoria.',
  },
  {
    question: 'A Driver atende apenas São Paulo capital?',
    answer:
      'Não. Atendemos empresas em São Paulo capital, Grande São Paulo, interior paulista e também projetos remotos em toda a região Sudeste.',
  },
  {
    question: 'Quais empresas mais se beneficiam da consultoria?',
    answer:
      'Pequenas e médias empresas que buscam organização financeira, previsibilidade de vendas, processos claros e crescimento sustentável.',
  },
  {
    question: 'Em quanto tempo começo a ver resultado?',
    answer:
      'Os primeiros ganhos operacionais aparecem nas primeiras semanas, enquanto resultados estruturais costumam consolidar entre 60 e 90 dias.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white p-6">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
