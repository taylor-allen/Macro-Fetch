"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ResultList from "../components/resultsList";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region") || "";
  const searchTerm = searchParams.get("searchTerm") || "";

  const [results, setResults] = useState(null);

  useEffect(() => {
    if (!region || !searchTerm) return;

    (async () => {
      const res = await fetch(
        `/api/food?region=${region}&searchTerm=${searchTerm}`
      );

      console.log("Fetch status:", res.status);
      if (!res.ok) {
        console.log("Fetch failed; try again: ", res.status);
        setError(true);
        return;
      }

      const data = await res.json();
      console.log("Fetched data:", data);
      setResults(data);
    })();
  }, [region, searchTerm]);

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">
        Search Results for <strong>{searchTerm}</strong> in{" "}
        <strong>{region}</strong>
      </h1>

      {results === null ? (
        <p>Something went wrong while fetching results.</p>
      ) : (
        <ResultList results={results} />
      )}
    </main>
  );
}
