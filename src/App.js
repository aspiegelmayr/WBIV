
import './App.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import * as d3 from 'd3';
import {Container, Row, Col} from "react-bootstrap"
import View1 from './View1';
import vgData from './vgdata.csv';

const App = () => {
  const[data, setData] = useState([]);
  useEffect(() => {
    d3.csv(vgData).then(data => {
      setData(data)
    });
  }, []);

  console.log(data)

return(
<Container fluid>
  <Row style={{height: 50}}>
      <h1>Dashboard</h1>
  </Row>
<Row>
    <Col style={{height: "100%"}} xs={5}>
      
      <br/>
      <div className="view2"></div>
    </Col>
    <Col xs={5} style={{height: "100%"}}>
    <div className="view2"></div>
    <br/>
    <div className="view2"></div>
    </Col>
  </Row>
</Container>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)

export default App;
