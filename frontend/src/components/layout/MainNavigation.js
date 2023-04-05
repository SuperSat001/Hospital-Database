import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>IITB Hospital</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Patients</Link>
          </li>
          <li>
            <Link to='/new-Patient'>Add New Patients</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
