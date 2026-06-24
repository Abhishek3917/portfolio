import { MainPage } from "./components/MainPage";
import './App.css'
import { useEffect, useState } from "react";
import { BootScreen } from "./components/BootScreen";
import { Terminal } from "./components/Terminal";


export default function App() {
  const [booted,setbooted] = useState(false)
  const [terminalOpen,setterminalOpen] = useState(false)

  useEffect(()=>{
        function HandleKeyDown(e: KeyboardEvent){
          if(e.ctrlKey && e.key.toLowerCase()=='k')
          {
            e.preventDefault();
            setterminalOpen(true)
          }
        
          if(e.key==="Escape")
          {
            setterminalOpen(false)
          }
        }
          window.addEventListener("keydown",HandleKeyDown)
          return ()=>{
            window.removeEventListener("keydown",HandleKeyDown)
          }
        
  },[]);


  return (
          <>
      {!booted ? (
        <BootScreen onComplete={() => setbooted(true)} />
      ) : (
            <main className="min-h-screen relative bg-[#050505] overflow-hidden ">

      <div
        className="
          fixed inset-0 -z-10
          bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.12),transparent_70%)]
        "
      />
      <MainPage />

      {terminalOpen &&(
        <Terminal onClose={() => setterminalOpen(false)} />
      )}        
          
    <footer>
      <div className="text-amber-300 text-center text-lg p-4">
        <h1>Contact</h1>
      </div>
    </footer>
    </main>
    
      )}

    </>
  );

}

