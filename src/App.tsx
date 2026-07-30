import { MainPage } from "./components/MainPage";
import './App.css'
import { useState } from "react";
import { BootScreen } from "./components/BootScreen";


export default function App() {
  const [booted,setbooted] = useState(false)

  return (
          <>
      {!booted ? (
        <BootScreen onComplete={() => setbooted(true)} />
      ) : (
            <main className="min-h-screen relative bg-(--bg) overflow-hidden ">

      <div
        className="
          fixed inset-0 -z-10
          bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.12),transparent_70%)]
        "
      />
      <MainPage />       
          

    </main>
    
      )}

    </>
  );

}

