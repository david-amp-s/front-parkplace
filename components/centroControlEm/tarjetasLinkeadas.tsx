"use client";
import { useRouter } from "next/navigation";
import IconosImg from "../ui/iconosImg";
interface TarjetaLinksProps {
 titulo: string;
descripcion: string;   
color : string;
}

const TarjetaLinkeadas = ({titulo,descripcion, color}
:TarjetaLinksProps) => {
    const lowerFirst = (texto: string) =>
  texto.charAt(0).toLowerCase() + texto.slice(1);
    const format = (texto: string) => {
  return texto.replace(/\s+/g, '');
}
    const router = useRouter();
    const handleClick = () => {
        router.push(lowerFirst(format(titulo)));
        };
    return ( 
          
           <div onClick={handleClick} className=" w-65 h-35 bg-gradient-to-br from-white to-gray-50 shadow-md rounded-2xl  flex flex-col gap-4 justify-center p-4">
                        <IconosImg ruta={format(titulo)} color={color}/>
                       <div>
                         <h2>{titulo}</h2>
                        <h3 className="text-gray-400">{descripcion}</h3>
                       </div>
                    </div>
          
     );
}
 
export default TarjetaLinkeadas;