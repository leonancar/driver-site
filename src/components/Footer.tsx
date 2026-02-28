import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-12 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/logoDriver.png"
                alt="Driver Consultoria Empresarial"
                className="h-20 mb-4"
              />
              <p className="text-gray-400">
                Transformando pequenas e médias empresas em operações organizadas, lucrativas e estratégicas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Áreas de Atuação</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Gestão Financeira</li>
                <li>Gestão Comercial e Vendas</li>
                <li>Recursos Humanos</li>
                <li>Processos e Performance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:+5511949318473" className="hover:text-white transition-colors">
                    (11) 94931-8473
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <a href="mailto:contato@driverconsultoria.com.br" className="hover:text-white transition-colors">
                    contato@driverconsultoria.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Driver Consultoria Empresarial. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
