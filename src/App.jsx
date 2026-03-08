// src/App.jsx
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";



const App = () => {
const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      ...formData,
      _id: mailboxes.length + 1,
    };
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
      </Routes>
    </>
  );
};

export default App;
