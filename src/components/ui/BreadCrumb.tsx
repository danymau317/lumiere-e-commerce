import { Link, useLocation } from "react-router-dom";
import { capitalize } from "@/utils/textUtils";
import { routeNames } from "@/constants/routeNames";

type BreadCrumbProps = {};

export default function BreadCrumb({}: BreadCrumbProps) {
  const { pathname: actualPath } = useLocation();
  const paths = actualPath.split("/").filter(Boolean);

  return (
    <section className="p-5 flex gap-1">
      <Link to="/" className="text-text-secondary">
        Inicio
      </Link>
      {paths.map((segment, index) => {
        const path = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;

        return (
          <span key={segment}>
            &gt;{" "}
            {isLast ? (
              <span>{capitalize(routeNames[segment] ?? segment)}</span>
            ) : (
              <Link to={path} className="text-text-secondary">
                {capitalize(routeNames[segment] ?? segment)}
              </Link>
            )}
          </span>
        );
      })}
    </section>
  );
}
