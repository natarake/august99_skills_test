import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Flight from "./pages/Flight";
import Home from "./pages/Home";

function App() {
  const [details, setDetails] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const url = `https://api.spacexdata.com/v3/launches?limit=10&offset=${offset}`;
  const isEmpty = !details || details.length === 0;
  let totalCount = 50;

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(url);
    if (res && res.data) {
      const newDetails = [...details, ...res.data];
      if (newDetails.length >= totalCount) {
        setHasMore(false);
      }
      setDetails(newDetails);
      setOffset((prev) => prev + 10);
    }
    setLoading(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      const res = await axios.get(
        `https://api.spacexdata.com/v3/launches?mission_name=${searchTerm}`
      );
      setDetails(res.data);
      setLoading(false);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 flex flex-col items-center justify-center max-w-[1200px] gap-4">
      <input
        type="text"
        className="border border-gray-300 p-2 w-full mx-8"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              details={details}
              loading={loading}
              hasMore={hasMore}
              fetchData={fetchData}
              isEmpty={isEmpty}
              totalCount={totalCount}
            />
          }
        />
        <Route path="/:id" element={<Flight />} />
      </Routes>
    </div>
  );
}

export default App;
