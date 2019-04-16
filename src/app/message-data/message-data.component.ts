import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-message-data',
  templateUrl: './message-data.component.html',
  styleUrls: ['./message-data.component.css']
})
export class MessageDataComponent implements OnInit {

  private host;
  private svg;
  private workspace;

  private width = 1000;
  private height = 500;
  private spec;

  private data = [
    {desc: 'Ant', value: 820},
    {desc: 'Bird', value: 542},
    {desc: 'Cat', value: 1165},
    {desc: 'Dog', value: 760},
    {desc: 'Eagle', value: 1000},
    {desc: 'Fox', value: 450}
  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.elementRef.nativeElement).select('.data-container');
    this.svg = this.host.append('svg')
      .attr('pointer-events', 'none').attr('width', '100%')
      .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
      .attr('viewBox', '0 0 '+this.width+' '+this.height);
    this.workspace = this.svg.append('g').attr('class', 'workspace');

    this.spec = {
      padLeft: 0.08*this.width,
      padTop: 0.0*this.height,
      padBottom: 0.08*this.height,
      slotW: 0.92*this.width / this.data.length,      
      padW: 0.92*this.width / this.data.length * 0.15,
      graphH: 0.92*this.height,
      yScale: d3.scaleLinear().domain([0, d3.max(this.data.map(d=>{return d.value}))])
        .range([0.92*this.height, 0])
    };

    d3.timeout(()=>{
      this.setup();
    }, 300);
  }

  setup() {
    // this.workspace.append('rect').attr('class', 'hoverable')
    //   .attr('width', this.width).attr('height', this.height);

    let dataSlots = this.workspace.selectAll('g.data-slot').data(this.data).enter().append('g')
      .attr('class', 'data-slot').attr('id', (d,i)=>{return 'data'+i})
      .attr('transform', (d,i)=>{
        return 'translate('+(this.spec.padLeft+i*this.spec.slotW)+','+(this.spec.padTop)+')';
      });
    
    dataSlots.append('rect').attr('class', 'data-rect')
      .attr('x', this.spec.padW).attr('y', this.spec.graphH)
      .attr('width', this.spec.slotW-2*this.spec.padW).attr('height', 0)
      .on('mouseenter', (d,i)=>{
        this.workspace.select('#data'+i).select('rect').transition().duration(300)
          .attr('x', this.spec.padW/2).attr('width', this.spec.slotW-this.spec.padW);
      })
      .on('mouseleave', (d,i)=>{
        this.workspace.select('#data'+i).select('rect').transition().duration(300)
          .attr('x', this.spec.padW).attr('width', this.spec.slotW-2*this.spec.padW);
      })
      .transition().duration(600)
        .attr('y', d=>{return this.spec.yScale(d.value)})
        .attr('height', d=>{return this.spec.graphH-this.spec.yScale(d.value)});
    dataSlots.append('text').attr('class', 'data-label')
      .attr('x', this.spec.slotW/2).attr('y', this.spec.graphH+this.spec.padBottom)
      .text(d=>{return d.desc});

    // Y axis
    this.svg.insert('g', '.workspace').attr('class', 'y-axis')
      .attr('transform', 'translate('+this.spec.padLeft+','+this.spec.padTop+')')
      .call(
        d3.axisLeft(this.spec.yScale)
        .tickSize(-this.width+this.spec.padLeft)
          .ticks(5)
      );
    this.svg.selectAll('.tick').select('text').attr('x', -6);
  }

}
