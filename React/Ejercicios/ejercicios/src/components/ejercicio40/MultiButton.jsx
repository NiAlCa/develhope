export function MultiButton(){

    const handleClickButton = (event) => {
        console.log(event.target.name);
    }
    
    return(

        <div>
            <button onClick={handleClickButton} name="one" className="one">One</button>
            <button onClick={handleClickButton} name="two" className="two">Two</button>
            <button onClick={handleClickButton} name="three" className="three">Three</button>
        </div>
        
    )
}