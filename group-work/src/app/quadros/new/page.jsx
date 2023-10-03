"use client";

import { create } from "@/actions/quadros";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { useState } from "react";

import { redirect } from "next/navigation";

export default function FormQuadros() {
  const [error, setError] = useState("");

  async function handleSubmit(formData) {
    const resp = await create(formData);

    if (resp.message) {
      setError(resp.message);
      return;
    }
    redirect("/quadro");
  }

  return (
    <>
      <NavBar active="quadro" />

      <main className="bg-teal-600 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
        <form action={handleSubmit}>
          <h1 className="text-2xl">Criar nota</h1>
          <TextField label="nome" id="nome" name="nome" />

          <TextField label="titulo" id="titulo" name="titulo" />

          <TextField label="nota" id="nota" name="nota" />

          <TextField label="icone" id="icone" name="icone" />

          <div className="flex justify-around mt-4">
            <Button href="/quadro" variant="secondary">
              cancelar
            </Button>
            <Button type="button">
              <CheckCircleIcon className="h-6 w-6" />
              salvar
            </Button>
          </div>

          <span className="text-red-500">{error}</span>
        </form>
      </main>
    </>
  );
}
