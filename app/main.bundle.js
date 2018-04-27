webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".app-container {\n    width: 100%;\n    height: calc(100vh - 20px);\n    margin: 0;\n    padding: 0;\n    background: #000;\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <app-chatbot></app-chatbot>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// Services
var chat_service_1 = __webpack_require__("./src/app/services/chat.service.ts");
// Components
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var chatbot_component_1 = __webpack_require__("./src/app/chatbot/chatbot.component.ts");
var message_data_component_1 = __webpack_require__("./src/app/message-data/message-data.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                chatbot_component_1.ChatbotComponent,
                message_data_component_1.MessageDataComponent
            ],
            imports: [
                platform_browser_1.BrowserModule
            ],
            providers: [
                chat_service_1.ChatService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/chatbot/chatbot.component.css":
/***/ (function(module, exports) {

module.exports = ".chat-app {\n    width: 40%;\n    margin: 0 30%;\n}\n\n.owner {\n    width: 100%;\n    text-align: end;\n    font-size: 14px;\n    font-weight: 600;\n    padding-top: 10px;\n}\n\n.title {\n    text-align: center;\n    color: #2095FE;\n    font-size: 64px;\n    margin-bottom: 10px;\n    font-weight: 600;\n}\n\n.tag {\n    font-weight: 600;\n    margin-top: 20px;\n    color: #363636;\n}\n\n.chat-container {\n    width: 100%;\n    min-height: calc(100vh - 325px);\n    max-height: calc(100vh - 325px);\n    overflow-x: hidden;\n    overflow-y: auto;\n    border: 3px solid #2095FE;\n    border-radius: 10px;\n    /* background: #ffffffd2; */\n}\n\n.message {\n    width: 65%;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 20px;\n    padding: 12px 20px;\n    margin: 10px 10px;\n}\n\n.message.from {\n    float: left;\n    /* background: #E5E4E9; */\n    background: #ffffff;\n    color: #000000;\n}\n\n.message.to {\n    float: right;\n    text-align: end;\n    background: #2095FE;\n    color: #fff;\n}\n\n.clickable {\n    pointer-events: all;\n    cursor: pointer;\n    color: #2095FE;\n}\n\n.clickable:hover {\n    color: #000000;\n}\n\ninput {\n    font-family: 'Prompt', sans-serif;\n    font-weight: 600;\n    width: calc(100% - 27px);\n    border: 3px solid #2095FE;\n    border-radius: 10px;\n    font-size: 18px;\n    padding: 8px 14px;\n    margin: 8px 0 15px 0;\n    /* background: #ffffffd2; */\n}\n\ntextarea:focus, input:focus{\n    outline: none;\n}\n\n.button {\n    background: #2095FE;\n    color: #fff;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 8px 15px;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.button:hover {\n    background: rgb(41, 143, 231);\n}\n\n.button:active {\n    background: rgb(38, 114, 180);\n}\n\n.message-video, .message-data {\n    width: 100%;\n    height: auto;\n    margin-top: 10px;\n}\n\n@media screen and (max-width: 1100px) {\n    .chat-app {\n        width: 55%;\n        margin: 0 22.5%;\n    }\n}\n\n@media screen and (max-width: 900px) {\n    .chat-app {\n        width: 65%;\n        margin: 0 17.5%;\n    }\n}\n\n@media screen and (max-width: 700px) {\n    .chat-app {\n        width: 75%;\n        margin: 0 12.5%;\n    }\n}\n\n@media screen and (max-width: 500px) {\n    .chat-app {\n        width: 85%;\n        margin: 0 7.5%;\n    }\n    .title {\n        font-size: 56px;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .chat-app {\n        width: 95%;\n        margin: 0 2.5%;\n    }\n}"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-app\">\n  <div class=\"owner\">\n    TheBigDataSolution\n  </div>\n  <div class=\"title\">Ad Bot</div>\n\n  <div class=\"chat-container\" id=\"chat-container\">\n    <div class=\"message from\">\n      Welcome to Ad Bot. What would you like to know about us?<br>\n      <span class=\"clickable\" (click)=\"clickAccess(0, 'Video')\">Video</span> |\n      <span class=\"clickable\" (click)=\"clickAccess(1, 'Data')\">Data</span> |\n      <span class=\"clickable\" (click)=\"clickAccess(2, 'Products')\">Products</span>\n    </div>\n\n    <ng-container *ngFor=\"let message of messages\">\n\n      <!-- Build-in chat -->\n      <div *ngIf=\"message.sentBy=='bot' && message.content=='#code0'\"\n      class=\"message from\">\n        Video Presentation<br>\n        <video class=\"message-video\" controls autoplay>\n          <source src=\"assets/video/thebigdatasolution.com - md.mp4\" type=\"video/mp4\">\n        </video> \n      </div>\n      <div *ngIf=\"message.sentBy=='bot' && message.content=='#code1'\"\n      class=\"message from\">\n        Data Visualization\n        <div class=\"message-data\">\n          <app-message-data></app-message-data>\n        </div> \n      </div>\n\n      <!-- Other chat -->\n      <div *ngIf=\"message.sentBy=='user' || codeList.indexOf(message.content)<0\"\n      class=\"message\" [ngClass]=\"{'from': message.sentBy==='bot', 'to':message.sentBy==='user'}\"\n      [innerHTML]=\"message.content\">\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"tag\">Your Message</div>\n  <input #talk (keyup.enter)=\"sendMessage(talk.value); talk.value='';\" type=\"text\">\n  <a class=\"button\" (click)=\"sendMessage(talk.value); talk.value='';\">Send</a>\n</div>"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var d3 = __webpack_require__("./node_modules/d3/index.js");
var chat_service_1 = __webpack_require__("./src/app/services/chat.service.ts");
core_1.enableProdMode();
var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent(elementRef, chatService) {
        this.elementRef = elementRef;
        this.chatService = chatService;
        this.messages = [];
        this.codeList = ['#code0', '#code1', '#code2'];
    }
    ChatbotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatContainer = d3.select(this.elementRef.nativeElement).select('.chat-container');
        this.subscription = this.chatService.observeBotResponse().subscribe(function (content) {
            _this.messages.push({ content: content, sentBy: 'bot' });
            _this.scrollBottom();
        });
    };
    ChatbotComponent.prototype.clickAccess = function (type, message) {
        this.messages.push({ content: message, sentBy: 'user' });
        this.scrollBottom();
        if (type == 0) {
            this.messages.push({ content: '#code0', sentBy: 'bot' });
        }
        else if (type == 1) {
            this.messages.push({ content: '#code1', sentBy: 'bot' });
        }
        else {
        }
        this.scrollBottom();
    };
    ChatbotComponent.prototype.sendMessage = function (query) {
        if (query != '') {
            this.messages.push({ content: query, sentBy: 'user' });
            this.scrollBottom();
            var input = query.toLowerCase();
            if (input == 'video')
                this.clickAccess(0, input);
            else if (input == 'data')
                this.clickAccess(1, input);
            else if (input == 'products')
                this.clickAccess(2, input);
            else {
                this.messages.push({ content: 'Please choose between video, data, or products.', sentBy: 'bot' });
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
    };
    ChatbotComponent.prototype.scrollBottom = function () {
        var scrollheight = this.chatContainer.property("scrollHeight");
        d3.timeout(function () {
            document.getElementById('chat-container').scrollTop = scrollheight;
        }, 100);
    };
    ChatbotComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ChatbotComponent = __decorate([
        core_1.Component({
            selector: 'app-chatbot',
            template: __webpack_require__("./src/app/chatbot/chatbot.component.html"),
            styles: [__webpack_require__("./src/app/chatbot/chatbot.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            chat_service_1.ChatService])
    ], ChatbotComponent);
    return ChatbotComponent;
}());
exports.ChatbotComponent = ChatbotComponent;


/***/ }),

/***/ "./src/app/message-data/message-data.component.css":
/***/ (function(module, exports) {

module.exports = ".data-container {\r\n    width: 100%;\r\n}\r\n\r\n*>>> .hoverable {\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/message-data/message-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"data-container\">\n  \n</div>\n"

/***/ }),

/***/ "./src/app/message-data/message-data.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var d3 = __webpack_require__("./node_modules/d3/index.js");
var MessageDataComponent = /** @class */ (function () {
    function MessageDataComponent(elementRef) {
        this.elementRef = elementRef;
        this.width = 1000;
        this.height = 500;
    }
    MessageDataComponent.prototype.ngOnInit = function () {
        this.host = d3.select(this.elementRef.nativeElement).select('.data-container');
        this.svg = this.host.append('svg')
            .attr('pointer-events', 'none').attr('width', '100%')
            .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
            .attr('viewBox', '0 0 ' + this.width + ' ' + this.height);
        this.workspace = this.svg.append('g').attr('class', 'workspace');
        this.setup();
    };
    MessageDataComponent.prototype.setup = function () {
        this.workspace.append('rect').attr('class', 'hoverable')
            .attr('width', this.width).attr('height', this.height)
            .style('fill', 'orange')
            .on('mouseenter', function () {
        })
            .on('mouseleave', function () {
        });
    };
    MessageDataComponent = __decorate([
        core_1.Component({
            selector: 'app-message-data',
            template: __webpack_require__("./src/app/message-data/message-data.component.html"),
            styles: [__webpack_require__("./src/app/message-data/message-data.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], MessageDataComponent);
    return MessageDataComponent;
}());
exports.MessageDataComponent = MessageDataComponent;


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var api_ai_javascript_1 = __webpack_require__("./node_modules/api-ai-javascript/index.ts");
var ChatService = /** @class */ (function () {
    function ChatService() {
        this.token = '7089027a8ba24f398de7b243469b2bcb';
        this.client = new api_ai_javascript_1.ApiAiClient({ accessToken: this.token });
        this.subject = new Subject_1.Subject();
    }
    ChatService.prototype.talk = function (query) {
        var _this = this;
        this.client.textRequest(query)
            .then(function (response) {
            if (response.result.fulfillment.speech == '') {
                _this.subject.next('ขอโทษครับ ตอนนี้ผมยังไม่เข้าใจที่คุณถามนะครับ');
            }
            else {
                _this.subject.next(response.result.fulfillment.speech);
            }
        })
            .catch(function (err) {
            _this.subject.next(err);
        });
    };
    // Observable
    ChatService.prototype.observeBotResponse = function () {
        return this.subject.asObservable();
    };
    ChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map