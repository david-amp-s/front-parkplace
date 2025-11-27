import Image from "next/image";

interface IconosImgProps {
    ruta: string;
    color : string;
}

const IconosImg = ({ ruta, color }:IconosImgProps) => {
  return (
    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center ${color}`}>
      <Image
        src={`/icons/${ruta}.png`}
        alt="Icono"
        width={30}
        height={30}
        className="p-2"
      />
    </div> 
  );
};

export default IconosImg;
