import { useState } from "react";
import { fetchComments, makeComments, commentUpdate, deleteComment } from "./fetchingcomments";


export default function Comments({ setAllComments}) {
    

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    

    const submitHandler = (event) => {
        event.preventDefault();
        async function createComment() {
           const response = {name, description}
           const data = await makeComments(response)
           const results = await fetchComments()
           setAllComments(results)
           return data 
        } 
    
        async function update({characterId}) {
            try {
                const response = {name, description}
                const data = await commentUpdate(response, {characterId})
                const results = await fetchComments()
                setAllComments(results)
                return data
            } catch (error) {
                console.error(error);
            }
        }
        async function commentdelete({characterId}) {
            try {
                await deleteComment({characterId})
            } catch (error) {
                console.error(error);
            }
        }
        createComment();
        update();
        commentdelete
        setName('');
        setDescription('');
    }
    return (
        <>
            <form className="commentSection" onSubmit={submitHandler}>
                <label>
                    Name:
                    <input value={name}
                            onChange={(event) => {setName(event.target.value)}}
                     />
                </label>
                <br />
                <label>
                    Comment:
                    <input 
                        value={description}
                        onChange={(event) => {setDescription(event.target.value)}}
                    />
                </label>
                <br />
            </form>
        </>
    )
}   