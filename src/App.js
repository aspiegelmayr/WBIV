import logo from './logo.svg';
import './App.css';
import React from 'react';
import * as d3 from 'd3';
import {Layout} from "antd";
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

class App extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.dataset = [100, 200, 300, 400, 500]
  }

  componentDidMount(){
    let size = 500;
    let svg = d3.select(this.myRef.current).append("svg").attr("width", size).attr("height", size);
    let rectWidth = 95;
    svg.selectAll('rect').data(this.dataset).enter().append('rect')
      .attr("x", (d, i) => 5 + i*(rectWidth + 5))
      .attr("y", d => size - d)
      .attr('width', rectWidth)
      .attr('height', d => d)
      .attr("fill", 'teal');
  }

  render(){
    return(
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content><div ref={this.myRef}>
      </div></Content>
        </Layout>
      </Layout>
      
    )
  }
}

export default App;
