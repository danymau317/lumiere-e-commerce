import NavIcons from "../NavBar/NavIcons";
import NavLinks from "../NavBar/NavLinks";

type MobileSideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileSideBar({ isOpen, onClose }: MobileSideBarProps) {
  return (
    <aside
      className={`px-2 py-5 flex flex-col w-[50vw] h-screen gap-5 items-center bg-[#f4f2ea] absolute top-0 left-0 transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-[-1000%]"}`}
    >
      <NavLinks className="flex flex-col" />
      <NavIcons
        className="flex flex-col justify-start items-start"
        classNameIcons="rounded-none p-0!"
      />
      <span
        className="material-symbols-outlined cursor-pointer"
        onClick={onClose}
      >
        close
      </span>
    </aside>
  );
}
