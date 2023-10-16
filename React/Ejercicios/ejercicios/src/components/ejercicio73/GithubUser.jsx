import { useState } from "react"

export function GithubUser({user}){

    let url = `https://api.github.com/users/${user}`

    async function fetchGithubUser(user){
        const [data, setData] = useState(null)

        try{
            const response  = await fetch(url)
            const json = await Response.json()

            setData(json)
        }catch(error){
            console.error(error)
            setData(null)
        }
    }



    return (
        <div>



        </div>
    )
}