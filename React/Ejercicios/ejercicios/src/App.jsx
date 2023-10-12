import { Message } from "./components/ejercicio12/Message";
import { WelcomeName } from "./components/ejercicio16/WelcomeName";
import { AlertClock } from "./components/ejercicio26/AlertClock";
import { Counter } from "./components/ejercicio29/Counter";

import HelloWolrdH2 from "./components/ejercicio7y11/HelloWorldH2";

function App() {
  return (
    <div className="principal">
      <div>{<HelloWolrdH2 />}</div>

      <div>{<Message />}</div>

      <div>{<HelloWolrdH2 />}</div> {/* Lo que sucede es que se renderizan dos componentes*/ }

      {/* ejercicio 14 Si pides que se renderice  dos componentes te pedira que tengan un div padre*/}

      <div><WelcomeName
      name = "John"
      age={2} 
      /></div>

       {/*No pasaria nada, simplemente se renderizaria el componente jsx */}

       <AlertClock/>

    <Counter
    initialValue={10}
    />
       
    </div>
  );
}

export default App;
