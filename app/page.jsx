import HomeIntro from "./components/HomeIntro";
import HomeImage from "./components/HomeImage";

export default function Home() {
  return (
    <div className="flex h-screen">
      <HomeIntro />
      <HomeImage />
    </div>
  );
}