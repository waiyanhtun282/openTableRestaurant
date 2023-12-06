"use client";

import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({
  location,
  cuisine,
  searchParams,
}: {
  location: Location[];
  cuisine: Cuisine[];
  searchParams: { city?: string; price?: PRICE; cuisine?: string };
}) {
  // for price
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "border w-full text-center text-reg font-light rounded-l p-2",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: "border-r border-t text-center border-b w-full text-reg font-light p-2",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className:
        "border-r border-t border-b w-full text-center text-reg font-light p-2 rounded-r",
    },
  ];
  // console.log("Search", location,"cuisine", cuisine);
  return (
    <div className="w-1/5">
      <div className="border-b  flex flex-col pb-3 ">
        <h1 className="mb-2">Region</h1>
        {location.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                city: location.name,
              },
            }}
            className="font-light   text-reg "
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>

      <div className="border-b pb-4 flex flex-col mt-3 ">
        <h1 className="mb-2">Cuisine</h1>
        {cuisine.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                cuisine: cuisine.name,
              },
            }}
            className="font-light "
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>

      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ label, price, className }) => (
            <Link
            key={label}
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price,
                },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
