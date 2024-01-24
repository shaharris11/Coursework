import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const apiUrl = "http://localhost:8080/api"

export default function Characters() {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getCharacters() {
            try {
                const res = await fetch(`${apiUrl}/characters`);
                const data = await res.json();
                setCharacters(data)
            } catch (error) {
                console.error(error);
            }
        }
        getCharacters()
    }, [])
    console.log(characters);
    return (
        <>
            <h1>Welcom!</h1>
            <div className="charactersContainer">
               {characters.map((character) => {
                return (
                    <div key={character.id} className="character">
                        <h2>{character.name}</h2>
                        <img src={character.imgUrl} alt={character.name}/>
                        <br />
                        <button onClick={() => { navigate(`/characters/${character.characterId}`) }}>See Detail</button>
                    </div>
                )
               })}
            </div>
        </>
    );
}