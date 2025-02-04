import { LucideIcon } from "lucide-react";
type ExperienceProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};
export function ExperienceComponent({
  title,
  description,
  icon: Icon,
}: ExperienceProps) {
  return (
    <div className="text-white w-full flex flex-row gap-5 mb-10">
      <div className="bg-[#26292B] flex justify-center items-center w-10 h-10 rounded-full overflow-hidden">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex flex-col w-[95%] gap-5">
        <h6>{title}</h6>
        <div className="bg-[#1A1D1E] text-[#999FA4] border border-[#999FA4] hover:scale-[1.02] duration-200 text-md p-4 rounded-[10px] text-lg sm:text-md">
          {description}
        </div>
      </div>
    </div>
  );
}
