import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ScatterPlot = ({ data }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr('width', 1500)
            .attr('height', 1200)
            .style('border', '1px solid black');

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.sales)])
            .range([0, 800]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.cost)])
            .range([500, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg.append('g')
            .attr('transform', 'translate(0, 500)')
            .call(xAxis);

        svg.append('g')
            .call(yAxis);

        svg.selectAll(".dot")
            .data(data)
            .enter()
            .append('circle')
            .classed('dot', true)
            .attr('cx', d => xScale(d.sales))
            .attr('cy', d => yScale(d.cost))
            .attr('r', 5);
    }, [data]);

    return (
        <svg ref={ref}></svg>
    );
}

export default ScatterPlot;
