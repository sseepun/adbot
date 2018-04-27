import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { ChatService } from './services/chat.service';

// Components
import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MessageDataComponent } from './message-data/message-data.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    MessageDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
