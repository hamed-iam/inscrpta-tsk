import { useState } from "react";
import "./App.css";
import { useNetwork } from "./hooks";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { NewsItem } from "./components/NewsItem";
import { SkeletonCard } from "./components";

function App() {
  const [search, setSearch] = useState("apple");
  const { data, onRefetch, loading } = useNetwork(
    "https://newsapi.org/v2/everything",
    {
      params: {
        q: search,
      },
    },
  );

  console.log(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full flex gap-4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <Input value={search} onChange={handleSearch} />
          <Button onClick={onRefetch}>Search</Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {!loading
          ? Array(10)
              .fill("")
              .map(() => (
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                  <SkeletonCard />
                </div>
              ))
          : data?.articles.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
              >
                <NewsItem article={item} />
              </div>
            ))}
      </div>
    </>
  );
}

export default App;
