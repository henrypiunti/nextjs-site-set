import { Button } from '../../ui/button';
import Image from 'next/image';
import { ActiveLink } from '../../active-link';

export function Header() {
  return (
    <header className="flex h-24 justify-between border-b-[1.5px] border-gray-500 px-6 lg:px-50">
      <Image src="brand-logo.svg" alt="Logo" width={116} height={32} className="hidden lg:block" />
      <Image src="brand-icon.svg" alt="Logo" width={41} height={40} className="lg:hidden" />
      <nav className="flex items-center gap-6">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/blog">Blog</ActiveLink>
        <Button variant="secondary">Começar</Button>
      </nav>
    </header>
  );
}
