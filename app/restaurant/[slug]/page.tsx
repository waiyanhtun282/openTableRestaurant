import React from "react";
import { PrismaClient } from "@prisma/client";

import RestaurantNavBar from "../components/RestaurantNavBar";
import Title from "../components/Title";
import Rating from "../components/Rating";
import Description from "../components/Description";
import Reviews from "../components/Reviews";
import Images from "../components/Images";
import ReservationCard from "../components/ReservationCard";
interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug:string;
}
const prisma = new PrismaClient();
const fetchResultsSlug = async (slug: string): Promise<Restaurant> => {
  const res = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!res) {
    throw new Error();
  }

  return res;
};
export default async function RestaurantDetail({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const restaurant = await fetchResultsSlug(params.slug);
  // console.log(restaurant);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar  slug={restaurant.slug}/>
        <Title  title={restaurant.name}/>
        <Rating />
        <Description desc={restaurant.description}/>
        <Images  images={restaurant.images}/>
        <Reviews />
      </div>
      <ReservationCard />
    </>
  );
}
