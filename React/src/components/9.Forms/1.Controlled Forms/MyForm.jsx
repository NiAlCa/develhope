import { useState } from "react";
/*
  Define una función para crear un objeto de datos con propiedades iniciales.
  Inicialmente, las propiedades son username, password y session.
*/
function createData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

/*
  Componente funcional MyForm que utiliza el hook useState para mantener y actualizar el estado del formulario.
*/
export function MyForm() {
  // Inicializa el estado del formulario usando la función createData
  const [data, setData] = useState(createData());

  // Maneja los cambios en los inputs del formulario
  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    // Actualiza el estado dependiendo del tipo de input (texto o checkbox)
    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // Resetea el formulario a los valores iniciales
  function handleResetForm() {
    setData(createData());
  }

  // Maneja el envío del formulario
  function handleLoginFormSubmit(event){
    event.preventDefault();
    console.log('Login button pressed', data)
  }

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <h1>My Form</h1>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handleInputChange}
      />
      <button onClick={handleResetForm}>Reset</button>
      <button type='submit' disabled={!data.username || !data.password} >Login</button>

      {/* Muestra el estado del formulario en formato JSON */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
