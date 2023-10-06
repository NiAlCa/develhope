//ejercicio 16, 17 , 18 , 19, 20, 22,23 ,24

import { Age } from "../ejercicio20/age";

// eslint-disable-next-line react/prop-types
export function WelcomeName({ name, age }) {
  name = name || "No name"

  return (
    <div>
      <p>
        <strong>
          Welcome, {name}! {age > 18 && age < 65 && name === "John" && <Age age={age} />}
        </strong>
      </p>

      {/* 19  Respueste esta pregunta en app jsx */}
    </div>
  );
}
