import { zodResolver } from '@hookform/resolvers/zod';
import { FileText, SpinnerGap } from 'phosphor-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

const NewCurriculumSchema = z.object({
    name: z.string(),
    email: z.string().email("Email precisa ser valido."),
    phone: z.string().max(12, "Por favor digite apenas números e espaços"),
    role: z.string(),
    degree: z.enum([
        "Ensino médio completo",
        "Ensino médio incompleto",
        "Ensino superior completo",
        "Ensino superior incompleto",
    ]),
    file: z.custom()
})

type NewCurriculumInputs = z.infer<typeof NewCurriculumSchema>

type FormWrapperProps = {
    changeMainComponent: () => void
}

export default function FormWrapper({ changeMainComponent }: FormWrapperProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isSubmitting,
            isSubmitSuccessful
        }
    } = useForm<NewCurriculumInputs>({
        resolver: zodResolver(NewCurriculumSchema)
    })

    async function onNewCurriculumSubmit(data: NewCurriculumInputs) {
        try {
            console.log(data)

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
        <form onSubmit={handleSubmit(onNewCurriculumSubmit)} className='flex flex-col gap-3 bg-slate-700 py-10 px-20 rounded-xl'>
            <div className='flex flex-col items-center'>
                <FileText size={60} />
                <h1 className='mt-4 text-2xl font-bold text-white '>
                    Formulário de Aplicação
                </h1>
            </div>

            <div className="mt-8 mb-10 flex flex-col gap-6">
                <input
                    autoComplete='false'
                    placeholder="nome"
                    className="placeholder:text-slate-400 p-2 text-lg bg-slate-900 text-slate-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 shadow-md shadow-black"
                    type="text"
                    required
                    {...register("name")}
                />
                <input
                    autoComplete='false'
                    placeholder="email"
                    className="placeholder:text-slate-400 p-2 text-lg bg-slate-900 text-slate-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 shadow-md shadow-black"
                    type="text"
                    required
                    {...register("email")}
                />
                <input
                    autoComplete='false'
                    placeholder="XX YXXXX XXXX"
                    className="placeholder:text-slate-400 p-2 text-lg bg-slate-900 text-slate-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 shadow-md shadow-black"
                    required
                    {...register("phone")}
                />
                <input
                    autoComplete='false'
                    placeholder="cargo desejado"
                    className="placeholder:text-slate-400 p-2 text-lg bg-slate-900 text-slate-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 shadow-md shadow-black"
                    type="text"
                    required
                    {...register("role")}
                />

                <select
                    className="p-2 bg-slate-900 rounded-xl shadow shadow-black"
                    {...register("degree")}
                >
                    {/* this select could be an array and the render would iterate on it */}
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                </select>


                <input
                    type="file"
                    accept='.pdf,.doc,.docx'
                    required
                    {...register("file")}
                />
            </div>
            <button type="submit" disabled={isSubmitting} className="disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center p-4 font-mono border-2 hover:bg-violet-600 border-violet-600 text-xl rounded-xl transition-all ease-linear delay-75 duration-300">
                {
                    isSubmitting
                    ? <SpinnerGap className='animate-spin' size={32} />
                    : "Enviar"
                }
            </button>
        </form>
    )
}
