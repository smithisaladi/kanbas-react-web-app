import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1800/Home">
                        <img src="/images/1.jpg" width={200} height={100} />
                        <div>
                            <h5>
                                CS1800 Discrete Structures
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Discrete Structures
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">  <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/2200/Home">
                    <img src="/images/2.jpg" width={200} height={100} />
                    <div>
                        <h5>
                            CS2200 Racket
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Fundamentals of Computer Science 
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>

                <div className="wd-dashboard-course">  <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/2500/Home">
                    <img src="/images/3.jpg" width={200} height={100} />
                    <div>
                        <h5>
                            CS3500 Intermediate Java
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Fundamentals of Computer Science 2
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>

                <div className="wd-dashboard-course">  <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/3700/Home">
                    <img src="/images/4.jpg" width={200} height={100}/>
                    <div>
                        <h5>
                            CS3700 Lean Programming
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Logic and Computation
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>

                <div className="wd-dashboard-course">  <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/4700/Home">
                    <img src="/images/5.jpg" width={200} height={100} />
                    <div>
                        <h5>
                            CS4700 Network Programming
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Network Fundamentals
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>

                <div className="wd-dashboard-course">  <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/3600/Home">
                    <img src="/images/6.jpg" width={200} height={100} />
                    <div>
                        <h5>
                            CS3600 OOP Programming
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Object Oriented Design 
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>

                <div className="wd-dashboard-course">  <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/2800/Home">
                    <img src="/images/7.jpg" width={200} height={100}/>
                    <div>
                        <h5>
                            CS2800 Computational Proofs 
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Theory of Computation
                        </p>
                        <button> Go </button>
                    </div>
                </Link> </div>


            </div>
        </div>
    );
}

