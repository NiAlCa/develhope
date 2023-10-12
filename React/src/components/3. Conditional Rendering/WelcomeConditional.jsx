import HelloWorld from "../1.HelloWorld/HelloWorld.jsx"


export function WelcomeConditional({name, age}){
    return(
        <div>
            {name ? <h2>Welcome, {name}!</h2> : <HelloWorld />}
            {!!age &&   <p>you are {age} years old</p>}
            { age === 0 && <p>U are very young!</p>}
        </div>
    )
}