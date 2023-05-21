import { zodResolver } from '@hookform/resolvers/zod';
import { FileText, SpinnerGap } from 'phosphor-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

const NewSchema = z.object({
    name: z.string(),
    email: z.string().email("Email precisa ser valido."),
})

type NewInputs = z.infer<typeof NewSchema>

type FormWrapperProps = {
    changeMainComponent: () => void,
    setNewSubmit: (data: NewInputs) => void
}

export default function FormWrapper({ changeMainComponent, setNewSubmit }: FormWrapperProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isSubmitting,
            isSubmitSuccessful
        }
    } = useForm<NewInputs>({
        resolver: zodResolver(NewSchema)
    })

    async function onNewSubmit(data: NewInputs) {
        try {
            setNewSubmit(data)

            reset()
        } catch (error: any) {
            // call a pop up by error handling
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful === true) {
            changeMainComponent()
        }
    }, [isSubmitSuccessful])

    return (
        <form onSubmit={handleSubmit(onNewSubmit)} className='flex flex-col gap-3 bg-slate-700 py-10 px-20 rounded-xl'>
            <div className='flex flex-col items-center'>
                <FileText size={60} />
                <h1 className='mt-4 text-2xl font-bold text-white '>
                    Formulário de Aplicação
                </h1>
                <span className='mt-1 text-xl'>
                    digite as informações para incluir no <span className='underline underline-offset-2 font-semibold'>QR Code</span>
                </span>
            </div>

            <div className="mt-8 mb-10 flex flex-col gap-6">
                <input
                    autoComplete='false'
                    placeholder="Ex: seu nome..."
                    className="placeholder:text-slate-400 p-2 text-lg bg-slate-900 text-slate-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 shadow-md shadow-black"
                    type="text"
                    required
                    {...register("name")}
                />
                <input
                    autoComplete='false'
                    placeholder="Ex: email@email.com"
                    className="placeholder:text-slate-400 p-2 text-lg bg-slate-900 text-slate-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 shadow-md shadow-black"
                    type="text"
                    required
                    {...register("email")}
                />
            </div>
            <button type="submit" disabled={isSubmitting} className="flex items-center justify-center p-4 font-mono hover:bg-violet-800 bg-violet-700 text-xl rounded-xl transition-all ease-linear delay-75 duration-300">
                {
                    isSubmitting
                        ? <SpinnerGap className='animate-spin' size={32} />
                        : "Enviar"
                }
            </button>
        </form>
    )
}
