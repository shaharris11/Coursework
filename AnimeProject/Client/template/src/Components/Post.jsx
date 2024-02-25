import { useEffect, useState } from "react";
import { fetchPosts, makePosts, postUpdate, deletePost } from "./FetchingPost";
import { useParams } from "react-router-dom";


export default function Posts({user}) {
    const {animeid} = useParams()

    const [title, setTitle] = useState()
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
            const response = { title, description, animeid }
            const data = await makePosts(response)
            const results = await fetchPosts(animeid)
            setAllPosts(results)
            return data
        }

        // async function updatePost() {
        //     try {
        //         const response = { name, description }
        //         const data = await postUpdate(response, { userid })
        //         const results = await fetchPosts(userid)
        //         setAllPosts(results)
        //         return data
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
        // async function postDelete({ postid }) {
        //     try {
        //         await deletePost({ postid })
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
        createPost();
        // updatePost();
        // postDelete
        setTitle('');
        setDescription('');
        console.log(user);
    }
    return (
        <>
            <h2>
                Leave a Pulse!
            </h2>
            <form className="postForm" onSubmit={submitHandler} method="POST">
                <label>
                    Name:
                    <input
                        placeholder="title"
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }}
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
                                <h2>{post.title}</h2>
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