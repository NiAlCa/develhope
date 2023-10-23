import { useMemo } from "react";

export default function FilteredList({ list }) {
    const filteredList = useMemo(() => {
      return list.filter(item => item.age > 18);
    }, [list]);
  
    return (
      <div>
        {filteredList.map(item => (
          <div key={item.id}>
            <p>Nombre: {item.name}</p>
            <p>Edad: {item.age}</p>
          </div>
        ))}
      </div>
    );
  }