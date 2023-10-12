/*
  Componente funcional MyUncontrolledForm que representa un formulario no controlado.
  Los datos se obtienen directamente del DOM cuando se envía el formulario.
*/
export function MyUncontrolledForm() {

    function handleFormSubmit(event) {
        event.preventDefault();

        // Extrae los datos del formulario usando FormData
        const formData = new FormData(event.target);

        // Convierte los datos en un objeto
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            session: formData.get('session') === 'on' ? true : false,
        }

        console.log(data);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <h1>My uncontrolled Form</h1>
            <input name="username" />
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}
