import { bootLogs } from "../Data/loadinglog";
import { useState,useEffect } from "react";


export function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < bootLogs.length) {
        setLines((prev) => [...prev, bootLogs[index]]);
        index++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 100);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono p-8 flex items-start">
      <div>
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}

        <span className="animate-pulse">█</span>
      </div>
    </div>
  );
}