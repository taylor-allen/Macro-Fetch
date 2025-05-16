"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ResultList from "../components/resultsList";

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
      setResults(data);
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
