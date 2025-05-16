"use client";
import React from "react";
import FoodCard from "./foodCard";

const ResultList = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>No results found! Go back and search another food.</p>;
  }

  return (
    <div className="mt-6 w-full max-w-lg mx-auto bg-white p-4 rounded shadow">
      <ul className="text-red list-disc pl-5 space-y-1">
        {results.map((item) => (
          <li key={item.food_id}>
            <FoodCard food={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
