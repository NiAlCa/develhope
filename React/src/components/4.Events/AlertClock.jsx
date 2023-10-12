export function AlertClock(){
    function handleButtonClick(){ /*Esta funciona la podriamos meter directamente en --> */
        const now = new Date();
        
        alert(`The current time is ${now.toLocaleDateString()}`)
    }

    return(
        <div>
            <p>Click the button below to show the current time</p>
            <button onClick={handleButtonClick /* --> Aqui pero es mejor darle las propiedades por fuera y poner un nombre*/}>Click me!</button>
        </div>
    )
}