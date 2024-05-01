import { useState } from "react";
import "./App.css";
import { useNetwork } from "./hooks";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [search, setSearch] = useState("apple");
  const { data, onRefetch } = useNetwork("https://newsapi.org/v2/everything", {
    params: {
      q: search,
    },
  });

  console.log(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div>
        <Input value={search} onChange={handleSearch} />
        <Button onClick={onRefetch}>search</Button>
      </div>
    </>
  );
}

export default App;
