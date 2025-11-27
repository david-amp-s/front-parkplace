import IconosImg from "../ui/iconosImg";
interface TarjetasReportesProps{
    titulo : string,
    contenido: string|number,
    ruta : string
    color : string
}
const TarjetasReportes = ({titulo,contenido,ruta,color}:TarjetasReportesProps) => {
    return (  
    <div className="bg-white flex  w-90 h-26 rounded-2xl mt-16 p-4 shadow-md justify-between items-center">
        <div className="flex flex-col ">
            <h2 >{titulo}</h2>
            <p className="text-3xl">{contenido}</p>
        </div>
            <IconosImg ruta={ruta} color={color}/>
    </div>
    );
}
 
export default TarjetasReportes;