import React from "react";

interface ProfileCardProps {
  name: string;
  description: string;
  image: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, image }) => {
  return (
    <div className="bg-[#D9D9D9] rounded-2xl p-8 mt-8 flex items-center gap-6 w-[804px]">
      <img
        src={image}
        alt={`Foto de ${name}`}
        className="w-56 h-56 object-cover rounded-full border-2 border-blue-600 mr-8"
      />
      <div>
        <h2 className="text-xl font-bold line leading-[100%] text-blue-primary">{name}</h2>
        <p className="text-sm font-light text-gray-800 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
