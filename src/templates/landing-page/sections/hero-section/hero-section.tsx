import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Store } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="flex">
      <div className="flex flex-1 flex-col items-center gap-10 px-4 pt-8 pb-10 lg:items-start lg:gap-14 lg:px-50 lg:py-20">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:gap-8 lg:text-start">
          <h1 className="text-heading-lg md:text-heading-hg text-gray-100 lg:w-auto">
            Venda seus produtos como afiliado em um único lugar
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-cyan-100 lg:h-5 lg:w-5" />
              <span className="text-body-sm lg:text-body-md text-gray-200">Crie o seu site em menos de 5 minutos</span>
            </div>
            <div className="flex items-center gap-3">
              <Store className="h-4 w-4 text-cyan-100 lg:h-5 lg:w-5" />
              <span className="text-body-sm lg:text-body-md text-gray-200">Acompanhe e otimize seu negócio online</span>
            </div>
          </div>
        </div>
        <div className="flex w-47 flex-col gap-4">
          <Button size="lg">
            Criar loja grátis
            <ArrowRight />
          </Button>
          <span className="text-body-xs text-gray-300">Não precisa de cartão de crédito</span>
        </div>
      </div>
      <Image
        src="/background-hero.svg"
        alt="Imagem de fundo com lojas"
        width={471}
        height={491}
        className="hidden xl:block"
      />
    </section>
  );
}
