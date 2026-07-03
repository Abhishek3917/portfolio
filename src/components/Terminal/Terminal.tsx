import {CircleX,SquareTerminal} from 'lucide-react'
import { terminalTheme } from './TerminalTheme';
import { useState } from 'react';
import type { TerminalLine } from './types';

type Terminalprops = {
    onClose:()=>void
}

export default function Terminal({ onClose }: Terminalprops) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);

  function handleKeyDown(e:React.KeyboardEvent<HTMLInputElement>)
  {
      if(e.key!=='Enter') return ;

      console.log(input)
      setInput('');

  }

  return (
    <div
      className=" fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50" style={{fontFamily:terminalTheme.font}}>
      <div
        className=" w-[90%] max-w-5xl h-[80vh] rounded-xl border-2"
        style={{
        backgroundColor:terminalTheme.background,
        borderColor:terminalTheme.accent,}}
      >
        <div className="flex justify-between p-4 border-b"
        style={{borderColor:terminalTheme.accent}}>
          <h2 className="text-lg"
          style={{color:terminalTheme.foreground}}>
            <SquareTerminal />
          </h2>

          <button
            onClick={onClose}
            className="text-red-400 rounded-3xl "
          >
            <CircleX />
          </button>
        </div>

        <div className='flex flex-row gap-3 p-4'>
          <span  style={{color:terminalTheme.prompt}}>
          user@portfolio:~$
          </span>
            <input className='flex-1 bg-transparent outline-none'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                autoFocus
                style={{color:terminalTheme.command}}
                onKeyDown={handleKeyDown}
              />     
        </div>  
          <div className="flex flex-col items-center justify-center flex-1 h-2/3">
          </div>
      </div>
    </div>
  );
}