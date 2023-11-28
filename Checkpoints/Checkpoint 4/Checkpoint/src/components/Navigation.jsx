import { useState } from "react";

export function Navigation() {
  const [collapsed, setCollapsed] = useState("collapsed");

  return (
    <div>
      <div className="dropdown" onClick={() => setCollapsed("inicio")}>
        <div>
          <p>Inicio</p>
        </div>
      </div>

      <div className="dropdown" onClick={() => setCollapsed("Acerca")}>
        <div>
          <p>Acerca De</p>
        </div>
      </div>

      <div className="dropdown" onClick={() => setCollapsed("Contacto")}>
        <div>
          <p>Contacto</p>
        </div>
      </div>

      {collapsed === "inicio" && <h1>Inicio</h1>}
      {collapsed === "Acerca" && <h1>Acerca</h1>}
      {collapsed === "Contacto" && <h1>Contacto</h1>}
    </div>
  );
}
