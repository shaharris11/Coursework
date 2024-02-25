import Animes from "./Animes"


export default function Home({user}) {
    return (
        <>
           <div>
            <Animes user={user}/>
            <h1>Welcome to AnimePulse!</h1>
           </div> 
        </>
    )
}