import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr('width', 800)
            .attr('height', 500)
            .style('border', '1px solid black');

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.product))
            .range([0, 800])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.sales)])
            .range([500, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg.append('g')
            .attr('transform', 'translate(0, 500)')
            .call(xAxis);

        svg.append('g')
            .call(yAxis);

        svg.selectAll(".bar")
            .data(data)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('x', d => xScale(d.product))
            .attr('y', d => yScale(d.sales))
            .attr('height', d => 500 - yScale(d.sales))
            .attr('width', xScale.bandwidth());
    }, [data]);

    return (
        <svg ref={ref}></svg>
    );
}

export default BarChart;
