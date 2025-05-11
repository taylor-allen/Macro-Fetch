"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [region, setRegion] = useState("choose");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    const query = new URLSearchParams({
      region,
      searchTerm,
    }).toString();

    router.push(`/results?${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="choose">Choose a region</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="MX">Mexico</option>
        <option value="GB">United Kingdom</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        <option value="IT">Italy</option>
      </select>

      <input
        type="text"
        placeholder="Search food"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
