"use client";
import { useState } from "react";
import Form from "./components/form";
import ResultList from "./components/resultsList";

const Home = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (region, searchTerm) => {
    fetch(`/api/food?region=${region}&searchTerm=${searchTerm}`)
      .then((response) =>
        response.ok ? response.json() : response.text().then((text) => Promise.reject(text))
      )
      .then((data) => {
        const foods = data.foods_search?.results?.foods || [];
        setResults(foods);
      })
      .catch((error) => {
        console.log("Fetch error: ", error);
      });
  };

  return (
    <div className="content-center flex min-h-screen flex-col items-center justify-between p-24">
      <main>
        <Form onSearch={handleSearch} />
        <ResultList results={results} />
      </main>
    </div>
  );
};

export default Home;
