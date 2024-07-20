import Featured from "@/components/Featured";
import Carousel from "@/components/Section/Carousel";
import CategoryCard from "@/components/Card/CategoryCard";

export default function Home() {
  return (
    <div className="  flex flex-col items-center justify-center gap-8">
        <CategoryCard />
        <Carousel />
        <Featured/>
    </div>
  );
}
