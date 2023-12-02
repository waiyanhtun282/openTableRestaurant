import React from "react";
import Header from "../components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const fetchSearchPrams = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };
  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const fetchLocation = async() =>{
  return prisma.restaurant.findMany();
};

const fetchCurisine = async() =>{
  return prisma.restaurant.findMany();
}


export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  // console.log(searchParams);
  const restaurant = await fetchSearchPrams(searchParams.city);
  // console.log(restaurant);
  const location = await fetchLocation();
  const cuisine = await fetchCurisine();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar  location={location} cuisine={cuisine}/>
        <div className="w-5/6">
          {
            restaurant.length > 0 ? (
              <>
              {
                restaurant.map((restaurant) =>(
                  <RestaurantCard  key={restaurant.id} card ={restaurant}/>
                ))
              }
              </>
            ): (
            <h1>Sorry, that is not prodcut area</h1>
            )
          }
          
        </div>
      </div>
    </>
  );
}
