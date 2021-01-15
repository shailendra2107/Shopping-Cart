import { Link } from "react-router-dom";
import './index.css'


function App() {
  return (
    <div className="app">
      <header className="header">
        <Link to='/'>Shopping Cart</Link>
      </header>
      <main className="main">
        main cart
      </main>
      <footer className="footer">
        All rights is reserved
      </footer>
    </div>
  );
}

export default App;
