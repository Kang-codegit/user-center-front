(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[311],{64335:function(Te,re,o){"use strict";var E=o(67294),y=(0,E.createContext)({});re.Z=y},85224:function(Te,re,o){"use strict";var E=o(22122),y=o(28991),O=o(84305),X=o(39559),U=o(81253),h=o(94184),B=o.n(h),Q=o(97435),$=o(67294),I=o(64335),W=o(56264),ve=o.n(W),ge=["children","className","extra","style","renderContent"],n=function(V){var te=V.children,se=V.className,ne=V.extra,Me=V.style,ce=V.renderContent,be=(0,U.Z)(V,ge),Ze=(0,$.useContext)(X.ZP.ConfigContext),Ne=Ze.getPrefixCls,oe=V.prefixCls||Ne("pro"),pe="".concat(oe,"-footer-bar"),T=(0,$.useContext)(I.Z),Ce=(0,$.useMemo)(function(){var de=T.hasSiderMenu,ie=T.isMobile,fe=T.siderWidth;if(!!de)return fe?ie?"100%":"calc(100% - ".concat(fe,"px)"):"100%"},[T.collapsed,T.hasSiderMenu,T.isMobile,T.siderWidth]),xe=$.createElement($.Fragment,null,$.createElement("div",{className:"".concat(pe,"-left")},ne),$.createElement("div",{className:"".concat(pe,"-right")},te));return(0,$.useEffect)(function(){return!T||!(T==null?void 0:T.setHasFooterToolbar)?function(){}:(T==null||T.setHasFooterToolbar(!0),function(){var de;T==null||(de=T.setHasFooterToolbar)===null||de===void 0||de.call(T,!1)})},[]),$.createElement("div",(0,E.Z)({className:B()(se,"".concat(pe)),style:(0,y.Z)({width:Ce},Me)},(0,Q.Z)(be,["prefixCls"])),ce?ce((0,y.Z)((0,y.Z)((0,y.Z)({},V),T),{},{leftWidth:Ce}),xe):xe)};re.Z=n},81907:function(Te,re,o){"use strict";o.d(re,{ZP:function(){return Lt}});var E=o(38663),y=o(70883),O=o(22122),X=o(96156),U=o(6610),h=o(5991),B=o(10379),Q=o(44144),$=o(90484),I=o(94184),W=o.n(I),ve=o(48717),ge=o(98423),n=o(67294),j=o(53124),V=o(85061),te=o(75164);function se(i){var e,a=function(l){return function(){e=null,i.apply(void 0,(0,V.Z)(l))}},t=function(){if(e==null){for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];e=(0,te.Z)(a(c))}};return t.cancel=function(){te.Z.cancel(e),e=null},t}function ne(){return function(e,a,t){var r=t.value,l=!1;return{configurable:!0,get:function(){if(l||this===e.prototype||this.hasOwnProperty(a))return r;var d=se(r.bind(this));return l=!0,Object.defineProperty(this,a,{value:d,configurable:!0,writable:!0}),l=!1,d}}}}var Me=o(64019);function ce(i){return i!==window?i.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function be(i,e,a){if(a!==void 0&&e.top>i.top-a)return a+e.top}function Ze(i,e,a){if(a!==void 0&&e.bottom<i.bottom+a){var t=window.innerHeight-e.bottom;return a+t}}var Ne=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],oe=[];function pe(){return oe}function T(i,e){if(!!i){var a=oe.find(function(t){return t.target===i});a?a.affixList.push(e):(a={target:i,affixList:[e],eventHandlers:{}},oe.push(a),Ne.forEach(function(t){a.eventHandlers[t]=(0,Me.Z)(i,t,function(){a.affixList.forEach(function(r){r.lazyUpdatePosition()})})}))}}function Ce(i){var e=oe.find(function(a){var t=a.affixList.some(function(r){return r===i});return t&&(a.affixList=a.affixList.filter(function(r){return r!==i})),t});e&&e.affixList.length===0&&(oe=oe.filter(function(a){return a!==e}),Ne.forEach(function(a){var t=e.eventHandlers[a];t&&t.remove&&t.remove()}))}var xe=function(i,e,a,t){var r=arguments.length,l=r<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,a):t,c;if((typeof Reflect=="undefined"?"undefined":(0,$.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(i,e,a,t);else for(var d=i.length-1;d>=0;d--)(c=i[d])&&(l=(r<3?c(l):r>3?c(e,a,l):c(e,a))||l);return r>3&&l&&Object.defineProperty(e,a,l),l};function de(){return typeof window!="undefined"?window:null}var ie;(function(i){i[i.None=0]="None",i[i.Prepare=1]="Prepare"})(ie||(ie={}));var fe=function(i){(0,B.Z)(a,i);var e=(0,Q.Z)(a);function a(){var t;return(0,U.Z)(this,a),t=e.apply(this,arguments),t.state={status:ie.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var r=t.props,l=r.offsetBottom,c=r.offsetTop;return l===void 0&&c===void 0?0:c},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(r){t.placeholderNode=r},t.saveFixedNode=function(r){t.fixedNode=r},t.measure=function(){var r=t.state,l=r.status,c=r.lastAffix,d=t.props.onChange,m=t.getTargetFunc();if(!(l!==ie.Prepare||!t.fixedNode||!t.placeholderNode||!m)){var g=t.getOffsetTop(),x=t.getOffsetBottom(),P=m();if(!!P){var f={status:ie.None},D=ce(P),u=ce(t.placeholderNode),A=be(u,D,g),L=Ze(u,D,x);u.top===0&&u.left===0&&u.width===0&&u.height===0||(A!==void 0?(f.affixStyle={position:"fixed",top:A,width:u.width,height:u.height},f.placeholderStyle={width:u.width,height:u.height}):L!==void 0&&(f.affixStyle={position:"fixed",bottom:L,width:u.width,height:u.height},f.placeholderStyle={width:u.width,height:u.height}),f.lastAffix=!!f.affixStyle,d&&c!==f.lastAffix&&d(f.lastAffix),t.setState(f))}}},t.prepareMeasure=function(){if(t.setState({status:ie.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var r},t}return(0,h.Z)(a,[{key:"getTargetFunc",value:function(){var r=this.context.getTargetContainer,l=this.props.target;return l!==void 0?l:r!=null?r:de}},{key:"componentDidMount",value:function(){var r=this,l=this.getTargetFunc();l&&(this.timeout=setTimeout(function(){T(l(),r),r.updatePosition()}))}},{key:"componentDidUpdate",value:function(r){var l=this.state.prevTarget,c=this.getTargetFunc(),d=(c==null?void 0:c())||null;l!==d&&(Ce(this),d&&(T(d,this),this.updatePosition()),this.setState({prevTarget:d})),(r.offsetTop!==this.props.offsetTop||r.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),Ce(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var r=this.getTargetFunc(),l=this.state.affixStyle;if(r&&l){var c=this.getOffsetTop(),d=this.getOffsetBottom(),m=r();if(m&&this.placeholderNode){var g=ce(m),x=ce(this.placeholderNode),P=be(x,g,c),f=Ze(x,g,d);if(P!==void 0&&l.top===P||f!==void 0&&l.bottom===f)return}}this.prepareMeasure()}},{key:"render",value:function(){var r=this,l=this.state,c=l.affixStyle,d=l.placeholderStyle,m=this.props,g=m.affixPrefixCls,x=m.children,P=W()((0,X.Z)({},g,!!c)),f=(0,ge.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return n.createElement(ve.Z,{onResize:function(){r.updatePosition()}},n.createElement("div",(0,O.Z)({},f,{ref:this.savePlaceholderNode}),c&&n.createElement("div",{style:d,"aria-hidden":"true"}),n.createElement("div",{className:P,ref:this.saveFixedNode,style:c},n.createElement(ve.Z,{onResize:function(){r.updatePosition()}},x))))}}]),a}(n.Component);fe.contextType=j.E_,xe([ne()],fe.prototype,"updatePosition",null),xe([ne()],fe.prototype,"lazyUpdatePosition",null);var Se=n.forwardRef(function(i,e){var a=i.prefixCls,t=n.useContext(j.E_),r=t.getPrefixCls,l=r("affix",a),c=(0,O.Z)((0,O.Z)({},i),{affixPrefixCls:l});return n.createElement(fe,(0,O.Z)({},c,{ref:e}))}),Ke=Se,Qe=o(84305),De=o(39559),Ee=o(59903),_e=o(94233),qe=o(81262),z=o(59250),s=o(30887),C=o(49111),p=o(28481),v=o(28991),F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},w=F,b=o(27029),Z=function(e,a){return n.createElement(b.Z,(0,v.Z)((0,v.Z)({},e),{},{ref:a,icon:w}))};Z.displayName="ArrowLeftOutlined";var R=n.forwardRef(Z),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},M=H,K=function(e,a){return n.createElement(b.Z,(0,v.Z)((0,v.Z)({},e),{},{ref:a,icon:M}))};K.displayName="ArrowRightOutlined";var ue=n.forwardRef(K),Ae=o(30470),Le=o(51890),je=o(50344),ke=o(18515),_=o(96159),me=o(57254),Oe=o(81555),Re=function(i,e){var a={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&e.indexOf(t)<0&&(a[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(i);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(i,t[r])&&(a[t[r]]=i[t[r]]);return a},Pe=function(e){var a=e.prefixCls,t=e.separator,r=t===void 0?"/":t,l=e.children,c=e.menu,d=e.overlay,m=e.dropdownProps,g=Re(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),x=n.useContext(j.E_),P=x.getPrefixCls,f=P("breadcrumb",a),D=function(L){if(c||d){var N=(0,O.Z)({},m);return"overlay"in e&&(N.overlay=d),n.createElement(Oe.Z,(0,O.Z)({menu:c,placement:"bottom"},N),n.createElement("span",{className:"".concat(f,"-overlay-link")},L,n.createElement(me.Z,null)))}return L},u;return"href"in g?u=n.createElement("a",(0,O.Z)({className:"".concat(f,"-link")},g),l):u=n.createElement("span",(0,O.Z)({className:"".concat(f,"-link")},g),l),u=D(u),l!=null?n.createElement("li",null,u,r&&n.createElement("span",{className:"".concat(f,"-separator")},r)):null};Pe.__ANT_BREADCRUMB_ITEM=!0;var ze=Pe,$e=function(e){var a=e.children,t=n.useContext(j.E_),r=t.getPrefixCls,l=r("breadcrumb");return n.createElement("span",{className:"".concat(l,"-separator")},a||"/")};$e.__ANT_BREADCRUMB_SEPARATOR=!0;var We=$e,Fe=function(i,e){var a={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&e.indexOf(t)<0&&(a[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(i);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(i,t[r])&&(a[t[r]]=i[t[r]]);return a};function Ge(i,e){if(!i.breadcrumbName)return null;var a=Object.keys(e).join("|"),t=i.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(r,l){return e[l]||r});return t}function Ue(i,e,a,t){var r=a.indexOf(i)===a.length-1,l=Ge(i,e);return r?n.createElement("span",null,l):n.createElement("a",{href:"#/".concat(t.join("/"))},l)}var He=function(e,a){return e=(e||"").replace(/^\//,""),Object.keys(a).forEach(function(t){e=e.replace(":".concat(t),a[t])}),e},Ve=function(e,a,t){var r=(0,V.Z)(e),l=He(a||"",t);return l&&r.push(l),r},Xe=function(e){var a=e.prefixCls,t=e.separator,r=t===void 0?"/":t,l=e.style,c=e.className,d=e.routes,m=e.children,g=e.itemRender,x=g===void 0?Ue:g,P=e.params,f=P===void 0?{}:P,D=Fe(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),u=n.useContext(j.E_),A=u.getPrefixCls,L=u.direction,N,k=A("breadcrumb",a);if(d&&d.length>0){var G=[];N=d.map(function(S){var q=He(S.path,f);q&&G.push(q);var J;S.children&&S.children.length&&(J=n.createElement(ke.Z,{items:S.children.map(function(ee){return{key:ee.path||ee.breadcrumbName,label:x(ee,f,d,Ve(G,ee.path,f))}})}));var le={separator:r};return J&&(le.overlay=J),n.createElement(ze,(0,O.Z)({},le,{key:q||S.breadcrumbName}),x(S,f,d,G))})}else m&&(N=(0,je.Z)(m).map(function(S,q){return S&&(0,_.Tm)(S,{separator:r,key:q})}));var ae=W()(k,(0,X.Z)({},"".concat(k,"-rtl"),L==="rtl"),c);return n.createElement("nav",(0,O.Z)({className:ae,style:l},D),n.createElement("ol",null,N))};Xe.Item=ze,Xe.Separator=We;var dt=Xe,ft=dt,ut=o(42051),vt=o(19650),mt=o(34952),ht=function(e,a,t){return!a||!t?null:n.createElement(ut.Z,{componentName:"PageHeader"},function(r){return n.createElement("div",{className:"".concat(e,"-back")},n.createElement(mt.Z,{onClick:function(c){t==null||t(c)},className:"".concat(e,"-back-button"),"aria-label":r.back},a))})},gt=function(e){return n.createElement(ft,(0,O.Z)({},e))},Ct=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:a==="rtl"?n.createElement(ue,null):n.createElement(R,null)},xt=function(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",r=a.title,l=a.avatar,c=a.subTitle,d=a.tags,m=a.extra,g=a.onBack,x="".concat(e,"-heading"),P=r||c||d||m;if(!P)return null;var f=Ct(a,t),D=ht(e,f,g),u=D||l||P;return n.createElement("div",{className:x},u&&n.createElement("div",{className:"".concat(x,"-left")},D,l&&n.createElement(Le.C,(0,O.Z)({},l)),r&&n.createElement("span",{className:"".concat(x,"-title"),title:typeof r=="string"?r:void 0},r),c&&n.createElement("span",{className:"".concat(x,"-sub-title"),title:typeof c=="string"?c:void 0},c),d&&n.createElement("span",{className:"".concat(x,"-tags")},d)),m&&n.createElement("span",{className:"".concat(x,"-extra")},n.createElement(vt.Z,null,m)))},Et=function(e,a){return a?n.createElement("div",{className:"".concat(e,"-footer")},a):null},Pt=function(e,a){return n.createElement("div",{className:"".concat(e,"-content")},a)},yt=function(e){var a=(0,Ae.Z)(!1),t=(0,p.Z)(a,2),r=t[0],l=t[1],c=function(m){var g=m.width;l(g<768,!0)};return n.createElement(j.C,null,function(d){var m,g=d.getPrefixCls,x=d.pageHeader,P=d.direction,f,D=e.prefixCls,u=e.style,A=e.footer,L=e.children,N=e.breadcrumb,k=e.breadcrumbRender,G=e.className,ae=!0;"ghost"in e?ae=e.ghost:x&&"ghost"in x&&(ae=x.ghost);var S=g("page-header",D),q=function(){return(N==null?void 0:N.routes)?gt(N):null},J=q(),le=N&&"props"in N,ee=(f=k==null?void 0:k(e,J))!==null&&f!==void 0?f:J,Y=le?N:ee,Be=W()(S,G,(m={"has-breadcrumb":!!Y,"has-footer":!!A},(0,X.Z)(m,"".concat(S,"-ghost"),ae),(0,X.Z)(m,"".concat(S,"-rtl"),P==="rtl"),(0,X.Z)(m,"".concat(S,"-compact"),r),m));return n.createElement(ve.Z,{onResize:c},n.createElement("div",{className:Be,style:u},Y,xt(S,e,P),L&&Pt(S,L),Et(S,A)))})},bt=yt,et=o(81253),Qt=o(18106),tt=o(63885),Ye=o(64335),Zt=o(85224),_t=o(53645),Nt=function(e){var a=(0,n.useContext)(Ye.Z),t=e.children,r=e.contentWidth,l=e.className,c=e.style,d=(0,n.useContext)(De.ZP.ConfigContext),m=d.getPrefixCls,g=e.prefixCls||m("pro"),x=r||a.contentWidth,P="".concat(g,"-grid-content");return n.createElement("div",{className:W()(P,l,{wide:x==="Fixed"}),style:c},n.createElement("div",{className:"".concat(g,"-grid-content-children")},t))},pt=Nt,Ot=o(83832),Rt=function(e){if(!e)return 1;var a=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/a},Bt=function(e){var a=e.children,t=e.style,r=e.className,l=e.markStyle,c=e.markClassName,d=e.zIndex,m=d===void 0?9:d,g=e.gapX,x=g===void 0?212:g,P=e.gapY,f=P===void 0?222:P,D=e.width,u=D===void 0?120:D,A=e.height,L=A===void 0?64:A,N=e.rotate,k=N===void 0?-22:N,G=e.image,ae=e.content,S=e.offsetLeft,q=e.offsetTop,J=e.fontStyle,le=J===void 0?"normal":J,ee=e.fontWeight,Y=ee===void 0?"normal":ee,Be=e.fontColor,Je=Be===void 0?"rgba(0,0,0,.15)":Be,at=e.fontSize,rt=at===void 0?16:at,nt=e.fontFamily,ot=nt===void 0?"sans-serif":nt,$t=e.prefixCls,Wt=(0,n.useContext)(De.ZP.ConfigContext),Ft=Wt.getPrefixCls,it=Ft("pro-layout-watermark",$t),Ut=W()("".concat(it,"-wrapper"),r),Ht=W()(it,c),Kt=(0,n.useState)(""),lt=(0,p.Z)(Kt,2),jt=lt[0],st=lt[1];return(0,n.useEffect)(function(){var Ie=document.createElement("canvas"),he=Ie.getContext("2d"),ye=Rt(he),kt="".concat((x+u)*ye,"px"),Gt="".concat((f+L)*ye,"px"),Vt=S||x/2,Xt=q||f/2;if(Ie.setAttribute("width",kt),Ie.setAttribute("height",Gt),he){he.translate(Vt*ye,Xt*ye),he.rotate(Math.PI/180*Number(k));var Yt=u*ye,ct=L*ye;if(G){var we=new Image;we.crossOrigin="anonymous",we.referrerPolicy="no-referrer",we.src=G,we.onload=function(){he.drawImage(we,0,0,Yt,ct),st(Ie.toDataURL())}}else if(ae){var Jt=Number(rt)*ye;he.font="".concat(le," normal ").concat(Y," ").concat(Jt,"px/").concat(ct,"px ").concat(ot),he.fillStyle=Je,he.fillText(ae,0,0),st(Ie.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[x,f,S,q,k,le,Y,u,L,ot,Je,G,ae,rt]),n.createElement("div",{style:(0,v.Z)({position:"relative"},t),className:Ut},a,n.createElement("div",{className:Ht,style:(0,v.Z)({zIndex:m,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(x+u,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(jt,"')")},l)}))},Tt=Bt,qt=o(12395),Mt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],St=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Dt(i){return(0,$.Z)(i)==="object"?i:{spinning:i}}var At=function(e){var a=e.tabList,t=e.tabActiveKey,r=e.onTabChange,l=e.tabBarExtraContent,c=e.tabProps,d=e.prefixedClassName;return Array.isArray(a)||l?n.createElement(tt.Z,(0,O.Z)({className:"".concat(d,"-tabs"),activeKey:t,onChange:function(g){r&&r(g)},tabBarExtraContent:l},c),a==null?void 0:a.map(function(m,g){return n.createElement(tt.Z.TabPane,(0,O.Z)({},m,{tab:m.tab,key:m.key||g}))})):null},zt=function(e,a,t){return!e&&!a?null:n.createElement("div",{className:"".concat(t,"-detail")},n.createElement("div",{className:"".concat(t,"-main")},n.createElement("div",{className:"".concat(t,"-row")},e&&n.createElement("div",{className:"".concat(t,"-content")},e),a&&n.createElement("div",{className:"".concat(t,"-extraContent")},a))))},ea=function(e){var a=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_extends({},a==null?void 0:a.breadcrumb,a==null?void 0:a.breadcrumbProps,e)))},It=function(e){var a,t=(0,n.useContext)(Ye.Z),r=e.title,l=e.content,c=e.pageHeaderRender,d=e.header,m=e.prefixedClassName,g=e.extraContent,x=e.style,P=e.prefixCls,f=e.breadcrumbRender,D=(0,et.Z)(e,Mt),u=(0,n.useMemo)(function(){if(!!f)return f},[f]);if(c===!1)return null;if(c)return n.createElement(n.Fragment,null," ",c((0,v.Z)((0,v.Z)({},e),t)));var A=r;!r&&r!==!1&&(A=t.title);var L=(0,v.Z)((0,v.Z)((0,v.Z)({},t),{},{title:A},D),{},{footer:At((0,v.Z)((0,v.Z)({},D),{},{breadcrumbRender:f,prefixedClassName:m}))},d),N=L.breadcrumb,k=(!N||!(N==null?void 0:N.itemRender)&&!(N==null||(a=N.routes)===null||a===void 0?void 0:a.length))&&!f;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(G){return!L[G]})&&k&&!l&&!g?null:n.createElement("div",{className:"".concat(m,"-warp")},n.createElement(bt,(0,O.Z)({},L,{breadcrumb:f===!1?void 0:(0,v.Z)((0,v.Z)({},L.breadcrumb),t.breadcrumbProps),breadcrumbRender:u,prefixCls:P}),(d==null?void 0:d.children)||zt(l,g,m)))},wt=function(e){var a,t,r=e.children,l=e.loading,c=l===void 0?!1:l,d=e.className,m=e.style,g=e.footer,x=e.affixProps,P=e.ghost,f=e.fixedHeader,D=e.breadcrumbRender,u=(0,et.Z)(e,St),A=(0,n.useContext)(Ye.Z),L=(0,n.useContext)(De.ZP.ConfigContext),N=L.getPrefixCls,k=e.prefixCls||N("pro"),G="".concat(k,"-page-container"),ae=W()(G,d,(a={},(0,X.Z)(a,"".concat(k,"-page-container-ghost"),P),(0,X.Z)(a,"".concat(k,"-page-container-with-footer"),g),a)),S=(0,n.useMemo)(function(){return r?n.createElement(n.Fragment,null,n.createElement("div",{className:"".concat(G,"-children-content")},r),A.hasFooterToolbar&&n.createElement("div",{style:{height:48,marginTop:24}})):null},[r,G,A.hasFooterToolbar]),q=(0,n.useMemo)(function(){var Y;return D==!1?!1:D||(u==null||(Y=u.header)===null||Y===void 0?void 0:Y.breadcrumbRender)},[D,u==null||(t=u.header)===null||t===void 0?void 0:t.breadcrumbRender]),J=n.createElement(It,(0,O.Z)({},u,{breadcrumbRender:q,ghost:P,prefixCls:void 0,prefixedClassName:G})),le=(0,n.useMemo)(function(){if(n.isValidElement(c))return c;if(typeof c=="boolean"&&!c)return null;var Y=Dt(c);return n.createElement(Ot.Z,Y)},[c]),ee=(0,n.useMemo)(function(){var Y=le||S;if(e.waterMarkProps||A.waterMarkProps){var Be=(0,v.Z)((0,v.Z)({},A.waterMarkProps),e.waterMarkProps);return n.createElement(Tt,Be,Y)}return Y},[e.waterMarkProps,A.waterMarkProps,le,S]);return n.createElement("div",{style:m,className:ae},f&&J?n.createElement(Ke,(0,O.Z)({offsetTop:A.hasHeader&&A.fixedHeader?A.headerHeight:0},x),J):J,ee&&n.createElement(pt,null,ee),g&&n.createElement(Zt.Z,{prefixCls:k},g))},Lt=wt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},18067:function(){},34952:function(Te,re,o){"use strict";var E=o(22122),y=o(15105),O=o(67294),X=function(B,Q){var $={};for(var I in B)Object.prototype.hasOwnProperty.call(B,I)&&Q.indexOf(I)<0&&($[I]=B[I]);if(B!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,I=Object.getOwnPropertySymbols(B);W<I.length;W++)Q.indexOf(I[W])<0&&Object.prototype.propertyIsEnumerable.call(B,I[W])&&($[I[W]]=B[I[W]]);return $},U={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},h=O.forwardRef(function(B,Q){var $=function(te){var se=te.keyCode;se===y.Z.ENTER&&te.preventDefault()},I=function(te){var se=te.keyCode,ne=B.onClick;se===y.Z.ENTER&&ne&&ne()},W=B.style,ve=B.noStyle,ge=B.disabled,n=X(B,["style","noStyle","disabled"]),j={};return ve||(j=(0,E.Z)({},U)),ge&&(j.pointerEvents="none"),j=(0,E.Z)((0,E.Z)({},j),W),O.createElement("div",(0,E.Z)({role:"button",tabIndex:0,ref:Q},n,{onKeyDown:$,onKeyUp:I,style:j}))});re.Z=h},90860:function(Te,re,o){"use strict";o.d(re,{Z:function(){return qe}});var E=o(96156),y=o(22122),O=o(90484),X=o(94184),U=o.n(X),h=o(67294),B=o(53124),Q=o(98423),$=function(s){var C,p,v=s.prefixCls,F=s.className,w=s.style,b=s.size,Z=s.shape,R=U()((C={},(0,E.Z)(C,"".concat(v,"-lg"),b==="large"),(0,E.Z)(C,"".concat(v,"-sm"),b==="small"),C)),H=U()((p={},(0,E.Z)(p,"".concat(v,"-circle"),Z==="circle"),(0,E.Z)(p,"".concat(v,"-square"),Z==="square"),(0,E.Z)(p,"".concat(v,"-round"),Z==="round"),p)),M=h.useMemo(function(){return typeof b=="number"?{width:b,height:b,lineHeight:"".concat(b,"px")}:{}},[b]);return h.createElement("span",{className:U()(v,R,H,F),style:(0,y.Z)((0,y.Z)({},M),w)})},I=$,W=function(s){var C=s.prefixCls,p=s.className,v=s.active,F=s.shape,w=F===void 0?"circle":F,b=s.size,Z=b===void 0?"default":b,R=h.useContext(B.E_),H=R.getPrefixCls,M=H("skeleton",C),K=(0,Q.Z)(s,["prefixCls","className"]),ue=U()(M,"".concat(M,"-element"),(0,E.Z)({},"".concat(M,"-active"),v),p);return h.createElement("div",{className:ue},h.createElement(I,(0,y.Z)({prefixCls:"".concat(M,"-avatar"),shape:w,size:Z},K)))},ve=W,ge=function(s){var C,p=s.prefixCls,v=s.className,F=s.active,w=s.block,b=w===void 0?!1:w,Z=s.size,R=Z===void 0?"default":Z,H=h.useContext(B.E_),M=H.getPrefixCls,K=M("skeleton",p),ue=(0,Q.Z)(s,["prefixCls"]),Ae=U()(K,"".concat(K,"-element"),(C={},(0,E.Z)(C,"".concat(K,"-active"),F),(0,E.Z)(C,"".concat(K,"-block"),b),C),v);return h.createElement("div",{className:Ae},h.createElement(I,(0,y.Z)({prefixCls:"".concat(K,"-button"),size:R},ue)))},n=ge,j=o(28991),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},te=V,se=o(27029),ne=function(s,C){return h.createElement(se.Z,(0,j.Z)((0,j.Z)({},s),{},{ref:C,icon:te}))};ne.displayName="DotChartOutlined";var Me=h.forwardRef(ne),ce=function(s){var C=s.prefixCls,p=s.className,v=s.style,F=s.active,w=s.children,b=h.useContext(B.E_),Z=b.getPrefixCls,R=Z("skeleton",C),H=U()(R,"".concat(R,"-element"),(0,E.Z)({},"".concat(R,"-active"),F),p),M=w!=null?w:h.createElement(Me,null);return h.createElement("div",{className:H},h.createElement("div",{className:U()("".concat(R,"-image"),p),style:v},M))},be=ce,Ze="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",Ne=function(s){var C=s.prefixCls,p=s.className,v=s.style,F=s.active,w=h.useContext(B.E_),b=w.getPrefixCls,Z=b("skeleton",C),R=U()(Z,"".concat(Z,"-element"),(0,E.Z)({},"".concat(Z,"-active"),F),p);return h.createElement("div",{className:R},h.createElement("div",{className:U()("".concat(Z,"-image"),p),style:v},h.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(Z,"-image-svg")},h.createElement("path",{d:Ze,className:"".concat(Z,"-image-path")}))))},oe=Ne,pe=function(s){var C,p=s.prefixCls,v=s.className,F=s.active,w=s.block,b=s.size,Z=b===void 0?"default":b,R=h.useContext(B.E_),H=R.getPrefixCls,M=H("skeleton",p),K=(0,Q.Z)(s,["prefixCls"]),ue=U()(M,"".concat(M,"-element"),(C={},(0,E.Z)(C,"".concat(M,"-active"),F),(0,E.Z)(C,"".concat(M,"-block"),w),C),v);return h.createElement("div",{className:ue},h.createElement(I,(0,y.Z)({prefixCls:"".concat(M,"-input"),size:Z},K)))},T=pe,Ce=o(85061),xe=function(s){var C=function(R){var H=s.width,M=s.rows,K=M===void 0?2:M;if(Array.isArray(H))return H[R];if(K-1===R)return H},p=s.prefixCls,v=s.className,F=s.style,w=s.rows,b=(0,Ce.Z)(Array(w)).map(function(Z,R){return h.createElement("li",{key:R,style:{width:C(R)}})});return h.createElement("ul",{className:U()(p,v),style:F},b)},de=xe,ie=function(s){var C=s.prefixCls,p=s.className,v=s.width,F=s.style;return h.createElement("h3",{className:U()(C,p),style:(0,y.Z)({width:v},F)})},fe=ie;function Se(z){return z&&(0,O.Z)(z)==="object"?z:{}}function Ke(z,s){return z&&!s?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Qe(z,s){return!z&&s?{width:"38%"}:z&&s?{width:"50%"}:{}}function De(z,s){var C={};return(!z||!s)&&(C.width="61%"),!z&&s?C.rows=3:C.rows=2,C}var Ee=function(s){var C=s.prefixCls,p=s.loading,v=s.className,F=s.style,w=s.children,b=s.avatar,Z=b===void 0?!1:b,R=s.title,H=R===void 0?!0:R,M=s.paragraph,K=M===void 0?!0:M,ue=s.active,Ae=s.round,Le=h.useContext(B.E_),je=Le.getPrefixCls,ke=Le.direction,_=je("skeleton",C);if(p||!("loading"in s)){var me,Oe=!!Z,Re=!!H,Pe=!!K,ze;if(Oe){var $e=(0,y.Z)((0,y.Z)({prefixCls:"".concat(_,"-avatar")},Ke(Re,Pe)),Se(Z));ze=h.createElement("div",{className:"".concat(_,"-header")},h.createElement(I,(0,y.Z)({},$e)))}var We;if(Re||Pe){var Fe;if(Re){var Ge=(0,y.Z)((0,y.Z)({prefixCls:"".concat(_,"-title")},Qe(Oe,Pe)),Se(H));Fe=h.createElement(fe,(0,y.Z)({},Ge))}var Ue;if(Pe){var He=(0,y.Z)((0,y.Z)({prefixCls:"".concat(_,"-paragraph")},De(Oe,Re)),Se(K));Ue=h.createElement(de,(0,y.Z)({},He))}We=h.createElement("div",{className:"".concat(_,"-content")},Fe,Ue)}var Ve=U()(_,(me={},(0,E.Z)(me,"".concat(_,"-with-avatar"),Oe),(0,E.Z)(me,"".concat(_,"-active"),ue),(0,E.Z)(me,"".concat(_,"-rtl"),ke==="rtl"),(0,E.Z)(me,"".concat(_,"-round"),Ae),me),v);return h.createElement("div",{className:Ve,style:F},ze,We)}return typeof w!="undefined"?w:null};Ee.Button=n,Ee.Avatar=ve,Ee.Input=T,Ee.Image=oe,Ee.Node=be;var _e=Ee,qe=_e},18446:function(Te,re,o){"use strict";var E=o(38663),y=o.n(E),O=o(18067),X=o.n(O)}}]);
