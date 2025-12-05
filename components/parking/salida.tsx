import { Button } from "../ui/button";
import IconosImg from "../ui/iconosImg";

const Salida = () => {
  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* HEADER NARANJA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white flex items-start gap-4 rounded-t-3xl">
          <div className="bg-white/20 p-4 rounded-2xl flex items-center justify-center">
            <IconosImg ruta="SalidaVehiculo" color="#fff" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Salida de Vehículo</h2>
            <p className="text-white/90 text-sm">Registrar salida del parqueadero</p>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="p-8">
          <h3 className="text-gray-700 mb-2 font-medium">Buscar por Placa</h3>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="ABC123"
              className="w-full border rounded-full px-5 py-3 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400"
            />

            <Button className="rounded-full px-6 bg-orange-500 hover:bg-orange-600">
              Buscar
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Salida;
