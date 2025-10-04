import Pagination from "react-bootstrap/Pagination";
import { useContext } from "react";
import FavoriteContext from "./Context/FavoriteContext";

export default function () {
  const {totalPages, setActive, active} = useContext(FavoriteContext)
  return (
    <>
      {totalPages > 1 && (
        <Pagination className="pagi">
          <Pagination.First onClick={() => setActive(1)} />
          <Pagination.Prev
            disabled={active < 2}
            onClick={() => setActive(active - 1)}
          />

          {active > 1 && (
            <Pagination.Item onClick={() => setActive(active - 1)}>
              {active - 1}
            </Pagination.Item>
          )}
          <Pagination.Item active>{active}</Pagination.Item>
          {active < totalPages && (
            <Pagination.Item onClick={() => setActive(active + 1)}>
              {active + 1}
            </Pagination.Item>
          )}

          <Pagination.Next
            disabled={active > totalPages - 1}
            onClick={() => setActive(active + 1)}
          />

          <Pagination.Last onClick={() => setActive(totalPages)} />
        </Pagination>
      )}
    </>
  );
}
