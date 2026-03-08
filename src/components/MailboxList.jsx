import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h1>Mailboxes</h1>
      {mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
          <div className="mail-box">
          {mailbox._id}
        </div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;
