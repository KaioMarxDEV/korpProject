import { CheckCircle } from "phosphor-react";

export default function Sent() {
    return (
        <div className='flex flex-col items-center gap-4 bg-slate-700 p-20 rounded-xl'>
            <CheckCircle className="text-green-400" size={64} />
            <span className="text-4xl font-mono underline underline-offset-8">Tudo Pronto!</span>
            <div className="text-2xl flex font-medium flex-col items-center">
                <span>Recebemos sua Aplicação</span>
                <span>Assim que possível entraremos em contato.</span>
            </div>
        </div>
    )
}