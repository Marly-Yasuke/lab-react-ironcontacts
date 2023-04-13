// src/App.js
import { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [displayedContacts, setDisplayedContacts] = useState(
    contacts.slice(0, 5)
  );

  const addRandomContact = () => {
    const remainingContacts = contacts.filter(
      (contact) => !displayedContacts.includes(contact)
    );
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setDisplayedContacts([...displayedContacts, randomContact]);
  };
  const sortByName = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setDisplayedContacts(sortedContacts);
  };

  const deleteContact = contactId =>{
const filterContact = displayedContacts.filter(contact =>{
  return contact.id !== contactId
})
setDisplayedContacts(filterContact)
  }

  const sortNum = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => {
      // Check if the popularity property exists before trying to access it
      if (a.popularity && b.popularity) {
        return b.popularity.toFixed(2) - a.popularity.toFixed(2);
      }
      // If one or both of the contacts don't have a popularity property, treat them as equal
      return 0;
    });
    setDisplayedContacts(sortedContacts);
  };

  return (
    <div className="App">
      <div>
        <h2>IronContacts</h2>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {displayedContacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    height="80"
                    width="60"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td><button className="delete-btn" onClick={()=>deleteContact(contact.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-random" onClick={addRandomContact}>
          Add Random Contact
        </button>
        <button className="abc-btn" onClick={sortByName}>
          Sort by name
        </button>
        <button className="num-btn" onClick={sortNum}>
          Sort by popularity
        </button>
      </div>
    </div>
  );
}

export default App;
