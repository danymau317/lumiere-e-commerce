type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  iconName?: string;
  hoverScale?: boolean;
  classNameHover?: string;
};

export default function Button({
  text,
  type = "button",
  className,
  iconName,
  hoverScale,
  classNameHover,
}: ButtonProps) {
  return (
    <button
      className={`py-3 px-5 rounded-lg cursor-pointer overflow-hidden transition-all duration-500 ${iconName ? "flex justify-center items-center gap-2" : ""} ${hoverScale ? "relative hover:text-white after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-62.5 after:h-62.5 after:rounded-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:transition-transform after:duration-500 after:z-[-1] hover:after:scale-75" : ""} ${className} ${classNameHover}`}
      type={type}
    >
      {text}
      {iconName && (
        <span className="material-symbols-outlined">{iconName}</span>
      )}
    </button>
  );
}
