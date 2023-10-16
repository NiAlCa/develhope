import { useState } from "react";
import "./Container.scss";

export function Container({ children, title }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div>
      <h1 className="title" onClick={handleToggleCollapse}>{title}</h1>

      <div className="bg-gray-400  border-2 border-red-600	">
       {!collapsed && <div>{children}</div>}
      </div>
    </div>
  );
}
