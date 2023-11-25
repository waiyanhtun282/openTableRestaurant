import NavBar from "@/app/components/NavBar";
import React from "react";
import RestaurantNavBar from "../../components/RestaurantNavBar";
import Menu from "../../components/Menu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const restaurantMenu = async (slug:string) =>{
  const res = await prisma.restaurant.findUnique({
    where:{
      slug,
    },
    select:{
      item:true
    }
  });
  if(!res){
    throw  new Error()
  }
  return res?.item;
}
export default async function RestaurantMenu({params}:{
  params:{
    slug:string;
  }
}) {
  const menu = await  restaurantMenu(params.slug);
  return (

        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar  slug={params.slug}/>
          <Menu menu={menu}/>
        </div>
    
  );
}
