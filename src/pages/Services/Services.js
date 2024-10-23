import React from "react";
import "./Services.css";

function Services() {
  return (
    <>
      <main className="container mx-auto py-20">
        <h2 className="text-3xl font-semibold text-center mb-12 mt-10">
          Servicios Disponibles
        </h2>

        {/* Servicio 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Asesoría Contable</h3>
            <p className="text-lg mb-6">
              Coordinación, registro y verificación de transacciones contables y
              tributarias. Elaboración de informes contables y liquidación de
              impuestos según normativa peruana.
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>
                Representación en fiscalizaciones de SUNAT y otras entidades.
              </li>
              <li>
                Cumplimiento de formalidades como libros contables, órdenes de
                compra y bancarización.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://www.elg-asesores.com/images/joomlart/categories/asesoria-cont-financ_001.jpg"
              alt="Asesoría Contable"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Servicio 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <img
              src="https://www.elg-asesores.com/images/joomlart/categories/asesoria-cont-financ_001.jpg"
              alt="Asesoría Laboral"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Asesoría Laboral</h3>
            <p className="text-lg mb-6">
              Gestión de planillas (outsourcing), contratos y liquidación de
              beneficios sociales. Declaración de PLAME y AFPnet.
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Altas y bajas de trabajadores.</li>
              <li>Cálculo de CTS, gratificaciones y vacaciones.</li>
            </ul>
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Asesoría Tributaria</h3>
            <p className="text-lg mb-6">
              Evaluación de obligaciones tributarias y preparación para
              fiscalizaciones tributarias.
            </p>
          </div>
          <div>
            <img
              src="https://www.elg-asesores.com/images/joomlart/categories/asesoria-cont-financ_001.jpg"
              alt="Asesoría Tributaria"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Servicio 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <img
              src="https://www.elg-asesores.com/images/joomlart/categories/asesoria-cont-financ_001.jpg"
              alt="Constitución de Empresas"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Constitución de Empresas
            </h3>
            <p className="text-lg mb-6">
              Asesoramiento en la constitución de empresas, incluyendo la
              búsqueda de nombre, elaboración de actas y registro en la SUNAT.
            </p>
          </div>
        </div>

        {/* Servicio 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Outsourcing Administrativo Empresarial
            </h3>
            <p className="text-lg mb-6">
              Outsourcing administrativo y de inventarios. Representación ante
              fiscalizaciones de SUNAT o SUNAFIL.
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Planes Sicovid y reactivación empresarial.</li>
            </ul>
          </div>
          <div>
            <img
              src="https://www.elg-asesores.com/images/joomlart/categories/asesoria-cont-financ_001.jpg"
              alt="Outsourcing Administrativo Empresarial"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Servicio 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <img
              src="https://www.elg-asesores.com/images/joomlart/categories/asesoria-cont-financ_001.jpg"
              alt="Asesoría Financiera"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Asesoría Financiera</h3>
            <p className="text-lg mb-6">
              Análisis y diagnóstico financiero empresarial. Evaluación de
              ingresos, gastos y control interno.
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>
                Elaboración y revisión de estados financieros para mejorar la
                rentabilidad.
              </li>
            </ul>
          </div>
        </div>

        {/* Servicio 7: Entre otros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Entre otros</h3>
            <p className="text-lg mb-6">
              Además de los servicios destacados, contamos con un amplio
              portafolio que cubre más necesidades empresariales, siempre
              orientado a mejorar la eficiencia y el crecimiento de tu negocio.
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Asesoría Legal.</li>
              <li>Consultoría Estratégica.</li>
              <li>Optimización de Procesos Administrativos.</li>
            </ul>
            {/* Botón de Contacto */}
            <div className="flex justify-center w-full mt-6">
              <a href="/contact">
                <button className="bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700">
                  Contáctanos
                </button>
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://www.elg-asesores.com/images/joomlart/categories/asesoria-cont-financ_001.jpg"
              alt="Entre Otros"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Services;
