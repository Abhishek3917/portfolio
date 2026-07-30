import {CircleX,SquareTerminal} from 'lucide-react'
import { terminalTheme } from './TerminalTheme';
import { useState } from 'react';
import type { TerminalLine } from './types';
import parseCommand from './Parser';
import { Commands} from './Commands';


type Terminalprops = {
    onClose:()=>void
}

export default function Terminal({ onClose }: Terminalprops) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  function handleKeyDown(e:React.KeyboardEvent<HTMLInputElement>)
  {
      if(e.key!=='Enter') return ;
      const command = input.trim();

      if (!command) {
          setInput("");
          return;
        }

      const parsed = parseCommand(command)
      const handler = Commands[parsed.command as keyof typeof Commands];
      let output = "";

      let type: TerminalLine["type"] = "output";
      if (handler) {
            output = handler(parsed.args);
      }
      else {
          
          type = "error";
      }
      const id =Date.now()
      setHistory(prev => [
                            ...prev,
                            {
                                id,
                                type: "command",
                                text: command,
                            },
                            {
                                id: id + 1,
                                type,
                                text: output,
                            }
                      ]);
                setInput("");
  }

  return (
    <div
      className=" fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 " style={{fontFamily:terminalTheme.font}}>
      <div
        className=" w-[90%] max-w-5xl h-[80vh] rounded-xl border-2 overflow-y-auto"
        style={{
        backgroundColor:terminalTheme.background,
        borderColor:terminalTheme.accent,}}
      >
        <div className="flex justify-between p-4 border-b "
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
    <div className="flex gap-3 p-3 flex-col text-xl ">
        <h1 style={{color:terminalTheme.output}}>Type help </h1>
          {history.map((line) => (
            <div key={line.id}>
                {line.type === "command" && (
                    <div className="flex gap-3">
                        <span style={{ color: terminalTheme.prompt }}>
                            user@portfolio:~$
                        </span>
                
                        <span style={{ color: terminalTheme.command }}>
                            {line.text}
                        </span>
                    </div>
                )}

                {line.type === "output" && (
                    <pre
                        className="whitespace-pre-wrap"
                        style={{ color: terminalTheme.output }}
                    >
                        {line.text}
                    </pre>
                )}

                {line.type === "error" && (
                    <pre
                        className="whitespace-pre-wrap"
                        style={{ color: terminalTheme.error }}
                    >
                        {line.text}
                    </pre>
                )}
            </div>
        ))}
        <div className='flex gap-4'>
            <span style={{ color: terminalTheme.prompt }}>
                user@portfolio:~$
            </span>

            <input
                className="flex-1 bg-transparent outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{ color: terminalTheme.command }}
                autoFocus
            />
        </div>
    </div>
        
          <div className="flex flex-col items-center justify-center flex-1 h-2/3">
          </div>
      </div>
    </div>
  );
}