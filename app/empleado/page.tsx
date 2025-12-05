import TarjetaLinkeadas from "@/components/ui/tarjetasLinkeadas";
import TarjetasReportes from "@/components/ui/tarjetasReportes";


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
                <TarjetaLinkeadas titulo="Registrar Usuario" descripcion="Nuevo cliente" color="bg-gradient-to-br from-blue-500  to-blue-300"/>

                {/* Registrar vehiculo */ }
                <TarjetaLinkeadas titulo="Registrar Vehiculo" descripcion="Agregar vehículo" color="bg-gradient-to-br from-blue-500  to-green-300"/>

                {/* Ingreso vehiculo */ }
                <TarjetaLinkeadas titulo="Ingreso Vehiculo" descripcion="Registrar entrada" color="bg-gradient-to-br from-green-500  to-green-300"/>

                {/* Salida vehiculo */ }
                <TarjetaLinkeadas titulo="Salida Vehiculo" descripcion="Registrar salida" color="bg-gradient-to-br from-orange-500  to-orange-300"/>

                {/* Vehiculos dentro */ }
                <TarjetaLinkeadas titulo="Vehiculos Dentro" descripcion="ver listado" color="bg-gradient-to-br from-purple-600  to-purple-400"/>
                {/* Facturacion */ }
                <TarjetaLinkeadas titulo="Facturacion" descripcion="Generar facturas" color="bg-gradient-to-br from-fuchsia-600  to-fuchsia-400"/>

                {/* Vehiculos registrados */ }
                <TarjetaLinkeadas titulo="Vehiculos Registrados" descripcion="Base de vehiculos" color="bg-gradient-to-br from-cyan-600  to-cyan-400"/>

                {/* Clientes registrados */ }
                <TarjetaLinkeadas titulo="Clientes Registrados" descripcion="base de clientes" color="bg-gradient-to-br from-teal-600  to-teal-400"/>
            
                </div>

                {/* Reportes */ }
                <div className="flex justify-between">

                    {/* Vehiculos Dentro*/ }
                    <TarjetasReportes titulo="Vehículos Dentro" contenido= "24" color="bg-gradient-to-br from-blue-400  to-blue-200" ruta="RegistrarVehiculo"/>

                    {/*Ingresos hoy*/ }
                     <TarjetasReportes titulo="Ingresos hoy" contenido= "$340" color="bg-gradient-to-br from-green-400  to-green-200" ruta="RegistrarVehiculo"/>
                    
                    {/*Capacidad */}
                      <TarjetasReportes titulo="Capacidad" contenido= "80%" color="bg-gradient-to-br from-orange-400  to-orange-200" ruta="RegistrarVehiculo"/>
                </div>
            </div>
        </div>
     );
}
 
export default CentroControlEmpleado;