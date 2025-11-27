"use client";
import { usePathname, useRouter } from "next/navigation";
import IconosImg from "../ui/iconosImg"
import path from "path";

const SideBar = () => {
    const router = useRouter();
    const pathname = usePathname();


    return (  
                <div className="w-86 h-full">

                {/* Header del sidebar*/}
               <div className="flex items-center gap-4 border-1">
                    <IconosImg ruta="ParkPlace" color="bg-blue-600"/>
                <div>
                     <h1
             className="text-xl font-bold">
                Parkplace</h1>
               <h3 className="text-gray-400">Administrador</h3></div> 
              </div>
              
              {/* Links */} 
              <div>
                <nav>

                </nav>
              </div>
            </div>
    );
}
 
export default SideBar;