"use client";
import React from "react";
import FoodCard from "./foodCard";

const ResultList = ({ results }) => {
  const foodArray = results?.foods?.food;

  if (!foodArray || foodArray.length === 0) return "No results found";

  return (
    <div className="mt-6 w-full max-w-lg mx-auto bg-white p-4 rounded shadow">
      <ul className="text-white list-disc pl-5 space-y-1">
        {foodArray.map((item) => (
          <li key={item.food_id}>
            <FoodCard food={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
