import "./HomePage.css";
import img from "../../../src/heroBackground.png"
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home-container">
      <section className="cover">
        <img className="cover-img" src={img} alt="logo-disihify" />
        <div className="headers">
          <h1>Discover</h1>
          <h1>Save</h1>
          <h1>Plan Your Meals</h1>
          <h3 >Explore thousands of recipes, create meal plans, and simplify your life with personalized tools</h3>
          <Link className="join-btn" to="/register">
            Join Now
            <i className ="ri-arrow-right-long-line arrow"></i>
          </Link>
        </div>

      </section>

      <section >
        <h1>Make Cooking Effortless <i className="ri-bowl-line"></i>
        </h1>
        <br></br>
        <div className="features" >
        <div className="feature-card">
          <div >
              <i className="ri-lightbulb-line features-icon"></i>
          </div>
          <h2>Customize Your Recipes</h2>
            <p>Get tailored recipe  based on your preferences</p>
        </div>
          <div className="feature-card">
            <div >
              <i className="ri-calendar-check-line features-icon"></i>
            </div>
            <h2>Plan Your Meal</h2>
            <p>Plan your weekly meals with ease and stay organized</p>
          </div>
        <div className="feature-card">
          <div >
              <i className="ri-heart-add-line features-icon"></i>
          </div>
          <h2>Save Your Favorite</h2>
          <p>Quickly save and access your favorite recipes anytime</p>
        </div>
        <div className="feature-card">
          <div >
              <i className="ri-list-check-3 features-icon"></i>
          </div>
            <h2>Automatic grocery lists</h2>
          <p>Automatically generate grocery lists based on your meal plan</p>
        </div>
      
        </div>
      </section>
      <section className="featured-recipies"></section>
      <section className="statistics"></section>
    </div>
  );
}

export default HomePage;