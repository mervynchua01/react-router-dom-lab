// src/components/MailboxForm/MailboxForm.jsx

import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ addBox }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData)
    navigate('/mailboxes')
    console.log(formData);
  };

  return (
    <div>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Box Owner:
          <input
            type="text"
            name="boxOwner"
            value={formData.boxOwner}
            onChange={handleChange}
          />
        </label>
        <label>
          Box Size:
          <select
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;
