import React from 'react'
import { RestaurantCardType } from '../page'
import Link from 'next/link';
 interface Props {
  restaurant:RestaurantCardType;
 }
export default function ResraurantCard({restaurant}:Props) {
  return (
   <Link href="/restaurant/milestone-grill">
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
    <img
      src={restaurant.main_image}
      alt=""
      className="w-full h-36"
    />
    <div className="p-1">
      <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
      <div className="flex items-start">
        <div className="flex mb-2">*****</div>
        <p className="ml-2">77 reviews</p>
      </div>
      <div className="flex text-reg font-light capitalize">
        <p className=" mr-3">Mexican</p>
        <p className="mr-3">{restaurant.price}</p>
        <p>Toronto</p>
      </div>
      <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
    </div>
  </div>
   </Link>
  )
}