"use client";
import { Button } from "@/components/ui/button";
import IconosImg from "@/components/ui/iconosImg";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const EmpleadoLayout = ({children}:{children : React.ReactNode}) => {
      const router = useRouter();
     
       /**useEffect(() => {
         const rol = localStorage.getItem("rol");
     
         if (rol !== "EMPLEADO") {
           router.push("/");
         }
       }, [router]);*/
       
    return ( 
          <>            
            {/* header */}

            <div className="w-full h-20 flex items-center justify-between shadow-md px-10 fixed top-0 left-0 bg-white z-50">


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

                <div className="flex items-center gap-4  ">
                    <div>
                    <h2>NOMBRE USUARIO</h2>
                <h3 className="text-gray-400">operador</h3>
                </div>
                <Button>Cerrar sesión</Button>
                </div>
            </div>

        {/* body contenido centro de control */}

        <section className=" p-8 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 w-full h-full mt-15">
       {children}
        </section>
        </>
     );
}
 
export default EmpleadoLayout;