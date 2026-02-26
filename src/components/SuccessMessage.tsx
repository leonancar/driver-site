import { CheckCircle2, MessageCircle } from 'lucide-react';

export default function SuccessMessage() {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5511949318473?text=Olá,%20acabei%20de%20solicitar%20meu%20diagnóstico%20empresarial%20gratuito.',
      '_blank'
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 rounded-full p-4">
            <CheckCircle2 className="text-green-600" size={64} />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Diagnóstico Recebido!
        </h2>

        <p className="text-xl text-gray-700 mb-6">
          Obrigado! Nossa equipe irá analisar suas respostas e entrar em contato em breve.
        </p>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Enquanto isso, clique abaixo e fale diretamente conosco para acelerar seu atendimento.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg mx-auto"
          >
            <MessageCircle size={24} />
            Falar no WhatsApp Agora
          </button>
        </div>

        <p className="text-gray-600">
          Em até 24 horas você receberá sua análise inicial por email.
        </p>
      </div>
    </div>
  );
}