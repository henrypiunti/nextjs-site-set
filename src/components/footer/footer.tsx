import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex h-22 items-center justify-between bg-gray-500 px-50">
      <Image src="/brand_logo.svg" alt="Logo" width={116} height={32} />
      <nav className="text-body-sm flex gap-8 text-blue-100">
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
