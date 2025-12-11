import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { IngresoDto } from "@/types/ingresoVehiculo" 

interface Props {
  vehiculos: IngresoDto[];
}

const TableVehiculosRecientes = ({ vehiculos }: Props) => {

  const formatFecha = (fecha: string) => {
    const f = new Date(fecha);
    return f.toLocaleDateString("es-CO", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Table className="bg-white rounded-xl shadow">
      <TableCaption>Vehículos ingresados recientemente.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">ID</TableHead>
          <TableHead>Placa</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Espacio</TableHead>
          <TableHead>Ingreso</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {vehiculos.length > 0 ? (
          vehiculos.map((v) => (
            <TableRow key={v.id}>
              <TableCell className="font-medium">{v.id}</TableCell>
              <TableCell className="font-semibold">{v.placa}</TableCell>
              <TableCell>{v.tipoVehiculo}</TableCell>
              <TableCell>{v.espacio}</TableCell>
              <TableCell>{formatFecha(v.fecha_ingreso)}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-6 text-gray-500">
              No hay vehículos recientes registrados.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableVehiculosRecientes;
