import { getContas } from "@/actions/quadros";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { PlusIcon } from '@heroicons/react/24/outline';
import Conta from "./Quadro";

export default async function Quadro() {

  const data = await getQuadro()

  return (
    <>
      <NavBar active={"quadro"} />

      <main className="bg-teal-600 mt-10 m-auto max-w-lg p-8 rounded">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Notas</h1>
          <Button href="/quadro/new" >
            <PlusIcon className="h6 w-6" />
            Criar nota
          </Button>
        </div>

        <div id="data">
          {data.map(quadro => <Conta key={quadro.id} conta={quadro} />)}
        </div>

      </main>
    </>

  )
}
