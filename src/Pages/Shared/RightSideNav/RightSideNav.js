import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaTwitch,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import BrandCarosul from "../BrandCarasoul/BrandCarosul";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
      </ButtonGroup>
      <Button variant="outline-dark">
        <FaGithub></FaGithub> Login with Github
      </Button>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter>
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaTwitch> </FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp>
            Whataapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube></FaYoutube> Youtube
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarosul></BrandCarosul>
      </div>
    </div>
  );
};

export default RightSideNav;
