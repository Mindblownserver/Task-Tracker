(function(e){function t(t){for(var r,c,s=t[0],i=t[1],d=t[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e84":function(e,t,n){"use strict";n("fdd2")},"3dd5":function(e,t,n){"use strict";n("5af9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"},o={key:0};function c(e,t,n,c,s,i){var d=Object(r["k"])("Header"),u=Object(r["k"])("AddTask"),l=Object(r["k"])("Tasks"),f=Object(r["k"])("Footer");return Object(r["g"])(),Object(r["c"])("div",a,[Object(r["f"])(d,{onToggleAdd:i.toggleTasks,title:"Task Tracker",showAdd:s.showAdd},null,8,["onToggleAdd","showAdd"]),s.showAdd?(Object(r["g"])(),Object(r["c"])("div",o,[Object(r["f"])(u,{onAddTask:i.addTask},null,8,["onAddTask"])])):Object(r["d"])("",!0),Object(r["f"])(l,{onToggleReminder:i.ToggleReminder,onDeleteTask:i.DeleteTask,tasks:s.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"]),Object(r["f"])(f)])}var s=n("5530"),i=n("2909"),d=n("1da1"),u=(n("96cf"),n("d3b7"),n("99af"),n("4de4"),n("d81d"),Object(r["p"])("data-v-6125c3fa")),l=u((function(e,t,n,a,o,c){var s=Object(r["k"])("Button");return Object(r["g"])(),Object(r["c"])("header",null,[Object(r["f"])("h1",null,Object(r["l"])(n.title),1),Object(r["f"])(s,{onToggleAdd:c.Toggle,text:n.showAdd?"Close menu":"Add Task",color:n.showAdd?"FireBrick":"ForestGreen"},null,8,["onToggleAdd","text","color"])])}));function f(e,t,n,a,o,c){return Object(r["g"])(),Object(r["c"])("button",{onClick:t[1]||(t[1]=function(e){return c.addTask()}),class:"btn",style:{background:n.color}},Object(r["l"])(n.text),5)}var b={name:"Button",props:{text:String,color:String},methods:{addTask:function(){this.$emit("ToggleAdd"),console.log(this.text)}}};b.render=f;var p=b,m={name:"Header",props:{title:String,showAdd:Boolean},components:{Button:p},emits:["ToggleAdd"],methods:{Toggle:function(){this.$emit("ToggleAdd")}}};n("3dd5");m.render=l,m.__scopeId="data-v-6125c3fa";var j=m;function O(e,t,n,a,o,c){var s=Object(r["k"])("Task");return Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(n.tasks,(function(t){return Object(r["g"])(),Object(r["c"])("div",{key:t.id},[Object(r["f"])(s,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-Task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}function g(e,t,n,a,o,c){return Object(r["g"])(),Object(r["c"])("div",{onDblclick:t[2]||(t[2]=function(t){return e.$emit("toggle-reminder",n.task.id)}),class:[n.task.reminder?"reminder":"","task"]},[Object(r["f"])("h3",null,[Object(r["e"])(Object(r["l"])(n.task.text)+" ",1),Object(r["f"])("i",{onClick:t[1]||(t[1]=function(t){return e.$emit("delete-task",n.task.id)}),class:"fas fa-times"})]),Object(r["f"])("p",null,Object(r["l"])(n.task.day),1)],34)}var h={name:"Task",props:{task:Object}};n("c8dd");h.render=g;var k=h,v={name:"Tasks",props:{tasks:Array},emits:["delete-Task","toggle-reminder"],components:{Task:k}};v.render=O;var T=v,y=Object(r["p"])("data-v-d7f7eef4");Object(r["i"])("data-v-d7f7eef4");var w={class:"form-control"},x=Object(r["f"])("div",{class:"whole-thing"},null,-1),A=Object(r["f"])("label",null,"Task",-1),R={class:"form-control"},S=Object(r["f"])("label",null,"Day & Time",-1),D={class:"para"},_={class:"form-control form-control-check"},P=Object(r["f"])("label",null,"Set Reminder",-1);Object(r["h"])();var N=y((function(e,t,n,a,o,c){return Object(r["g"])(),Object(r["c"])("form",{onSubmit:t[4]||(t[4]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(r["f"])("div",w,[x,A,Object(r["o"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.label=e}),name:"text",placeholder:"Add Task"},null,512),[[r["n"],o.label]])]),Object(r["f"])("div",R,[S,Object(r["o"])(Object(r["f"])("input",{type:"date",name:"day","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.day=e}),placeholder:"Any Day & Time"},null,512),[[r["n"],o.day]]),Object(r["f"])("p",D,Object(r["l"])(c.Current_date())+" by default",1)]),Object(r["f"])("div",_,[P,Object(r["o"])(Object(r["f"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.reminder=e}),name:"reminder"},null,512),[[r["m"],o.reminder]])]),Object(r["f"])("input",{type:"submit",value:"Save Task",class:[o.label?"btn1":"btn","btn-block"]},null,2)],32)})),F={name:"AddTask",data:function(){return{label:"",day:"",reminder:!0}},methods:{Current_date:function(){var e=new Date,t="".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear());return t},onSubmit:function(e){if(e.preventDefault(),this.label){if(""==this.day){var t=new Date,n="".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear());this.day=n}var r={text:this.label,day:this.day,reminder:this.reminder};this.$emit("add-Task",r),this.label="",this.day="",this.reminder=!0}else alert("Please add task")}}};n("7cff");F.render=N,F.__scopeId="data-v-d7f7eef4";var I=F,C=Object(r["p"])("data-v-767b37c5");Object(r["i"])("data-v-767b37c5");var M=Object(r["f"])("a",{href:"/about"},"About",-1),$=Object(r["f"])("p",null,"2021 © Yassine Kharrat",-1);Object(r["h"])();var B=C((function(e,t,n,a,o,c){return Object(r["g"])(),Object(r["c"])("footer",null,[M,$])})),E={name:"Footer"};n("0e84");E.render=B,E.__scopeId="data-v-767b37c5";var H=E,J={name:"App",components:{Header:j,Tasks:T,AddTask:I,Footer:H},data:function(){return{tasks:[],showAdd:!1}},methods:{notifyMe:function(){"Notification"in window?"granted"===Notification.permission?notify():"denied"!==Notification.permission&&Notification.requestPermission((function(e){"granted"===e&&notify()})):alert("This browser does not support system notifications")},notify:function(){var e=new Notification("TITLE OF NOTIFICATION",{icon:"http://carnes.cc/jsnuggets_avatar.jpg",body:"Hey! You are on notice!"});e.onclick=function(){window.open("http://carnes.cc")},setTimeout(e.close.bind(e),7e3)},toggleTasks:function(){this.showAdd=!this.showAdd},addTask:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Notification.requestPermission(),n.next=3,fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 3:return r=n.sent,n.next=6,r.json();case 6:a=n.sent,t.tasks=[].concat(Object(i["a"])(t.tasks),[a]),t.showAdd=!t.showAdd;case 9:case"end":return n.stop()}}),n)})))()},DeleteTask:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm('Are you sure you want to delete "'.concat(t.tasks[e-1].text,'"?'))){n.next=5;break}return n.next=3,fetch("api/tasks/".concat(e),{method:"DELETE"});case 3:r=n.sent,200===r.status?t.tasks=t.tasks.filter((function(t){return t.id!==e})):alert("Error removing task!");case 5:case"end":return n.stop()}}),n)})))()},ToggleReminder:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("api/tasks/".concat(e));case 2:return r=n.sent,n.next=5,r.json();case 5:return a=n.sent,o=Object(s["a"])(Object(s["a"])({},a),{},{reminder:!a.reminder}),n.next=9,fetch("api/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(o)});case 9:return c=n.sent,n.next=12,c.json();case 12:i=n.sent,console.log(i),t.tasks=t.tasks.map((function(t){return t.id===e?Object(s["a"])(Object(s["a"])({},t),{},{reminder:i.reminder}):t}));case 15:case"end":return n.stop()}}),n)})))()},fetchInfo:function(){return Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchInfo();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};n("a069");J.render=c;var U=J;Object(r["b"])(U).mount("#app")},"5af9":function(e,t,n){},7795:function(e,t,n){},"7cff":function(e,t,n){"use strict";n("c27c")},8779:function(e,t,n){},a069:function(e,t,n){"use strict";n("8779")},c27c:function(e,t,n){},c8dd:function(e,t,n){"use strict";n("7795")},fdd2:function(e,t,n){}});
//# sourceMappingURL=app.c98b5e0e.js.map