import { Button } from "../ui/button";
import IconosImg from "../ui/iconosImg";

const RegistrarUsuario = () => {
  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* HEADER AZUL */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white flex items-start gap-4 rounded-t-3xl">
          <div className="bg-white/20 p-4 rounded-2xl flex items-center justify-center">
            <IconosImg ruta="Usuario" color="#fff" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Registrar Usuario</h2>
            <p className="text-white/90 text-sm">Agregar nuevo cliente al sistema</p>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Nombre */}
            <div>
              <label className="text-gray-700 text-sm font-medium">Nombre Completo</label>
              <div className="relative mt-2">
                <span className="absolute left-4 top-3 text-gray-400">
                  <IconosImg ruta="UserIcon" color="#9ca3af" />
                </span>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Identificación */}
            <div>
              <label className="text-gray-700 text-sm font-medium">Número de Identificación</label>
              <input
                type="text"
                placeholder="1234567890"
                className="w-full mt-2 px-4 py-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 text-sm font-medium">Correo Electrónico</label>
              <div className="relative mt-2">
                <span className="absolute left-4 top-3 text-gray-400">
                  <IconosImg ruta="Correo" color="#9ca3af" />
                </span>
                <input
                  type="email"
                  placeholder="juan@ejemplo.com"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label className="text-gray-700 text-sm font-medium">Teléfono</label>
              <div className="relative mt-2">
                <span className="absolute left-4 top-3 text-gray-400">
                  <IconosImg ruta="Telefono" color="#9ca3af" />
                </span>
                <input
                  type="text"
                  placeholder="+57 300 123 4567"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

          </div>

          {/* BOTONES */}
          <div className="flex justify-end gap-4 mt-10">
            <Button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-200">
              Cancelar
            </Button>

            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white">
              <IconosImg ruta="Guardar" color="#fff" />
              Guardar Usuario
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RegistrarUsuario;
