import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }}
         className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">
      
      <a href="https://www.northeastern.edu/" id="wd-neu-link"
         target="_blank" className="list-group-item text-center border-0 bg-black text-white"
         rel="noopener noreferrer">
        <img src="/images/NEU.png" alt="Northeastern Logo" width="75px" />
      </a>

      <NavLink to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0"
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'white' : 'black',
          color: isActive ? 'red' : 'white',
        })}>
        <FaRegCircleUser className="fs-1" /><br />
        Account
      </NavLink>

      <NavLink to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0"
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'white' : 'black',
          color: isActive ? 'red' : 'white',
        })}>
        <AiOutlineDashboard className="fs-1" style={{ color: 'red' }} 
 /><br />
        Dashboard
      </NavLink>

      <NavLink to="/Kanbas/Courses" id="wd-course-link"
        className="list-group-item text-center border-0"
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'white' : 'black',
          color: isActive ? 'red' : 'white',
        })}>
        <LiaBookSolid className="fs-1"       style={{ color: 'red' }} 
 /><br />
        Courses
      </NavLink>

      <NavLink to="/Kanbas/Calendar" id="wd-calendar-link"
        className="list-group-item text-center border-0"
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'white' : 'black',
          color: isActive ? 'red' : 'white',
        })}>
        <IoCalendarOutline className="fs-1"       style={{ color: 'red' }} 
 /><br />
        Calendar
      </NavLink>

      <NavLink to="/Kanbas/Inbox" id="wd-inbox-link"
        className="list-group-item text-center border-0"
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'white' : 'black',
          color: isActive ? 'red' : 'white',
        })}>
        <FaInbox className="fs-1"       style={{ color: 'red' }} 
        /><br />
        Inbox
      </NavLink>
      <NavLink to="/Labs" id="wd-labs-link"
        className="list-group-item text-center border-0"
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'white' : 'black',
          color: isActive ? 'red' : 'white',
        })}>
        <LiaCogSolid className="fs-1"       style={{ color: 'red' }} 
        /><br />
        Labs
      </NavLink>
    </div>
  );
}
