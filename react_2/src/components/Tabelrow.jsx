export default function Tablerow(contact) {

  return(
      <tr>
        <td>
          <div>
            <div
              style={{ backgroundImage: `url(${contact.img})` }}
              className="image"
            ></div>
            <label>{contact.name}</label>
          </div>
        </td>
        <td>{contact.phone}</td>
        <td className="email">{contact.name.split(" ")[0]}@gmail.com</td>
      </tr>
    );
}
