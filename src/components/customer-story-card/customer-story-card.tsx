import Image from 'next/image';

type CustomerStoryCardProps = {
  description: string;
  profilePictureSrc: string;
  name: string;
  position: string;
};

export function CustomerStoryCard({ description, profilePictureSrc, name, position }: CustomerStoryCardProps) {
  return (
    <div className="flex flex-col gap-8 rounded-xl border border-gray-400 bg-gray-600 p-6 lg:gap-10 lg:p-10">
      <p className="text-body-md text-gray-200">{description}</p>
      <div className="mt-auto flex items-center gap-3">
        <Image src={profilePictureSrc} alt="Foto de perfil do cliente" width={36} height={36} />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-200">{name}</span>
          <span className="text-xs font-normal text-gray-300">{position}</span>
        </div>
      </div>
    </div>
  );
}
