import { Link } from "react-router-dom";
type NavLinksProps = {
  className?: string;
};

const navSections = [
  {
    description: "Inicio",
    to: "/",
  },
  {
    description: "Maquillaje",
    to: "make-up",
  },
  {
    description: "Fragancias",
    to: "fragancy",
  },
  {
    description: "Muebles",
    to: "furniture",
  },
  {
    description: "Novedades",
    to: "news",
  },
];

export default function NavLinks({ className }: NavLinksProps) {
  return (
    <article>
      <ul
        className={`flex gap-5 text-navbar-text-primary font-semibold ${className}`}
      >
        {navSections.map((item) => (
          <li key={item.description} className="cursor-pointer">
            <Link to={item.to}>{item.description}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
