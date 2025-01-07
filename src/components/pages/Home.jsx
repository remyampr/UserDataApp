
import { Link } from "react-router-dom";
import "../../style/Home.css"
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-box">
      <header>
      <h1>Explore and Manage User Information</h1>
<p>
  Access detailed profiles, stay updated with user data, and easily navigate through the information you need.
</p>
       
          <Link to="/user" >  <Button variant="dark" className="button-home">Get Started</Button>
          </Link>
        
      </header>
    </div>
  );
};

export default Home;
