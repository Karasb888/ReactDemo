(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1st.86c17a70.svg"},function(e,t,a){e.exports=a.p+"static/media/2nd.74629788.svg"},function(e,t,a){e.exports=a.p+"static/media/3rd.98642d3c.svg"},function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),o=(a(18),a(2)),c=a(3),l=a(5),u=a(4),p=a(6),m=a(1),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).haveChangeOnForm=a.haveChangeOnForm.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"haveChangeOnForm",value:function(e){var t=e.currentTarget;console.log(t);var a=t.elements,n=this.getDatasetValue(a.sortInput,"order"),r=a.filterPeoples.value;this.props.updateData({sortBy:n,filterBy:r,currentPage:1})}},{key:"getDatasetValue",value:function(e,t){var a=Array.from(e).find(function(e){return e.checked});return a?a.dataset[t]:"pages-descending"}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onChange:function(t){e.haveChangeOnForm(t)},className:"header"},r.a.createElement("input",{type:"text",name:"filterPeoples",className:"filterPeoples",placeholder:"\ud83d\udd0d \u041f\u043e\u0438\u0441\u043a \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),r.a.createElement("fieldset",{className:"sorting"},r.a.createElement("div",{className:"fieldName"},"\u0418\u043c\u044f:"),r.a.createElement("div",{className:"sorting__name"},r.a.createElement("input",{name:"sortInput",type:"radio",className:"nameField-descending","data-order":"name-descending"}),r.a.createElement("input",{name:"sortInput",type:"radio",className:"nameField-ascending","data-order":"name-ascending"})),r.a.createElement("div",{className:"fieldName"},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b:"),r.a.createElement("div",{className:"sorting__page-views"},r.a.createElement("input",{name:"sortInput",type:"radio",className:"pageViewsField-descending","data-order":"pages-descending"}),r.a.createElement("input",{name:"sortInput",type:"radio",className:"pageViewsField-ascending","data-order":"pages-ascending"}))))}}]),t}(n.Component),h=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"listItem",id:this.props.id},r.a.createElement("div",{className:"listItem__itemNumber"},this.props.itemNumber),r.a.createElement("div",{className:"listItem__firstLetter"},this.props.firstLetter),r.a.createElement("div",{className:"listItem__info"},r.a.createElement("div",{className:"listItem__fullName"},this.props.fullName),this.props.medal?r.a.createElement("img",{className:"medal",src:this.props.medal}):null,r.a.createElement("div",{className:"listItem__pageViews"},this.props.pageviews),r.a.createElement("div",{className:"listItem__projects"},this.props.projects," \u043f\u0443\u0431\u043b.")))}}]),t}(n.Component),g=a(9),f=a.n(g),v=a(10),b=a.n(v),P=a(11),y=a.n(P),O=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"setMedal",value:function(e){var t;switch(e){case 0:t=f.a;break;case 1:t=b.a;break;case 2:t=y.a}return t}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"list"},this.props.peoples&&this.props.peoples.map(function(t,a){return r.a.createElement(h,{id:t.key,itemNumber:a+1,firstLetter:t.name.charAt(0),fullName:t.name,pageviews:t.pageviews,projects:t.count_pub,medal:e.setMedal(t.key)})}))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).changePageNext=a.changePageNext.bind(Object(m.a)(Object(m.a)(a))),a.changePagePrev=a.changePagePrev.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"changePagePrev",value:function(){var e=this.props.currentPage;this.props.currentPage>1&&this.props.updateData({currentPage:e-1})}},{key:"changePageNext",value:function(){var e=Math.floor(this.props.amountOfPeople/10),t=this.props.currentPage;this.props.currentPage<e&&this.props.updateData({currentPage:t+1})}},{key:"shouldDisplayBtn",value:function(e){var t=Math.round(this.props.amountOfPeople/10);return"next"===e?t===this.props.currentPage?{display:"none"}:{display:"inherit"}:"prev"===e?1===this.props.currentPage?{display:"none"}:{display:"inherit"}:void 0}},{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("button",{style:this.shouldDisplayBtn("prev"),onClick:this.changePagePrev,className:"buttonPrev",type:"button"}),r.a.createElement("div",{className:"showingPages"},this.props.startAmount," - ",this.props.endAmount),r.a.createElement("button",{style:this.shouldDisplayBtn("next"),onClick:this.changePageNext,className:"buttonNext",type:"button"}))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={peoplesPerPage:10,currentPage:1,filterBy:"",numberOfTopElem:3,sortBy:null},e.componentDidMount=e.componentDidMount.bind(Object(m.a)(Object(m.a)(e))),e.updateData=e.updateData.bind(Object(m.a)(Object(m.a)(e))),e.filteredPeoples=e.filteredPeoples.bind(Object(m.a)(Object(m.a)(e))),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateData",value:function(e){var t=this.calculateStartAmountPeople(e.currentPage),a=this.calculateEndAmountPeople(e.currentPage);this.setState({startAmount:t,endAmount:a,currentPage:e.currentPage?e.currentPage:this.state.currentPage,sortBy:e.sortBy?e.sortBy:this.state.sortBy,filterBy:e.filterBy?e.filterBy:this.state.filterBy})}},{key:"calculateStartAmountPeople",value:function(){var e=this.state.currentPage,t=this.state.peoplesPerPage;return 1===e?1:(e-1)*t}},{key:"calculateEndAmountPeople",value:function(e){var t=e?this.calculateStartAmountPeople(e):this.calculateStartAmountPeople(),a=this.state.peoplesPerPage,n=this.state.amountOfPeople;return n-t<=a?n:t+(a-1)}},{key:"componentDidMount",value:function(){var e,t=this;(e="./data.json",fetch(e).then(function(e){if(e.ok)return e.json();throw new Error(e.statusText)})).then(function(e){var a=t.calculateStartAmountPeople(),n=t.calculateEndAmountPeople();t.setState({peoples:e,amountOfPeople:e.length,startAmount:a,endAmount:n,ready:!0})})}},{key:"filteredPeoples",value:function(){var e,t=this,a=this.state.filterBy,n=this.state.sortBy;if(this.state.ready){(e=this.state.peoples.slice()).sort(function(e,t){return t.pageviews-e.pageviews});for(var r=[],s=0;s<this.state.numberOfTopElem;s++)r.push(e[0]),e.splice(0,1);switch(""!==a&&(e=e.filter(function(e){var t=a,n=e.name;return t=t.toLowerCase(),n=n.toLowerCase(),console.log(n.includes(t)),n.includes(t)})),n){case"name-ascending":e.sort(function(e,t){return e.name.localeCompare(t.name)});break;case"name-descending":e.sort(function(e,t){return t.name.localeCompare(e.name)});break;case"pages-descending":e.sort(function(e,t){return e.pageviews-t.pageviews});break;case"pages-ascending":e.sort(function(e,t){return t.pageviews-e.pageviews})}console.log(e),e=e.filter(function(e,a){if(console.log(a,t.state.currentPage,t.state.startAmount),a<(t.state.peoplesPerPage-t.state.numberOfTopElem)*t.state.currentPage&&a>=t.state.startAmount-1)return!0}),console.log(e);for(var i=this.state.numberOfTopElem-1;i>=0;i--)e.unshift(r[i]);return e.forEach(function(e,t){return e.key=t}),e}}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(d,{updateData:this.updateData}),r.a.createElement(O,{peoples:this.filteredPeoples()}),r.a.createElement(j,{updateData:this.updateData,startAmount:this.state.startAmount,currentPage:this.state.currentPage,amountOfPeople:this.state.amountOfPeople,endAmount:this.state.endAmount}))}}]),t}(n.Component),N=document.getElementById("root");i.a.render(r.a.createElement(E,null),N)}],[[12,2,1]]]);
//# sourceMappingURL=main.63f4f630.chunk.js.map