import { useState, useEffect } from "react";

export default function Account({user}) {
    // const [userAccount, setUserAccount] = useState({});
    const [myLikes, setMyLikes] = useState([]);
    const [myPosts, setMyPost] = useState()
    useEffect(() => {
        async function fetchAccount() {
            try{
                const response = await fetch(`http://localhost:8080/api/posts/mine/${user?.id}`)
                const res = await fetch(`http://localhost:8080/api/likes/mine/${user?.id}`);
                const data = await response.json()
                const data2 = await res.json()
                setMyPost(data)
                setMyLikes(data2)
            } catch (error) {
                console.log(error);
            }
        }
        fetchAccount()
    }, [])
    return(
        <>
            <div className="account">
              <p>Welcome!{user?.username} </p>
              <div>
                {myPosts && myPosts?.length > 0 && myPosts.map((post) => {
                    console.log(post)
                    return (
                        <>
                            <div>
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                                <button type="submit">Update</button>
                            </div>
                        </>
                    )
                })}
            </div>
            <div>
                {myLikes && myLikes?.length > 0 && myLikes.map((anime) => {
                    
                    return (
                        <>
                            <div>
                                <h2>{anime.name}</h2>
                                <img src={anime.image} alt={anime.name} />
                                <button type="submit">Update</button>
                            </div>
                        </>
                    )
                })}
            </div>
            </div>
        </>
    )
}