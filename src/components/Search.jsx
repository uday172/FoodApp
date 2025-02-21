import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5824bc0390594b3186a5bda84fc1db0d";

export default function Search({foodData,setFoodData}){
    const [query,setQuery] = useState("pizza");

    useEffect( ()=>{
            async function fetchFood(){
                const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
                const data = await res.json();
                setFoodData(data.results);
            }
            fetchFood();
        },[query]);

    return <div className={styles.searchContainer}>
        <input type="text"
            className={styles.input}
            value={query} 
            onChange={(e)=>setQuery(e.target.value)}
        />
    </div>
}