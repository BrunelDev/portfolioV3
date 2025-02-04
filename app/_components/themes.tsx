import { LucideIcon } from "lucide-react";
type ThemesProps = {
  color: string;
  backgroundColor: string;
  icon: LucideIcon;
  title: string;
};
export function Theme({
  color,
  backgroundColor,
  icon: Icon,
  title,
}: ThemesProps) {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={`w-fit h-fit flex justify-center items-center space-x-2 rounded-[7px] px-2`}
    >
      <Icon color={color} size={30} className="sm:w-[55px] sm:h-[55px]"/>
      <h1 className={`text-3xl sm:text-[55px]`} style={{ color: color }}>
        {title}
      </h1>
    </div>
  );
}
