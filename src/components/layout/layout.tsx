import { Footer } from '../footer';
import { Header } from '../header';
import { Inter } from 'next/font/google';

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className} flex min-h-screen flex-col bg-gray-700`}>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
