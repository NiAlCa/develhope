/*Promises lucky draw

The `luckyDraw` function returns a promise. Create a promise chain where the function is called for for each of the players: Joe, Caroline and Sabrina

Log out the resolved value for each promise and handle any promise rejections in the chain.



Promesas sorteo

La función `luckyDraw` devuelve una promesa. Crea una cadena de promesa donde se llame a la función para cada uno de los jugadores: Joe, Caroline y Sabrina.

Cierre la sesión del valor resuelto para cada promesa y maneje cualquier rechazo de promesa en la cadena.

*/


function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}



luckyDraw('Joe')
  .then((result) => {
    console.log(result);
    return luckyDraw('Caroline');
  })
  .then((result) => {
    console.log(result);
    return luckyDraw('Sabrina');
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message); 
  });