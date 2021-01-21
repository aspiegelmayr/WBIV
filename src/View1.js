import React from "react";
import * as d3 from 'd3';



class View1 extends React.Component {
    constructor(props) {
        super(props);
    
        console.log(this.props)
    }

    drawChart(height, width){
        d3.select("#chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")
            .append("text")
            .attr("fill", "green")
            .attr("x", 50)
            .attr("y", 50)
            .text("Hello D3")
}

componentDidMount(){
    console.log(this.props.data)
    this.drawChart();
}

    render(){
        return(
            <div id="chart"></div>
        )
    }
}

export default View1;