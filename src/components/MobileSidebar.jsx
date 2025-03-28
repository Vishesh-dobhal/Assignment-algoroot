// "use client";

// import { useState } from "react";
// import { Menu, X, LayoutDashboard } from "lucide-react";

// const MobileSidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <button
//         className="md:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-800 text-white"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {isOpen && (
//         <div
//           className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
//           onClick={() => setIsOpen(false)}
//         >
//           <div
//             className="h-screen bg-gray-800 text-white w-64 py-4 px-2 fixed left-0 top-0 bottom-0"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="mb-8 px-4 pt-8">
//               <h2 className="text-2xl font-bold">Dashboard</h2>
//             </div>
//             <nav>
//               <ul>
//                 <li className="mb-2">
//                   <a
//                     href="#"
//                     className="flex items-center px-4 py-3 bg-indigo-600 rounded-md"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <LayoutDashboard className="mr-3 h-5 w-5" />
//                     <span>Details</span>
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MobileSidebar;


"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, LayoutDashboard } from "lucide-react";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle sidebar"]')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          ref={sidebarRef}
          className={`h-screen bg-gray-800 text-white w-64 py-4 px-2 fixed left-0 top-0 bottom-0 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-8 px-4 pt-8">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>
          <nav>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-4 py-3 bg-indigo-600 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <LayoutDashboard className="mr-3 h-5 w-5" />
                  <span>Details</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;

