import { useLoaderData, Link } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../style/User.css";
import { useEffect, useState } from "react";

export const userLoader = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("users : ", users);
    return users;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};

const User = () => {
  const users = useLoaderData();

  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setData(users);
      setLoading(false)

    },1000)
  },[users])


  if(loading){
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status" className="spinner">
        </Spinner>
      </div>
    );
  }






  return (
    <>
      <Container className="user-card-box">
        <Row>
          {users.map((user) => (
            <Col xs={6} md={4} className="column" key={user.id}>
              <Card style={{ width: "21rem" }}>
                <Card.Body>
                  <Card.Title className="card-name"> Name : {user.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Username : {user.username}
                  </Card.Subtitle>
                  <Link to={`/user/${user.id}`} className="more" >More</Link>

               
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default User;
