import { LinkedinLogo } from "phosphor-react";

export default function Footer() {
    return (
        <footer>
            <span className='text-2xl flex flex-col items-center font-bold text-slate-600'>
                Feito por Kaio Marx
                <span> 
                    kaiomarxdev@gmail.com
                </span>
                <a target="_blank" className="text-blue-400 flex no-underline animate-pulse mt-3 underline-offset-4" href="https://www.linkedin.com/in/kaiomarx/">
                    <LinkedinLogo size={32} />
                    Linkedin
                </a>
            </span>
        </footer>
    )
}
