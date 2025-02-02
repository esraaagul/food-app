import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
    </div>
  );
}
