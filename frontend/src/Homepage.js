import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import schoolLogo from './school_logo.jpg'; // Import the image file

const HomePage = () => {
  return (
    <div>
      <header>
        <img src={schoolLogo} alt="School Logo" className="logo" /> {/* Insert the image */}
        <h1>Welcome to Engineering School</h1>
        <p>A clear and concise mission statement goes here</p>
      </header>

      <nav>
        <ul className="nav-links">
          
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Admission">Admission</Link>
          </li>
          <li>
            <Link to="/Academics">academics</Link>
          </li>
          <li>
            <Link to="Research">Research</Link>
          </li>
          <li>
            <Link to="/Library">Library</Link>
          </li>
          
          <li>
            <Link to="/financial-aid">Financial Aid</Link>
          </li>
        </ul>
      </nav>

      <main>
        <section>
          <h2>
            <Link to="/upcoming-events">Upcoming Events</Link>
          </h2>
          {/* Display upcoming events here */}
        </section>

        <section>
          <h2>
            <Link to="/latest-news">Latest News</Link>
          </h2>
          {/* Display latest news stories here */}
        </section>

        <section>
          <h2>
            <Link to="/student-resources">Student Resources</Link>
          </h2>
          {/* Display various student resources here */}
        </section>

        <section>
          <h2>
            <Link to="/get-involved">Get Involved</Link>
          </h2>
          {/* Display ways for students to get involved here */}
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} School Of Engineering. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;


