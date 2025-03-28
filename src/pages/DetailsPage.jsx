// "use client";

// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import MobileSidebar from "../components/MobileSidebar";
// import DataTable from "../components/DataTable";

// const DetailsPage = () => {
//   const [mockData, setMockData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch mock data
//     const fetchData = async () => {
//       try {
//         // You can replace this with an actual API call
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         const users = await response.json();

//         // Transform data to include only needed fields
//         const transformedData = users.map((user) => ({
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           company: user.company.name,
//           city: user.address.city,
//           phone: user.phone,
//         }));

//         setMockData(transformedData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Fallback to static mock data if API fails
//         const fallbackData = [
//           {
//             id: 1,
//             name: "John Doe",
//             email: "john@example.com",
//             company: "ABC Corp",
//             city: "New York",
//             phone: "123-456-7890",
//           },
//           {
//             id: 2,
//             name: "Jane Smith",
//             email: "jane@example.com",
//             company: "XYZ Inc",
//             city: "Los Angeles",
//             phone: "987-654-3210",
//           },
//           {
//             id: 3,
//             name: "Bob Johnson",
//             email: "bob@example.com",
//             company: "Tech Co",
//             city: "Chicago",
//             phone: "555-123-4567",
//           },
//           {
//             id: 4,
//             name: "Alice Brown",
//             email: "alice@example.com",
//             company: "Data Systems",
//             city: "Houston",
//             phone: "333-222-1111",
//           },
//           {
//             id: 5,
//             name: "Charlie Wilson",
//             email: "charlie@example.com",
//             company: "Global Ltd",
//             city: "Phoenix",
//             phone: "444-555-6666",
//           },
//           {
//             id: 6,
//             name: "Eva Davis",
//             email: "eva@example.com",
//             company: "Innovate Inc",
//             city: "Philadelphia",
//             phone: "777-888-9999",
//           },
//           {
//             id: 7,
//             name: "Frank Miller",
//             email: "frank@example.com",
//             company: "Future Tech",
//             city: "San Antonio",
//             phone: "111-222-3333",
//           },
//           {
//             id: 8,
//             name: "Grace Lee",
//             email: "grace@example.com",
//             company: "Smart Solutions",
//             city: "San Diego",
//             phone: "666-777-8888",
//           },
//         ];
//         setMockData(fallbackData);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       <Navbar />
//       <div className="flex flex-1">
//         <Sidebar />
//         <MobileSidebar />
//         <main className="flex-1 p-4 md:ml-64">
//           <div className="max-w-7xl mx-auto">
//             <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
//               {loading ? (
//                 <div className="flex justify-center items-center h-64">
//                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//                 </div>
//               ) : (
//                 <DataTable data={mockData} />
//               )}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DetailsPage;


"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import DataTable from "../components/DataTable";

const DetailsPage = () => {
  const [mockData, setMockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch mock data
    const fetchData = async () => {
      try {
        // You can replace this with an actual API call
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        // Transform data to include only needed fields
        const transformedData = users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          company: user.company.name,
          city: user.address.city,
          phone: user.phone,
        }));

        setMockData(transformedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback to static mock data if API fails
        const fallbackData = [
          {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            company: "ABC Corp",
            city: "New York",
            phone: "123-456-7890",
          },
          {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            company: "XYZ Inc",
            city: "Los Angeles",
            phone: "987-654-3210",
          },
          {
            id: 3,
            name: "Bob Johnson",
            email: "bob@example.com",
            company: "Tech Co",
            city: "Chicago",
            phone: "555-123-4567",
          },
          {
            id: 4,
            name: "Alice Brown",
            email: "alice@example.com",
            company: "Data Systems",
            city: "Houston",
            phone: "333-222-1111",
          },
          {
            id: 5,
            name: "Charlie Wilson",
            email: "charlie@example.com",
            company: "Global Ltd",
            city: "Phoenix",
            phone: "444-555-6666",
          },
          {
            id: 6,
            name: "Eva Davis",
            email: "eva@example.com",
            company: "Innovate Inc",
            city: "Philadelphia",
            phone: "777-888-9999",
          },
          {
            id: 7,
            name: "Frank Miller",
            email: "frank@example.com",
            company: "Future Tech",
            city: "San Antonio",
            phone: "111-222-3333",
          },
          {
            id: 8,
            name: "Grace Lee",
            email: "grace@example.com",
            company: "Smart Solutions",
            city: "San Diego",
            phone: "666-777-8888",
          },
        ];
        setMockData(fallbackData);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <MobileSidebar />
        <main className="flex-1 p-4 md:ml-64 pt-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : (
                <DataTable data={mockData} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailsPage;

