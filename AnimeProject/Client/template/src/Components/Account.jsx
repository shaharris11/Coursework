import { useState, useEffect } from "react";

export default function Account({user}) {
    // const [userAccount, setUserAccount] = useState({});
    // const [myLikes, setMyLikes] = useState([]);
    // const [myPosts, setMyPost] = useState()
    // useEffect(() => {
    //     async function fetchAccount() {
    //         try{
    //             const response = await fetch(`http://localhost:8080/api/posts/mine/${user.id}`)
    //             const res = await fetch(`http://localhost:8080/api/likes/mine/${user.id}`);
    //             const data = await response.json()
    //             const data2 = await res.json()
    //             setMyPost(data)
    //             setMyLikes(data2)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchAccount()
    // }, [])
    return(
        <>
            <div className="account">
              <p>Welcome! </p>
            </div>
        </>
    )
}