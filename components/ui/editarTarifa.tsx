"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import TarifasForm from "./tarifasForm";
import { TarifaDto } from "@/types/tarifa";

interface Props {
  open: boolean;
  onClose: () => void;
  tarifa: TarifaDto | null;
}

const ModalEditarTarifa = ({ open, onClose, tarifa }: Props) => {
  if (!tarifa) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Editar tarifa de {tarifa.tipoCliente}</DialogTitle>
        </DialogHeader>

        <TarifasForm tarifa={tarifa} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ModalEditarTarifa;
