
import { getQuadro } from "@/actions/quadros";
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";

export default async function FormQuadros({params}) {
    
    const quadro = await getQuadro(params.id)
        
    return (
        <>
            <NavBar active="quadro" />
            <FormEdit quadro={quadro} />
        </>
    )
}
