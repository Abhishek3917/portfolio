// import Archlogo from '/archlinux-logo.png'
import mainbottom from '/main_bottom.png'
import { File,Mail} from 'lucide-react'
import { ProjectsSection } from "./ProjectSection";
import { ArchAscii } from '../Data/Archascii';

export function MainPage(){
    return(
        
        <>
        
          <section className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-7xl px-6 mx-auto lg:py-20 sm:py-20 ">
            <img src={mainbottom} className='absolute py-4 bottom-0 left-0 w-full pointer-events-none opacity-90  blur-sm'/>
            
        <div>
            <div className="text-(--primary)  flex flex-col gap-1.5 ">
                <div className='flex text-xl gap-4 '>
                    <h1 >  ❯❯ Hello, I'm </h1>
                    <h1 className='animate-bounce'>_</h1>
                </div>
           
            <h1 className="text-3xl lg:text-4xl font-bold">Abhishek S Kumar </h1>
            </div>
            <div className="text-(--text) mt-2 space-y-3 text-lg py-7">
                <p>Full Stack Developer | Linux Enthusiast  </p>
                <p>
                    I build performant web application,automate systems and self-host cool stuff.
                </p>
            </div>
            <div className="text-(--primary)">
                <button className="text-lg mt-6 border border-(--primary) px-6 py-3 rounded-lg hover:bg-(--primary) hover:text-black animate-pulse">Press Ctrl + K to open terminal</button>
            </div>
        <div className='flex gap-5 relative text-(--primary) py-5 p-4'>
        <File />
        <Mail size={30} className='text-(--primary) '/>
        <File />
        <File />
        </div>
        </div>
        <div>
  
            <pre className='text-(--primary) lg:w-80 w-48 
            drop-shadow-[0_0_40px_rgba(0,255,136,0.4)] animate-[float_3s_ease-in-out_infinite] '>{ArchAscii}</pre>
        </div>

    </section>
    <div className='hero-bg'>
    <ProjectsSection />
    </div>
        </>
    
    )
}