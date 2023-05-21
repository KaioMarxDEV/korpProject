import Head from 'next/head';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '../components/Footer';
import FormWrapper from '../components/Form';
import Header from '../components/Header';
import Sent from '../components/Sent';
import SizeDown from '../components/SizeDown';
import SlideLeft from '../components/SlideLeft';

interface Data {
    email: string;
}

export default function Home() {
    const [data, setData] = useState<Data>({} as Data)
    const [formMainComponent, setFormMainComponent] = useState(true)

    function changeMainComponent() {
        setFormMainComponent(false)
    }

    function backToMainComponent() {
        setFormMainComponent(true)
    }

    function handleSubmit(data: Data) {
        setData(data)
    }

    return (
        <>
            <ToastContainer />
            <Head>
                <title>Korp Project</title>
                <meta name="description" content="QR Code generator" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className="container mx-auto">
                <div className='flex justify-between flex-col items-center p-20 min-h-screen'>

                    {/* Header */}
                    <SlideLeft>
                        <Header />
                    </SlideLeft>

                    {/* Form */}
                    {formMainComponent && (
                        <SizeDown>
                            <div
                                className='
                                    flex
                                    flex-col
                                    relative
                                    justify-center
                                    items-center
                                    p-1
                                    overflow-hidden
                                    rounded-xl
                                    translate-x-z
                                    translate-y-z
                                    shadow-[0_2px_8px_-1px]
                                    shadow-violet-600
                                    after:absolute
                                    after:-z-10
                                    after:inset-0
                                    after:p-1
                                    after:rounded-xl
                                    after:bg-transparent
                                    after:bg-clip-content
                                    before:absolute
                                    before:-z-10
                                    before:bg-glow-border
                                    before:w-[200%]
                                    before:h-[200%]
                                    before:animate-spin-slow
                                '
                            >
                                <FormWrapper setNewSubmit={handleSubmit} changeMainComponent={changeMainComponent} />
                            </div>
                        </SizeDown>
                    )}
                    {/* Sent component when form is already submitted */}
                    {!formMainComponent && (
                        <SizeDown>
                            <div
                                className='
                                    flex flex-col relative
                                    justify-center
                                    items-center
                                    p-1
                                    overflow-hidden
                                    rounded-xl
                                    translate-x-z
                                    translate-y-z
                                    shadow-[0_2px_8px_-1px]
                                    shadow-violet-600
                                    after:absolute
                                    after:-z-10
                                    after:inset-0
                                    after:p-1
                                    after:rounded-xl
                                    after:bg-transparent
                                    after:bg-clip-content
                                    before:absolute
                                    before:-z-10
                                    before:bg-glow-border
                                    before:w-[200%]
                                    before:h-[200%]
                                    before:animate-spin-slow
                                '
                            >
                                <Sent qrData={data} backToMain={backToMainComponent} />
                            </div>
                        </SizeDown>
                    )}

                    {/* Footer */}
                    <SlideLeft>
                        <Footer />
                    </SlideLeft>
                </div>
            </main>
        </>
    )
}
