


export function MyList({ item }){

  

    return(
        <ul>
            {item.map((item) => (
            <li key={item.id}>{item.name}</li>))}
        </ul>
    )

}  