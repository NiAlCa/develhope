//ejercicio 16, 17 , 18 y 19

import { Age } from "../ejercicio20/age";

// eslint-disable-next-line react/prop-types
export function WelcomeName({ name, age }) {
  name = "no name";

  return (
    <div>
      <p>
        <strong>
          Welcome, {name}! {<Age age={age} />}
        </strong>
      </p>

      {/* 19  Respueste esta pregunta en app jsx */}
    </div>
  );
}
