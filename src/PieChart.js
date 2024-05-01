import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr('width', 800)
            .attr('height', 500)
            .append('g')
            .attr('transform', 'translate(400, 250)');

        const radius = Math.min(800, 500) / 2;

        const pie = d3.pie().value(d => d.sales);
        const arc = d3.arc().innerRadius(0).outerRadius(radius);

        const colors = d3.scaleOrdinal(d3.schemeCategory10);

        svg.selectAll('path')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', d => colors(d.data.product));
    }, [data]);

    return (
        <svg ref={ref}></svg>
    );
}

export default PieChart;
