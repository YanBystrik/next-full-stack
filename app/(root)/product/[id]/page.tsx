import { Container, GroupVariants, PizzaImage, Title } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: number } }) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={40} className="" />

        <div className="w-[490px] bg-[#fafafa] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet voluptas dolores
            reprehenderit non officia, iusto aliquid iste quae incidunt excepturi, repellendus
            recusandae quasi voluptatum corporis necessitatibus repellat fugiat corrupti.
          </p>

          <GroupVariants
            selectedValue="2"
            items={[
              {
                name: 'маленькая',
                value: '1',
              },
              {
                name: 'средняя',
                value: '2',
              },
              {
                name: 'большая',
                value: '3',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
