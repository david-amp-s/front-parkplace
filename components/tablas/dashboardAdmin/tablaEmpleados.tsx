import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { UsuarioDto } from "@/types/usuarios"

interface Props {
  usuarios: UsuarioDto[];
}

const TableUsuarios = ({ usuarios }: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
         Operadores Del sistema
      </h2>
      

      <Table className="rounded-xl overflow-hidden">
        <TableCaption className="text-sm text-gray-500">
          
        </TableCaption>

        <TableHeader>
          <TableRow className="bg-white">
            <TableHead className="w-[80px] text-gray-600">#</TableHead>
            <TableHead className="text-gray-600">Nombre</TableHead>
            <TableHead className="text-gray-600">Correo</TableHead>
            <TableHead className="text-gray-600">Rol</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {usuarios.length > 0 ? (
            usuarios.map((user, index) => (
              <TableRow
                key={user.id}
                className="bg-blue-50 hover:bg-blue-100 transition rounded-xl border border-transparent my-2"
              >
                {/* Número del ranking */}
                <TableCell>
                  <div
                    className={`
                      w-10 h-10 flex items-center justify-center rounded-full text-white font-bold
                      ${index === 0 ? "bg-yellow-400" : ""}
                      ${index === 1 ? "bg-gray-400" : ""}
                      ${index === 2 ? "bg-orange-400" : ""}
                      ${index > 2 ? "bg-blue-300" : ""}
                    `}
                  >
                    {index + 1}
                  </div>
                </TableCell>

                <TableCell className="font-medium">{user.nombre}</TableCell>
                <TableCell>{user.correo}</TableCell>
                <TableCell className="font-semibold">{user.rolNombre}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                No hay usuarios registrados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableUsuarios;
