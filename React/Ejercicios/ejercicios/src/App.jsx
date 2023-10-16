import { useState } from "react";
import { Message } from "./components/ejercicio12/Message";
import { WelcomeName } from "./components/ejercicio16/WelcomeName";
import { AlertClock } from "./components/ejercicio26/AlertClock";
import { Counter } from "./components/ejercicio29/Counter";
import { Clock } from "./components/ejercicio35/Clock";
import { MouseClicker } from "./components/ejercicio36/MouseClicker";
import { MultiButton } from "./components/ejercicio40/MultiButton";
import { InteractiveWelcome } from "./components/ejercicio41/InteractiveWelcome";
import { Login } from "./components/ejercicio42/Login";
import { LoginUncontrolled } from "./components/ejercicio46/UncontrolledLogin";
import { FocusableInput } from "./components/ejercicio50/FocusableInput";
import { Colors } from "./components/ejercicio53/Colors";
import { TodoList } from "./components/ejercicio56/TodoList";
import { Container } from "./components/ejercicio67/Container";
import { LanguageContext } from "./components/ejercicio70/LanguageContext";

import HelloWolrdH2 from "./components/ejercicio7y11/HelloWorldH2";

let colors = [
  { id: 1, name: "Red" },
  { id: 2, name: "Green" },
  { id: 3, name: "Blue" },
  { id: 4, name: "Yellow" },
];

function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div className="principal">
      <Container title={"Aprieta el titulo!"}>
        <Colors colors={colors} />
        <FocusableInput />
        <Login />
        <InteractiveWelcome />
        <div>{<HelloWolrdH2 />}</div>
        <div>{<Message />}</div>
        <div>{<HelloWolrdH2 />}</div>{" "}
        {/* Lo que sucede es que se renderizan dos componentes*/}
        {/* ejercicio 14 Si pides que se renderice  dos componentes te pedira que tengan un div padre*/}
        <div>
          <WelcomeName name="John" age={2} />
        </div>
        {/*No pasaria nada, simplemente se renderizaria el componente jsx */}
        <AlertClock />
        <Counter initialValue={10} />
        <Clock />
        <MouseClicker name={"Pulsame"} />
        <MultiButton />
        <TodoList />
        <LoginUncontrolled />
      </Container>

      <LanguageContext.Provider value={language}>

      <button onClick={() => handleSetLanguage('es')}>ES</button> 
      <button onClick={() => handleSetLanguage('en')}>EN</button>
      <Clock/>
      </LanguageContext.Provider>

      
    </div>
  );
}

export default App;
