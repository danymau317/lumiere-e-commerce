import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootStateType } from "../../../store/store";

type NavIconsProps = {
  className?: string;
  classNameIcons?: string;
};

const navIcons = [
  {
    iconName: "search",
    to: "search",
  },
  {
    iconName: "person",
    to: "profile",
  },
  {
    iconName: "favorite",
    to: "favorite",
  },
  {
    iconName: "shopping_cart",
    to: "shopping-cart",
  },
];

export default function NavIcons({ className, classNameIcons }: NavIconsProps) {
  const darkMode = useSelector((state: RootStateType) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <article className={`flex justify-center items-center gap-5 ${className}`}>
      {navIcons.map((icon) => (
        <span
          key={icon.iconName}
          className={`material-symbols-outlined text-2xl! rounded-md! p-2! cursor-pointer select-none transition-colors duration-500 hover:bg-navbar-hover hover:text-white ${classNameIcons}`}
        >
          {icon.iconName}
          <Link to={icon.to}></Link>
        </span>
      ))}
      <span
        className={`material-symbols-outlined text-2xl! rounded-md! p-2! cursor-pointer select-none transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-brand-background text-black"} ${classNameIcons}`}
        onClick={() => dispatch({ type: "theme/toggle" })}
      >
        dark_mode
      </span>
    </article>
  );
}
