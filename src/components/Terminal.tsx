import {CircleX,SquareTerminal} from 'lucide-react'

type Terminalprops = {
    onClose:()=>void
}

export function Terminal({ onClose }: Terminalprops) {
  return (
    <div
      className=" fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50
      "
    >
      <div
        className=" w-[90%] max-w-5xl h-[80vh] bg-black border border-green-500 rounded-xl
        "
      >
        <div className="flex justify-between p-4 border-b border-green-500/20">
          <h2 className="text-[#A855F7] text-lg">
            <SquareTerminal />
          </h2>

          <button
            onClick={onClose}
            className="text-red-400 rounded-3xl "
          >
            <CircleX />
          </button>
        </div>

        <div className="p-4 text-green-400">
          user@portfolio:~$
        </div>
        <h1 className='items-center justify-center text-amber-50 text-5xl p-50'>Coming Soon</h1>
      </div>
    </div>
  );
}