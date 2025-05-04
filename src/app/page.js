import Image from "next/image";
import Form from "./components/form";

export default function Home() {
  return (
    <div className="content-center flex min-h-screen flex-col items-center justify-between p-24">
      <main>
       <Form />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
