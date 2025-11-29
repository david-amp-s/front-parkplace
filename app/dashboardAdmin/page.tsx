import TarjetasResumen from "@/components/dashboardAdmin/tarjetasResumen";
import SideBar from "@/components/layout/sideBar";
import IconosImg from "@/components/ui/iconosImg";

const DashboardAdmin = () => {
    
    return ( 
        <div className="flex absolute w-full">
            {/* SideBar */}
<SideBar/>

            {/* contenido */}

            <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 w-full h-full ">

                {/* Separador */}
                <div className="relative border-2 w-full h-10 bg-white "/>
                <div className="p-10">
                    <h2 className="text-3xl">Panel Administrador</h2>
                    <p className="text-gray-400" >Vista general del parqueadero</p>
                   {/*Resumen parqueadero */}
                    <div className="mt-10 grid grid-cols-4 gap-7"> 
                    <TarjetasResumen/>
                    <TarjetasResumen/>
                    <TarjetasResumen/>
                    <TarjetasResumen/>
                     <TarjetasResumen/>
                    <TarjetasResumen/>
                    <TarjetasResumen/>
                    <TarjetasResumen/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardAdmin;