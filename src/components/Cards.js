import { Link } from "react-router-dom";

function Cards({ detail }) {
  const status = detail?.launch_success;
  return (
    <div className="w-full p-4 bg-white shadow-2xl rounded-md border border-grey-50">
      <div className="my-2 flex">
        <div className="text-xl font-bold">{detail?.mission_name}</div>
        <div className="ml-2">
          <div
            className={` text-xs text-white rounded-[2px] px-1 font-medium ${
              status ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status === true ? "success" : "failed"}
          </div>
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
