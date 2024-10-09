import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";  

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container" style={{ maxWidth: '400px', marginTop: '20px' }}>
      <h1>Profile</h1>

      <input
        defaultValue="alice"
        placeholder="username"
        className="form-control mb-3"
      />

      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="form-control mb-3"
      />

      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className="form-control mb-3"
      />

      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="form-control mb-3"
      />

      <div className="input-group mb-3">
        <input
          defaultValue="mm/dd/yyyy"
          type="text"
          placeholder="mm/dd/yyyy"
          id="wd-dob"
          className="form-control"
        />
        <span className="input-group-text">
          <FaCalendarAlt />
        </span>
      </div>

      <input
        defaultValue="alice@wonderland.com"
        type="email"
        id="wd-email"
        className="form-control mb-3"
      />

      <input
        defaultValue="User"
        type="text"
        id="wd-role"
        className="form-control mb-3"
      />

      <button
        className="btn btn-danger btn-block"
        style={{ width: '100%' }}
      >
        Signout
      </button>
    </div>
  );
}
