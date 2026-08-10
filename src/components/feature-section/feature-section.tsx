import { ArrowRight } from 'lucide-react';
import { FeatureCard } from '../feature-card';
import { Button } from '../ui/button';
import Image from 'next/image';

export function FeatureSection() {
  return (
    <section className="grid gap-6 px-6 pt-10 pb-18 lg:grid-cols-2 lg:px-50 lg:pt-20 lg:pb-30">
      <FeatureCard title="Simples" description="Crie um catálago de produtos online em poucos minutos" />
      <FeatureCard title="Prático" description="Venda para seu público através de uma plataforma única" />
      <div className="col-span-full grid gap-8 rounded-xl bg-gray-500 p-6 md:gap-22 md:p-12 lg:grid-cols-2">
        <div className="flex flex-col justify-start gap-4">
          <div className="flex w-fit items-center rounded-sm bg-blue-400 px-3 py-1.5">
            <span className="text-body-tag text-blue-200 uppercase">Personalizável</span>
          </div>
          <p className="md:text-heading-lg text-heading-sm text-gray-100">
            Tenha uma loja online personalizada com a cara da sua marca
          </p>
          <Button size="lg" className="hidden w-fit md:mt-auto lg:flex">
            Criar loja grátis
            <ArrowRight />
          </Button>
        </div>
        <div className="mx-auto flex flex-col gap-8">
          <Image
            src="/feature-section-image.svg"
            alt="Fundo com icones de guarda-chuva, casa e sacola"
            height={327}
            width={440}
          />
          <Button size="lg" className="w-full lg:hidden">
            Criar loja grátis
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
