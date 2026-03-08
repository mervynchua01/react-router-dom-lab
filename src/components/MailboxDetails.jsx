// src/components/MailboxDetails/MailboxDetails.jsx

import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId),
  );

  if (!selectedBox) return <h2>Mailbox Not Found!</h2>;

  return (
    <div>
      <h1>Mailbox Details</h1>
      <p>Box Number: {selectedBox._id}</p>
      <p>Owner: {selectedBox.boxOwner}</p>
      <p>Size: {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
