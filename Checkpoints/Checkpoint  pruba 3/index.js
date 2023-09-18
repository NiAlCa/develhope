
const consulta = async () => {
    try{
        const respuesta = await fetch(`https://api.github.com/users/nicopum/repos`);
        const data = await respuesta.json();
        
        return data.map(repo => {return(repo.name)}); 

    }catch (error){
        console.error('Ocurrio un error', error)
    }
}

consulta()
.then(repos => {
    console.log(repos)
})




/*Write a function that uses the GitHub API to get the list 
of repositories for a given user ('https://api.github.com/users/' + user + '/repos'). 
The function takes the user's name (put ‘google’ as a name) as a 
parameter and returns a Promise that resolves with the array of repositories.*/