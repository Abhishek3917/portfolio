import {Link} from "react-router-dom"
import {astronout } from "../Data/Archascii";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8 ">
      <div className="max-w-7xl w-full border border-green-500/20 rounded-2xl p-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-green-400 mb-6">
              user@portfolio:~$ cd /unknown
              <br />
              bash: /unknown: No such file or directory
            </p>

            <h1 className="text-[140px] font-bold leading-none text-green-400">
              404
            </h1>

            <h2 className="text-5xl mt-4">
              You're not lost.
              <br />
              You're{" "}
              <span className="text-green-400">
                exploring.
              </span>
            </h2>
            <div className="  mt-8 border border-green-500/20 rounded-xl p-6 bg-black/30 text-lg">
              <p>&gt; keep building</p>
              <p>&gt; keep learning</p>
              <p>&gt; every bug teaches something</p>
              <p>&gt; the best projects are born from curiosity</p>
              <span className="animate-pulse text-green-400">
                █
              </span>
            </div>
            <div className="flex gap-4 mt-8">
                <Link to={`/`} className=" px-6 py-3 rounded-lg bg-green-500 text-black font-semibold ">
                ← Go Home
                </Link>
              <Link to={`/project/`} className=" px-6 py-3 rounded-lg border border-green-500 text-green-400">
                {"</>"} View Projects
              </Link>
            </div>
          </div>

          <div className="flex justify-center bg-green-700/15 border border-green-950">

            <pre className=" text-green-500/80 text-xs lg:text-sm leading-none drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">
                    {astronout}
            </pre>

          </div>

        </div>
        <div className=" mt-12 border rounded-xl p-6 text-gray-400 text-lg">
          <p>
            Programs must be written for people to read,
            and only incidentally for machines to execute.
          </p>
          <p className="text-green-400 mt-3">
            — Harold Abelson
          </p>
        </div>
      </div>
    </div>
  );
}