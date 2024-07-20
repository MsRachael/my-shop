import Featured from "@/components/Featured";
import Carousel from "@/components/Section/Carousel";
import Categories from "@/components/Section/Categories";

export default function Home() {
  return (
    <div className="  flex flex-col items-center justify-center gap-8">
        <Categories />
        <Carousel />
        <Featured/>
    </div>
  );
}
