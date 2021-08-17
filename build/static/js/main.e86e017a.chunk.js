(this.webpackJsonppizzeria=this.webpackJsonppizzeria||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},63:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(32),i=s.n(a),r=(s(38),s(39),s(40),s(41),s(8)),l=s(9),o=s(11),d=s(10),j=(s(63),s(12)),h=s(0),b=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"d-flex justify-content-start",id:"navFlex",children:[Object(h.jsx)("h2",{id:"logotext",children:"Pizzeria |"}),Object(h.jsx)(j.b,{to:"/Home",children:Object(h.jsx)("img",{src:"../PizzeriaLogo.png",id:"logo",alt:"logo"})}),Object(h.jsx)(j.b,{to:"/OrderPizza",className:"link",children:"Order a Pizza!"}),Object(h.jsx)(j.b,{to:"/DiyPizza",className:"link",children:"Build your own!"}),Object(h.jsxs)("button",{className:"btn",id:"cart",children:[Object(h.jsx)("img",{alt:"cartImage",src:"./cartwhite.png"}),Object(h.jsx)(j.b,{to:"/Cart",className:"link",children:"Shopping Cart"})]})]})}}]),s}(c.Component);var u=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,93)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))},x=s(2),g=(s(70),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("h2",{children:"Our Story"}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{id:"story",children:"We belive in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza Ever!"}),Object(h.jsx)("p",{id:"story",children:"Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest cheesiest, crunchiest, butteriest Pizzeria's Fresh Pan Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match. "}),Object(h.jsx)("p",{id:"story",children:"We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza Ever!"}),Object(h.jsx)("br",{}),Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{className:"mycard",children:[Object(h.jsx)("td",{id:"infotext",children:Object(h.jsx)("img",{className:"img",alt:"ingredients",src:"./ingredients.jpg"})}),Object(h.jsxs)("td",{children:[Object(h.jsx)("h4",{children:"Ingredients"}),Object(h.jsx)("p",{children:"We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut, Cut, Chop, Chop, Steam, Steam, Stir, Stir. While they're still young and fresh - that's our motto. It makes the kitchen a better place."})]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("tr",{className:"mycard",children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("h4",{children:"Our Chefs"}),Object(h.jsx)("p",{children:"They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you."})]}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{className:"img",id:"chef",src:"./chef2.jpg",alt:"chef"})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("tr",{className:"mycard",children:[Object(h.jsx)("td",{children:Object(h.jsx)("img",{className:"img",alt:"45mins",src:"./45min.jpg"})}),Object(h.jsxs)("td",{children:[Object(h.jsx)("h4",{children:"Right on Time!"}),Object(h.jsx)("p",{children:"Free pizza if not delivered within 45 minutes!"}),Object(h.jsx)("p",{children:" Careful! its still hot!"})]})]})]})]})}}]),s}(c.Component)),p=(s(71),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"placeOrder",value:function(){localStorage.clear(),window.alert("Order Placed!")}},{key:"render",value:function(){var e=this;if(null==localStorage.selectedPizza&&null==localStorage.selectedIngredients)return Object(h.jsxs)("div",{className:"titles",children:[Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:"Your cart is empty!"})]});if(null!=localStorage.selectedPizza&&null==localStorage.selectedIngredients)return Object(h.jsxs)("div",{className:"titles",children:[Object(h.jsxs)("h5",{children:["Pizza:  ",Object(h.jsx)("ul",{children:localStorage.selectedPizza})]}),Object(h.jsxs)("h4",{children:[" Grand Total: ",localStorage.pizzaTotal]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{class:"btn btn-dark",onClick:function(t){e.placeOrder()},children:"Place Order!"})]});if(null==localStorage.selectedPizza&&null!=localStorage.selectedIngredients)return Object(h.jsxs)("div",{className:"titles",children:[Object(h.jsxs)("h5",{children:["Your pizza:",Object(h.jsx)("br",{})," \xa0 Selected Ingredients: ",Object(h.jsx)("ul",{children:localStorage.selectedIngredients})]}),Object(h.jsxs)("h4",{children:["Grand Total: ",localStorage.totalprice]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"btn btn-dark",onClick:function(t){e.placeOrder()},children:"Place Order!"})]});var t=parseInt(localStorage.totalprice)+parseInt(localStorage.pizzaTotal);return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"titles",children:[Object(h.jsxs)("h5",{children:[" Selected Pizza: ",Object(h.jsxs)("ul",{children:[" ",localStorage.selectedPizza]})," "]}),Object(h.jsxs)("h5",{children:["Build Your Own Pizza: ",Object(h.jsx)("br",{})," Selected Ingredients:- ",Object(h.jsx)("ul",{children:localStorage.selectedIngredients})]}),Object(h.jsxs)("h4",{children:["Grand total : Rs. ",t]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"btn btn-dark",onClick:function(t){e.placeOrder()},children:"Place Order!"})]})]})}}]),s}(c.Component)),m=(s(72),s(15)),z=s.n(m),f=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).showAlert=function(e,t){c.pizzaTotal=c.pizzaTotal+parseInt(t),c.selectedPizza.push(e),localStorage.pizzaTotal=c.pizzaTotal,localStorage.selectedPizza=c.selectedPizza,window.alert(e+" is added to cart!")},c.pizzaTotal=0,c.selectedPizza=[],c.state={pizzas:[],myPizza:null},c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;z.a.get("http://localhost:4000/getPizza").then((function(t){e.setState({pizzas:t.data});var s=e.state.pizzas.map((function(t,s){return Object(h.jsx)("table",{className:"menucards",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"titles",children:Object(h.jsx)("h5",{children:t.name})}),Object(h.jsxs)("td",{children:[Object(h.jsx)("h6",{className:"titles",children:"Description:"}),Object(h.jsxs)("ul",{children:["\xa0",t.description]})]}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{className:"pizza",src:t.image,alt:"pizza"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"titles",children:"veg"===t.type?Object(h.jsx)("img",{className:"vegNonveg",alt:"veg",src:"./veg.png"}):Object(h.jsx)("img",{className:"vegNonveg",alt:"nonveg",src:"./nonveg.png"})}),Object(h.jsxs)("td",{children:[Object(h.jsx)("h6",{className:"titles",children:"Ingredients:"}),Object(h.jsx)("ul",{children:t.ingredients+" "})]}),Object(h.jsx)("td",{className:"titles",children:Object(h.jsx)("button",{id:"addtocart",className:"btn",onClick:function(s){return e.showAlert(t.name,t.price)},children:"Add to cart"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"titles",children:Object(h.jsxs)("h5",{children:[" \u20b9. ",t.price]})}),Object(h.jsxs)("td",{children:[Object(h.jsx)("h6",{className:"titles",children:"Toppings: "}),Object(h.jsx)("ul",{children:t.topping+" "})]})]})]})},s)}));e.setState({myPizza:s})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"PizzaMenu",children:[Object(h.jsx)("br",{}),Object(h.jsx)("h2",{id:"Title",children:"Menu"}),Object(h.jsx)("br",{}),this.state.myPizza,Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})}}]),s}(c.Component),v=(s(91),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).onSelect=function(e){c.selectedIngredients.includes(e)?(c.setState({totalprice:c.state.totalprice-e.price}),c.selectedIngredients=c.selectedIngredients.filter((function(t){return t.id!==e.id}))):(c.selectedIngredients.push(e.tname),c.setState({totalprice:c.state.totalprice+e.price}))},c.addToCart=function(){window.alert("Added to cart!"),localStorage.selectedIngredients=c.selectedIngredients,localStorage.totalprice=c.state.totalprice},c.selectedIngredients=[],c.ingredList=[],c.state={ingreds:[],totalprice:0,myData:null},c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;z.a.get("http://localhost:4000/getIngredients").then((function(t){e.setState({ingreds:t.data});var s=e.state.ingreds.map((function(t,s){return Object(h.jsxs)("tr",{className:"ingredBody",children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("h5",{className:"titles",children:t.tname})," ",Object(h.jsxs)("h6",{className:"titles",children:["\u20b9. ",t.price]})]}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{className:"titles",id:"ingredients",src:t.image,alt:"ingreds"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{className:"form-check-input",id:"checkboxes",type:"checkbox",onClick:function(s){return e.onSelect(t)}})})]},s)}));e.setState({myData:s})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"ingredMenu",children:[Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"titles",children:"Make your own pizza!"}),Object(h.jsx)("p",{children:"Pizzeria now gives you options to build your own pizza by choosing fresh ingredients from the list below :-"}),Object(h.jsx)("br",{}),Object(h.jsx)("table",{id:"ingredCard",children:Object(h.jsxs)("tbody",{children:[this.state.myData,Object(h.jsxs)("tr",{className:"ingredBody",children:[Object(h.jsx)("td",{children:Object(h.jsxs)("h3",{className:"titles",id:"total",children:["\xa0Your Total amount is: \u20b9. ",this.state.totalprice]})}),Object(h.jsxs)("td",{className:"titles",children:[" ",Object(h.jsx)("button",{className:"btn",id:"checkout",onClick:function(t){return e.addToCart()},children:Object(h.jsx)(j.b,{to:"/Cart",className:"link-inverse",children:"Build Your Pizza!"})})]})]})]})}),Object(h.jsx)("br",{})]})}}]),s}(c.Component));i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(u,{}),Object(h.jsxs)(x.d,{children:[Object(h.jsx)(x.b,{exact:!0,path:"/",children:Object(h.jsx)(x.a,{to:"/Home"})}),Object(h.jsx)(x.b,{path:"/Home",component:g}),Object(h.jsx)(x.b,{path:"/Cart",component:p}),Object(h.jsx)(x.b,{path:"/OrderPizza",component:f}),Object(h.jsx)(x.b,{path:"/DiyPizza",component:v})]})]})}),document.getElementById("root")),O()}},[[92,1,2]]]);
//# sourceMappingURL=main.e86e017a.chunk.js.map