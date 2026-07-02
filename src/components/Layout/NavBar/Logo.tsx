import { Link } from "react-router-dom";

type LogoProps = {
  to: string;
};

export default function Logo({ to }: LogoProps) {
  return (
    <article>
      <Link to={to} className="font-playfair text-2xl font-bold">
        LUMIÉRE
      </Link>
    </article>
  );
}
