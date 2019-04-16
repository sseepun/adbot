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

module.exports = ".app-container {\r\n    width: 100%;\r\n    height: calc(100vh - 20px);\r\n    margin: 0;\r\n    padding: 0;\r\n    background: #000;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\" style=\"height:100vh;\">\n  <app-chatbot></app-chatbot>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatbot_chatbot_component__ = __webpack_require__("./src/app/chatbot/chatbot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_data_message_data_component__ = __webpack_require__("./src/app/message-data/message-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Services

// Components



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__chatbot_chatbot_component__["a" /* ChatbotComponent */],
                __WEBPACK_IMPORTED_MODULE_5__message_data_message_data_component__["a" /* MessageDataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatbot/chatbot.component.css":
/***/ (function(module, exports) {

module.exports = ".chat-app {\r\n    width: 40%;\r\n    margin: 0 30%;\r\n}\r\n\r\n.owner {\r\n    width: 100%;\r\n    text-align: end;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding-top: 10px;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n    color: #2095FE;\r\n    font-size: 64px;\r\n    margin-bottom: 10px;\r\n    font-weight: 600;\r\n}\r\n\r\n.tag {\r\n    font-weight: 600;\r\n    margin-top: 20px;\r\n    color: #ffffff;\r\n}\r\n\r\n.chat-container {\r\n    width: 100%;\r\n    min-height: calc(100vh - 325px);\r\n    max-height: calc(100vh - 325px);\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border: 3px solid #2095FE;\r\n    border-radius: 10px;\r\n    /* background: #ffffffd2; */\r\n}\r\n\r\n.message {\r\n    width: 65%;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    border-radius: 20px;\r\n    padding: 12px 20px;\r\n    margin: 10px 10px;\r\n}\r\n\r\n.message.from {\r\n    float: left;\r\n    /* background: #E5E4E9; */\r\n    background: #ffffff;\r\n    color: #000000;\r\n}\r\n\r\n.message.to {\r\n    float: right;\r\n    text-align: end;\r\n    background: #2095FE;\r\n    color: #fff;\r\n}\r\n\r\n.clickable {\r\n    pointer-events: all;\r\n    cursor: pointer;\r\n    color: #2095FE;\r\n}\r\n\r\n.clickable:hover {\r\n    color: #000000;\r\n}\r\n\r\ninput {\r\n    font-family: 'Prompt', sans-serif;\r\n    font-weight: 600;\r\n    width: calc(100% - 27px);\r\n    border: 3px solid #2095FE;\r\n    border-radius: 10px;\r\n    font-size: 18px;\r\n    padding: 8px 14px;\r\n    margin: 8px 0 15px 0;\r\n    /* background: #ffffffd2; */\r\n}\r\n\r\ntextarea:focus, input:focus{\r\n    outline: none;\r\n}\r\n\r\n.button {\r\n    background: #2095FE;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    padding: 8px 15px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n    background: rgb(41, 143, 231);\r\n}\r\n\r\n.button:active {\r\n    background: rgb(38, 114, 180);\r\n}\r\n\r\n.message-video, .message-data {\r\n    width: 100%;\r\n    height: auto;\r\n    margin-top: 10px;\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n    .chat-app {\r\n        width: 55%;\r\n        margin: 0 22.5%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .chat-app {\r\n        width: 65%;\r\n        margin: 0 17.5%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .chat-app {\r\n        width: 75%;\r\n        margin: 0 12.5%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .chat-app {\r\n        width: 85%;\r\n        margin: 0 7.5%;\r\n    }\r\n    .title {\r\n        font-size: 56px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .chat-app {\r\n        width: 95%;\r\n        margin: 0 2.5%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-app\">\r\n  <div class=\"owner\">\r\n    TheBigDataSolution\r\n  </div>\r\n  <div class=\"title\">Ad Bot</div>\r\n\r\n  <div class=\"chat-container\" id=\"chat-container\">\r\n    <div class=\"message from\">\r\n      Welcome to Ad Bot. What would you like to know about us?<br>\r\n      <span class=\"clickable\" (click)=\"clickAccess(0, 'Video')\">Video</span> |\r\n      <span class=\"clickable\" (click)=\"clickAccess(1, 'Data')\">Data</span> |\r\n      <span class=\"clickable\" (click)=\"clickAccess(2, 'Products')\">Products</span>\r\n    </div>\r\n\r\n    <ng-container *ngFor=\"let message of messages\">\r\n\r\n      <!-- Build-in chat -->\r\n      <div *ngIf=\"message.sentBy=='bot' && message.content=='#code0'\" class=\"message from\">\r\n        Video Presentation<br>\r\n        <video class=\"message-video\" controls autoplay>\r\n          <source src=\"assets/video/thebigdatasolution.com - md.mp4\" type=\"video/mp4\">\r\n        </video> \r\n      </div>\r\n      <div *ngIf=\"message.sentBy=='bot' && message.content=='#code1'\" class=\"message from\">\r\n        Data Visualization\r\n        <div class=\"message-data\">\r\n          <app-message-data></app-message-data>\r\n        </div> \r\n      </div>\r\n      <div *ngIf=\"message.sentBy=='bot' && message.content=='#code2'\" class=\"message from\">\r\n        Please check out<br>\r\n        <a href=\"http://bigdata300.com/\" target=\"_blank\">\r\n          www.bigdata300.com\r\n        </a> \r\n      </div>\r\n\r\n      <!-- Other chat -->\r\n      <div *ngIf=\"message.sentBy=='user' || codeList.indexOf(message.content)<0\"\r\n      class=\"message\" [ngClass]=\"{'from': message.sentBy==='bot', 'to':message.sentBy==='user'}\"\r\n      [innerHTML]=\"message.content\">\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"tag\">Your Message</div>\r\n  <input #talk (keyup.enter)=\"sendMessage(talk.value); talk.value='';\" type=\"text\">\r\n  <a class=\"button\" (click)=\"sendMessage(talk.value); talk.value='';\">Send</a>\r\n</div>"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent(elementRef, chatService) {
        this.elementRef = elementRef;
        this.chatService = chatService;
        this.messages = [];
        this.codeList = ['#code0', '#code1', '#code2'];
    }
    ChatbotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatContainer = __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* select */](this.elementRef.nativeElement).select('.chat-container');
        this.subscription = this.chatService.observeBotResponse().subscribe(function (content) {
            _this.messages.push({ content: content, sentBy: 'bot' });
            _this.scrollBottom();
        });
    };
    ChatbotComponent.prototype.clickAccess = function (type, message) {
        var _this = this;
        this.messages.push({ content: message, sentBy: 'user' });
        this.scrollBottom();
        if (type == 0) {
            this.messages.push({ content: '#code0', sentBy: 'bot' });
        }
        else if (type == 1) {
            this.messages.push({ content: '#code1', sentBy: 'bot' });
        }
        else {
            this.messages.push({ content: '#code2', sentBy: 'bot' });
        }
        __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* timeout */](function () { _this.scrollBottom(); }, 200);
    };
    ChatbotComponent.prototype.sendMessage = function (query) {
        if (query != '') {
            var input = query.toLowerCase();
            if (input == 'video')
                this.clickAccess(0, input);
            else if (input == 'data')
                this.clickAccess(1, input);
            else if (input == 'products')
                this.clickAccess(2, input);
            else {
                this.messages.push({ content: query, sentBy: 'user' });
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
        __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* timeout */](function () {
            document.getElementById('chat-container').scrollTop = scrollheight;
        }, 100);
    };
    ChatbotComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ChatbotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chatbot',
            template: __webpack_require__("./src/app/chatbot/chatbot.component.html"),
            styles: [__webpack_require__("./src/app/chatbot/chatbot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], ChatbotComponent);
    return ChatbotComponent;
}());



/***/ }),

