import CurrentUser from "@/components/CurrentUser";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen max-w-full">
      <CurrentUser />
      <NavBar />
      <Hero />
    </main>
  );
}
