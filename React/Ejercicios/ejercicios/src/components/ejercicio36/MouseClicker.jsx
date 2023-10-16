export function MouseClicker({ name }) {
  const handleClickButton = (event) => {
    console.log(event.currentTarget.name);
  };

  const handleClickImg = (event) => {
    console.log(event.currentTarget.src);
    event.stopPropagation();
  };

  return (
    <div>
      <button name={name} onClick={handleClickButton}>
        <img onClick={handleClickImg} src="imagen.jpg" />  
      </button>
    </div>
  );
}


//Se sigue imprimiendo porque sigues haciendo click en el boton