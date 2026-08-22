import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex h-41.75 items-start justify-between bg-gray-500 px-6 py-8 md:h-22 md:items-center lg:px-50 lg:py-0">
      <Image src="/brand-logo.svg" alt="Logo" width={116} height={32} />
      <nav className="text-body-sm flex flex-col items-start gap-3 text-blue-100 md:flex-row md:gap-8">
        <Link href="/termos-de-uso" className="hover:text-blue-200">
          Termos de Uso
        </Link>
        <Link href="/politica-de-privacidade" className="hover:text-blue-200">
          Politica de Privacidade
        </Link>
        <Link href="/enviar-feedback" className="hover:text-blue-200">
          Enviar feedback
        </Link>
      </nav>
    </footer>
  );
}
