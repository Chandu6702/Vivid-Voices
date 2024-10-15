import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className="container min-w-full">
      <Featured />
      <CategoryList />
      <div className="flex w-full justify-between gap-8">
        <CardList page={page} />
        {/* <Menu /> */}
      </div>
    </div>
  );
}
