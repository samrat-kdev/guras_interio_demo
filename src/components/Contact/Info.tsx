import { Phone, Mail, MapPin } from "lucide-react";

const Info = () => {
  const contacts = [
    {
      icon: <Phone className="text-[#8e2d75]" />,
      label: "Phone",
      value: "+977 980-2090755"
    },
    {
      icon: <Mail className="text-[#8e2d75]" />
      , label: "Email",
      value: "gurasinterio@gmail.com"
    },
    {
      icon: <MapPin className="text-[#8e2d75]" />,
      label: "Location", value: "Sankhamul Awas Chhetra Lalitpur , Lalitpur, Nepal"
    },
    {
      icon: <MapPin className="text-[#8e2d75]" />,
      label: "Service Area", value: "Biratnagar · Narayangarh· Birgunj· Bhaktapur· Pokhara· Lalitpur · Kathmandu · Bharatpur· Dharan · Jhapa District, Nepal"
    },
  ];

  return (
    <div className="bg-white p-10 rounded-lg space-y-6 mt-4">
      <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="p-3 bg-[#c9a4c0] rounded-full">{contact.icon}</div>
          <div>
            <p className="text-sm font-medium text-gray-600">{contact.label}</p>
            <p className="text-lg font-semibold text-gray-800">{contact.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
