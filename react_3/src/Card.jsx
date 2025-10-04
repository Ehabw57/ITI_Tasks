import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Card({
  overView,
  cover,
  image,
  title,
  rateing,
  release,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="card2">
        <div className="cover2" style={{ backgroundImage: `url(${image})` }}>
          <div className="vote">{rateing}</div>
        </div>
        <div>
          <h2 className="movie-title">{title}</h2>
          <p className="release-date">{release}</p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="backdrop" src={cover} />
          <p>{overView}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
