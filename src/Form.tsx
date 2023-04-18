import { useState } from "react";
import {useForm} from "react-hook-form";
import './styles/global.css'

type FormData = {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
}



export default function Form(){
    const [output, setOutput] = useState('');
    const {reset, handleSubmit, register} = useForm<FormData>();

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

                <label className="text-sm text-zinc-600 flex items-center justify-between">Sobrenome</label>
                <input type="text" 
                className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
                {...register("sobrenome")}/> 

                <label className="text-sm text-zinc-600 flex items-center justify-between">Email</label>
                <input type="text" 
                className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500" 
                {...register("email")}/>

                <label className="text-sm text-zinc-600 flex items-center justify-between">Senha</label>
                <input type="password" 
                className="flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500" 
                {...register("senha")}/>

                <div className="flex justify-center">
                    <input type="submit" className=" bg-emerald-700 hover:bg-emerald-800 rounded p-2" value="Submit"/>
                </div>

                <pre className="text-base text-emerald-700">{output}</pre>

            </div>
        
            
        </form>          
    </main>
  );
}
