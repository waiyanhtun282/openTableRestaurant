import React from "react";
import Header from "./components/Header";
import RestaurantCard from "./components/ResraurantCard";
import { PrismaClient, Location, Cuisine, PRICE } from "@prisma/client";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  slug:string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
}
const prisma = new PrismaClient();

const fetchResults = async (): Promise<RestaurantCardType[]> => {
  const res = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      slug:true,
      cuisine: true,
      location: true,
      price: true,
    },
  });
  return res;
};
export default async function Home() {
  const restaurantRes = await fetchResults();
  // console.log(restaurantRes);
  return (
    <main>
      <Header />

      <div className="py-3 px-36 mt-10  flex flex-wrap  justify-center">
          {restaurantRes.map((restaurant) => (
            <RestaurantCard   restaurant={restaurant}/>
           ))} 
          {/* Corrected href value */}
      </div>
    </main>
  );
}
