import { motion } from "framer-motion";
import { Home, Heart, Calendar, Image, MessageCircle } from "lucide-react";

interface BottomNavProps {
  activeSection: string;
}

const navItems = [
  { id: "home", icon: Home, label: " " },
  { id: "couple", icon: Heart, label: " " },
  { id: "event", icon: Calendar, label: " " },
  { id: "gallery", icon: Image, label: " " },
  { id: "wish", icon: MessageCircle, label: " " },
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
        backgroundColor: "rgba(97, 62, 80, 0.85)",
        borderTop: "1px solid rgb(186, 74, 162)",
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
            style={{ color: isActive ? "#754669" : "rgba(216, 107, 173, 0.5)" }}
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
