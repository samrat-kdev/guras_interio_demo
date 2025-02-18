import { Phone, Mail, MapPin } from "lucide-react";

const Info = () => {
  const contacts = [
    {
      icon: <Phone className="text-[#8e2d75] w-6 h-6 md:w-7 md:h-7" />,
      label: "Phone",
      value: "+977 980-2090755"
    },
    {
      icon: <Mail className="text-[#8e2d75] w-6 h-6 md:w-7 md:h-7" />,
      label: "Email",
      value: "gurasinterio@gmail.com"
    },
    {
      icon: <MapPin className="text-[#8e2d75] w-6 h-6 md:w-7 md:h-7" />,
      label: "Location",
      value: "Sankhamul Awas Chhetra Lalitpur, Nepal"
    },
    {
      icon: <MapPin className="text-[#8e2d75] w-6 h-6 md:w-7 md:h-7" />,
      label: "Service Area",
      value: "Biratnagar · Narayangarh · Birgunj · Bhaktapur · Pokhara · Lalitpur · Kathmandu · Bharatpur · Dharan · Jhapa District, Nepal"
    },
  ];

  return (
    <div className="bg-white p-5 md:p-10 rounded-lg space-y-6 mt-4 shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center">Contact Information</h2>
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center space-x-4 flex-wrap md:flex-nowrap w-full">
          <div className="p-3 bg-[#c9a4c0] rounded-full flex-shrink-0">{contact.icon}</div>
          <div className="flex flex-col w-full break-words">
            <p className="text-sm md:text-base font-medium text-gray-600">{contact.label}</p>
            <p className="text-base md:text-lg font-semibold text-gray-800 break-words overflow-hidden overflow-ellipsis max-w-full">{contact.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
