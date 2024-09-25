export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h3><label htmlFor="wd-name">Assignment Name</label></h3>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description" rows={10} cols={45}>
                The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The landing page should include the following:
                - Your full name and section
                - Links to each of the lab assignments
                - Link to the Kanbas application
                - Links to all relevant source code repositories
                - The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br /><br />

            <table>
                <tbody>
                    <tr>
                        <td align="center" valign="top">
                            <label htmlFor="wd-points">Points</label>
                            <input id="wd-points" type="number" value={100} />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="center" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label> <select id="wd-group">
                                <option value="assignments">Assignments</option>
                                {/* Add more options if needed */}
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="center" valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade As</label> <select id="wd-display-grade-as">
                                <option value="percentage">Percentage</option>
                                <option value="percentage">Score</option>
                                {/* Add more options if needed */}
                            </select>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="center" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label> <select id="wd-submission-type">
                                <option value="online">Online</option>
                                <option value="paper">Paper</option>
                                {/* Add more options if needed */}
                            </select>
                            <td />
                            <td align="left">
                                <p>
                                    <legend>Online Entry Options</legend>
                                    <input type="checkbox" id="wd-text-entry" name="online-entry" value="text-entry" />
                                    <label htmlFor="wd-text-entry">Text Entry</label><br />
                                    <input type="checkbox" id="wd-website-url" name="online-entry" value="website-url" />
                                    <label htmlFor="wd-website-url">Website URL</label><br />
                                    <input type="checkbox" id="wd-media-recordings" name="online-entry" value="media-recordings" />
                                    <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                                    <input type="checkbox" id="wd-student-annotation" name="online-entry" value="student-annotation" />
                                    <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                                    <input type="checkbox" id="wd-file-uploads" name="online-entry" value="file-uploads" />
                                    <label htmlFor="wd-file-uploads">File Uploads</label>
                                </p>
                            </td>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <label htmlFor="assign">Assign to</label><br />
                            <input id="wd-assign-to" type="text" defaultValue="Everyone" />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="center">
                            <label htmlFor="due">Due</label><br />
                            <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td align="center">
                            <label htmlFor="available-from">Available from</label> &nbsp;
                            <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="until">Until</label>  &nbsp;
                            <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
                        </td>
                    </tr>

                </tbody>
            </table>
            <hr />
            <table width="100%">
                <tbody>
                    <tr>
                        <td align="right">
                            <button>Cancel</button> <button>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
