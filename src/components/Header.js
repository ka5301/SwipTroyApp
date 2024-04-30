import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import '../assets/css/header.css';

const Header = ({ IsLoggedIn, username, handleIsLoggedIn, categories }) => {
  return (
    <header className="header">
      <div className="title" onClick={() => window.location.href = "/"}>SwipTroy</div>
      {IsLoggedIn ? (<LoggedIn categories={categories} username={username} handleIsLoggedIn={handleIsLoggedIn} />) : (<LoggedOut handleIsLoggedIn={handleIsLoggedIn} />)}
    </header>
  );
};

export default Header;