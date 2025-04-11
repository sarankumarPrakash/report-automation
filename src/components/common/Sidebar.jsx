import { FileText, Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

const SIDEBAR_ITEMS = [
  { name: "Overview", icon:ViewInArIcon , color: "#6366f1", href: "/" },
  { name: "Equipment Status", icon: DisplaySettingsIcon, color: "#8B5CF6", href: "/EquipmentStatus" },
  { name: "Reports", icon: FileText, color: "#F59E0B", href: "/Reports" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
        {/* Toggle Sidebar Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
          aria-label="Toggle Sidebar"
        >
          <Menu size={24} className="text-white"/>
        </motion.button>

        {/* Navigation Links */}
        <nav className='mt-8 flex-grow'>
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 text-white'>
                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className='ml-4 whitespace-nowrap'
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;