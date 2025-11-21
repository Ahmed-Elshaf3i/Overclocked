import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const TeamMemberCard = ({ name, role, image }) => {
  return (
    <div className="w-[300px] bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">
      
      <img 
        src={image} 
        alt={name} 
        className="w-full h-[350px] object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm mb-3">{role}</p>

        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FaTwitter className="cursor-pointer hover:scale-110 transition" />
          <FaInstagram className="cursor-pointer hover:scale-110 transition" />
          <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
