import { capitalize } from "@/utils/textUtils";
import { routeNames } from "@/constants/routeNames";

type BreadCrumbProps = {
  actualPath: string;
};

export default function BreadCrumb({ actualPath }: BreadCrumbProps) {
  const paths = actualPath.split("/").filter(Boolean);
  const lastPath = paths.length;

  return (
    <section className="p-5">
      <h2>
        Inicio
        {paths.map((segment, index) => (
          <span
            className="text-text-secondary"
            style={{ fontWeight: `${index === lastPath ? "500" : "600"}` }}
            key={segment}
          >
            &gt; {capitalize(routeNames[segment]) ?? segment}
          </span>
        ))}
      </h2>
    </section>
  );
}
