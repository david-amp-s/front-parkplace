import IconosImg from "../ui/iconosImg";

const TarjetasResumen = () => {
    return (  
                           <div className="bg-white w-50 h-40 rounded-2xl p-4 flex flex-col gap-4 justify-center  ">
                     <IconosImg ruta={"ClientesRegistrados"} color={"bg-gradient-to-br from-green-400"} />
                    {/*Contenido */}
                    <div>
                    <h3 className="text-gray-600">Ingresos del Dia</h3>
                    <h2 className="text-2xl">$450,000</h2>
                    </div>
                   </div>
    );
}
 
export default TarjetasResumen;