/***/ "./src/app/message-data/message-data.component.css":
/***/ (function(module, exports) {

module.exports = ".data-container {\r\n    width: 100%;\r\n}\r\n\r\n*>>> .hoverable {\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n    fill: #000000;\r\n    opacity: 0;\r\n}\r\n\r\n*>>> .data-rect {\r\n    fill: #2095FE;\r\n}\r\n\r\n*>>> .tick line {\r\n    opacity: 1;\r\n}\r\n\r\n*>>> .tick text {\r\n    font-size: 28px;\r\n}\r\n\r\n*>>> .data-label {\r\n    text-anchor: middle;\r\n    font-size: 28px;\r\n}\r\n\r\n*>>> .data-rect {\r\n    pointer-events: auto;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.3s fill;\r\n    transition: 0.3s fill;\r\n}\r\n\r\n*>>> .data-rect:hover {\r\n    fill: orange;\r\n}"

/***/ }),

/***/ "./src/app/message-data/message-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"data-container\">\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/message-data/message-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageDataComponent = /** @class */ (function () {
    function MessageDataComponent(elementRef) {
        this.elementRef = elementRef;
        this.width = 1000;
        this.height = 500;
        this.data = [
            { desc: 'Ant', value: 820 },
            { desc: 'Bird', value: 542 },
            { desc: 'Cat', value: 1165 },
            { desc: 'Dog', value: 760 },
            { desc: 'Eagle', value: 1000 },
            { desc: 'Fox', value: 450 }
        ];
    }
    MessageDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.host = __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* select */](this.elementRef.nativeElement).select('.data-container');
        this.svg = this.host.append('svg')
            .attr('pointer-events', 'none').attr('width', '100%')
            .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
            .attr('viewBox', '0 0 ' + this.width + ' ' + this.height);
        this.workspace = this.svg.append('g').attr('class', 'workspace');
        this.spec = {
            padLeft: 0.08 * this.width,
            padTop: 0.0 * this.height,
            padBottom: 0.08 * this.height,
            slotW: 0.92 * this.width / this.data.length,
            padW: 0.92 * this.width / this.data.length * 0.15,
            graphH: 0.92 * this.height,
            yScale: __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* scaleLinear */]().domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* max */](this.data.map(function (d) { return d.value; }))])
                .range([0.92 * this.height, 0])
        };
        __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* timeout */](function () {
            _this.setup();
        }, 300);
    };
    MessageDataComponent.prototype.setup = function () {
        // this.workspace.append('rect').attr('class', 'hoverable')
        //   .attr('width', this.width).attr('height', this.height);
        var _this = this;
        var dataSlots = this.workspace.selectAll('g.data-slot').data(this.data).enter().append('g')
            .attr('class', 'data-slot').attr('id', function (d, i) { return 'data' + i; })
            .attr('transform', function (d, i) {
            return 'translate(' + (_this.spec.padLeft + i * _this.spec.slotW) + ',' + (_this.spec.padTop) + ')';
        });
        dataSlots.append('rect').attr('class', 'data-rect')
            .attr('x', this.spec.padW).attr('y', this.spec.graphH)
            .attr('width', this.spec.slotW - 2 * this.spec.padW).attr('height', 0)
            .on('mouseenter', function (d, i) {
            _this.workspace.select('#data' + i).select('rect').transition().duration(300)
                .attr('x', _this.spec.padW / 2).attr('width', _this.spec.slotW - _this.spec.padW);
        })
            .on('mouseleave', function (d, i) {
            _this.workspace.select('#data' + i).select('rect').transition().duration(300)
                .attr('x', _this.spec.padW).attr('width', _this.spec.slotW - 2 * _this.spec.padW);
        })
            .transition().duration(600)
            .attr('y', function (d) { return _this.spec.yScale(d.value); })
            .attr('height', function (d) { return _this.spec.graphH - _this.spec.yScale(d.value); });
        dataSlots.append('text').attr('class', 'data-label')
            .attr('x', this.spec.slotW / 2).attr('y', this.spec.graphH + this.spec.padBottom)
            .text(function (d) { return d.desc; });
        // Y axis
        this.svg.insert('g', '.workspace').attr('class', 'y-axis')
            .attr('transform', 'translate(' + this.spec.padLeft + ',' + this.spec.padTop + ')')
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["a" /* axisLeft */](this.spec.yScale)
            .tickSize(-this.width + this.spec.padLeft)
            .ticks(5));
        this.svg.selectAll('.tick').select('text').attr('x', -6);
    };
    MessageDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-message-data',
            template: __webpack_require__("./src/app/message-data/message-data.component.html"),
            styles: [__webpack_require__("./src/app/message-data/message-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], MessageDataComponent);
    return MessageDataComponent;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_api_ai_javascript__ = __webpack_require__("./node_modules/api-ai-javascript/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService() {
        this.token = '7089027a8ba24f398de7b243469b2bcb';
        this.client = new __WEBPACK_IMPORTED_MODULE_2_api_ai_javascript__["a" /* ApiAiClient */]({ accessToken: this.token });
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map