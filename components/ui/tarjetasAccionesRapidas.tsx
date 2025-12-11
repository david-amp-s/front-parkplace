import Image from "next/image";

interface TarjetasAccionesRapidasProps {
  color: string;
  rutaImg: string;
  titulo: string;
  rutaLink: string;
}

const TarjetasAccionesRapidas = ({ color, rutaImg, titulo, rutaLink }: TarjetasAccionesRapidasProps) => {
  return (
    <a href={rutaLink}>
      <div className={` ${color} h-25 w-85 rounded-2xl p-2 flex flex-col justify-center `}>
        <Image
          src={`/icons/${rutaImg}.png`}
          alt="Icono"
          width={45}
          height={45}
          className="p-1"
        />
        <p className="font-sans">{titulo}</p>
      </div>
    </a>
  );
};

export default TarjetasAccionesRapidas;
