import Animes from "./Animes"
import { useState } from "react"


export default function Home({user}) {
    const [auth, setAuth] =useState({})
    return (
        <>
            <div>
                {
                    auth.id ? (
                        <main>
                        <Animes user={user} />
                        </main>
                    ):(
                        <Animes />
                    )
                }
            </div>
           <div>
            <Animes user={user}/>
            <h1>Welcome to AnimePulse!</h1>
           </div> 
        </>
    )
}