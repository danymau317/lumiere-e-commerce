import PortraitImpactItem from "./PortraitImpactItem";

//! Cambiar colores por paleta ya creada

type PortraitImpactProps = {};

const portraitImpactItems = [
  {
    iconName: "delivery_truck_bolt",
    title: "Envio Gratuito",
    description: "En pedidos superiores a $75",
  },
  {
    iconName: "shield",
    title: "Pago Seguro",
    description: "Transacciones 100% protegidas",
  },
  {
    iconName: "autorenew",
    title: "Devoluciones fáciles",
    description: "30 días para cambios o devoluciones",
  },
  {
    iconName: "headphones",
    title: "Soporte 24 / 7",
    description: "Estamos aquí para ayudarte",
  },
];

export default function PortraitImpact({}: PortraitImpactProps) {
  return (
    <section className="border-y-2 border-y-navbar-border w-full my-2 flex flex-col justify-around gap-5 px-5 py-7 lg:flex-row">
      {portraitImpactItems.map((item) => (
        <PortraitImpactItem
          key={item.iconName}
          iconName={item.iconName}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}
