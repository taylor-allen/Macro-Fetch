"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    const query = new URLSearchParams({
      searchTerm,
    }).toString();

    router.push(`/results?${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
      <input
        type="text"
        placeholder="e.g., pho"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full text-white bg-blue-500 rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
