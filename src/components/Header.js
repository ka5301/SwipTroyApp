import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import '../assets/css/header.css';

const Header = ({IsLoggedIn, username, handleIsLoggedIn}) => {
  return (
    <header className="header">
      <div className="title">SwipTroy</div>
      {IsLoggedIn ? (<LoggedIn username={username} handleIsLoggedIn = {handleIsLoggedIn}/>): (<LoggedOut handleIsLoggedIn = {handleIsLoggedIn}/>)}
    </header>
  );
};

export default Header;