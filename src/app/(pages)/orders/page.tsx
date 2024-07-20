import React from 'react'
import OrderItems from './components/OrderItems';
import { twMerge } from 'tw-merge';

type Props = {
  className?: string;
  headerFormat?: string;
}

export default function Orders({
  className,
  headerFormat
}: Props) {
  return (
    <div className={twMerge(`flex flex-col items-center justify-center py-8 ${className}`)}>
        <h1 
        className={twMerge(`text-3xl lg:text-4xl text-center my-4 ${headerFormat}`)}
      >
          My Orders</h1>
        <OrderItems/>
      </div>
  )
}