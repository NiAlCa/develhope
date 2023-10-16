import { Color } from "../ejercicio55/Color";

export function Colors({colors}){
    

  return (
    <ul>
      {colors.map(color => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}