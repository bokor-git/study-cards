(this["webpackJsonpstudy-cards"]=this["webpackJsonpstudy-cards"]||[]).push([[0],{107:function(e,a,t){e.exports=t(137)},112:function(e,a,t){},113:function(e,a,t){},135:function(e,a,t){},137:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),i=t.n(c),o=(t(112),t(113),t(21)),l=t(12),u=t(184),s=t(175),m=t(174),d=t(178),p=t(171),f=t(176),E=t(179),g=t(93),b=t(172),h=t(173),v=t(8),w=t(34),S=t(183),_=t(180),O=t(7),P={},T=function(e){return{type:"APP/SET-ERROR",error:e}};function k(e){return r.a.createElement(_.a,Object.assign({elevation:6,variant:"filled"},e))}function N(){var e=Object(v.c)((function(e){return e.app.error})),a=Object(v.b)(),t=function(e,t){"clickaway"!==t&&a(T(null))},n=!!e;return r.a.createElement(S.a,{open:n,autoHideDuration:6e3,onClose:t},r.a.createElement(k,{onClose:t,severity:"error"},e))}var j=function(e,a){a(T(e.response?e.response.data.error:e.message)),a({type:"APP/SET-STATUS",status:"failed"})},y=t(33),C=t.n(y),I=C.a.create(Object(O.a)({baseURL:"https://neko-back.herokuapp.com/2.0"},{withCredentials:!0})),D=function(e){return I.post("auth/register",e)},A={isRegistered:!1,isLoading:!1},R=function(e){return{type:"SET-IS-REGISTRATED",value:e}},L=function(e){return{type:"SET-IS-LOADING",value:e}};t(135);function x(){return r.a.createElement("div",{className:"cssload-loader"},r.a.createElement("div",{className:"cssload-inner cssload-one"}),r.a.createElement("div",{className:"cssload-inner cssload-two"}),r.a.createElement("div",{className:"cssload-inner cssload-three"}))}function U(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(p.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var F=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function W(){var e=F(),a=Object(v.b)(),t=Object(v.c)((function(e){return e.registrationPage.isRegistered})),n=Object(v.c)((function(e){return e.registrationPage.isLoading})),c=(Object(v.c)((function(e){return e.app.error})),/\S+@\S+\.\S+/),i=/(?=.*[0-9])(?=.*[a-z])[0-9a-z]{8,}/,p=Object(w.a)({validate:function(e){return!1===c.test(e.email)?{email:"Please enter your email"}:!1===i.test(e.password)?{password:"Please enter your password"}:void 0},initialValues:{email:"",password:""},onSubmit:function(e){var t={email:e.email,password:e.password};a(L(!0)),a(function(e){return function(a){D(e).then((function(e){a(R(!0)),a(L(!1))})).catch((function(e){a(L(!1)),j(e,a),setTimeout((function(){return a(T(null))}),3e3)}))}}(t))}});return!0===t?r.a.createElement(l.a,{to:"/login"}):!0===n?r.a.createElement(x,null):r.a.createElement(h.a,{component:"main",maxWidth:"xs"},r.a.createElement(m.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(u.a,{className:e.avatar}),r.a.createElement(g.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{onSubmit:p.handleSubmit},r.a.createElement(d.a,Object.assign({variant:"outlined",required:!0,fullWidth:!0,id:"email",name:"email",autoComplete:"email",autoFocus:!0,label:"Email",margin:"normal"},p.getFieldProps("email"))),p.errors.email?r.a.createElement("div",null,p.errors.email):null,r.a.createElement(d.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",id:"password",type:"password"},p.getFieldProps("password"))),p.errors.password?r.a.createElement("div",null,p.errors.password):null,r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(o.b,{to:"/login"},"Already have an account? Sign In"))))),r.a.createElement(E.a,{mt:8},r.a.createElement(U,null)),r.a.createElement(N,null))}var G=function(){return r.a.createElement(W,null)},V=C.a.create({baseURL:"http://localhost:7542/2.0/"}),M=function(e){return V.post("/auth/forgot",e)},z=function(e){return V.post("/auth/set-new-password",e)},q={loading:!1,response:null},H=function(e){return{type:"LOADING",loading:e}};function Y(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(p.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var J=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function K(){var e=J(),a=Object(v.b)(),t=Object(v.c)((function(e){return e.passwordResetPage.loading})),n=Object(w.a)({validate:function(e){if(!e.email)return{email:"Please enter your new email"}},initialValues:{email:""},onSubmit:function(e){var t;a((t=e.email,function(e){e(H(!0)),M({email:t,from:"test-front-admin",message:"<div style = \"background-color: lime; padding: 15px\">\n            password recovery link:\n    <a href='http://localhost:3000/study-cards#/password-generation/$token$'>link</a>\n    </div>"}).then((function(a){200===a.status&&(e({type:"SET-PASS-RESET-RESPONSE",response:a.data}),e(H(!1)),alert(a.data.info))})).catch((function(a){alert(a),e(H(!1))}))}))}});return t?r.a.createElement(x,null):r.a.createElement(h.a,{component:"main",maxWidth:"xs"},r.a.createElement(m.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(u.a,{className:e.avatar}),r.a.createElement(g.a,{component:"h1",variant:"h5"},"Email for password recovery"),r.a.createElement("form",{onSubmit:n.handleSubmit},r.a.createElement(d.a,Object.assign({variant:"outlined",required:!0,fullWidth:!0,id:"email",name:"email",autoComplete:"email",autoFocus:!0,label:"Email",margin:"normal"},n.getFieldProps("email"))),n.errors.email?r.a.createElement("div",null,n.errors.email):null,r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Send"))),r.a.createElement(E.a,{mt:8},r.a.createElement(Y,null)),r.a.createElement(N,null))}var Z=function(){return r.a.createElement(K,null)},$={loading:!1,response:null};function B(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(p.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var Q=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function X(){var e=Object(v.c)((function(e){return e.passwordGenerationPage})),a=Q(),t=Object(l.i)().id,n=Object(l.g)(),c=Object(v.b)(),i=Object(w.a)({validate:function(e){if(!e.password)return{password:"Please enter your new password"}},initialValues:{password:""},onSubmit:function(e){c(function(e,a){return function(t){t(H(!0)),z(e).then((function(e){200===e.status&&(t({type:"SET-PASS-GENERATION-RESPONSE",response:e.data}),t(H(!1)),alert(e.data.info),a.push("/login/"))})).catch((function(e){alert(e),t(H(!1))}))}}({password:e.password,resetPasswordToken:t},n))}});return e.loading?r.a.createElement(x,null):r.a.createElement(h.a,{component:"main",maxWidth:"xs"},r.a.createElement(m.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(u.a,{className:a.avatar}),r.a.createElement(g.a,{component:"h1",variant:"h5"},"New password"),r.a.createElement("form",{onSubmit:i.handleSubmit},r.a.createElement(d.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"New password",id:"password",type:"password"},i.getFieldProps("password"))),i.errors.password?r.a.createElement("div",null,i.errors.password):null,r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Set new password"))),r.a.createElement(E.a,{mt:8},r.a.createElement(B,null)),r.a.createElement(N,null))}var ee=function(){return r.a.createElement(X,null)},ae=C.a.create(Object(O.a)({baseURL:"https://neko-back.herokuapp.com/2.0"},{withCredentials:!0})),te=function(e){return ae.post("auth/login",e)},ne=function(){return ae.delete("auth/me")},re=function(){return ae.post("auth/me",{})},ce={isLoginIn:!1,UserData:{email:"",name:"",isAdmin:!1,rememberMe:!1,token:"",tokenDeathTime:0,__v:0,_id:"",success:!1}},ie=function(e){return{type:"SET-IS-LOGIN-IN",value:e}},oe=function(e){return{type:"SET-USER-DATA-IN",Userdata:e}},le={isInitialized:!1},ue=function(){return function(e){re().then((function(a){e(ie(!0)),e({type:"SET-INITIALIZED",isInitialized:!0}),e(oe(a.data))})).catch((function(e){return console.log(e)}))}};var se=function(){var e=Object(v.c)((function(e){return e.auth.UserData})),a=e.name,t=e.email,c=(Object(v.c)((function(e){return e.profilePage.isInitialized})),Object(v.b)()),i=Object(v.c)((function(e){return e.auth.isLoginIn}));return Object(n.useEffect)((function(){c(ue())}),[]),!1===i?r.a.createElement(l.a,{exact:!0,to:"/login"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Name:",a),r.a.createElement("img",{src:"",alt:"",style:{width:"100px",height:"100px"}}),r.a.createElement("div",null,"E-mail: ",t))},me=t(27),de=t.n(me);var pe=function(){var e=Object(l.h)(),a=Object(v.b)(),t=Object(n.useCallback)((function(){a((function(e){ne().then((function(a){e(ie(!1))})).catch((function(a){j(a,e)}))}))}),[]),c=Object(v.c)((function(e){return e.auth.isLoginIn}));return!1===c&&57!==e.pathname.length?r.a.createElement(l.a,{exact:!0,to:"/login"}):r.a.createElement("nav",{className:de.a.menu},r.a.createElement("ul",{className:de.a.menu__list},c&&r.a.createElement("li",{className:de.a.menu__group}),r.a.createElement("li",{className:de.a.menu__group},r.a.createElement(o.b,{className:de.a.menu__link,to:"/profile"},"My Profile")),r.a.createElement("li",{className:de.a.menu__group},r.a.createElement(o.b,{className:de.a.menu__link,to:"/Packs"},"Packs")),r.a.createElement("li",{className:de.a.menu__group},r.a.createElement(o.b,{className:de.a.menu__link,to:"/password-reset"},"Settings")),r.a.createElement("button",{onClick:t,className:de.a.menu__link_logout},"Log out")))},fe=t(177),Ee=t(181);function ge(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(p.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var be=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function he(){var e=be(),a=Object(v.b)(),t=Object(v.c)((function(e){return e.auth.isLoginIn})),n=Object(w.a)({validate:function(e){return e.email?e.password?void 0:{password:"Please enter your password"}:{email:"Please enter your email"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var t;a((t=e,function(e){te(t).then((function(a){e(ie(!0)),e(oe(a.data))})).catch((function(a){j(a,e)}))}))}});return!0===t?r.a.createElement(l.a,{to:"/profile"}):r.a.createElement(h.a,{component:"main",maxWidth:"xs"},r.a.createElement(m.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(u.a,{className:e.avatar}),r.a.createElement(g.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{onSubmit:n.handleSubmit},r.a.createElement(d.a,Object.assign({variant:"outlined",required:!0,fullWidth:!0,id:"email",name:"email",autoComplete:"email",autoFocus:!0,label:"Email",margin:"normal"},n.getFieldProps("email"))),n.errors.email?r.a.createElement("div",null,n.errors.email):null,r.a.createElement(d.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",id:"password",type:"password"},n.getFieldProps("password"))),n.errors.password?r.a.createElement("div",null,n.errors.password):null,r.a.createElement(fe.a,Object.assign({label:"Remember me",control:r.a.createElement(Ee.a,{color:"primary"})},n.getFieldProps("rememberMe"),{checked:n.values.rememberMe})),r.a.createElement(s.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(o.b,{to:"/password-reset"},"Forgot password?")),r.a.createElement(f.a,{item:!0},r.a.createElement(o.b,{to:"/registration"},"Don't have an account? Sign Up"))))),r.a.createElement(E.a,{mt:8},r.a.createElement(ge,null)),r.a.createElement(N,null))}var ve=function(){return r.a.createElement(he,null)},we=C.a.create(Object(O.a)({baseURL:"https://neko-back.herokuapp.com/2.0"},{withCredentials:!0})),Se=function(e){return we.get("cards/pack?&page=".concat(e,"&pageCount=25"))},_e=function(e){return we.post("cards/pack",e)},Oe=function(e){return we.delete("cards/pack?id=".concat(e))},Pe=function(e){return we.put("cards/pack",e)},Te=function(e){return we.get("cards/card?&cardsPack_id=".concat(e.cardsPack_id,"&pageCount=100"))},ke=function(e){return we.post("cards/card",e)},Ne=function(e){return we.delete("cards/card?id=".concat(e))},je=function(e){return we.put("cards/card",e)},ye={packs:null,cards:null,isLoading:!1,paginator:{currentPage:1,packsCount:1,startPage:1,endPage:5}},Ce=function(e){return function(a){De(!0),Se(e).then((function(e){a(Ie(e.data.cardPacks)),a(Re(e.data.cardPacksTotalCount)),a(De(!1))})).catch((function(e){j(e,a)}))}},Ie=function(e){return{type:"SET-PACKS",packs:e}},De=function(e){return{type:"SET-IS-LOADING",value:e}},Ae=function(e){return{type:"SET-CARDS",cards:e}},Re=function(e){return{type:"SET-COUNT",count:e}},Le=function(e){return{type:"SET-START-VALUE-PR",value:e}},xe=function(e){return{type:"SET-END-VALUE-PR",value:e}},Ue=function(e){return{type:"SET-CURRENT-PAGE",value:e}},Fe=t(53),We=t.n(Fe);function Ge(e){return r.a.createElement("div",null,e.buttonsData.map((function(a){var t=a.onClick,n=function(){};return n="Delete"===a.name?function(){t&&t({cardId:e.cardId,packId:e.PackId})}:function(){t&&t({card:{_id:e.cardId},packId:e.PackId})},r.a.createElement("button",{onClick:n},a.name)})))}function Ve(e){return r.a.createElement("div",{className:We.a.Content},e.Content.map((function(a){return r.a.createElement("div",{style:{width:"calc(90vw/".concat(e.Content.length,")")}},a)})))}function Me(e){return r.a.createElement(r.a.Fragment,null,null===e.Data?r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"):e.Data.map((function(a){return r.a.createElement(Ve,{Content:[a.question,a.answer,a.grade,a.updated,"url",r.a.createElement(Ge,{cardId:a._id,PackId:a.cardsPack_id,buttonsData:e.buttonsData})]})})))}var ze=function(e){return r.a.createElement("div",{className:We.a.Table},r.a.createElement("div",{className:We.a.HeaderTable},r.a.createElement(Ve,{Content:e.columnsName})),r.a.createElement("div",{className:We.a.ContentTable},r.a.createElement(Me,{Data:e.rowContent,buttonsData:e.buttonsData})))};var qe=function(){var e=Object(v.b)(),a=Object(l.i)().id,t=Object(v.c)((function(e){return e.auth.isLoginIn})),c=Object(v.c)((function(e){return e.table.cards}));return Object(n.useEffect)((function(){var n;!function(a){if(!1===a&&(e(ue),!1===a))l.a}(t),e((n={cardsPack_id:a},function(e){De(!0),Te(n).then((function(a){e(De(!1)),e(Ae(a.data.cards))})).catch((function(a){j(a,e)}))}))}),[]),r.a.createElement("div",null,c?r.a.createElement("div",null,r.a.createElement(ze,{columnsName:["question","answer","Grade","updated","url",r.a.createElement("button",{onClick:function(){var t;e((t={card:{cardsPack_id:a}},function(e){De(!0),ke(t).then((function(a){Te({cardsPack_id:t.card.cardsPack_id}).then((function(a){e(De(!1)),e(Ae(a.data.cards))})).catch((function(a){j(a,e)})).catch((function(a){j(a,e)}))}))}))}},"Add")],rowContent:c,buttonsData:[{name:"Update",onClick:function(a){e(function(e){return function(a){De(!0),je(e).then((function(t){Te({cardsPack_id:e.packId}).then((function(e){a(De(!1)),a(Ae(e.data.cards))})).catch((function(e){j(e,a)})).catch((function(e){j(e,a)}))}))}}(a))}},{name:"Delete",onClick:function(a){e(function(e){return function(a){De(!0),Ne(e.cardId).then((function(t){Te({cardsPack_id:e.packId}).then((function(e){a(De(!1)),a(Ae(e.data.cards))})).catch((function(e){j(e,a)})).catch((function(e){j(e,a)}))}))}}(a))}}]}),r.a.createElement("div",null,"\u043f\u0430\u0413\u0438\u043d\u0430\u0446\u0438\u044f")):r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"))};var He=function(){return r.a.createElement(qe,null)},Ye=t(42),Je=t.n(Ye);function Ke(e){return r.a.createElement("div",null,e.buttonsData.map((function(a){var t=a.onClick;return r.a.createElement("button",{onClick:function(){t&&t(e.id)}},a.name)})))}function Ze(e){return r.a.createElement("div",{className:Je.a.Content},e.Content.map((function(a){return r.a.createElement("div",{style:{width:"calc(90vw/".concat(e.Content.length,")"),height:"calc(70vh/25)"}},a)})))}function $e(e){return r.a.createElement(r.a.Fragment,null,null===e.Data?r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"):e.Data.map((function(a){return r.a.createElement(Ze,{Content:[a.name,a.cardsCount,a.updated,"",r.a.createElement(Ke,{id:a._id,buttonsData:e.buttonsData})]})})))}var Be=function(e){return r.a.createElement("div",{className:Je.a.Table},r.a.createElement("div",{className:Je.a.HeaderTable},r.a.createElement(Ze,{Content:e.columnsName})),r.a.createElement("div",{className:Je.a.ContentTable},r.a.createElement($e,{Data:e.rowContent,buttonsData:e.buttonsData})))},Qe=t(75),Xe=t.n(Qe),ea=function(e){for(var a=e.startValue,t=[];a<=e.maxPages;a++)t[a]=a;return r.a.createElement("div",{className:Xe.a.Main},r.a.createElement("div",{className:Xe.a.Pagination},r.a.createElement("button",{onClick:e.goStart},"Start"),t.map((function(a){var t=e.goPage;if(a<=e.endValue)return r.a.createElement("button",{onClick:function(){t(a)}},a)})),r.a.createElement("button",{onClick:e.goFinish},"End")))};var aa=function(){var e=Object(l.g)(),a=Object(v.b)(),t=Object(v.c)((function(e){return e.auth.isLoginIn})),c=Object(v.c)((function(e){return e.table.packs})),i=Object(v.c)((function(e){return e.table.paginator})),o=Math.ceil(i.packsCount/25);return Object(n.useEffect)((function(){!function(e){if(!1===e&&(a(ue),!1===e))l.a}(t),a(Ce(i.currentPage))}),[]),r.a.createElement("div",{className:Je.a.Main},c?r.a.createElement(r.a.Fragment,null,r.a.createElement(ea,{maxPages:o,endValue:i.endPage,startValue:i.startPage,goFinish:function(){a(Ue(o)),a(Ce(i.currentPage)),Le(o-4),xe(o)},goPage:function(e){return e===i.endPage?(Le(e),xe(e+4),a(Ue(e)),void a(Ce(i.currentPage))):e===i.startPage?(Le(e-4),xe(e),a(Ue(e)),void a(Ce(i.currentPage))):void 0},goStart:function(){a(Ue(1)),Le(1),xe(5),a(Ce(i.currentPage))}}),r.a.createElement(Be,{columnsName:["Name","cardsCount","Updated","Url",r.a.createElement("button",{onClick:function(){var e,t;a((e={cardsPack:{}},t=i.currentPage,function(a){De(!0),_e(e).then((function(e){Se(t).then((function(e){a(Ie(e.data.cardPacks)),a(De(!1))})).catch((function(e){j(e,a)}))})).catch((function(e){j(e,a)}))}))}},"Add")],rowContent:c,buttonsData:[{name:"Update",onClick:function(e){var t,n;a((t={cardsPack:{_id:e}},n=i.currentPage,function(e){De(!0),Pe(t).then((function(a){Se(n).then((function(a){e(Ie(a.data.cardPacks)),e(De(!1))})).catch((function(a){j(a,e)}))})).catch((function(a){j(a,e)}))}))}},{name:"Delete",onClick:function(e){var t,n;a((t=e,n=i.currentPage,function(e){De(!0),Oe(t).then((function(a){Se(n).then((function(a){e(Ie(a.data.cardPacks)),e(De(!1))})).catch((function(a){j(a,e)}))})).catch((function(a){j(a,e)}))}))}},{name:"Cards",onClick:function(a){e.push("/Cards/".concat(a))}}]})):r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"),r.a.createElement(N,null))};var ta=function(){return r.a.createElement(aa,null)};var na=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(pe,null),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/login",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(l.b,{path:"/registration",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(l.b,{path:"/password-reset",render:function(){return r.a.createElement(Z,null)}}),"}",r.a.createElement(l.b,{path:"/password-generation/:id",render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(l.b,{path:"/password-generation",render:function(){return r.a.createElement("h1",null,"We send to your mail link for password change. Use it!")}}),r.a.createElement(l.b,{path:"/profile",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(l.b,{path:"/Cards/:id",render:function(){return r.a.createElement(He,null)}}),r.a.createElement(l.b,{path:"/Packs",render:function(){return r.a.createElement(ta,null)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ra=t(44),ca=t(91),ia=Object(ra.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"APP/SET-STATUS":return Object(O.a)({},e,{status:a.status});case"APP/SET-ERROR":return Object(O.a)({},e,{error:a.error});case"APP/SET-INITIALIZED":return Object(O.a)({},e,{isInitialized:a.isInitialized});default:return Object(O.a)({},e)}},registrationPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-IS-REGISTATED":return Object(O.a)({},e,{isRegistered:a.value});case"SET-IS-LOADING":return Object(O.a)({},e,{isLoading:a.value});default:return Object(O.a)({},e)}},passwordResetPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING":return Object(O.a)({},e,{loading:a.loading});case"SET-PASS-RESET-RESPONSE":return Object(O.a)({},e,{response:a.response});default:return Object(O.a)({},e)}},passwordGenerationPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING":return Object(O.a)({},e,{loading:a.loading});case"SET-PASS-GENERATION-RESPONSE":return Object(O.a)({},e,{response:a.response});default:return Object(O.a)({},e)}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-INITIALIZED":return Object(O.a)({},e,{isInitialized:a.isInitialized});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-IS-LOGIN-IN":case"SET-IS-LOGOUT-IN":return Object(O.a)({},e,{isLoginIn:a.value});case"SET-USER-DATA-IN":return Object(O.a)({},e,{UserData:a.Userdata});default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-PACKS":return Object(O.a)({},e,{packs:a.packs});case"SET-IS-LOADING":return Object(O.a)({},e,{isLoading:a.value});case"SET-CARDS":return Object(O.a)({},e,{cards:a.cards});case"SET-COUNT":var t=Object(O.a)({},e,{},e.paginator);return t.paginator.packsCount=a.count,t;case"SET-START-VALUE-PR":var n=Object(O.a)({},e,{},e.paginator);return n.paginator.startPage=a.value,n;case"SET-END-VALUE-PR":var r=Object(O.a)({},e,{},e.paginator);return r.paginator.endPage=a.value,r;case"SET-CURRENT-PAGE":var c=Object(O.a)({},e,{},e.paginator);return c.paginator.currentPage=a.value,c;default:return Object(O.a)({},e)}}}),oa=Object(ra.d)(ia,Object(ra.a)(ca.a));window.store=oa,i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,{store:oa},r.a.createElement(na,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,a,t){e.exports={menu:"headerNavbar_menu__1T5wg",menu__link:"headerNavbar_menu__link__1JKf_",menu__link_logout:"headerNavbar_menu__link_logout__2TVLw",menu__list:"headerNavbar_menu__list__2PUd2",menu__group:"headerNavbar_menu__group__3nCIy",page:"headerNavbar_page__1a2cw"}},42:function(e,a,t){e.exports={Table:"css_Table__2UCbd",HeaderTable:"css_HeaderTable__1Uo31",ContentTable:"css_ContentTable__3bVwC",Content:"css_Content__1-RRD"}},53:function(e,a,t){e.exports={Table:"css_Table__31v0b",HeaderTable:"css_HeaderTable__1aD8H",ContentTable:"css_ContentTable__2W9EF",rowItem:"css_rowItem__1zkAn",Content:"css_Content__th1Vj"}},75:function(e,a,t){e.exports={Main:"css_Main__3vS4j",Pagination:"css_Pagination__2VPy5"}}},[[107,1,2]]]);
//# sourceMappingURL=main.48337561.chunk.js.map