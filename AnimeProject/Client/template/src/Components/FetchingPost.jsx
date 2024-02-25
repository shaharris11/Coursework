const apiUrl = "http://localhost:8080/api"

export const fetchPosts = async (animeid) => {
    try {
        const response = await fetch(`${apiUrl}/posts/${animeid}`)
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

export const makePosts = async (post) => {
    try {
        const response = await fetch(`${apiUrl}/posts`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                name: post.name,
                userid: post.userid,
                description: post.description
            })
        })
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

export const postUpdate = async (postid, post) => {
    try {
        const res = await fetch(`${apiUrl}/post/${postid}`, {
            method: 'PUT',
            body: JSON.stringify(post)
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

export const deletePost =async (postid) => {
    try {
        const res = await fetch(`${apiUrl}/posts/${postid}`, {
            method: "DELETE",
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error);
    }
}