import SideBar from "@/components/layout/sideBar";

const DashboardAdmin = () => {
    
    return ( 
        <div className="flex">
            {/* SideBar */}
<SideBar/>

            {/* contenido */}

            <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 w-full h-full">
            contenido
            </div>
        </div>
     );
}
 
export default DashboardAdmin;