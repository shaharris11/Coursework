import { useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

const apiUrl = "http://localhost:8080/api"

export default function SingleCharacters() {
    const [character, setCharacter] = useState({})
    const {characterId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(characterId);
        async function getCharacter() {
            try {
                const res = await fetch(`${apiUrl}/characters/${characterId}`);
                const data = await res.json()
                console.log(data);
                setCharacter(data)
            } catch (error) {
                console.error(error);
            }
        }
        getCharacter();
    }, [])
    return (
        <>
        <div id='singleCharacter'>
            <img src={character.imgUrl} alt={character.name}/> 
            <h1>{character.name}</h1>
            <h2>{character.title}</h2>
            <p>{character.age}</p>
            <p>{character.monsterId}</p>
            <p>{character.placeId}</p>
            <p>{character.description}</p>
            <button onClick={() => {navigate(`/` )}}>Back to All Charcters</button>
        </div>
        </>
    )
}