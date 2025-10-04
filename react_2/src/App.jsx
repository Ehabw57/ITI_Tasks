import { useState } from "react";
import Tablerow from './components/Tabelrow'
import "./style.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");

  const [shown, setShown] = useState('table');

  function pushContact() {
    contacts.push({ name, phone, img });
    setName("");
    setImg("");
    setPhone("");

    setContacts(contacts);
  }

  function handelClick() {
    if(shown == "none") {
      setShown("table")
    }
    else {
      setShown("none")
    }
  }

  return (
    <>
      <button onClick={handelClick}>{shown}</button>
      <div className="container">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          placeholder="ImgLink"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button disabled={!name || !phone || !img} className="add" onClick={pushContact}>
          Add
        </button>
      </div>

      <table style={{display: shown}}>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {contacts.map((contact, index) => <Tablerow key={index} phone={contact.phone} name={contact.name} img={contact.img} />)}
      </table>
    <h3>Users Count: {contacts.length}</h3>
    </>
  );
}

export default App;
