import React from "react";
import Header from "../components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";
 interface SearchParams { city?: string ,cuisine?:string , price?:PRICE}
const  prisma = new PrismaClient(); 
const fetchSearchPramsByCity = (searchParams:SearchParams) => {
  const where:any = {};
 if(searchParams.city){
  const location = {
    name:{
      equals:searchParams.city.toLowerCase()
    }
  }
  where.location=location
 }
 if(searchParams.cuisine){
  const cuisine = {
    name:{
      equals:searchParams.cuisine.toLowerCase()
    }
  }
  where.cuisine =cuisine
 }
 if(searchParams.price){
  const price = {
   
      equals:searchParams.price
  }
  where.price =price
 }
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };
  // if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocation = async() =>{
  return prisma.location.findMany();
};

const fetchCurisine = async() =>{
  return prisma.cuisine.findMany();
}


export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // console.log(searchParams);
  const restaurant = await fetchSearchPramsByCity(searchParams);
  // console.log(restaurant);
  const location = await fetchLocation();
  const cuisine = await fetchCurisine();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar  location={location} cuisine={cuisine} searchParams={searchParams}/>
        <div className="w-5/6">
          {
            restaurant.length > 0 ? (
              <>
              {
                restaurant.map((restaurant) =>(
                  <RestaurantCard  key={restaurant.id} restaurant={restaurant}/>
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
