import { ArrowBendUpLeft, CheckCircle, QrCode } from "phosphor-react";
import QRCodeLink from "qrcode";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

interface Data {
    email: string;
}

interface Props {
    backToMain: () => void;
    qrData: Data
}

export default function Sent({ backToMain, qrData }: Props) {
    const [qrCodeLink, setQRCodeLink] = useState('')


    function Generate(link: string) {
        QRCodeLink.toDataURL(link, {
            width: 600,
            margin: 3
        }, (err, url) => {
            setQRCodeLink(url)
        })
    }

    useEffect(() => {
        Generate(`mailto:${qrData.email}`)
    }, [qrData])

    return (
        <div className='flex flex-col bg-slate-700 px-20 py-10 rounded-xl'>
            <button
                onClick={backToMain}
                className="flex flex-row items-center hover:bg-slate-600 rounded-full mb-5 -left-10 w-fit p-1 relative"
            >
                <ArrowBendUpLeft className="text-white" size={32} />
            </button>

            <div className="flex flex-col items-center">
                <CheckCircle className="text-green-400" size={64} />
                <span className="text-4xl font-mono underline underline-offset-8">Tudo Pronto!</span>

            </div>

            <div className="my-8 flex flex-col items-center">
                <QRCode
                    value={`mailto:${qrData.email}`}
                    size={256}
                    level="L"

                />
            </div>

            <div className="text-2xl flex font-medium flex-col items-center">
                <span>Se voce preferir pode baixar</span>
                <span>
                    <a
                        href={qrCodeLink}
                        download='qrcode.png'
                        className='flex flex-row justify-center gap-1 items-center text-violet-500 hover:text-violet-600'
                    >
                        <QrCode />
                        clicando aqui
                    </a>
                </span>
            </div>
        </div>
    )
}