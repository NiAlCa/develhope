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
import { GithubUser } from "./components/ejercicio73/GithubUser";
import { GithubUsers } from "./components/ejercicio74/GithubUsers";
import { SWRConfig } from "swr";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const fetcher = url => fetch(url).then(response => response.json());


function App() {

  return (
    <SWRConfig value={{fetcher}}> 
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/counter">Contador</Link>
          </li>
          <li>
            <Link to="/users">Usuario de GitHub</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<WelcomeName name="Jose" age="5"/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/" element={<GithubUsers />} >
        <Route path=":username" element={<GithubUser />} />
        <Route index element={<p>Add a user and select it</p>} />
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
    </SWRConfig>
  );
}

export default App;



{/* 

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

     
<GithubUser
user="nicopum"

/>


<Container title={"Aprieta el titulo!"}>
<Colors colors={colors} />
<FocusableInput />
<Login />
<InteractiveWelcome />
<div>{<HelloWolrdH2 />}</div>
<div>{<Message />}</div>
<div>{<HelloWolrdH2 />}</div>{" "}
{/* Lo que sucede es que se renderizan dos componentes*}
{/* ejercicio 14 Si pides que se renderice  dos componentes te pedira que tengan un div padre*}
<div>
  <WelcomeName name="John" age={2} />
</div>
{/*No pasaria nada, simplemente se renderizaria el componente jsx *}
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



<GithubUsers />
*/}
