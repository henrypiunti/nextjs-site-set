type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl bg-gray-500 p-6 md:p-12">
      <div className="flex flex-col justify-start gap-4">
        <div className="flex w-fit items-center rounded-sm bg-blue-400 px-3 py-1.5">
          <span className="text-body-tag text-blue-200 uppercase">{title}</span>
        </div>
        <p className="md:text-heading-lg text-heading-sm text-gray-100">{description}</p>
      </div>
    </div>
  );
}
