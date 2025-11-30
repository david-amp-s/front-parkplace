import Image from "next/image";
interface TarjetasAccionesRapidasProps{
color : string,
rutaImg : string,
titulo : string 
}
const TarjetasAccionesRapidas = ({color,rutaImg,titulo}:TarjetasAccionesRapidasProps) => {
    return (  
        <div className={` ${color} h-2z w-50 rounded-2xl p-2 flex flex-col`}>
                                      <Image
                                        src={`/icons/${rutaImg}.png`}
                                        alt="Icono"
                                        width={55}
                                        height={55}
                                        className="p-1"
                                      />
                                      <p className="text-xl text-white font-medium">{titulo}</p>

                            </div>
    );
}
 
export default TarjetasAccionesRapidas;