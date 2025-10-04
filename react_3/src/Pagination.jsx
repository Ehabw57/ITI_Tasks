import { act } from "react";
import Pagination from "react-bootstrap/Pagination";

export default function ({ totalPages, setActive, active }) {
  return (
    <Pagination>
      <Pagination.First onClick={()=> setActive(1)}/>
      <Pagination.Prev
        disabled={active < 2}
        onClick={() => setActive(active - 1)}
      />

    {active > 1 && <Pagination.Item onClick={() => setActive(active - 1)}>{active - 1}</Pagination.Item>}
      <Pagination.Item active>{active}</Pagination.Item>
    { active < totalPages && <Pagination.Item onClick={()=>setActive(active + 1)}>{active + 1}</Pagination.Item>}

      <Pagination.Next disabled={active > totalPages - 1} onClick={()=>setActive(active + 1)}/>
        
      <Pagination.Last onClick={()=>setActive(totalPages)} />
    </Pagination>
  )
}
