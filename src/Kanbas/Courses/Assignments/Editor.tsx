import { FaCalendarAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-3" style={{ maxWidth: '600px' }}>
            <h3><label htmlFor="wd-name">Assignment Name</label></h3>
            <input id="wd-name" value="A1" className="form-control mb-3" />

            <label htmlFor="wd-description">Assignment Description</label>
            <textarea
                id="wd-description"
                rows={10}
                className="form-control mb-4"
                defaultValue={
                    `The assignment is available online.\n` +
                    `Submit a link to the landing page of your Web application running on Netlify.\n\n` +
                    `The landing page should include the following:\n` +
                    `Your full name and section\n` +
                    `Links to each of the lab assignments\n` +
                    `Link to the Kanbas application\n` +
                    `Links to all relevant source code repositories\n` +
                    `The Kanbas application should include a link to navigate back to the landing page.`
                }
            />

            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="wd-points">Points</label>
                    <input id="wd-points" type="number" value={100} className="form-control" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="wd-group">Assignment Group</label>
                    <select id="wd-group" className="form-control">
                        <option value="assignments">ASSIGNMENTS</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    <select id="wd-display-grade-as" className="form-control">
                        <option value="percentage">Percentage</option>
                    </select>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="wd-submission-type">Submission Type</label>
                <select id="wd-submission-type" className="form-control mb-3">
                    <option value="online">Online</option>
                    <option value="paper">Paper</option>
                </select>

                <fieldset className="border p-3">
                    <label htmlFor="w-auto"> <b>Online Entry Options</b></label>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-website-url" checked />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-file-uploads" />
                        <label className="form-check-label" htmlFor="wd-file-uploads">File Uploads</label>
                    </div>
                </fieldset>
            </div>

            <div className="border p-3">
                <label htmlFor="assign"><b>Assign to</b></label>
                <input
                    id="wd-assign-to"
                    type="text"
                    defaultValue="Everyone"
                    className="form-control mb-3"
                    style={{ background: '#f9f9f9', borderRadius: '4px' }}
                />

                <label htmlFor="due"><b>Due</b></label>
                <div className="input-group mb-3">
                    <input
                        type="datetime-local"
                        id="wd-due-date"
                        defaultValue="2024-05-13T23:59"
                        className="form-control"
                    />
                    <span className="input-group-text">
                        <FaCalendarAlt />
                    </span>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="available-from"><b>Available from</b></label>
                        <div className="input-group mb-3">
                            <input
                                type="date"
                                id="wd-available-from"
                                defaultValue="2024-05-06"
                                className="form-control"
                            />
                            <span className="input-group-text">
                                <FaCalendarAlt />
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="until"><b>Until</b></label>
                        <div className="input-group mb-3">
                            <input
                                type="date"
                                id="wd-available-until"
                                defaultValue="2024-05-20"
                                className="form-control"
                            />
                            <span className="input-group-text">
                                <FaCalendarAlt />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary mr-2"> Cancel</button>
                <button className="btn btn-danger"> Save</button>
            </div>
        </div>
    );
}
