import React, { Component } from 'react';

import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class Graph extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {
      const node = this.node
      const dataMax = max(this.props.data)

      const yScale = scaleLinear()
                        .domain([0, dataMax])
                        .range([0, this.props.size[1]])

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append("g")
            .append('rect')

        select(node)
            .selectAll("g")

        select(node).selectAll("g")
            .append('text')
            .text(d => d)
            .attr('fill', 'green')
            .attr("font-size", "50px")
        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()
        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 25)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)
   }
render() {
      return(
          <div>
              <svg ref={node => this.node = node}
                    width={500} height={500}>
                    </svg>

                <div className='number-container'>
                    {this.props.data.map(d => <p>{d}</p>)}
                </div>
          </div>
      )
   }
}
export default Graph;