import { formatText } from "@/types/stringUtils";
import IconosImg from "../ui/iconosImg";
interface TarjetasResumenProps{
 titulo :string,
 color : string,
 valor : number
};
const TarjetasResumen = ({titulo,color,valor}:TarjetasResumenProps) => {
    return (  
                           <div className="bg-white w-50 h-40 rounded-2xl p-4 flex flex-col gap-4 justify-center " >
                     <IconosImg ruta={formatText(titulo)} color={color} />
                    {/*Contenido */}
                    <div>
                    <h3 className="text-gray-600">{titulo}</h3>
                    <h2 className="text-2xl">{valor}</h2>
                    </div>
                   </div>
    );
}
 
export default TarjetasResumen;