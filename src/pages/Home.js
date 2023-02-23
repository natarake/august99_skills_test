import Cards from "../components/Cards";
// import InfiniteScroll from "react-infinite-scroll-component";

function Home({ details }) {
  return (
    // <InfiniteScroll dataLength={details.length}>
    <div className="p-4 flex flex-col items-center justify-center w-full gap-4">
      {details.map((detail) => (
        <Cards detail={detail} />
      ))}
    </div>
    // </InfiniteScroll>
  );
}

export default Home;
