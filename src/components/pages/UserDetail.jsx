import { useLoaderData,useParams } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../../style/UserDetail.css"


export const userDetailLoader=async ({params}) =>{
 const {id}=params;
 console.log("id :",id)
 try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    console.log("users : ", user);
    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }

}

const UserDetail = () => {
    const user=useLoaderData();
    const {id}=useParams();
  return (
    <div className="user-detail">

     


<Card style={{ width: '30rem' }} className="user-card">
      <Card.Img variant="top" src="/images/user.png" className="user-image" />
      <Card.Body className="card-content">
        <Card.Title>Name : {user.name} </Card.Title>
        <Card.Title className="id">ID : {id} </Card.Title>
        <Card.Text>
       Company : {user.company.name}
       
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Username : {user.username} </ListGroup.Item>
        <ListGroup.Item>Email : {user.email} </ListGroup.Item>
        <ListGroup.Item>Address : {user.address.city} , {user.address.zipcode}</ListGroup.Item>
        <ListGroup.Item>Phone No. : {user.phone} </ListGroup.Item>
        <ListGroup.Item>Website : {user.website} </ListGroup.Item>
      </ListGroup>
    
    </Card>

    </div>
  )
}

export default UserDetail