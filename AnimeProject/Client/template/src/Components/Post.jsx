import { useEffect, useState } from "react";
import { fetchPosts, makePosts, postUpdate, deletePost } from "./FetchingPost";
import { useParams } from "react-router-dom";


export default function Posts() {
    const {animeid} = useParams()

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [allPosts, setAllPosts] = useState()

    console.log(animeid);

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchPosts(animeid);
          setAllPosts(data)
        }
        fetchData()
      }, [])
     

    const submitHandler = (event) => {
        event.preventDefault();
        async function createPost() {
            const response = { name, description, animeid }
            const data = await makePosts(response)
            const results = await fetchPosts(animeid)
            setAllPosts(results)
            return data
        }

        async function updatePost() {
            try {
                const response = { name, description }
                const data = await postUpdate(response, { animeid })
                const results = await fetchPosts(animeid)
                setAllPosts(results)
                return data
            } catch (error) {
                console.error(error);
            }
        }
        async function postDelete({ animeid }) {
            try {
                await deletePost({ animeid })
            } catch (error) {
                console.error(error);
            }
        }
        createPost();
        updatePost();
        postDelete
        setName('');
        setDescription('');
    }
    return (
        <>
            <h2>
                Leave a Pulse!
            </h2>
            <form className="postForm" onSubmit={submitHandler}>
                <label>
                    Name:
                    <input
                        placeholder="name"
                        value={name}
                        onChange={(event) => { setName(event.target.value) }}
                    />
                </label>
                <br />
                <label>
                    Comment:
                    <input
                        placeholder="type pulse here"
                        value={description}
                        onChange={(event) => { setDescription(event.target.value) }}
                    />
                </label>
                <br />
                <button type="submit">Submit Pulse</button>
            </form>
            <div>
                {allPosts && allPosts.map((post) => {
                    return (
                        <>
                            <div>
                                <h2>{post.name}</h2>
                                <p>{post.description}</p>
                                <button type="submit">Update</button>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}   