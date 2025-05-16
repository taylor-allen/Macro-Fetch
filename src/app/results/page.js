"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ResultList from "../components/resultsList";

function getLowCal(foods) {
  const calArray = foods.map((food) => {
    const afterLabel = food.food_description.split("Calories: ")[1];
    const digits = afterLabel.split("kcal")[0];
    const cal = parseInt(digits);
    return { food, cal };
  });
  calArray.sort((a, b) => a.cal - b.cal);

  return calArray.slice(0, 3).map((item) => item.food);
}

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) return;

    (async () => {
      const res = await fetch(`/api/food?searchTerm=${searchTerm}`);

      console.log("Fetch ResultsPage status:", res.status);

      if (!res.ok) {
        console.log("Fetch failed; try again: ", res.status);
        setError(true);
        return;
      }

      const data = await res.json();
      console.log("Fetched ResultsPage data:", data);
      // setResults(data);
      const items = data?.foods.food;

      const lowCal = getLowCal(items);
      console.log("Here are your low-calorie foods:", lowCal);
      setResults(lowCal);
    })();
  }, [searchTerm]);

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">
        Search Results for <strong>{searchTerm}</strong>
      </h1>

      {error ? (
        <p>Something went wrong while fetching results. Please try again.</p>
      ) : (
        <ResultList results={results} />
      )}
    </main>
  );
}
