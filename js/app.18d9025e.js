(function(t){function s(s){for(var a,n,r=s[0],l=s[1],c=s[2],u=0,h=[];u<r.length;u++)n=r[u],i[n]&&h.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(s);while(h.length)h.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,s=0;s<o.length;s++){for(var e=o[s],a=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(a=!1)}a&&(o.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},i={app:0},o=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var d=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"36f5":function(t,s,e){},"43cb":function(t,s,e){t.exports=e.p+"../img/hots.528dd1ba.svg"},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"wrapper-content"},[e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"note-header",staticStyle:{margin:"1.5em 0","justify-content":"center"}},[e("p",[t._v(" "+t._s(t.title)+" ")])]),t.message||t.error?e("message",{attrs:{message:t.message}}):t._e(),e("newNote",{attrs:{note:t.note},on:{addNote:t.addNote}}),e("showFood",{attrs:{hots:this.hots,drinks:this.drinks,soups:this.soups,grid:t.grid},on:{randomizeIt:t.randomize,removeI:t.removeItem,removing:t.removeAll}}),e("div",{staticClass:"note-header",staticStyle:{margin:".7em 0"}},[e("h1",[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"icons"},[e("svg",{class:{active:t.grid},staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(s){t.grid=!0}}},[e("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),e("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),e("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),e("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),e("svg",{class:{active:!t.grid},staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(s){t.grid=!1}}},[e("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),e("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),e("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),e("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),e("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),e("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])]),e("notes",{attrs:{nowDate:this.nowDate,days:this.days,grid:t.grid},on:{remove:t.removeNote,updata:t.updateItems}})],1)])])])},o=[],n=(e("7f7f"),e("57e7"),e("f499")),r=e.n(n),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"message"},[e("p",[t._v(t._s(t.message))])])},c=[],d={props:{message:{type:String,required:!0}}},u=d,h=(e("9d40"),e("2877")),m=Object(h["a"])(u,l,c,!1,null,"4cd9fb30",null),p=m.exports,f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"notes",on:{click:t.updateItems}},t._l(t.days,(function(s,a){return e("div",{key:"A"+a,staticClass:"note",class:{full:!t.grid,nowDate:a==t.nowDate}},[e("div",{staticClass:"note-header",class:{full:!t.grid}},[e("p",[t._v(t._s(s.dayName))]),e("p",{staticClass:"krest",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.removeNote(a)}}},[t._v("✖")])]),e("div",{staticClass:"note-body"},[e("div",{staticClass:"item_head"},[t._m(0,!0),e("div",{staticClass:"type_header",class:{full:!t.grid}},[t._v("Горячее")])]),t._l(s.dayHots,(function(s,a){return e("p",{key:"B"+a,class:{full:!t.grid,minus:s.status},on:{click:function(t){s.status=!s.status}}},[t._v(t._s(s.name))])})),e("div",{staticClass:"item_head"},[t._m(1,!0),e("div",{staticClass:"type_header",class:{full:!t.grid}},[t._v("Напитки")])]),t._l(s.dayDrinks,(function(s,a){return e("p",{key:"C"+a,class:{full:!t.grid,minus:s.status},on:{click:function(t){s.status=!s.status}}},[t._v(t._s(s.name))])})),e("div",{staticClass:"item_head"},[t._m(2,!0),e("div",{staticClass:"type_header",class:{full:!t.grid}},[t._v("Суп")])]),e("p",{class:{full:!t.grid,minus:s.daySoups[0].status},on:{click:function(t){s.daySoups[0].status=!s.daySoups[0].status}}},[t._v(t._s(s.daySoups[0].name))])],2)])})),0)},v=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon_food"},[a("img",{staticClass:"icon_food_img",attrs:{src:e("43cb"),alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon_food"},[a("img",{staticClass:"icon_food_img",attrs:{src:e("a924"),alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon_food"},[a("img",{staticClass:"icon_food_img",attrs:{src:e("f662"),alt:""}})])}],y={props:{days:{type:Array,required:!0},grid:{type:Boolean,required:!0},nowDate:{required:!0}},methods:{removeNote:function(t){this.$emit("remove",t)},updateItems:function(){this.$emit("updata")}}},_=y,g=Object(h["a"])(_,f,v,!1,null,null,null),k=g.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"new-note"},[e("label",[t._v("Блюдо")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],staticClass:"input_name",attrs:{placeholder:"Название блюда",type:"text"},domProps:{value:t.note.title},on:{input:function(s){s.target.composing||t.$set(t.note,"title",s.target.value)}}}),e("label",[t._v("Тип блюда")]),e("div",{staticClass:"dish_types"},[e("p",{staticClass:"dish_types_item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.note.type,expression:"note.type"}],staticClass:"rad",attrs:{type:"radio",name:"type",value:"hots",id:"ho",checked:""},domProps:{checked:t._q(t.note.type,"hots")},on:{change:function(s){return t.$set(t.note,"type","hots")}}}),e("label",{attrs:{for:"ho"}},[t._v("Горячее")])]),e("p",{staticClass:"dish_types_item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.note.type,expression:"note.type"}],staticClass:"rad",attrs:{type:"radio",name:"type",value:"drinks",id:"dr"},domProps:{checked:t._q(t.note.type,"drinks")},on:{change:function(s){return t.$set(t.note,"type","drinks")}}}),e("label",{attrs:{for:"dr"}},[t._v("Напиток")])]),e("p",{staticClass:"dish_types_item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.note.type,expression:"note.type"}],staticClass:"rad",attrs:{type:"radio",name:"type",value:"soups",id:"so"},domProps:{checked:t._q(t.note.type,"soups")},on:{change:function(s){return t.$set(t.note,"type","soups")}}}),e("label",{attrs:{for:"so"}},[t._v("Суп")])])]),e("button",{staticClass:"neo_button btn btnPrimary ",on:{click:t.addNote}},[t._v("Добавить блюдо")])])},w=[],S={props:{note:{type:Object,required:!0}},methods:{addNote:function(){this.$emit("addNote",this.note)}}},b=S,x=(e("72c7"),Object(h["a"])(b,C,w,!1,null,null,null)),I=x.exports,N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"food_items"},[e("details",[e("summary",[t._v("Блюда на неделю")]),e("div",{staticClass:"detail_content"},[e("div",{staticClass:"foods_header"}),e("div",{staticClass:"hots"},[t._m(0),t._l(t.hots,(function(s,a){return e("div",{key:a,staticClass:"hots_item"},[t._v("\n            "+t._s(s)+"\n            "),e("p",{staticClass:"krest",on:{click:function(s){return t.removeItem(a,t.hots,"hots")}}},[t._v("✖")])])}))],2),e("div",{staticClass:"drinks"},[t._m(1),t._l(t.drinks,(function(s,a){return e("div",{key:a,staticClass:"hots_item"},[t._v("\n              "+t._s(s)+"\n              "),e("p",{staticClass:"krest",on:{click:function(s){return t.removeItem(a,t.drinks,"drinks")}}},[t._v("✖")])])}))],2),e("div",{staticClass:"soups"},[t._m(2),t._l(t.soups,(function(s,a){return e("div",{key:a,staticClass:"hots_item"},[t._v("\n            "+t._s(s)+"\n            "),e("p",{staticClass:"krest",on:{click:function(s){return t.removeItem(a,t.soups,"soups")}}},[t._v("✖")])])}))],2),e("div",{staticClass:"clearAll",on:{click:t.removeAll}},[t._v("Стереть всё")])])]),e("button",{staticClass:"btn btnPrimary",on:{click:t.randomize}},[t._v(" Составить рацион")])])},$=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item_head"},[a("div",{staticClass:"icon_food"},[a("img",{staticClass:"icon_food_img",attrs:{src:e("43cb"),alt:""}})]),a("div",{staticClass:"hots_head"},[t._v("Горячее")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item_head"},[a("div",{staticClass:"icon_food"},[a("img",{staticClass:"icon_food_img",attrs:{src:e("a924"),alt:""}})]),a("div",{staticClass:"hots_head"},[t._v("Напитки")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item_head"},[a("div",{staticClass:"icon_food"},[a("img",{staticClass:"icon_food_img",attrs:{src:e("f662"),alt:""}})]),a("div",{staticClass:"hots_head"},[t._v("Супы")])])}],M={props:{hots:{type:Array,required:!0},drinks:{type:Array,required:!0},soups:{type:Array,required:!0},grid:{type:Boolean,required:!0}},methods:{randomize:function(){this.$emit("randomizeIt")},removeItem:function(t,s,e){this.$emit("removeI",t,s,e)},removeAll:function(){this.$emit("removing")}}},O=M,j=Object(h["a"])(O,N,$,!1,null,null,null),q=j.exports,P={mounted:function(){var t=new Date;this.nowDate=t.getDay()-1,localStorage.getItem("days")&&(this.days=JSON.parse(localStorage.getItem("days"))),localStorage.getItem("hots")&&(this.hots=JSON.parse(localStorage.getItem("hots"))),localStorage.getItem("drinks")&&(this.drinks=JSON.parse(localStorage.getItem("drinks"))),localStorage.getItem("soups")&&(this.soups=JSON.parse(localStorage.getItem("soups")))},components:{message:p,notes:k,newNote:I,showFood:q},data:function(){return{title:"Составь рацион",nowDate:"",error:!1,search:"",message:null,grid:!0,note:{title:"",type:""},days:[],hots:[],drinks:[],soups:[]}},methods:{updateItems:function(){localStorage.setItem("days",r()(this.days))},addNote:function(){var t=this.note,s=t.title,e=t.type;if(""===s)return this.message="Блюдо не может быть пустым",!1;"hots"!=e&&e||-1!=this.hots.indexOf(s)?(this.error=!0,this.message="Такое блюдо уже есть"):(this.hots.push(s),this.error=!1,this.message=""),"soups"==e&&this.soups.push(s),"drinks"==e&&this.drinks.push(s),localStorage.setItem("soups",r()(this.soups)),localStorage.setItem("drinks",r()(this.drinks)),localStorage.setItem("hots",r()(this.hots)),this.error=!1,this.message="",this.note.title=""},removeNote:function(t){this.days.splice(t,1),localStorage.setItem("days",r()(this.days))},removeItem:function(t,s,e){s.splice(t,1),console.log(e),localStorage.setItem(e,r()(s))},removeAll:function(){this.drinks=[],this.hots=[],this.soups=[],localStorage.setItem("soups",r()(this.soups)),localStorage.setItem("drinks",r()(this.drinks)),localStorage.setItem("hots",r()(this.hots))},randomize:function(){if(this.hots.length<3||this.drinks.length<3||this.soups.length<2)this.error=!0,this.message="Нужно как минимум 3 блюда каждого типа";else{this.days=[];for(var t=0;t<7;t++){var s=[],e=[],a=["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],i=a[t];e.push({name:this.hots[Math.floor(Math.random()*this.drinks.length)],status:!1}),s.push({name:this.drinks[Math.floor(Math.random()*this.drinks.length)],status:!1});while(1){var o=this.hots[Math.floor(Math.random()*this.hots.length)];if(o!=e[0].name){e.push({name:o,status:!1});break}}while(1){var n=this.drinks[Math.floor(Math.random()*this.drinks.length)];if(n!=s[0].name){s.push({name:n,status:!1});break}}var l=[];if(l.push({name:this.soups[Math.floor(Math.random()*this.soups.length)],status:!1}),t>1){if(2==t&&(l.name=this.days[1].daySoups.name))while(l.name==this.days[1].daySoups.name)l.push({name:this.soups[Math.floor(Math.random()*this.soups.length)],status:!1});if(4==t&&(l.name=this.days[3].daySoups.name))while(l.name==this.days[3].daySoups.name)l.push({name:this.soups[Math.floor(Math.random()*this.soups.length)],status:!1});if(6==t&&(l.name=this.days[5].daySoups.name))while(l.name==this.days[5].daySoups.name)l.push({name:this.soups[Math.floor(Math.random()*this.soups.length)],status:!1});t%2!=0&&(l.name=this.days[t-1].daySoups.name)}this.days.push({dayName:i,dayHots:e,dayDrinks:s,daySoups:l}),localStorage.setItem("days",r()(this.days))}console.log("тот",this.days[0].daySoups[0].name)}}}},D=P,E=Object(h["a"])(D,i,o,!1,null,null,null),A=E.exports;e("36f5");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(A)}}).$mount("#app")},"72c7":function(t,s,e){"use strict";var a=e("9864"),i=e.n(a);i.a},"7e25":function(t,s,e){},9864:function(t,s,e){},"9d40":function(t,s,e){"use strict";var a=e("7e25"),i=e.n(a);i.a},a924:function(t,s,e){t.exports=e.p+"../img/drinks.23a33f9b.svg"},f662:function(t,s,e){t.exports=e.p+".../img/soups.39132747.svg"}});