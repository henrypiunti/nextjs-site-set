import Link from 'next/link';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className="flex justify-between px-50">
      <Link href="/">Logo</Link>
      <nav className="flex items-center gap-6">
        <Link href="/" className="text-sm">
          Home
        </Link>
        <Link href="/blog" className="text-sm">
          Blog
        </Link>
        <Button variant="secondary">Começar</Button>
      </nav>
    </header>
  );
}
