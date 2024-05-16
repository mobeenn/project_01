import './App.css'
const App = () => {
  return(
    <>
     <nav>
    <div className="logo"><img src="image/Meubel House_Logos-05.png" alt=""/>
      <h2>Furniro</h2>
    </div>
    <input type="checkbox" id="click"/>
    <label for="click" className="menu-btn">
      <i className="fa fa-bars"></i>
    </label>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div className="social-icons">
      <ul>
        <li><a href="#"><i className="fa-solid fa-user-group"></i></a></li>
        <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></li>
        <li><a href="#"><i className="fa-regular fa-heart"></i></a></li>
        <li><a href="#"><i className="fa-solid fa-bucket"></i></a></li>
      </ul>
    </div>
  </nav>
    </>
  );
};
export default App;