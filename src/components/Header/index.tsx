import Image from 'next/image'
import korp from '../../../public/logo_korp.png'

export default function Header () {
    return (
        <header 
            className='
              after:left-1/2 
              after:absolute 
              after:blur-2xl 
              after:translate-x-z 
              after:translate-y-z 
              after:-z-10 
              after:bg-glow1 
              after:rounded-full 
              after:w-60 after:h-48  
              before:left-1/2 
              before:absolute 
              before:blur-2xl 
              before:translate-x-z 
              before:translate-y-z 
              before:bg-glow2 
              before:rounded-full 
              before:w-[480px] 
              before:h-[360px] 
              before:ml-[-400px]
            '
          >
            <div className='z-50 flex items-center gap-4'>
              <Image className='max-w-full saturate-100' id="image" alt="Paytour" src={korp} />

              {/* Separator */}
              <div className='h-14 w-0.5 bg-violet-600' />
              
              <h1 className='text-3xl saturate-100 font-bold text-white'>
                Gerador de QR Code
              </h1>
            </div>
        </header>
    )
}