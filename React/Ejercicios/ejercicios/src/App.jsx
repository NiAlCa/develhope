import { Message } from "./components/ejercicio12/Message";
import { WelcomeName } from "./components/ejercicio16/WelcomeName";
import HelloWolrdH2 from "./components/ejercicio7/HelloWorldH2";

function App() {
  return (
    <div>
      <div>{<HelloWolrdH2 />}</div>

      <div>{<Message />}</div>

      <div>{<HelloWolrdH2 />}</div> {/* Lo que sucede es que se renderizan dos componentes*/ }

      {/* ejercicio 14 Si pides que se renderice  dos componentes te pedira que tengan un div padre*/}

      <div><WelcomeName
      name = "Nico"
      /></div>
    </div>
  );
}

export default App;
