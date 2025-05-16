"use client";
import Form from "./components/Form";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold">
        Discover Nutrition Facts in Seconds{" "}
      </h2>
      <p className="mb-4 text-lg">
        Search any of your favorite foods and get instant calorie and macro
        information.
      </p>
      <Form />
    </main>
  );
}
