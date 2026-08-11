import { CustomerStoryCard } from '../customer-story-card';

export function CustomerStorySection() {
  return (
    <section className="px-4 py-20 lg:px-50 lg:pt-32 lg:pb-42">
      <div className="flex flex-col gap-8 lg:gap-12">
        <h1 className="text-heading-md lg:text-heading-xl text-center text-gray-200">Quem utiliza, aprova!</h1>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <CustomerStoryCard
            description="Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e
        consegui colocar meus produtos à venda em poucos minutos."
            profilePictureSrc="/customer-01.png"
            name="Annette Bones"
            position="CEO na Anne Corp"
          />
          <CustomerStoryCard
            description="Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!"
            profilePictureSrc="/customer-02.png"
            name="Jacob Jones"
            position="CEO na JJ Org"
          />
        </div>
      </div>
    </section>
  );
}
