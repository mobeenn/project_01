import './App.css'
const Card= () => {
    return(
        <>
         {/* Card */}
  <div className="card-text">
    <h2>Browse The range</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <section className="image-section">
    <div className="image-div">
      <img src="image/Mask Group (1).png" alt="Image 1"/>
      <h4>Dining</h4>
    </div>
    <div className="image-div">
      <img src="image/Mask Group.png" alt="Image 2"/>
      <h4>Living</h4>
    </div>
    <div className="image-div">
      <img src="image/Image-living room.png" alt="Image 3"/>
      <h4>Bedroom</h4>
    </div>
  </section>
        </>
    );
};
export default Card;