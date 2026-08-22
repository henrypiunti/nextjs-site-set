import { LucideIcon } from 'lucide-react';

type SupportCardProps = {
  cardBackgroundColor: string;
  iconBackgroundColor: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

export function SupportCard({ cardBackgroundColor, iconBackgroundColor, Icon, title, description }: SupportCardProps) {
  return (
    <div className={`flex flex-col gap-4 rounded-xl ${cardBackgroundColor} p-6`}>
      <div className={`w-fit rounded-lg ${iconBackgroundColor} p-2`}>
        <Icon className="text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-heading-sm text-gray-100">{title}</h2>
        <p className="text-body-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}
