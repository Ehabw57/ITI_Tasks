import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "./Store/FavoriteSlice";

export default function () {
  const {totalPages, activePage} = useSelector(state => state.storeReducer)
  const dispatch = useDispatch()
  return (
    <>
      {totalPages > 1 && (
        <Pagination className="pagi">
          <Pagination.First onClick={() => dispatch(changeActive(1))} />
          <Pagination.Prev
            disabled={activePage < 2}
            onClick={() => dispatch(changeActive(activePage - 1))}
          />

          {activePage > 1 && (
            <Pagination.Item onClick={() => dispatch(changeActive(activePage - 1))}>
              {activePage - 1}
            </Pagination.Item>
          )}
          <Pagination.Item active>{activePage}</Pagination.Item>
          {activePage < totalPages && (
            <Pagination.Item onClick={() => dispatch(changeActive(activePage + 1))}>
              {activePage + 1}
            </Pagination.Item>
          )}

          <Pagination.Next
            disabled={activePage > totalPages - 1}
            onClick={() => dispatch(changeActive(activePage + 1))}
          />

          <Pagination.Last onClick={() => dispatch(changeActive(totalPages))} />
        </Pagination>
      )}
    </>
  );
}

