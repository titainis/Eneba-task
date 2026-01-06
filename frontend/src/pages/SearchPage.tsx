import { useEffect, useState } from "react";
import Card from "../components/card/card";
import type { CardType } from "../types/cardType";
import SearchBar from "../components/SearchBar/SearchBar";

const SearchPage = () => {
  const [info, setInfo] = useState<CardType[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const response = await fetch(
        `http://localhost:3000/list?search=${query}`
      );
      const data = await response.json();
      setInfo(data);
    }, 300); 

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="flex flex-col items-center min-h-screen ">
      <SearchBar query={query} setQuery={setQuery} results={info}/>

      <div className="w-full max-w-7xl px-4 py-5">
        {query.length > 0 && ( 
          <p className="py-3 text-white">Results found: {info.length}</p> 
        )}
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {info.map((item) => (
            <Card key={item.id} card={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;