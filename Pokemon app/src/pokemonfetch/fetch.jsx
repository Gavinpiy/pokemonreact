import { useState, useEffect } from "react";

const fetchPokemon = (props) => {
    const [pokemon, setPokemon] = useState("");
	const [image, setImage] = useState("");

    async function fetchData(){
        try {
            const response= await fetch(`https://pokeapi.co/api/v2/pokemon-form/${props.id}`,
            {
                headers:{Accept: "application/json",}
            }
            )
            if(!response) {
                throw Error(response.status);
            }
            const data = response.json();
        //update name to fetched data
        setPokemon(data.name);
        //update pic
        setImage(data.sprites.front_default);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }
    //use useeffect to render render when id state changes
    useEffect()
    return (  );
}
 
export default fetchPokemon;