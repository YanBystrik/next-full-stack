import {
  ChooseProductModal,
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma';
import { notFound } from 'next/navigation';

export default async function ProductModalPage({ params: { id } }: { params: { id: number } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingridients: true,
      items: true,
    },
  });

  if (!product) return notFound();

  return <ChooseProductModal product={product} />;
}
