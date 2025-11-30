"use client";
import { useRouter } from "next/navigation";

import { formatText, lowerFirst } from "@/types/stringUtils";
import IconosImg from "../ui/iconosImg";
interface TarjetaLinksProps {
 titulo: string;
descripcion: string;   
color : string;
}

const TarjetaLinkeadas = ({titulo,descripcion, color}
:TarjetaLinksProps) => {
    

    const router = useRouter();
    const handleClick = () => {
        router.push(lowerFirst(formatText(titulo)));
        };
    return ( 
          
           <div onClick={handleClick} className=" w-65 h-35 bg-gradient-to-br from-white to-gray-50 shadow-md rounded-2xl  flex flex-col gap-4 justify-center p-4">
                        <IconosImg ruta={formatText(titulo)} color={color}/>
                       <div>
                         <h2>{titulo}</h2>
                        <h3 className="text-gray-400">{descripcion}</h3>
                       </div>
                    </div>
          
     );
}
 
export default TarjetaLinkeadas;