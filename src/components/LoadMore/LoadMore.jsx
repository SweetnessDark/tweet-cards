import { LoadMoreBtn } from "./LoadMore.styled";

const LoadMore = ({ onClick, loading }) => {
  return (
    <LoadMoreBtn disabled={loading} onClick={onClick}>
      {loading ? "Loading..." : "Load more"}
    </LoadMoreBtn>
  );
};

export default LoadMore;
