// Layout.tsx

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Terminal } from "./Terminal";

export default function TerminalLayout() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTerminalOpen(true);
      }

      if (e.key === "Escape") {
        setTerminalOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Outlet />

      {terminalOpen && (
        <Terminal onClose={() => setTerminalOpen(false)} />
      )}
    </>
  );
}