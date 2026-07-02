type OverlayProps = {
  isOpen: boolean;
};

export default function Overlay({ isOpen }: OverlayProps) {
  return (
    <div
      className={`absolute z-[-1] transition-colors duration-500 ${isOpen ? "inset-0 w-screen h-[200vh] bg-black/25" : "w-0 h-0"}`}
    ></div>
  );
}
