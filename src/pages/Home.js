import Cards from "../components/Cards";
import Spinner from "../components/Spinner/Spinner";
import EndMessage from "../components/EndMessage";
import InfiniteScroll from "react-infinite-scroller";

function Home({ details, hasMore, isEmpty, totalCount, fetchData }) {
  return (
    <div className="p-4 flex flex-col items-center justify-center w-full gap-4">
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchData}
        hasMore={hasMore}
        loader={<Spinner key={0} />}
        threshold={350}
        initialLoad={true}
        className="w-full flex flex-col gap-2"
      >
        {!isEmpty &&
          details?.map((detail, index) => (
            <Cards detail={detail} key={index} />
          ))}
      </InfiniteScroll>
      {details.length >= totalCount && <EndMessage />}
    </div>
  );
}

export default Home;
