import { motion } from "framer-motion";
import { Home, Heart, Calendar, Image, MessageCircle } from "lucide-react";

interface BottomNavProps {
  activeSection: string;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "couple", icon: Heart, label: "Couple" },
  { id: "event", icon: Calendar, label: "Event" },
  { id: "gallery", icon: Image, label: "Gallery" },
  { id: "wish", icon: MessageCircle, label: "Wish" },
];

const BottomNav = ({ activeSection }: BottomNavProps) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-around items-center py-2 px-2 backdrop-blur-md"
      style={{
        backgroundColor: "rgba(61,74,53,0.85)",
        borderTop: "1px solid rgba(180,165,130,0.3)",
      }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="flex flex-col items-center gap-0.5 px-2 py-1 transition-colors"
            style={{ color: isActive ? "#f0ebe0" : "rgba(240,235,224,0.5)" }}
          >
            <Icon size={18} />
            <span className="font-body text-[9px]">{item.label}</span>
          </button>
        );
      })}
    </motion.nav>
  );
};

export default BottomNav;
