import Animes from "./Animes"


export default function Home({user}) {
    return (
        <>
           <div>
            <Animes user={user}/>
           </div> 
        </>
    )
}