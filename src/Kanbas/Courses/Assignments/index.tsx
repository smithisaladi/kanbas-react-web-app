import { FaSearch, FaPlus, FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ maxWidth: '300px' }}>
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search..."
            id="wd-search-assignment"
          />
        </div>

        <div>
          <button className="btn btn-outline-secondary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-0 p-3 border-start border-4 border-success bg-light" style={{ borderRight: 'none', borderTop: 'none', borderBottom: 'none' }}>
        <div className="d-flex align-items-center">
          <button className="btn btn-light p-0 me-2">
            <MdExpandMore />
          </button>
          <h5 className="mb-0">ASSIGNMENTS</h5>
        </div>
        <div className="d-flex align-items-center">
          <span
            className="badge bg-light text-secondary me-2"
            style={{
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px',
            }}
          >
            40% of Total
          </span>
          <button className="btn btn-light p-0 me-2">
            <FaPlus />
          </button>
          <button className="btn btn-light p-0">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start border-start border-4 border-success ps-0"
          style={{ borderRight: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0' }}>
          <div className="d-flex align-items-start w-100">
            <RxDragHandleDots2 className="text-muted me-2 mt-1" />

            <FaFileAlt className="text-muted me-2 mt-1" />

            <div>
              <a className="fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
                A1
              </a>
              <div className="text-muted">
                <span className="text-danger">Multiple Modules</span> | <span>Not available until May 6 at 12:00am</span>
                <br />
                <span><b>Due May 13 at 11:59pm</b> | 100 pts</span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-3 fs-5" />

            <BsThreeDotsVertical className="text-muted fs-5" />
          </div>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-start border-start border-4 border-success ps-0"
          style={{ borderRight: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0' }}>
          <div className="d-flex align-items-start w-100">
            <RxDragHandleDots2 className="text-muted me-2 mt-1" />
            <FaFileAlt className="text-muted me-2 mt-1" />
            <div>
              <a className="fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/124">
                A2
              </a>
              <div className="text-muted">
                <span className="text-danger">Multiple Modules</span> | <span>Not available until May 13 at 12:00am</span>
                <br />
                <span><b>Due May 20 at 11:59pm</b> | 100 pts</span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-3 fs-5" />
            <BsThreeDotsVertical className="text-muted fs-5" />
          </div>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-start border-start border-4 border-success ps-0"
          style={{ borderRight: 'none', borderTop: 'none', borderBottom: 'none', borderRadius: '0' }}>
          <div className="d-flex align-items-start w-100">
            <RxDragHandleDots2 className="text-muted me-2 mt-1" />
            <FaFileAlt className="text-muted me-2 mt-1" />
            <div>
              <a className="fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/125">
                A3
              </a>
              <div className="text-muted">
                <span className="text-danger">Multiple Modules</span> | <span>Not available until May 20 at 12:00am</span>
                <br />
                <span><b>Due May 27 at 11:59pm</b> | 100 pts</span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-3 fs-5" />
            <BsThreeDotsVertical className="text-muted fs-5" />
          </div>
        </li>
      </ul>
    </div>
  );
}
