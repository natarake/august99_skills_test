import { Link } from "react-router-dom";

function Cards({ detail }) {
  return (
    <div className="w-full p-4 bg-white shadow-2xl rounded-md border border-grey-50">
      <div className="relative my-2">
        <div className="text-xl font-bold">{detail?.mission_name}</div>
        <div className="absolute -top-1 left-[25%] text-xs bg-cyan-300 px-1 font-medium">
          {detail?.launch_success === true ? "success" : "failed"}
        </div>
      </div>
      <Link to={`/${detail.flight_number}`}>
        <button className="border px-2 py-1 bg-blue-500 text-white text-sm tracking-wide rounded-[4px]">
          View
        </button>
      </Link>
    </div>
  );
}

export default Cards;
