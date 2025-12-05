import TarjetasAccionesRapidas from "@/components/ui/tarjetasAccionesRapidas";
import TarjetasResumen from "@/components/ui/tarjetasResumen";


const AdminDashboard = () => {
    return (  
        <div>
            <div className="p-10">
                    <h2 className="text-3xl">Panel Administrador</h2>
                    <p className="text-gray-400" >Vista general del parqueadero</p>
                   {/*Resumen parqueadero */}
                    <div className="mt-10 grid grid-cols-4 gap-7"> 
                        {/*Ingresos dia */}
                    <TarjetasResumen titulo={"IngresosDía"} color={"bg-gradient-to-br from-green-600 to-green-400"} valor={0}/>

                     {/* Ingresos semana*/}
                     <TarjetasResumen titulo={"Ingresos Semana"} color={"bg-gradient-to-br from-blue-600 to-blue-400"} valor={0}/>
                      {/*Ingresos mes */}
                    <TarjetasResumen titulo={"IngresosMes"} color={"bg-gradient-to-br from-purple-600 to-purple-400"} valor={0}/>

                    {/* Vehiculos Dentro */}
                    <TarjetasResumen titulo={"VehiculosDentro"} color={"bg-gradient-to-br from-orange-600 to-orange-400"} valor={0}/>

                    {/* Taza de ocupacion */}
                    <TarjetasResumen titulo={"Taza De Ocupación"} color={"bg-gradient-to-br from-cyan-600 to-cyan-400"} valor={0}/>

                    {/* Tiempo Promedio */}
                    <TarjetasResumen titulo={"Tiempo Promedio"} color={"bg-gradient-to-br from-indigo-600 to-indigo-400"} valor={0}/>

                    {/* Vehiculos Registrados */}
                    <TarjetasResumen titulo={"Vehiculos Registrados"} color={"bg-gradient-to-br from-fuchsia-600 to-fuchsia-400"} valor={0}/>

                    {/* Clientes */}
                    <TarjetasResumen titulo={"Clientes"} color={"bg-gradient-to-br from-teal-600 to-teal-400"} valor={0}/>
                    
                    </div>
                   
                    {/*Informacion parqueadero */}
                    <div className="flex justify-around mt-8">
                        {/* Listado operadores */}
                        <div className="bg-white">
                            tabla
                        </div>
                        
                        {/*Listado tarifas */}
                        <div className="bg-white">
                            tabla
                        </div>
                    </div>
                    {/*Acciones rapidas */}
                        <div className="bg-white rounded-2xl p-3 w-full mt-8">
                            <h2 className="text-xl">Acciones Rápidas</h2>
                            <div className="flex gap-4 justify-center mt-3">

                                {/*Ingreso Rapido */}
                                <TarjetasAccionesRapidas color={"bg-gradient-to-br from-emerald-700 via-emerald-300 to-emerald-300"} rutaImg={"IngresoVehiculo"} titulo={"ingreso rapido"}/>

                            {/*Salida Rapida */} 
                             <TarjetasAccionesRapidas color={"bg-gradient-to-br from-red-700 via-red-300 to-red-300"} rutaImg={"IngresoVehiculo"} titulo={"Salida Rapida"}/>

                            {/*Nuevo Cliente */}
                             <TarjetasAccionesRapidas color={"bg-gradient-to-br from-emerald-700 via-emerald-300 to-emerald-300"} rutaImg={"IngresoVehiculo"} titulo={"Nuevo Cliente"}/>

                            {/*Ver Reportes */}
                             <TarjetasAccionesRapidas color={"bg-gradient-to-br from-red-700 via-red-300 to-red-300"} rutaImg={"IngresoVehiculo"} titulo={"Ver Reportes "}/>

                         
                            </div>
                        </div>
                </div>
        </div>
    );
}
 
export default AdminDashboard;