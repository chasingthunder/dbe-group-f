import DropMenu from "@/components/DropMenu";
import { FaRegStickyNote } from "react-icons/fa";

const colors = ['red', 'orange', 'purple', 'blue', 'indigo'];

export default function Quadros({quadro}){
    const date = new Date();
    const currentDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return(
        <div
        id="data-row"
        className="flex justify-between items-center p-1 my-3 rounded cursor-pointer"
      >
        <div className="flex gap-2">
          <FaRegStickyNote />
          <span style={{ padding: '5px', borderRadius: '10px'}}>{quadro.usuario.nome}</span>
         
          <div className="nota">{/* nota vindo da api */}</div>
        </div>
        
        <div className="flex items-center">
          <span style={{fontWeight: 'bold', color: randomColor}}> {quadro.titulo} </span>   - {currentDate}
          
          <DropMenu />
        </div>
      </div>
    
    )
}
