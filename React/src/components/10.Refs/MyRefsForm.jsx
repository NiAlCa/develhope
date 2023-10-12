
import { useEffect, useRef, useState } from "react";



// Función para crear datos iniciales
function createData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

export function MyForm() {
  const [data, setData] = useState(createData());

  // Refs para acceder al input de contraseña y para verificar si el componente está montado
  const inputRef = useRef(null);
  const mountedRef = useRef(false);

  // Efecto para manejar el montaje y enfoque del input de contraseña
  useEffect(() => {
    // Si es la primera vez que se monta el componente
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Componente montado por primera vez");
    } else {
      console.log("Componente montado nuevamente");
    }

    // Enfoca en el input de contraseña
    inputRef.current?.focus();
  }, []); // [] asegura que se ejecute solo una vez al montar el componente

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleResetForm() {
    setData(createData());
  }

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    console.log('Login button pressed', data);
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
        ref={inputRef} // Ref para el input de contraseña
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

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
