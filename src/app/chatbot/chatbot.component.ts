import { Component, OnInit, ElementRef, enableProdMode } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as d3 from 'd3';

import { ChatService } from '../services/chat.service';

enableProdMode();

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  private messages = [];
  private codeList = ['#code0', '#code1', '#code2'];
  private subscription: Subscription;

  private chatContainer;

  constructor(
    private elementRef: ElementRef,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatContainer = d3.select(this.elementRef.nativeElement).select('.chat-container');
    this.subscription = this.chatService.observeBotResponse().subscribe(content=>{
      this.messages.push({content: content, sentBy: 'bot'});
      this.scrollBottom();
    });
  }

  clickAccess(type, message) {
    this.messages.push({content: message, sentBy: 'user'});
    this.scrollBottom();

    if (type==0) {
      this.messages.push({content: '#code0', sentBy: 'bot'});
    } else if (type==1) {
      this.messages.push({content: '#code1', sentBy: 'bot'});
    } else {

    }
    this.scrollBottom();
  }

  sendMessage(query) {
    if (query!='') {
      this.messages.push({content: query, sentBy: 'user'});
      this.scrollBottom();
      
      let input = query.toLowerCase();
      if (input=='video') this.clickAccess(0, input);
      else if (input=='data') this.clickAccess(1, input);
      else if (input=='products') this.clickAccess(2, input);
      else {
        this.messages.push({content: 'Please choose between video, data, or products.', sentBy: 'bot'});
        this.scrollBottom();
      }

      // this.messages.push({content: query, sentBy: 'user'});
      // this.scrollBottom();

      // if (query.indexOf('เวลา')>-1) {
      //   let now = new Date(),
      //       content = 'ตอนนี้เวลา '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+' ครับ';
      //   this.messages.push({content: content, sentBy: 'bot'});
      //   this.scrollBottom();
      // } else if (query.indexOf('วันที่')>-1) {
      //   let now = new Date(),
      //       content = 'วันนี้วันที่ '+now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear()+' ครับ';
      //   this.messages.push({content: content, sentBy: 'bot'});
      //   this.scrollBottom();
      // } else {
      //   this.chatService.talk(query);
      // }
    }
  }
  scrollBottom() {
    let scrollheight = this.chatContainer.property("scrollHeight");
    d3.timeout(()=>{
      document.getElementById('chat-container').scrollTop = scrollheight;
    }, 100);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
