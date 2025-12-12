import TarjetaLinkeadas from "@/components/ui/tarjetasLinkeadas";


const CentroControlEmpleado = () => {
    return ( 
        <div>
             <h1 className="text-xl">Panel de control empleado</h1>
            <h3 className="text-gray-400">Acciones rapidas para la gestión del parqueadero</h3>

            {/* contenedor acciones */}

            <div className="mt-4">
                {/* listado acciones rapidas */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center gap-y-16 ">

                {/* Registrar usuario */ }
                <TarjetaLinkeadas titulo="Registrar Usuario" descripcion="Nuevo cliente" color="bg-gradient-to-br from-blue-500  to-blue-300" link={"usuarios"}/>

                {/* Registrar vehiculo */ }
                <TarjetaLinkeadas titulo="Registrar Vehiculo" descripcion="Agregar vehículo" color="bg-gradient-to-br from-blue-500  to-green-300" link={"vehiculos"}/>

                {/* Ingreso vehiculo */ }
                <TarjetaLinkeadas titulo="Ingreso Vehiculo" descripcion="Registrar entrada" color="bg-gradient-to-br from-green-500  to-green-300" link={"ingreso"}/>

                {/* Salida vehiculo */ }
                <TarjetaLinkeadas titulo="Salida Vehiculo" descripcion="Registrar salida" color="bg-gradient-to-br from-orange-500  to-orange-300" link={"salida"}/>

                {/* Vehiculos dentro */ }
                <TarjetaLinkeadas titulo="Vehiculos Dentro" descripcion="ver listado" color="bg-gradient-to-br from-purple-600  to-purple-400" link={"listadoVehiculos"}/>
                {/* Facturacion */ }
          
            
                </div>

                {/* Reportes */ }
                
            </div>
        </div>
     );
}
 
export default CentroControlEmpleado;