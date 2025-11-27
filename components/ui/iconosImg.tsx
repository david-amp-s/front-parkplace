import Image from "next/image";

interface IconosImgProps {
    ruta: string;
    color : string;
}

const IconosImg = ({ ruta, color }:IconosImgProps) => {
  return (
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}>
      <Image
        src={`/icons/${ruta}.png`}
        alt="Icono"
        width={40}
        height={40}
        className="p-1"
      />
    </div> 
  );
};

export default IconosImg;
