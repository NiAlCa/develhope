//Codigo 2 seguimos del index.jsx

import { HelloWorld } from "./components/1.HelloWorld/HelloWorld";
import { MyList } from "./components/11.RenderingLists/MyList";
import { Welcome } from "./components/2.Props/Welcome";
import { AlertClock } from "./components/4.Events/AlertClock";
import { Counter } from "./components/6.useState/Counter";
import { Container } from "./components/13.Composition/Container";
import { Clock } from "./components/7.useEffect/Clock";
import { MyForm } from "./components/9.Forms/1.Controlled Forms/MyForm";
import { LanguageContext } from "./components/14.Context/LenguageContex";
import { useState } from "react";
import { GithubUser } from "./components/15.Fetching/GithubUser";
import { CounterHook } from "./components/16.CustomHooks/CounterHook";
import { Route, Routes, Link} from "react-router-dom";
import { Catalogue } from "./components/17.ReactRouter/Catalogue";
import { Product } from "./components/17.ReactRouter/Product";
import { GithubUsers } from "./components/18.SWR/GithubUsers";
import { GithubUser2 } from "./components/18.SWR/GithubUser2";

/*Realmente para mostrar en pantalla lo mostraremos desde este archivo 
que usaremos de punto intermedio, solo deberiamos tener que renderizar un solo componente dentro
de l araiz de nuestra aplicacion en este caso el componente raiz que vamos a renderizar
en nuestra raiz va a ser App*/

export function App() {
  /*const [language, setLanguage] = useState('en')

    function handleSetLanguage(language) {
        setLanguage(language)
    }*/

  return (
    <div>
      <Container title={<div>
        <h1> My awesome app</h1>
        <div>
          <Link to="/">Home</Link> | <Link to="products">Product</Link> | <Link to="users">User</Link>
          
        </div>

      </div>}>



      <Routes>
        <Route path="/" element={<Welcome name="juan" age="10" />} /> 
        <Route path="products" element={<Catalogue />}>
          <Route index element={<p>Select a product</p>}/>
          <Route path=":id" element={<Product />}/>
        </Route>
        <Route path="users" element={<GithubUsers />}>
            <Route path=":username" element={<GithubUser2 />}></Route>
        </Route>
        <Route path="*" element={<div><p>Ruta no encontrada</p></div>}/>
        
      </Routes>
      </Container>
    </div>
  );
}

{
  /* Apuntes antes del root
    <div>

  
        <button onClick={() => handleSetLanguage('it')}>IT</button> 
    <button onClick={() => handleSetLanguage('en')}>EN</button> {/*sEGUIMOS EN EL COMPONENTE HELLOWORLD *}
    <Container>
     
      
      <LanguageContext.Provider
      value={language}> {/*Haciendo esto toda la app esta bajo el contexto del lenguaje *}
        <h1>My awesome Application</h1>

        <GithubUser
        username='nicopum'
        />

        <CounterHook/>

        <HelloWorld />

        {/* codigo 4
            Aqui estamos viendo como usar el componente y su pront
            *}
        <Welcome
          name="Nico" //de esta manera agregariamos un string
          age={10} //de esta manera agregariamos un numero
        />

        {/* 
            vamos a reutilizar el componente
            *}

        <Welcome name="Laura" age={110} />

        {/*Fin 2 props *}

        {/*incio 4 events *}

        <AlertClock />
        {/*Fin 4 events *}

        {/*inicio 6 counter *}
/*
        <Counter />

        <Clock />

        <MyForm />

        <MyList
          item={[
            { id: 1, name: "jane" },
            { id: 2, name: "jhon" },
            { id: 3, name: "Paca" },
            { id: 4, name: "Jone" },
            { id: 5, name: "jan" },
            { id: 6, name: "Poca" },
          ]}
        />


      </LanguageContext.Provider>
    </Container>
    </div> */
  //Ahora volvemos al index.jsx codigo 3
}
