import { useEffect, useState } from "react";
import Card from "../components/card/card";
import type { CardType } from "../types/cardType";

const SearchPage = () => {
    const [info, setInfo] = useState<CardType[]>([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/list')
        const data = await response.json();
        setInfo(data);
        console.log(data);
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {info.map((item) => (
                <Card key={item.id} card={item}/>
            ))}
        </>
    )
}

export default SearchPage;
