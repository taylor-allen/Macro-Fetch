import React from "react";

const ResultList = ({ results }) => {
  if (results.length === 0) return null;

  return (
    <div className="mt-6 w-full max-w-lg mx-auto bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Results:</h2>
      <ul className="list-disc pl-5 space-y-1">
        {results.map((item) => (
          <li key={item.food_id}>
            {item.food_name} {item.brand_name && `(${item.brand_name})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
