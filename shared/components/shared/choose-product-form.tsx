import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  onClickAdd?: VoidFunction;
}

export const ChooseProductForm = ({ name, imageUrl, onClickAdd, className }: Props) => {
  const textDetaills = '30 см, традиционное тесто 30';
  const totalPrice = 350;
  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
        <img
          src={imageUrl}
          alt="Logo"
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-[490] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
