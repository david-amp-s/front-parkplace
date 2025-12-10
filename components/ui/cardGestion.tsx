interface CardGestionProps {
  color: string; // mejor nombre que colorNumber
  titulo: string;
  valor: string | number;
}

const CardGestion = ({ color, titulo, valor }: CardGestionProps) => {
  return (
    <div className="w-[180px] bg-white p-3 rounded shadow">
      <h3 className="text-gray-500 text-sm">{titulo}</h3>
      <p className="text-lg font-semibold" style={{ color }}>{valor}</p>
    </div>
  );
}

export default CardGestion;
