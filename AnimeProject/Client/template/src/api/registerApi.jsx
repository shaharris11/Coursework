const BASE_URL = `http://localhost:8080/api`;


export const newUser = async (username, password) => {
    try {
        const response = await fetch(
            `${BASE_URL}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const result = await response.json();
        console.log(result)
        return result
    } catch (err) {
        console.error(err);
    }
}

