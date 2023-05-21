import { ArrowBendUpLeft } from "phosphor-react";

interface Props {
    backToMain: () => void;
}

export default function Sent({ backToMain }: Props) {
    return (
        <div className='flex flex-col bg-slate-700 p-20 rounded-xl'>
            <button
                onClick={backToMain}
                className="relative w-8 rounded-full flex justify-center items-center hover:text-slate-400 -top-16 -left-16"
            >
                <ArrowBendUpLeft className="w-full h-full box-border" />
            </button>

            {/* <CheckCircle className="text-green-400" size={64} />
            <span className="text-4xl font-mono underline underline-offset-8">Tudo Pronto!</span>
            <div className="text-2xl flex font-medium flex-col items-center">
                <span>Recebemos sua Aplicação</span>
                <span>Assim que possível entraremos em contato.</span>
            </div> */}
            ola doidao
        </div>
    )
}