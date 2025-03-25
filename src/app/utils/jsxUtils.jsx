import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const iconMap = {
  Facebook: <FaFacebook />,
  Twitter: <FaTwitter />,
  YouTube: <FaYoutube />,
  Instagram: <FaInstagram />,
};

export const getSocialIcon = (name, socialLinks) => {
  const social = socialLinks.find((item) => item.name === name);
  return social ? iconMap[name] || "🔗" : null;
};
