import { Link } from 'react-router-dom';

function Nav() {
  return (
  
    <header className="header">
      <nav className="headerMenu">
        <ul>
          <Link to="/" className="tlink">Home</Link> {''}
          <Link to="/cliente" className="tlink">Cliente</Link>
     
        </ul>
      </nav>
    </header>
   
  );
}
export default Nav
