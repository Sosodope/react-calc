import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "react-grid-system";
import Display from "./components/Display";
import Button from "./components/Button";
import Buttons from "./components/Buttons";

class App extends Component {
  state = {
    operations: []
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <Display data={this.state.operations} />
            <Buttons>
              <Button onClick={this.handleClick} label="C" value="clear" />
              <Button onClick={this.handleClick} label="7" value="7" />
              <Button onClick={this.handleClick} label="4" value="4" />
              <Button onClick={this.handleClick} label="1" value="1" />
              <Button onClick={this.handleClick} label="0" value="0" />

              <Button onClick={this.handleClick} label="/" value="/" />
              <Button onClick={this.handleClick} label="8" value="8" />
              <Button onClick={this.handleClick} label="5" value="5" />
              <Button onClick={this.handleClick} label="2" value="2" />
              <Button onClick={this.handleClick} label="." value="." />

              <Button onClick={this.handleClick} label="x" value="*" />
              <Button onClick={this.handleClick} label="9" value="9" />
              <Button onClick={this.handleClick} label="6" value="6" />
              <Button onClick={this.handleClick} label="3" value="3" />
              <Button label="" value="null" />

              <Button onClick={this.handleClick} label="-" value="-" />
              <Button onClick={this.handleClick} label="+" size="2" value="+" />
              <Button
                onClick={this.handleClick}
                label="="
                size="2"
                value="equal"
              />
            </Buttons>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
