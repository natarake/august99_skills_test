import { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Flight from "./pages/Flight";

function App() {
  const [details, setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const url = "https://api.spacexdata.com/v3/launches?limit=10";

  const Home = lazy(() => import("./pages/Home"));

  useEffect(() => {
    axios.get(url).then((res) => {
      setDetails(res.data);
    });
  }, []);

  return (
    <div className="p-4 flex flex-col items-center justify-center max-w-[1200px] gap-4">
      <input
        type="text"
        className="border border-gray-300 p-2 w-full mx-8"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home details={details} />} />
          <Route path="/:id" element={<Flight />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
