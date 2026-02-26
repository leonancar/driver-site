import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Sua empresa precisa de direção para crescer?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Pare de perder tempo e dinheiro com tentativa e erro.
            Comece hoje a construir um negócio organizado, lucrativo e preparado para crescer.
          </p>

          <a
            href="#diagnostico"
            className="bg-white hover:bg-gray-100 text-blue-900 px-10 py-5 rounded-lg text-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl mx-auto"
          >
            Agendar Diagnóstico Estratégico
            <ArrowRight size={24} />
          </a>

          <p className="text-blue-200 mt-6 text-sm">
            Diagnóstico gratuito e sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}
