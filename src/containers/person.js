import { Component } from "react";
import { Button, Breadcrumb, Container, Row, Col } from "react-bootstrap";
import "./styles.css";

class Person extends Component {
  myArr = ["apple", "banana", "grapes"];

  studentList = [
    {
      name: "Rocky",
      address: "bkt",
    },
    {
      name: "Rajesh",
      address: "lalitpur",
    },
    {
      name: "aakash",
      address: "kathmandu",
    },
    {
      name: "Kailash",
      address: "jhapa",
    },
  ];

  state = {
    show: false,
  };
  handleToggle = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      // {this.myArr.map((myArr1, index) => (
      //   <h1 key={index}>{myArr1}</h1>
      // ))}
      <>
        {this.state.show ? (
          <>
            <p>Hello</p>
          </>
        ) : (
          <>
            <p>World</p>
          </>
        )}
        <Button
          className="addButton btn-secondary btn"
          onClick={this.handleToggle}
        >
          Toggle
        </Button>

        {/* {this.studentList.map((student, index) => {
          console.log(student);
          return (
            <>
              <h1
                className="name"
              >
                {student.name}
              </h1>
              <p className="address">{student.address}</p>
            </>
          );
        })} */}
        {/* <Container>
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container> */}
        {/* <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb> */}
      </>
    );
  }
}

export default Person;
