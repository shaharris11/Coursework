import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'


export default function Animes() {
    const [animes, setAnimes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getAnimes() {
            try {
                const res = await fetch(`http://localhost:8080/api/anime`);
                const data = await res.json();
                setAnimes(data)
            } catch (error) {
                console.error(error);
            }
        }
        getAnimes()
    }, [])
    console.log(animes);
    return (
        <>
            <div className="animeContainer">
                {animes.map((anime) => {
                    return (
                        <div key={anime.id} className="anime">
                            <h2>{anime.name}</h2>
                            <img src={anime.imgUrl} alt={anime.name} />
                            <br />
                            {/* <button onClick={() => { navigate(`/characters/:characterId/${character.details}`) }}>See Detail</button> */}
                            <button onClick={() => { navigate(`/anime/${anime.id}`) }}>See Details</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}