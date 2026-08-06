import { Button } from '../ui/button';
import Image from 'next/image';
import { ActiveLink } from '../active-link';

export function Header() {
  return (
    <header className="flex h-24 justify-between border-b-[1.5px] border-gray-500 px-50">
      <Image src="brand_logo.svg" alt="Logo" width={116} height={32} />
      <nav className="flex items-center gap-6">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/blog">Blog</ActiveLink>
        <Button variant="secondary">Começar</Button>
      </nav>
    </header>
  );
}
