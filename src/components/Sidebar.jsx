import { LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 py-4 px-2 fixed left-0 top-0 bottom-0 hidden md:block">
      <div className="mb-8 px-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-3 bg-indigo-600 rounded-md"
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              <span>Details</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
