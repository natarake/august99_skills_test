import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TimeAgo from "timeago-react";

function Flight() {
  const location = useLocation();
  const id = location.pathname.split("/")[1];
  const [flight, setFlight] = useState({});
  const url = "https://api.spacexdata.com/v3/launches/";

  console.log(flight);

  useEffect(() => {
    axios.get(url + id).then((res) => {
      setFlight(res.data);
    });
  }, [id]);

  return (
    <div className="bg-white shadow-xl p-4">
      <div className="relative">
        <div className="text-xl font-bold">{flight.mission_name}</div>
        <div className="absolute -top-1 left-[25%] text-xs bg-cyan-300 px-1 font-medium">
          {flight.launch_success === true ? "success" : "failed"}
        </div>
      </div>
      <div className="flex text-[9px] gap-1">
        <TimeAgo
          datetime={flight.launch_date_local}
          className="text-gray-400"
        />

        {/* <a href={flight.links.article_links}>Article</a> */}
        <div>|</div>
        <div className="text-blue-500 font-bold">Article</div>
        <div>|</div>
        <div className="text-blue-500 font-bold">Video</div>
      </div>
      <div className="flex gap-4 items-center">
        <img
          src={flight.links?.mission_patch}
          alt=""
          className="h-24 w-20 object-contain"
        />
        <div className="flex-1">{flight.details}</div>
      </div>
      <Link to="/">
        <button className="border px-2 py-1 mt-4 bg-blue-500 text-white text-sm tracking-wide rounded-[4px]">
          Hide
        </button>
      </Link>
    </div>
  );
}

export default Flight;
