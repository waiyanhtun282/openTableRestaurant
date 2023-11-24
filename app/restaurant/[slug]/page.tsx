import NavBar from "@/app/components/NavBar";
import React from "react";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Title from "../components/Title";
import Rating from "../components/Rating";
import Description from "../components/Description";
import Reviews from "../components/Reviews";
import Images from "../components/Images";
import ReservationCard from "../components/ReservationCard";

export default function RestaurantDetail() {
  return (
    <>
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Title />
          <Rating />
          <Description />
          <Images />
          <Reviews />
        </div>
        <ReservationCard />
      
    </>
  );
}
