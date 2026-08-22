import { Button } from '@/components/ui/button';
import { ArrowRight, Store } from 'lucide-react';

export function CallToActionSection() {
  return (
    <section className="relative px-4 py-14 lg:px-50 lg:pt-22 lg:pb-18">
      <div className="absolute inset-0 block bg-[url('/background-footer.svg')] bg-cover bg-no-repeat" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 p-3.5 lg:p-4">
        <Store className="h-7 w-7 text-cyan-100 lg:h-8 lg:w-8" />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-8 lg:gap-10">
        <h2 className="text-heading-md lg:text-heading-xl text-center text-gray-100">
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>
        <Button size="lg">
          Criar loja grátis
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
