import Button from "../../../../components/ui/Button";
import PortraitImpact from "./PortraitImpact";

type PortraitProps = {};

export default function Portrait({}: PortraitProps) {
  return (
    <section className="p-2 flex flex-col justify-center items-center my-5 lg:h-screen">
      <header className="flex flex-col items-center gap-2 text-center">
        <h2 className="font-inter tracking-[2px] uppercase text-lg text-text-secondary lg:text-sm ">
          Colección Primavera 2026
        </h2>
        <h2 className="font-playfair text-title-primary font-semibold text-4xl lg:text-8xl ">
          Elegancia que
        </h2>
        <h2 className="font-playfair text-title-primary font-semibold text-4xl italic lg:text-8xl">
          transforma
        </h2>
      </header>
      <p className="my-5 text-xl text-text-secondary text-center xl:w-[50%]">
        Descubre nuestra exclusiva selección de maquillaje premium, fragancias
        artesanales y muebles de diseño que elevarán tu estilo de vida.
      </p>
      <div className="flex flex-col justify-center items-center gap-5 my-2 lg:flex-row">
        <Button
          text="Explorar Colección"
          className="bg-interactive-background-primary w-full text-white font-semibold lg:w-auto"
          iconName="arrow_forward"
        />
        <Button
          text="Ver Novedades"
          className="border-2 border-interactive-border-primary w-full text-text-primary font-semibold lg:w-auto"
          hoverScale
          classNameHover="after:bg-interactive-hover"
        />
      </div>
      <PortraitImpact />
    </section>
  );
}
