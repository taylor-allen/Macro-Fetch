"use client";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const { food_name, food_description, food_url, food_id } = food;

  return (
    <div className="flex items-center bg-white p-4 rounded shadow mb-4">
      <div>
        <h3 className="text-black font-semibold">{food_name}</h3>
        <ul>
          <li>
            <br />
            <p className="text-black">Description: {food_description}</p>
          </li>
          <li>
            <Link href={food_url} className="text-black underline">
              {food_url}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FoodCard;
