export function AlertClock(){
    function handleButtonClick(){
        const date = new Date();

        alert(`La fecha de hoy es ${date.toLocaleDateString()}`)
    }

    

    return(
        <div>
            <button onClick={handleButtonClick}>Alert!</button>
        </div>
    )
}


/* 
Create an AlertClock function component that renders a button.
 When the button is clicked, an alert should be shown with the current time.
  Tip: use the Date object to get the current time.



*/