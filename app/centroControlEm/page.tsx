import TarjetaLinkeadas from "@/components/centroControlEm/tarjetasLinkeadas";
import { Button } from "@/components/ui/button";
import IconosImg from "@/components/ui/iconosImg";


const CentroControlEmpleado = () => {
    return ( 
        <>            
            {/* header */}

            <div className="w-full h-20 flex items-center justify-between shadow-md px-10  ">

                {/* logo y titulo */}

               <div className="flex items-center gap-4 ">
               
                    <IconosImg ruta="ParkPlace" color="bg-blue-600"/>
           
                <div>
                     <h1
             className="text-3xl font-bold">
                Parkplace</h1>
               <h3 className="text-gray-400">Panel operador</h3></div> 
              </div> 

                {/* usuario cerrar sesion*/}

                <div className="flex items-center gap-4 ">
                    <div>
                    <h2>NOMBRE USUARIO</h2>
                <h3 className="text-gray-400">operador</h3>
                </div>
                <Button>Cerrar sesión</Button>
                </div>
            </div>

        {/* body contenido centro de control */}

        <section className=" p-8 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 w-full h-screen ">
            <h1 className="text-xl">Panel de control empleado</h1>
            <h3 className="text-gray-400">Acciones rapidas para la gestión del parqueadero</h3>

            {/* contenedor acciones */}

            <div>
                {/* listado acciones rapidas */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center gap-y-16 ">


                <TarjetaLinkeadas titulo="Registrar Usuario" descripcion="Nuevo cliente" color="bg-green-500"/>

                <TarjetaLinkeadas titulo="Registrar Vehiculo" descripcion="Agregar vehículo" color="bg-green-500"/>

                <TarjetaLinkeadas titulo="Ingreso Vehiculo" descripcion="Registrar entrada" color="bg-green-500"/>

                <TarjetaLinkeadas titulo="Salida Vehiculo" descripcion="Registrar salida" color="bg-green-500"/>

                <TarjetaLinkeadas titulo="Vehiculos Dentro" descripcion="ver listado" color="bg-green-500"/>

                <TarjetaLinkeadas titulo="Facturacion" descripcion="Generar facturas" color="bg-green-500"/>

                <TarjetaLinkeadas titulo="Vehiculos Registrados" descripcion="Base de vehiculos" color="bg-green-500"/>

                <TarjetaLinkeadas titulo="Clientes Registrados" descripcion="base de clientes" color="bg-green-500"/>
                </div>

            </div>
        </section>
        </>
     );
}
 
export default CentroControlEmpleado;