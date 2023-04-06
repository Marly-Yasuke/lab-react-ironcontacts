// src/App.js
import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const { contactList, setContactList } = useState(contacts);
  return (
    <div className="App">
      <div>
        <h2>IronContacts</h2>
        <table>
          <tr>
            <td>
              <h3>Picture</h3>
            </td>
            <td>
              <h3>Name</h3>
            </td>
            <td>
              <h3>Popularity</h3>
            </td>
            <td>
              <h3>Won Oscar</h3>
            </td>
            <td>
              <h3>Won Emmy</h3>
            </td>
          </tr>
          {contacts
            .map((contact) => {
              return (
                <tr key={contact.id} className="contact">
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt="contact"
                      height="80px"
                      width="60ps"
                    ></img>
                  </td>
                  <td>
                    <p>{contact.name}</p>
                  </td>
                  <td>
                    <p>{contact.popularity}</p>
                  </td>
                  <td>
                    <p>{contact.wonOscar ? "Tropy" : ""}</p>
                  </td>
                  <td>
                    <p>{contact.wonEmmy ? "Tropy" : ""}</p>
                  </td>
                </tr>
              );
            })
            .slice(0, 5)}
        </table>
      </div>
    </div>
  );
}
export default App;
