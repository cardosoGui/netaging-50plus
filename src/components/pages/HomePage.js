import React from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  Tabs,
  Tab,
  Button,
  Icon,
  Slider,
  Slide
} from "react-materialize";
import { Link } from "react-router-dom";
import "../../css/HomePage.css";
import Slogan from "../utils/Slogan";
import backgroundMan from "../../img/backgrounds/old-man.jpg";

const HomePage = () => (
  <div className="homepage">
    <Row>
      <Slogan
        title={"NetAging50+"}
        content={"Seja Bem Vindo"}
        image={""}
        icon={""}
      />
    </Row>
    <Row>
      <Col offset="s3 m3 l3" s={6} m={6} l={6}>
        <div className="center-align">
          <h3>Conheça a NetAging50+</h3>
          <h5 style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            Aqui será um texto simples contando um pouco sobre a plataforma e
            seus benefícios
          </h5>
          <Button waves="light" className="blue">
            Comece agora
          </Button>
        </div>
      </Col>
    </Row>
    <Row>
      <Col offset="s1 m2 l1" s={10} m={8} l={10}>
        <div className="card">
          <div className="card-image">
            <img src={backgroundMan} />
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p style={{ color: "rgba(0, 0, 0, 0.54)" }}>
              Aqui será um texto simples contando um pouco sobre a plataforma e
              seus benefícios
            </p>
          </div>
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width">
              <li className="tab">
                <Link className="active" to="#test1">
                  Test 1
                </Link>
              </li>
              <li className="tab">
                <Link to="#test2">Test 2</Link>
              </li>
              <li className="tab">
                <a href="#test6">Test 3</a>
              </li>
            </ul>
          </div>
          <div className="card-content grey lighten-4">
            <Row id="test1">
              <Col s={12} m={12} l={12}>
                <div
                  style={{
                    backgroundColor: "red",
                    width: "100%",
                    height: "20em"
                  }}
                />
              </Col>
            </Row>
            <div id="test2">Test 2</div>
            <div id="test6">Test 3</div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default HomePage;
