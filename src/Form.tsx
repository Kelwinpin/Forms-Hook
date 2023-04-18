import { useState } from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import './styles/global.css'

type FormData = {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
}

const createUserFormSchema = z.object({
    nome: z.string().nonempty("Este campo é obrigatório!"),
    sobrenome: z.string().nonempty("Este campo é obrigatório!"),
    email:z.string().nonempty("Este campo é obrigatório!"),
    senha:z.string().min(6, "A senha precisa de no mínimo 6 caracteres")
})

export default function Form(){
    const [output, setOutput] = useState('');
    const {reset, handleSubmit, register, formState:{errors}} = useForm<FormData>({
        resolver: zodResolver(createUserFormSchema),
    });

    const enviarDados = (data: FormData) =>{
        setOutput(JSON.stringify(data, null, 2))
        reset({
            nome: '',
            sobrenome: '',
            email: '',
            senha: ''
        })
    }

  return(
    <main className="h-screen flex flex-col gap-6 items-center justify-center bg-zinc-900">

        <h1 className="font-bold font-serif text-emerald-800 text-2xl">Cadastro inicial</h1>

        <form className="flex flex-col justify-center bg-zinc-300 p-5 rounded" onSubmit={handleSubmit(enviarDados)}>

            <div className="gap-4 flex flex-col">
                <label className="text-sm text-zinc-600 flex items-center justify-between">Nome</label>
                <input 
                className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500" 
                type="text" 
                {...register("nome")}/>
                {errors.nome && <span className="text-red-600 font-light text-sm">{errors.nome.message}</span>}

                <label className="text-sm text-zinc-600 flex items-center justify-between">Sobrenome</label>
                <input type="text" 
                className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
                {...register("sobrenome")}/> 
                {errors.sobrenome && <span className="text-red-600 font-light text-sm">{errors.sobrenome.message}</span>}

                <label className="text-sm text-zinc-600 flex items-center justify-between">Email</label>
                <input type="text" 
                className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500" 
                {...register("email")}/>
                {errors.email && <span className="text-red-600 font-light text-sm">{errors.email.message}</span>}

                <label className="text-sm text-zinc-600 flex items-center justify-between">Senha</label>
                <input type="password" 
                className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500" 
                {...register("senha")}/>
                {errors.senha && <span className="text-red-600 font-light text-sm">{errors.senha.message}</span>}

                <div className="flex justify-center">
                    <input type="submit" className=" bg-emerald-700 hover:bg-emerald-800 rounded p-2" value="Submit"/>
                </div>

                <pre className="text-base text-emerald-700">{output}</pre>

            </div>
        
            
        </form>          
    </main>
  );
}
