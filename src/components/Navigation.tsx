const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas-atuacao', label: 'Atuação' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#faq', label: 'FAQ' },
  { href: '#diagnostico', label: 'Diagnóstico' },
];

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur border-b border-gray-800">
      <nav
        aria-label="Navegação principal"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-3"
      >
        <ul className="flex items-center justify-center gap-2 sm:gap-6 text-sm sm:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-200 hover:text-white transition-colors px-2 py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#diagnostico"
              className="ml-1 sm:ml-2 inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Agendar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
