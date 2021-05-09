(this.webpackJsonpecom=this.webpackJsonpecom||[]).push([[0],{100:function(e,t,r){},101:function(e,t,r){},102:function(e,t,r){},103:function(e,t,r){},104:function(e,t,r){},105:function(e,t,r){},106:function(e,t,r){"use strict";r.r(t);var n,c,a=r(1),s=r.n(a),i=r(21),o=r.n(i),u=(r(53),r(3)),d=r.n(u),l=r(8),j=r(48),b=r(2),h=r(4),p=r(6),O=Object(p.b)("cart/addProducts",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cart_id,c=t.product_id,e.prev=1,e.next=4,fetch("/api/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart_id:n,product_id:c})});case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()),f=Object(p.b)("cart/changeQuant",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.quantity,c=t.product_id,a=t.cart_id,s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({quantity:n,product_id:c,cart_id:a})},e.next=4,fetch("/api/cart",s).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),m=Object(p.b)("cart/getCart",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/cart/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()),x=Object(p.b)("cart/removeOneProduct",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cart_id,c=t.product_id,e.prev=1,e.next=4,fetch("/api/cart",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart_id:n,product_id:c})});case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()),g=Object(p.b)("cart/deleteCart",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,fetch("/api/cart/".concat(t),{method:"DELETE"});case 4:n=e.sent,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),v={name:"cart",initialState:{cartProducts:[],total:"",isLoading:!1,hasError:!1},reducers:{},extraReducers:(n={},Object(h.a)(n,m.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(h.a)(n,m.fulfilled,(function(e,t){e.cartProducts=t.payload,e.isLoading=!1,e.hasError=!1})),Object(h.a)(n,m.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),Object(h.a)(n,f.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(h.a)(n,f.fulfilled,(function(e,t){e.quantity=t.payload,e.isLoading=!1,e.hasError=!1})),Object(h.a)(n,f.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),n)},y=Object(p.c)(v),N=y.actions,w=(N.addToCart,N.changeItemQuantity,N.calculateTotal,function(e){return e.cart.cartProducts}),_=y.reducer,k=r(11),C=(r(33),r(47)),E=r.n(C);k.a.configure();var S=Object(p.b)("users/loginUser",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user_name,c=t.password,e.prev=1,e.next=4,fetch("/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_name:n,password:c})});case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,localStorage.setItem("token",s.token),s.token&&(window.location="/",k.a.success("Logged in sucessfully !")),k.a.error(s),e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,r){return e.apply(this,arguments)}}()),L=Object(p.b)("users/signupUser",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c,a,s,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,c=t.user_name,a=t.contact_num,s=t.password,e.prev=1,e.next=4,fetch("/api/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,user_name:c,contact_num:a,password:s})});case 4:return i=e.sent,e.next=7,i.json();case 7:return o=e.sent,localStorage.setItem("token",o.token),o.token&&(k.a.success("Registered Sucessfully..."),localStorage.removeItem("token")),k.a.error(o),e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,r){return e.apply(this,arguments)}}()),P=Object(p.b)("users/fetchByToken",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/auth/dashboard",{method:"GET",headers:{token:localStorage.token}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),k.a.error("Please try again "),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}()),T=Object(p.b)("users/editProfile",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c,a,s,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.name,a=t.user_name,s=t.contact_num,i=t.password,e.prev=1,o=JSON.text({name:c,user_name:a,contact_num:s,password:i}),e.next=5,E.a.patch("/api/users/".concat(n),o);case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()),q={name:"users",initialState:{token:"",cart_id:"",contact_num:"",user_email:"",user_id:"",user_name:"",isLoading:!1,hasError:!1},reducers:{clearState:function(e){return e.isError=!1,e.isSuccess=!1,e.isFetching=!1,e}},extraReducers:(c={},Object(h.a)(c,S.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(h.a)(c,S.fulfilled,(function(e,t){e.isLoading=!1,e.hasError=!1})),Object(h.a)(c,S.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),Object(h.a)(c,L.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(h.a)(c,L.fulfilled,(function(e,t){e.isLoading=!1,e.hasError=!1})),Object(h.a)(c,L.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),Object(h.a)(c,P.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(h.a)(c,P.fulfilled,(function(e,t){e.cart_id=t.payload[0].cart_id,e.contact_num=t.payload[0].contact_num,e.user_email=t.payload[0].user_email,e.user_id=t.payload[0].user_id,e.user_name=t.payload[0].user_name,e.isLoading=!1,e.hasError=!1})),Object(h.a)(c,P.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),c)},A=Object(p.c)(q),F=A.actions.clearState,I=A.reducer,D=function(e){return e.users},J=function(e){return e.users.cart_id},R=function(e){return e.users.user_id};function M(e){var t=0;return Object.keys(e).forEach((function(r){t+=e[r].price*e[r].quantity})),t}r(77);var H=r(10),U=r(0);function Q(){var e=Object(b.b)(),t=Object(b.c)(w),r=Object(b.c)(D).cart_id,n=function(){var t=Object(l.a)(d.a.mark((function t(n,c){var a,s,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.id,s=n.target.value,i={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({quantity:s,product_id:a,cart_id:r})},t.next=5,fetch("/api/cart",i).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 5:e(m(r));case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),c=M(t);return Object(U.jsx)(a.Fragment,{children:Object(U.jsxs)("div",{className:"body",children:[Object(U.jsx)("button",{id:"clear-all-btn",onClick:function(t){return e(g(r)),void e(m(r))},children:"Clear all"}),Object(U.jsx)("span",{id:"cart-text",children:"your cart"}),t.map((function(t){return Object(U.jsxs)("div",{className:"cart-page",children:[Object(U.jsx)("img",{id:"orders-img",src:t.img,alt:t.name}),Object(U.jsxs)("div",{className:"cart-page_info",children:[Object(U.jsxs)("div",{className:"cart-page_date",children:[Object(U.jsx)("h1",{className:"cart-page_title",children:t.name}),Object(U.jsxs)("h1",{className:"cart-page_price",children:[" \u20b9 ",t.price]}),Object(U.jsxs)("h1",{className:"cart-page_price",children:[" ","Quantity: ",t.quantity]}),Object(U.jsx)("p",{className:"cart-page_text",children:t.description})]}),Object(U.jsxs)("div",{className:"cart-page_buttons",children:[Object(U.jsx)("a",{className:"cart-page_cta",href:"#/",onClick:function(){return function(t){var n=t.id;e(x({cart_id:r,product_id:n})),e(m(r))}(t)},children:"Delete"}),Object(U.jsx)("select",{id:"cart-page_cta",onChange:function(e){return n(e,t)},children:Object(j.a)(Array(100).keys()).map((function(e,t){return Object(U.jsx)("option",{value:1+t,children:1+t},t)}))})]})]})]},t.id)})),Object(U.jsxs)("div",{className:"checkout",id:"checkout",children:[Object(U.jsx)("span",{children:"Total Amount"}),Object(U.jsxs)("span",{className:"checkout-total",children:["\u20b9 ",c]}),Object(U.jsx)("div",{children:Object(U.jsx)(H.b,{to:"/checkout",children:Object(U.jsx)("button",{id:"checkout-btn",children:"Checkout"})})})]})]})})}var B=r(12);r(82);function Y(){var e=Object(b.c)(D),t=e.user_name,r=e.user_id,n=Object(b.b)(),c=Object(a.useState)(""),s=Object(B.a)(c,2),i=s[0],o=s[1],u=Object(a.useState)(""),d=Object(B.a)(u,2),l=d[0],j=d[1],h=Object(a.useState)(""),p=Object(B.a)(h,2),O=p[0],f=p[1],m=Object(a.useState)(""),x=Object(B.a)(m,2),g=x[0],v=x[1],y=Object(a.useState)(r),N=Object(B.a)(y,2),w=N[0];N[1];return Object(U.jsxs)("div",{className:"main-edit-profile",children:[Object(U.jsxs)("div",{className:"profile-headings",children:[Object(U.jsxs)("h3",{id:"name-head",children:["Hello, ",t," \ud83d\udc4b"]}),Object(U.jsx)("h3",{id:"edit-head",children:"Edit Profile"})]}),Object(U.jsx)("div",{className:"edit-form",children:Object(U.jsxs)("form",{children:[Object(U.jsxs)("div",{className:"one",children:[Object(U.jsxs)("div",{className:"row",children:[Object(U.jsx)("label",{htmlFor:"name",children:"Full Name"}),Object(U.jsx)("input",{type:"text",id:"name",autoComplete:"off",name:"name",value:i,onChange:function(e){return function(e){o(e.target.value)}(e)},placeholder:"your name",required:!0})]}),Object(U.jsxs)("div",{className:"row",children:[Object(U.jsx)("label",{htmlFor:"email",children:"Email Id"}),Object(U.jsx)("input",{type:"email",id:"email",autoComplete:"off",name:"email",value:l,onChange:function(e){j((function(e){return e.target.value}))},placeholder:"your email id",required:!0})]})]}),Object(U.jsxs)("div",{className:"one",children:[Object(U.jsxs)("div",{className:"row",children:[Object(U.jsx)("label",{htmlFor:"password",children:"Password"}),Object(U.jsx)("input",{type:"password",id:"password",name:"password",value:O,onChange:function(e){return function(e){f(e.target.value)}(e)},placeholder:"your password",required:!0})]}),Object(U.jsxs)("div",{className:"row",children:[Object(U.jsx)("label",{htmlFor:"contact",children:"Phone number"}),Object(U.jsx)("input",{type:"number",id:"contact",name:"num",autoComplete:"off","mim-step":"0","max-step":"0",value:g,onChange:function(e){v((function(e){return e.target.value}))},placeholder:"your contact no.",required:!0})]})]}),Object(U.jsx)("div",{className:"submit-button",children:Object(U.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),console.log(i,l,O,g,w),n(T({name:i,email:l,password:O,num:g,id:w}))}(e)},children:" Save Changes"})})]})})]})}r(83);var G,z=Object(p.b)("order/makeOrder",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c,a,s,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cart_id,c=t.user_id,a=t.address,s=t.time,e.prev=1,e.next=4,fetch("/api/cart/".concat(n,"/checkout"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:c,address:a,time:s})});case 4:return i=e.sent,e.next=7,i.json();case 7:return o=e.sent,console.log(o),e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,r){return e.apply(this,arguments)}}()),K=Object(p.b)("order/fetchOrder",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/order/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()),V={name:"order",initialState:{orders:[],isLoading:!1,hasError:!1},reducers:{},extraReducers:(G={},Object(h.a)(G,z.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(h.a)(G,z.fulfilled,(function(e,t){e.isLoading=!1,e.hasError=!1})),Object(h.a)(G,z.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),Object(h.a)(G,K.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(h.a)(G,K.fulfilled,(function(e,t){e.orders=t.payload,e.isLoading=!1,e.hasError=!1})),Object(h.a)(G,K.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),G)},W=Object(p.c)(V),X=function(e){return e.order.orders},Z=W.reducer;function $(){var e=Object(b.b)(),t=Object(b.c)(X),r=Object(b.c)(D).user_id;return Object(a.useEffect)((function(){e(K(r))}),[e]),Object(U.jsxs)("div",{className:"body",children:[Object(U.jsx)("span",{id:"order-text",children:"your orders"}),t.map((function(e){return Object(U.jsxs)("div",{className:"order-page",children:[Object(U.jsx)("img",{id:"orders-img",src:e.image,alt:e.name}),Object(U.jsxs)("div",{className:"order-page_info",children:[Object(U.jsxs)("div",{className:"order-page_date",children:[Object(U.jsxs)("span",{id:"new-date",children:[" ",e.time?e.time.slice(0,10):null]}),Object(U.jsx)("h1",{className:"order-page_title",children:e.name}),Object(U.jsxs)("h1",{className:"order-page_price",children:[" \u20b9 ",e.price]}),Object(U.jsxs)("h1",{className:"order-page_price",children:[" ","Quantity : ",e.quantity]}),Object(U.jsx)("p",{className:"order-page_text",children:e.description})]}),Object(U.jsx)("div",{className:"order-page_buttons"})]})]})}))]})}r(84);var ee=r(32),te=r.n(ee),re=r.p+"static/media/shopping-bag.3a40a345.png";function ne(){var e=Object(b.c)(D).user_name,t=Object(b.c)(J),r=Object(b.c)(R),n=Object(b.b)(),c=Object(b.c)(w),s=Object(a.useState)(!1),i=Object(B.a)(s,2),o=i[0],u=i[1],d=Object(a.useState)(""),l=Object(B.a)(d,2),j=l[0],h=l[1],p=Object(a.useState)(t),O=Object(B.a)(p,2),f=O[0],m=(O[1],Object(a.useState)(r)),x=Object(B.a)(m,2),g=x[0],v=(x[1],M(c)),y=new Date;return Object(U.jsxs)("div",{className:"checkout-page",children:[Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{children:[Object(U.jsxs)("h1",{id:"checkout-name",children:["Let's Make Your Order",Object(U.jsx)("img",{src:re,alt:"",height:"30px",width:"30px"}),","," ",Object(U.jsx)("span",{children:e})]}),Object(U.jsxs)("h3",{id:"checkout-amount",children:["Cart Amount: ",Object(U.jsxs)("span",{id:"checkout-amount-span",children:["\u20b9 ",v]})]})]}),Object(U.jsxs)("div",{className:"address-detail",children:[Object(U.jsx)("label",{for:"address",children:"Adddress"}),Object(U.jsx)("input",{id:"address",type:"text",value:j,onChange:function(e){return h(e.target.value)},required:!0})]}),Object(U.jsxs)("div",{className:"payment",children:[Object(U.jsx)("h3",{id:"payment-head",children:"Payment Methods"}),Object(U.jsxs)("div",{className:"methods",children:[Object(U.jsx)("input",{id:"methods-method",type:"radio",disabled:!0}),Object(U.jsx)("label",{for:"methods-method",children:"Debit Card"})]}),Object(U.jsx)("span",{children:"Temporarily not available"}),Object(U.jsxs)("div",{className:"methods",children:[Object(U.jsx)("input",{id:"credit-method",type:"radio",disabled:!0}),Object(U.jsx)("label",{for:"credit-method",children:"Credit Card"})]}),Object(U.jsx)("span",{children:"Temporarily not available"}),Object(U.jsxs)("div",{className:"methods",children:[Object(U.jsx)("input",{id:"cod-method",type:"radio",required:!0,defaultChecked:!0}),Object(U.jsx)("label",{for:"cod-method",children:"Cash On Delivery"})]})]})]}),Object(U.jsx)("button",{id:"last-btn",onClick:function(){j?(n(z({cart_id:f,user_id:g,address:j,time:y})),u(!0)):k.a.error("Please enter your address")},children:"Place Order"}),Object(U.jsx)("div",{className:"modal",children:Object(U.jsx)(te.a,{style:{overlay:{position:"fixed",inset:"0px","backdrop-filter":"blur(6px)"},content:{position:"absolute",inset:"30%",border:"1px solid rgb(204, 204, 204)",background:"rgb(0 0 0)","border-radius":"8px",outline:"none",width:"40%",padding:"20px","backdrop-filter":"blur(10px)","margin-left":"-15px"}},isOpen:o,children:Object(U.jsxs)("div",{className:"modal-content",children:[Object(U.jsx)("h3",{id:"tagline",children:"hooray!\ud83c\udf89, Order is Placed"}),Object(U.jsx)(H.b,{to:"/",children:Object(U.jsx)("button",{id:"modal-btn",onClick:function(){return u(!1)},children:"back to products"})})]})})})]})}te.a.setAppElement("#root");r(94);var ce=r(18);r(95);function ae(){var e=Object(a.useState)({user_name:"",password:""}),t=Object(B.a)(e,2),r=t[0],n=t[1],c=Object(b.b)(),s=Object(b.c)(D).hasError,i=r.user_name,o=r.password,u=function(e){n(Object(ce.a)(Object(ce.a)({},r),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){return function(){c(F())}}),[]),Object(a.useEffect)((function(){s&&c(F())})),Object(U.jsx)(a.Fragment,{children:Object(U.jsx)("div",{className:"right",children:Object(U.jsxs)("form",{children:[Object(U.jsxs)("section",{className:"copy",children:[Object(U.jsx)("h2",{id:"log-in-text",children:"Log in"}),Object(U.jsx)("div",{className:"login-container",children:Object(U.jsxs)("p",{id:"line-text",children:["Don't have an account?"," ",Object(U.jsx)(H.b,{to:"/register",children:Object(U.jsx)("strong",{children:"Sign Up"})})]})})]}),Object(U.jsxs)("div",{className:"input-container email",children:[Object(U.jsx)("label",{htmlFor:"email",children:" Email Id"}),Object(U.jsx)("input",{id:"email",name:"user_name",type:"email",value:i,onChange:function(e){return u(e)},placeholder:"your email id",required:!0})]}),Object(U.jsxs)("div",{className:"input-container password",children:[Object(U.jsx)("label",{htmlFor:"password",children:" Password"}),Object(U.jsx)("input",{id:"password",name:"password",type:"password",value:o,onChange:function(e){return u(e)},placeholder:"your password",required:!0})]}),Object(U.jsx)("button",{className:"signup-btn",onClick:function(e){return function(e){e.preventDefault(),c(S(r))}(e)},children:"Log in"})]})})})}function se(e){e.setAuth;return Object(U.jsxs)("div",{className:"split-screen",children:[Object(U.jsx)("div",{className:"left",children:Object(U.jsx)("section",{className:"copy",children:Object(U.jsx)("h1",{id:"banner-text",children:"Let's Make Your Order"})})}),Object(U.jsx)(ae,{})]})}var ie=r(19),oe=r(20),ue=(r(98),Object(p.c)({name:"auth",initialState:{auth:!1},reducers:{authenticated:function(e){e.auth=!0},notAuthenticated:function(e){e.auth=!1}}})),de=ue.actions,le=de.authenticated,je=de.notAuthenticated,be=ue.reducer,he=function(e){return e.auth};function pe(){var e=Object(b.c)(D).user_name,t=Object(b.c)(he).auth,r=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.removeItem("token");case 3:k.a.success("logged out successfully!"),window.location.reload(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),k.a.error("Please try again later !");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{className:"profile",children:[Object(U.jsxs)("div",{className:"drop-btn",children:[Object(U.jsxs)("span",{className:"iconP",children:[" ",Object(U.jsx)(ie.a,{icon:oe.e})]}),t?function(){if(e){var t=e.indexOf(" ");return e.slice(0,t)}e="My account"}():"My account",t?Object(U.jsxs)("span",{id:"dropArrow",onClick:function(e){document.getElementById("menuItems").classList.toggle("show")},children:[" ",Object(U.jsx)(ie.a,{icon:oe.a})]}):Object(U.jsx)(H.b,{to:"/login",children:Object(U.jsx)("span",{id:"dropArrow",children:Object(U.jsx)(ie.a,{icon:oe.a})})})]}),Object(U.jsx)("div",{id:"menuItems",className:"menuItems",children:Object(U.jsxs)("ul",{children:[Object(U.jsx)("li",{children:Object(U.jsxs)(H.b,{to:"/orders",children:[Object(U.jsx)("div",{className:"icon",children:Object(U.jsx)(ie.a,{icon:oe.b})}),"Orders"]})}),Object(U.jsx)("li",{onClick:function(e){return r(e)},children:Object(U.jsxs)(H.b,{children:[Object(U.jsx)("div",{className:"icon",children:Object(U.jsx)(ie.a,{icon:oe.d})}),"Log Out"]})})]})})]})}k.a.configure();r(99);function Oe(){var e=Object(b.b)(),t=Object(b.c)(D).cart_id;return Object(U.jsxs)("div",{className:"nav",children:[Object(U.jsxs)("ul",{className:"nav-items",children:[Object(U.jsxs)("li",{className:"profile1",children:[" ",Object(U.jsx)(pe,{})]}),Object(U.jsx)(H.b,{to:"/",children:Object(U.jsx)("li",{className:"about-icon",children:"Home"})})]}),Object(U.jsx)(H.b,{to:"/cart",onClick:function(r){e(m(t))},children:Object(U.jsx)("span",{className:"cart-icon",children:Object(U.jsx)(ie.a,{icon:oe.c})})})]})}r(100);var fe,me=Object(p.c)({name:"search",initialState:"",reducers:{setSearchTerm:function(e,t){return t.payload},clearSearchTerm:function(e){return""}}}),xe=me.actions,ge=xe.setSearchTerm,ve=xe.clearSearchTerm,ye=function(e){return e.search},Ne=me.reducer,we=function(){var e=Object(b.b)(),t=Object(b.c)(ye);return Object(U.jsxs)("div",{id:"search-container",children:[Object(U.jsx)("img",{id:"search-icon",alt:"",src:"https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg"}),Object(U.jsx)("input",{id:"search",type:"text",value:t,onChange:function(t){e(ge(t.target.value))},placeholder:"Search products"}),t.length>0&&Object(U.jsx)("button",{onClick:function(){e(ve())},type:"button",id:"search-clear-button",children:Object(U.jsx)("img",{id:"clear-iocn",src:"https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg",alt:""})})]})},_e=(r(101),Object(p.c)({name:"category",initialState:"",reducers:{setCategory:function(e,t){return t.payload},clearCategory:function(e){return""}}})),ke=_e.actions,Ce=ke.setCategory,Ee=(ke.clearCategory,_e.reducer),Se=Object(p.c)({name:"sortby",initialState:"",reducers:{setSortby:function(e,t){return t.payload},clearSortby:function(e){return""}}}),Le=Se.actions,Pe=Le.setSortby,Te=(Le.clearSortby,Se.reducer),qe=Object(p.b)("allProducts/getAllProducts",Object(l.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/products");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),Ae=Object(p.b)("allProducts/getAllCategory",Object(l.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/category");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),Fe={name:"allProducts",initialState:{products:[],isLoading:!1,hasError:!1,categoryList:[]},reducers:{},extraReducers:(fe={},Object(h.a)(fe,qe.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(h.a)(fe,qe.fulfilled,(function(e,t){e.products=t.payload,e.isLoading=!1,e.hasError=!1})),Object(h.a)(fe,qe.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),Object(h.a)(fe,Ae.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(h.a)(fe,Ae.fulfilled,(function(e,t){e.categoryList=t.payload,e.isLoading=!1,e.hasError=!1})),Object(h.a)(fe,Ae.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),fe)},Ie=Object(p.c)(Fe),De=function(e){return e.allProducts.categoryList},Je=function(e){var t=function(e){return e.allProducts.products}(e),r=ye(e),n=function(e){return e.category}(e),c=function(e){return e.sortby}(e),a=t.filter((function(e){return e.category_id.toString().includes(n)})).filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return""===c?a:"Lowest"===c?a.sort((function(e,t){return e.price-t.price})):"Highest"===c?a.sort((function(e,t){return t.price-e.price})):void 0},Re=Ie.reducer;r(102);function Me(e){var t=e.product,r=(e.children,Object(b.c)(D).cart_id),n=Object(b.c)(he).auth,c=Object(b.c)(w),s=Object(b.b)();return Object(U.jsx)(a.Fragment,{children:Object(U.jsxs)("div",{className:"product",children:[Object(U.jsx)("div",{id:"product-sub",children:Object(U.jsx)("img",{src:t.img_url,alt:t.name})}),Object(U.jsx)("h3",{id:"product-name",children:t.name}),Object(U.jsxs)("span",{id:"product-price",children:["\u20b9 ",t.price]}),n?Object(U.jsx)("button",{id:"add-to-cart",onClick:function(){return function(e){var t=e.id;void 0!==c.find((function(t){return t.id===e.id}))?k.a.error("Already exist in cart !"):(s(O({cart_id:r,product_id:t})),alert("Product added to cart"),k.a.success("added to cart"),s(m(r)))}(t)},children:"Add to cart"}):Object(U.jsx)(H.b,{to:"/login",children:Object(U.jsx)("button",{id:"add-to-cart",children:"Add to cart"})})]},t.id)})}function He(){var e=Object(b.b)(),t=Object(b.c)(Je),r=Object(b.c)(De),n=Object(b.c)((function(e){return e.allProducts})).isLoading;return n?Object(U.jsx)("h1",{children:"loading"}):Object(U.jsx)(a.Fragment,{children:Object(U.jsxs)("div",{className:"product-container",children:[Object(U.jsxs)("div",{className:"category-btns",children:[Object(U.jsxs)("select",{className:"cat-btns",onChange:function(t){return function(t){console.log(t.target.value),e(Ce(t.target.value))}(t)},children:[Object(U.jsx)("option",{value:"",children:"All Categories"}),r.map((function(e){return Object(U.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(U.jsxs)("select",{className:"cat-btns",onChange:function(t){return function(t){e(Pe(t.target.value))}(t)},children:[Object(U.jsx)("option",{value:"",children:"Sort by Price"},"1"),Object(U.jsx)("option",{value:"Lowest",children:"Lowest - Highest"},"2"),Object(U.jsx)("option",{value:"Highest",children:"Highest - Lowest"},"3")]})]}),Object(U.jsx)("div",{className:"allProducts",children:t.map((function(e){return Object(U.jsx)(Me,{product:e},e.id)}))})]})})}k.a.configure();r(103);function Ue(){var e=Object(b.b)();return Object(a.useEffect)((function(){e(P())})),Object(U.jsxs)("div",{className:"search-section",children:[Object(U.jsx)("div",{className:"banner",children:" Shopy "}),Object(U.jsx)(we,{}),Object(U.jsx)(He,{})]})}r(104),r(105);function Qe(){var e=Object(a.useState)({user_name:"",name:"",password:"",contact_num:""}),t=Object(B.a)(e,2),r=t[0],n=t[1],c=Object(b.b)(),s=Object(b.c)(D).hasError,i=r.user_name,o=r.name,u=r.password,d=r.contact_num,l=function(e){n(Object(ce.a)(Object(ce.a)({},r),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){return function(){c(F())}}),[]),Object(a.useEffect)((function(){s&&(k.a.error("try again"),c(F()))})),Object(U.jsx)(a.Fragment,{children:Object(U.jsx)("div",{className:"right",children:Object(U.jsxs)("form",{required:!0,children:[Object(U.jsxs)("section",{className:"copy",children:[Object(U.jsx)("h2",{id:"signup-h2",children:"Sign up"}),Object(U.jsx)("div",{className:"login-container",children:Object(U.jsxs)("p",{id:"signup-p",children:["Already have an account?"," ",Object(U.jsx)(H.b,{to:"/login",id:"signup-a",children:Object(U.jsx)("strong",{children:"Log in"})})]})})]}),Object(U.jsxs)("div",{className:"input-container name",children:[Object(U.jsx)("label",{htmlFor:"fname",children:" Full Name"}),Object(U.jsx)("input",{id:"fname",name:"name",type:"text",placeholder:"your name",value:o,onChange:function(e){return l(e)},required:!0})]}),Object(U.jsxs)("div",{className:"input-container email",children:[Object(U.jsx)("label",{htmlFor:"email",children:" Email Id"}),Object(U.jsx)("input",{id:"email",name:"user_name",type:"email",placeholder:"your email id",value:i,onChange:function(e){return l(e)},required:!0})]}),Object(U.jsxs)("div",{className:"input-container num",children:[Object(U.jsx)("label",{htmlFor:"num",children:" Contact number"}),Object(U.jsx)("input",{id:"num",name:"contact_num",type:"number",minLength:"10",maxlength:"10",placeholder:"your phone number",value:d,onChange:function(e){return l(e)},required:!0})]}),Object(U.jsxs)("div",{className:"input-container password",children:[Object(U.jsx)("label",{htmlFor:"password",children:" Password"}),Object(U.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"your password",value:u,onChange:function(e){return l(e)},required:!0})]}),Object(U.jsxs)(H.b,{to:"login",children:[Object(U.jsx)("button",{className:"signup-btn",onClick:function(e){return function(e){e.preventDefault(),c(L(r))}(e)},children:"Sign Up"})," "]})]})})})}function Be(){return Object(U.jsxs)("div",{className:"split-screen",children:[Object(U.jsx)("div",{className:"left",children:Object(U.jsx)("section",{className:"copy",children:Object(U.jsx)("h1",{id:"banner-text",children:"Let's Make Your Order"})})}),Object(U.jsx)(Qe,{})]})}k.a.configure();var Ye=r(9);var Ge=function(){var e=Object(b.c)(he).auth,t=Object(b.b)();return Object(a.useEffect)((function(){t(Ae()),t(qe())}),[t]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/api/auth/is-verify",{method:"GET",headers:{token:localStorage.token}});case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,t(!0===n?le():je),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()})),Object(U.jsx)(a.Fragment,{children:Object(U.jsx)(H.a,{children:Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(Oe,{}),Object(U.jsxs)(Ye.d,{children:[Object(U.jsx)(Ye.b,{path:"/",exact:!0,component:Ue}),Object(U.jsx)(Ye.b,{path:"/edit-profile",render:function(t){return e?Object(U.jsx)(Y,{}):Object(U.jsx)(Ye.a,{to:"/login"})}}),Object(U.jsx)(Ye.b,{path:"/cart",render:function(t){return e?Object(U.jsx)(Q,{}):Object(U.jsx)(Ye.a,{to:"/register"})}}),Object(U.jsx)(Ye.b,{path:"/orders",render:function(t){return e?Object(U.jsx)($,{}):Object(U.jsx)(Ye.a,{to:"/login"})}}),Object(U.jsx)(Ye.b,{path:"/login",render:function(t){return e?Object(U.jsx)(Ye.a,{to:"/"}):Object(U.jsx)(se,{})}}),Object(U.jsx)(Ye.b,{path:"/register",render:function(t){return e?Object(U.jsx)(Ye.a,{to:"/"}):Object(U.jsx)(Be,{})}}),Object(U.jsx)(Ye.b,{path:"/checkout",render:function(t){return e?Object(U.jsx)(ne,{}):Object(U.jsx)(Ye.a,{to:"/login"})}})]})]})})})},ze=Object(p.a)({reducer:{users:I,auth:be,allProducts:Re,search:Ne,category:Ee,sortby:Te,order:Z,cart:_}});o.a.render(Object(U.jsx)(s.a.StrictMode,{children:Object(U.jsx)(b.a,{store:ze,children:Object(U.jsx)(Ge,{})})}),document.getElementById("root"))},53:function(e,t,r){},77:function(e,t,r){},82:function(e,t,r){},83:function(e,t,r){},84:function(e,t,r){},94:function(e,t,r){},95:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){}},[[106,1,2]]]);
//# sourceMappingURL=main.388ab65d.chunk.js.map