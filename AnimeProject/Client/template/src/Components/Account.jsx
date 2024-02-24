import { useState, useEffect } from "react";

export default function Account() {
    const [userAccount, setUserAccount] = useState({});
    // const [userAnime, setUserAnime] = useState([]);

    // useEffect(() => {
    //     async function fetchAccountData() {
    //       try {
    //         const response = await fetch(
              
    //           {
    //             headers: {
    //               "Content-Type": "application/json",
    //               Authorization: Bearer ${token},
    //             },
    //           }
    //         );
    //         const result = await response.json();
    //         setUserAccount(result);
    //       } catch (error) {
    //         console.log(error.message);
    //       }
    //     }
    return(
        <>
            <div className="account">
              <p>Welcome!</p>
            </div>
        </>
    )
}