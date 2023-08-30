const number = 15;

let miPromesa = new Promise((resolve, reject) => {
    if (number > 10){
        resolve(number);
    }else{
        reject(number);
    }
});

miPromesa
.then((val) => console.log(val))
.catch((err) => console.error(err))



