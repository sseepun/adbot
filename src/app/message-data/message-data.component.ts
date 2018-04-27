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

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.host = d3.select(this.elementRef.nativeElement).select('.data-container');
    this.svg = this.host.append('svg')
      .attr('pointer-events', 'none').attr('width', '100%')
      .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
      .attr('viewBox', '0 0 '+this.width+' '+this.height);
    this.workspace = this.svg.append('g').attr('class', 'workspace');
    this.setup();
  }

  setup() {
    this.workspace.append('rect').attr('class', 'hoverable')
      .attr('width', this.width).attr('height', this.height)
      .style('fill', 'orange')
      .on('mouseenter', ()=>{
        
      })
      .on('mouseleave', ()=>{
        
      });
  }

}
