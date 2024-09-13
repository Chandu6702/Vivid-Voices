import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="container">
      <Featured />
      <CategoryList />
      <div className="flex w-full gap-8">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
