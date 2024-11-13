import React, { useEffect } from "react";
import { FaBalanceScale, FaUsers, FaFileInvoiceDollar, FaBuilding, FaCogs, FaChartLine, FaEllipsisH } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Asesoria_Contable from '../../assets/services/Asesoria_Contable.webp';
import Asesoria_Laboral from '../../assets/services/Asesoria_Laboral.webp';
import Asesoria_Tributaria from '../../assets/services/Asesoria_Tributaria.webp';
import Constitucion_Empresas from '../../assets/services/Constitucion_de_Empresas.webp';
import Outsourcing_Administrativo from '../../assets/services/Outsourcing_Administrativo_Empresarial.webp';
import Asesoria_Financiera from '../../assets/services/Asesoria_Financiera.webp';
import Entre_Otros from '../../assets/services/Entre_otros.webp';

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const servicesData = [
    {
      title: "Asesoría Contable",
      icon: <FaBalanceScale />,
      description: "Coordinación, registro y verificación de transacciones contables y tributarias. Elaboración de informes contables y liquidación de impuestos según normativa peruana.",
      points: [
        "Representación en fiscalizaciones de SUNAT y otras entidades.",
        "Cumplimiento de formalidades como libros contables, órdenes de compra y bancarización."
      ],
      img: Asesoria_Contable,
      imgAlt: "Asesoría Contable"
    },
    {
      title: "Asesoría Laboral",
      icon: <FaUsers />,
      description: "Gestión de planillas (outsourcing), contratos y liquidación de beneficios sociales. Declaración de PLAME y AFPnet.",
      points: [
        "Altas y bajas de trabajadores.",
        "Cálculo de CTS, gratificaciones y vacaciones."
      ],
      img: Asesoria_Laboral,
      imgAlt: "Asesoría Laboral"
    },
    {
      title: "Asesoría Tributaria",
      icon: <FaFileInvoiceDollar />,
      description: "Evaluación de obligaciones tributarias y preparación para fiscalizaciones tributarias.",
      img: Asesoria_Tributaria,
      imgAlt: "Asesoría Tributaria"
    },
    {
      title: "Constitución de Empresas",
      icon: <FaBuilding />,
      description: "Asesoramiento en la constitución de empresas, incluyendo la búsqueda de nombre, elaboración de actas y registro en la SUNAT.",
      img: Constitucion_Empresas,
      imgAlt: "Constitución de Empresas"
    },
    {
      title: "Outsourcing Administrativo Empresarial",
      icon: <FaCogs />,
      description: "Outsourcing administrativo y de inventarios. Representación ante fiscalizaciones de SUNAT o SUNAFIL.",
      points: [
        "Planes Sicovid y reactivación empresarial."
      ],
      img: Outsourcing_Administrativo,
      imgAlt: "Outsourcing Administrativo Empresarial"
    },
    {
      title: "Asesoría Financiera",
      icon: <FaChartLine />,
      description: "Análisis y diagnóstico financiero empresarial. Evaluación de ingresos, gastos y control interno.",
      points: [
        "Elaboración y revisión de estados financieros para mejorar la rentabilidad."
      ],
      img: Asesoria_Financiera,
      imgAlt: "Asesoría Financiera"
    },
    {
      title: "Entre otros",
      icon: <FaEllipsisH />,
      description: "Además de los servicios destacados, contamos con un amplio portafolio que cubre más necesidades empresariales, siempre orientado a mejorar la eficiencia y el crecimiento de tu negocio.",
      points: [
        "Asesoría Legal.",
        "Consultoría Estratégica.",
        "Optimización de Procesos Administrativos."
      ],
      img: Entre_Otros,
      imgAlt: "Entre Otros"
    }
  ];

  return (
    <main className="container mx-auto py-20 ">
      <h2 className="text-4xl font-semibold text-center mb-16 text-[#1F2937] p-8" data-aos="fade-up">
        Nuestros Servicios
      </h2>

      <div className="space-y-16">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-lg shadow-lg 
              bg-gradient-to-br from-[#1F2937] via-gray-700 to-gray-100 text-white ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                {service.icon} {service.title}
              </h3>
              <p className="text-lg text-gray-200 mb-4">{service.description}</p>
              {service.points && (
                <ul className="list-disc pl-5 text-lg text-gray-300">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <img
                src={service.img}
                alt={service.imgAlt}
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
        <div className="flex justify-center w-full mt-6 ">
          <a href="/contacto">
            <button className="bg-gradient-to-br from-[#1F2937] to-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-gray-700 hover:to-[#1F2937] transition duration-300 mb-10">
              Contáctanos
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Services;
