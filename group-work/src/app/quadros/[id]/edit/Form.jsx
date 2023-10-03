"use client"

import { update } from "@/actions/quadros";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from 'next/navigation';
export default function FormEdit({quadro}){
    const [ error, setError ] = useState("")
    const [quadroEdit, setContaEdit] = useState(quadro)
    
    async function handleSubmit(){
        const resp =  await update(quadroEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }
        
       redirect("/quadro")
    }

    function handleFieldChange(field, value){
        setQuadroEdit({
            ...quadroEdit,
            [field]: value
        })
    }

    return (
        <main className="bg-teal-600 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                    <h1 className="text-2xl">Editar Quadro</h1>
                    <TextField
                        label="nome"
                        id="nome"
                        name="nome"
                        value={quadroEdit.nome}
                        onChange={(e) => handleFieldChange("nome", e.target.value )}
                    />

                    <TextField
                        label="titulo"
                        id="titulo"
                        name="titulo"
                        value={quadroEdit.titulo}
                        onChange={(e) => handleFieldChange("titulo", e.target.value )}
                    />

                    <TextField
                        label="nota"
                        id="nota"
                        name="nota"
                        value={quadroEdit.nota}
                        onChange={(e) => handleFieldChange("nota", e.target.value )}
                    />

                    <TextField
                        label="ícone"
                        id="icone"
                        name="icone"
                        value={quadroEdit.icone}
                        onChange={(e) => handleFieldChange("icone", e.target.value )}
                    />

                    <div className="flex justify-around mt-4">
                        <Button href="/quadro" variant="secondary">cancelar</Button>
                        <Button type="button">
                            <CheckCircleIcon className="h-6 w-6" />
                            salvar
                        </Button>

                    </div>

                    <span className="text-red-500">{error}</span>

                </form>
            </main>

    )
}