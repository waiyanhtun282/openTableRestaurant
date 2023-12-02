import Price from '@/app/components/Price'
import { Cuisine, PRICE ,Location} from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface Restaurant {
  id: number,
  name: string,
  main_image: string[],
  price: PRICE,
  cuisine: Cuisine,
  location: Location,
  slug: string,
}
export default function RestaurantCard({card}:{card:Restaurant}) {
  return (
    <div className="border-b flex pb-5">
    <img
      src={card.main_image}
      alt=""
      className="w-44 rounded   h-36"
    />
    <div className="pl-5">
      <h2 className="text-3xl">{card.name}</h2>
      <div className="flex items-start">
        <div className="flex mb-2">*****</div>
        <p className="ml-2 text-sm">Awesome</p>
      </div>
      <div className="mb-9">
        <div className="font-light flex text-reg">
          <Price price={card.price}/>
          {/* <p className="mr-4">$$$</p> */}
          <p className="mr-4">{card.cuisine.name}</p>
          <p className="mr-4">{card.location.name}</p>
        </div>
      </div>
      <div className="text-red-600">
        <Link href={`/restaurant/${card.slug}`}>View more information</Link>
      </div>
    </div>
  </div>
  )
}
