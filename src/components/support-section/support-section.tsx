import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react';
import { SupportCard } from '../support-card';

export function SupportSection() {
  return (
    <section className="relative bg-linear-to-r from-gray-500 to-gray-700 px-4 py-12 lg:px-50 lg:py-30">
      <div className="absolute inset-0 hidden bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat lg:block" />
      <div className="relative flex flex-col gap-8 lg:gap-12">
        <h1 className="text-heading-md lg:text-heading-xl mx-auto max-w-89.5 text-center text-gray-100 lg:max-w-122">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h1>
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          <SupportCard
            cardBackgroundColor="bg-blue-400"
            iconBackgroundColor="bg-blue-300"
            Icon={PaintbrushVertical}
            title="Personalize seu site"
            description="Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara."
          />
          <SupportCard
            cardBackgroundColor="bg-cyan-300"
            iconBackgroundColor="bg-cyan-200"
            Icon={Store}
            title="Venda de qualquer loja"
            description="Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado."
          />
          <SupportCard
            cardBackgroundColor="bg-blue-400"
            iconBackgroundColor="bg-blue-300"
            Icon={HeartHandshake}
            title="Receba suporte amigável"
            description="Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso."
          />
        </div>
      </div>
    </section>
  );
}
