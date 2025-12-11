import FishModel from "@/components/login/fishModel";
import Login from "@/components/login/login";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      <div className="w-full h-full bg-custom-radial flex flex-col items-center absolute p-10 ">
        
    <div className="relative top-0 left-0 w-full flex justify-center h-40 items-center ">
          <h1 className="text-6xl font-vantage text-white drop-shadow-xl mb-10  ">
          PARK PLACE
        </h1>
    </div>

      <div className="relative top-0 left-0 w-full h-full flex justify-center items-center">
        <Login/>
      </div>

      <div className="absolute top-0 left-0  flex  w-full h-full items-end justify-end pointer-events-none"> 
      <FishModel/>
      </div>
    
      </div>
    </div>
  );
}
