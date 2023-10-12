export function MouseClicker(){
    function handleButtonClick(event) {
        console.log(event.target, event.currentTarget)
    }

    return (
        <button onClick={handleButtonClick}>
            <img width={24} height={24}/>
            Click me
        </button>
    )
}