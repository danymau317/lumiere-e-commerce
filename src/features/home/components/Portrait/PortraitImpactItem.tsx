type PortraitImpactItemProps = {
  iconName: string;
  title: string;
  description: string;
};

export default function PortraitImpactItem({
  iconName,
  title,
  description,
}: PortraitImpactItemProps) {
  return (
    <article className="flex flex-col justify-center items-center select-none">
      <span className="material-symbols-outlined bg-[#f1e3dd] text-navbar-hover rounded-full p-4 mb-5">
        {iconName}
      </span>
      <h2 className="font-semibold text-lg text-center">{title}</h2>
      <p className="text-[#72625d] text-center">{description}</p>
    </article>
  );
}
