// "use client";

// import { useState, useEffect } from "react";
// import { ChevronUp, ChevronDown, Search } from "lucide-react";

// const DataTable = ({ data }) => {
//   const [sortField, setSortField] = useState("id");
//   const [sortDirection, setSortDirection] = useState("asc");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filteredData, setFilteredData] = useState([]);
//   const rowsPerPage = 5;

//   useEffect(() => {
//     // Filter data based on search term
//     let filtered = [...data];

//     if (searchTerm) {
//       filtered = data.filter((item) => {
//         return Object.values(item).some((val) =>
//           val.toString().toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       });
//     }

//     // Sort data
//     filtered.sort((a, b) => {
//       if (a[sortField] < b[sortField]) {
//         return sortDirection === "asc" ? -1 : 1;
//       }
//       if (a[sortField] > b[sortField]) {
//         return sortDirection === "asc" ? 1 : -1;
//       }
//       return 0;
//     });

//     setFilteredData(filtered);
//     setCurrentPage(1); // Reset to first page when filtering
//   }, [data, searchTerm, sortField, sortDirection]);

//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc");
//     } else {
//       setSortField(field);
//       setSortDirection("asc");
//     }
//   };

//   // Get current rows for pagination
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Get column headers from first data item
//   const columns = data.length > 0 ? Object.keys(data[0]) : [];

//   return (
//     <div className="overflow-x-auto">
//       <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//         <h2 className="text-xl font-semibold mb-2 sm:mb-0">Data Table</h2>
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <Search className="h-5 w-5 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             className="pl-10 pr-4 py-2 border rounded-md w-full sm:w-64"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="border rounded-lg overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               {columns.map((column) => (
//                 <th
//                   key={column}
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                   onClick={() => handleSort(column)}
//                 >
//                   <div className="flex items-center">
//                     {column}
//                     {sortField === column ? (
//                       sortDirection === "asc" ? (
//                         <ChevronUp className="ml-1 h-4 w-4" />
//                       ) : (
//                         <ChevronDown className="ml-1 h-4 w-4" />
//                       )
//                     ) : (
//                       <div className="ml-1 h-4 w-4" />
//                     )}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {currentRows.length > 0 ? (
//               currentRows.map((row, rowIndex) => (
//                 <tr key={rowIndex} className="hover:bg-gray-50">
//                   {columns.map((column) => (
//                     <td
//                       key={`${rowIndex}-${column}`}
//                       className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
//                     >
//                       {row[column]}
//                     </td>
//                   ))}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={columns.length}
//                   className="px-6 py-4 text-center text-sm text-gray-500"
//                 >
//                   No data found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {filteredData.length > 0 && (
//         <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
//           <div className="flex flex-1 justify-between sm:hidden">
//             <button
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
//                 currentPage === 1
//                   ? "text-gray-300 cursor-not-allowed"
//                   : "text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
//                 currentPage === totalPages
//                   ? "text-gray-300 cursor-not-allowed"
//                   : "text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               Next
//             </button>
//           </div>
//           <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//             <div>
//               <p className="text-sm text-gray-700">
//                 Showing{" "}
//                 <span className="font-medium">{indexOfFirstRow + 1}</span> to{" "}
//                 <span className="font-medium">
//                   {Math.min(indexOfLastRow, filteredData.length)}
//                 </span>{" "}
//                 of <span className="font-medium">{filteredData.length}</span>{" "}
//                 results
//               </p>
//             </div>
//             <div>
//               <nav
//                 className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//                 aria-label="Pagination"
//               >
//                 <button
//                   onClick={() => paginate(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className={`relative inline-flex items-center rounded-l-md px-2 py-2 ${
//                     currentPage === 1
//                       ? "text-gray-300 cursor-not-allowed"
//                       : "text-gray-400 hover:bg-gray-50"
//                   }`}
//                 >
//                   <span className="sr-only">Previous</span>
//                   <ChevronUp className="h-5 w-5 rotate-90" />
//                 </button>
//                 {[...Array(totalPages).keys()].map((number) => (
//                   <button
//                     key={number + 1}
//                     onClick={() => paginate(number + 1)}
//                     className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
//                       currentPage === number + 1
//                         ? "bg-indigo-600 text-white"
//                         : "text-gray-900 hover:bg-gray-50"
//                     }`}
//                   >
//                     {number + 1}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => paginate(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${
//                     currentPage === totalPages
//                       ? "text-gray-300 cursor-not-allowed"
//                       : "text-gray-400 hover:bg-gray-50"
//                   }`}
//                 >
//                   <span className="sr-only">Next</span>
//                   <ChevronDown className="h-5 w-5 rotate-90" />
//                 </button>
//               </nav>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataTable;



"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, Search } from "lucide-react";

const DataTable = ({ data }) => {
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const rowsPerPage = 5;

  useEffect(() => {
    // Filter data based on search term
    let filtered = [...data];

    if (searchTerm) {
      filtered = data.filter((item) => {
        return Object.values(item).some((val) =>
          val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    // Sort data
    filtered.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortField] > b[sortField]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  }, [data, searchTerm, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Get current rows for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get column headers from first data item
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-0">
        <h2 className="text-xl font-semibold mb-2 sm:mb-0">Data Table</h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="pl-10 pr-4 py-2 border rounded-md w-full sm:w-64"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer whitespace-nowrap"
                    onClick={() => handleSort(column)}
                  >
                    <div className="flex items-center">
                      {column}
                      {sortField === column ? (
                        sortDirection === "asc" ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        )
                      ) : (
                        <div className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentRows.length > 0 ? (
                currentRows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    {columns.map((column) => (
                      <td
                        key={`${rowIndex}-${column}`}
                        className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-gray-500"
                      >
                        <div className="truncate max-w-[100px] sm:max-w-[200px] md:max-w-none">
                          {row[column]}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-2 sm:px-6 py-3 mt-4">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>
            <span className="mx-2 text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">{indexOfFirstRow + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastRow, filteredData.length)}
                </span>{" "}
                of <span className="font-medium">{filteredData.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center rounded-l-md px-2 py-2 ${
                    currentPage === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronUp className="h-5 w-5 rotate-90" />
                </button>
                {totalPages <= 5 ? (
                  [...Array(totalPages).keys()].map((number) => (
                    <button
                      key={number + 1}
                      onClick={() => paginate(number + 1)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        currentPage === number + 1
                          ? "bg-indigo-600 text-white"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {number + 1}
                    </button>
                  ))
                ) : (
                  <>
                    {[...Array(Math.min(3, totalPages)).keys()].map(
                      (number) => (
                        <button
                          key={number + 1}
                          onClick={() => paginate(number + 1)}
                          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                            currentPage === number + 1
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900 hover:bg-gray-50"
                          }`}
                        >
                          {number + 1}
                        </button>
                      )
                    )}
                    {totalPages > 3 && currentPage > 3 && (
                      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
                        ...
                      </span>
                    )}
                    {currentPage > 3 && currentPage < totalPages - 2 && (
                      <button
                        onClick={() => paginate(currentPage)}
                        className="bg-indigo-600 text-white relative inline-flex items-center px-4 py-2 text-sm font-semibold"
                      >
                        {currentPage}
                      </button>
                    )}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
                        ...
                      </span>
                    )}
                    {totalPages > 3 && (
                      <button
                        onClick={() => paginate(totalPages)}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                          currentPage === totalPages
                            ? "bg-indigo-600 text-white"
                            : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {totalPages}
                      </button>
                    )}
                  </>
                )}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${
                    currentPage === totalPages
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Next</span>
                  <ChevronDown className="h-5 w-5 rotate-90" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;

