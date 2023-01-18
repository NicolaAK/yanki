(this.webpackJsonpkolya=this.webpackJsonpkolya||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(37),o=n.n(r),l=n(3),c=n(32),s=n(42);var d,h,f=function(e){var t={};return Object.keys(e).forEach((function(n){Object.defineProperty(t,n,{enumerable:!0,get:function(){return function(t){return t?Object(s.a)(1-t,e[n]):e[n]}}})})),t}({white:"#FFFFFF",mainPrimary:"#E0BEA2",blackPrimary:"#252525",elipseViolet:"#6F83A4",elipsePastel:"#F1DDAA"}),u={dFooter12:{fontSize:12,lineHeight:14},dFooter16w:{fontSize:16,lineHeight:19,fontWeight:275},dFooter20:{fontSize:20,lineHeight:23},dText14:{fontSize:14,lineHeight:16},dText14w:{fontSize:14,lineHeight:16,fontWeight:275},dText16lh19:{fontSize:16,lineHeight:19},dText16w:{fontSize:16,lineHeight:19,fontWeight:275},dText16lh20:{fontSize:16,lineHeight:20},dText20:{fontSize:20,lineHeight:23},dText36:{fontSize:36,lineHeight:42},dTextBold16:{fontSize:16,lineHeight:19,fontWeight:700},dHeader16:{fontSize:16,lineHeight:19,fontWeight:300},dHeader18:{fontSize:18,lineHeight:21,fontWeight:300},dHeader46:{fontSize:46,lineHeight:54},dHeader54:{fontSize:54,lineHeight:44,fontWeight:400}},j={borderRadius:.3,boxShadow:"0px 10px 15px rgba(37, 37, 37, 0.07)",transition:"all .2s ease-in-out"},m=n(6);!function(e){e.sm="sm",e.md="md",e.ld="ld",e.xl="xl",e.xxl="xxl"}(h||(h={}));var x,b=(d={},Object(m.a)(d,h.sm,"(max-width: 576px)"),Object(m.a)(d,h.md,"(max-width: 767px)"),Object(m.a)(d,h.ld,"(max-width: 992px)"),Object(m.a)(d,h.xl,"(max-width: 1200px)"),Object(m.a)(d,h.xxl,"(max-width: 1400px)"),d),p="\n    display: flex;\n    align-items: flex-start;\n",g="\n    display: flex;\n    align-items: flex-end;\n",y="\n    display: flex;\n    align-items: center;\n",w={flexStart:Object(l.c)(["",""],p),flexEnd:Object(l.c)(["",""],g),flexCenter:Object(l.c)(["",""],y),flexStartCenter:Object(l.c)(["",";justify-content:center;"],p),flexCenterCenter:Object(l.c)(["",";justify-content:center;"],y),flexEndCenter:Object(l.c)(["",";justify-content:center;"],g),flexCenterSpaceBetween:Object(l.c)(["",";justify-content:space-between;"],y),mainGrid:Object(l.c)(["max-width:1140px;width:100%;margin:0 auto;"]),getTypography:function(e){return Object(l.c)(["",""],(function(t){return t.theme.helpers.getTypography(e)}))}},O=n(29),v=["fontSize","lineHeight"],C=function(e){return Object(O.mapValues)(e,(function(e,t){return v.includes(t)?"".concat(e,"px"):null===e||void 0===e?void 0:e.toString()}))},_=function(e){return Object(O.mapKeys)(e,(function(e,t){return Object(O.kebabCase)(t)}))},z={getTypography:function(e){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return n.reduce((function(e,t){return t(e)}),e)}(u[e],C,_)}},N={colors:f,typography:u,decorations:j,breakpoints:b,mixins:w,helpers:z},E=n(1),k=function(e){var t=e.center,n=e.className,i=e.variant,a=e.underline,r=e.children,o=e.color;return Object(E.jsx)(M,{variant:i,center:t,className:n,underline:a,color:o,children:r})},H=function(e,t){return e.typography[t]},M=l.d.p.withConfig({displayName:"Typography__TypographyText"})(["line-height:","px;font-size:","px;font-weight:",";text-transform:",";text-align:",";text-decoration:",";color:",";"],(function(e){var t=e.theme,n=e.variant;return H(t,n).lineHeight}),(function(e){var t=e.theme,n=e.variant;return H(t,n).fontSize}),(function(e){var t=e.theme,n=e.variant;return H(t,n).fontWeight||400}),(function(e){var t=e.theme,n=e.variant;return H(t,n).textTransform||"none"}),(function(e){return e.center?"center":"left"}),(function(e){return e.underline?"underline":"none"}),(function(e){return e.color})),S=l.d.div.withConfig({displayName:"styled__FooterContainer"})(["",";margin:100px auto;"],(function(e){return e.theme.mixins.mainGrid})),A=l.d.div.withConfig({displayName:"styled__FooterContent"})(["",";column-gap:47px;"],(function(e){return e.theme.mixins.flexStartCenter})),L=l.d.div.withConfig({displayName:"styled__ContainerText"})([""]),T=Object(l.d)(k).attrs({variant:"dFooter16w"}).withConfig({displayName:"styled__Text"})(["margin-bottom:10px;"]),B=l.d.div.withConfig({displayName:"styled__CompanyContainer"})(["width:250px;"]),P=Object(l.d)(k).attrs({variant:"dFooter20"}).withConfig({displayName:"styled__CompanyTitle"})(["margin-bottom:20px;"]),F=l.d.div.withConfig({displayName:"styled__ContainerIcons"})(["",";column-gap:13px;margin-bottom:7px;"],(function(e){return e.theme.mixins.flexStart})),R=l.d.button.withConfig({displayName:"styled__Icon"})([""]),D=n(7),W=["styles"],G=function(e){e.styles;var t=Object(D.a)(e,W);return a.a.createElement("svg",Object.assign({width:"17",height:"17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M8.5 14.833a6.334 6.334 0 100-12.667 6.334 6.334 0 000 12.667zm0 1.584A7.917 7.917 0 118.5.584a7.917 7.917 0 010 15.833zm-2.462-6.99L4.06 8.81c-.427-.131-.43-.426.096-.637l7.705-2.977c.448-.182.701.049.556.626l-1.312 6.19c-.091.442-.357.547-.725.343l-2.02-1.494-.94.909c-.097.093-.176.173-.324.193-.149.02-.27-.024-.36-.27l-.689-2.272-.01.005z",fill:"#E0BEA2"}))},V=["styles"],q=function(e){e.styles;var t=Object(D.a)(e,V);return a.a.createElement("svg",Object.assign({width:"17",height:"17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M8.5 6.125a2.375 2.375 0 100 4.75 2.375 2.375 0 000-4.75zm0-1.583a3.958 3.958 0 110 7.916 3.958 3.958 0 010-7.916zm5.146-.198a.99.99 0 11-1.98 0 .99.99 0 011.98 0zM8.5 2.167c-1.959 0-2.279.005-3.19.046-.62.029-1.037.112-1.423.262a2.285 2.285 0 00-.855.557c-.248.24-.438.532-.557.855-.15.388-.234.804-.263 1.423-.04.874-.045 1.18-.045 3.19 0 1.959.005 2.278.046 3.19.029.62.112 1.037.262 1.422.134.345.292.592.555.855.267.266.515.425.855.557.391.151.808.235 1.425.264.874.04 1.18.045 3.19.045 1.959 0 2.278-.005 3.19-.046.619-.029 1.036-.112 1.422-.262.343-.133.592-.293.855-.555.267-.267.426-.515.557-.855.15-.39.235-.808.263-1.425.041-.874.046-1.18.046-3.19 0-1.959-.005-2.278-.046-3.19-.029-.619-.112-1.037-.263-1.423a2.305 2.305 0 00-.556-.855 2.283 2.283 0 00-.855-.557c-.388-.15-.804-.234-1.423-.262-.874-.042-1.18-.046-3.19-.046zm0-1.584c2.15 0 2.42.008 3.263.048s1.417.172 1.922.368a3.86 3.86 0 011.403.913c.403.396.714.874.913 1.403.195.504.328 1.079.368 1.922.037.844.048 1.112.048 3.263s-.008 2.42-.048 3.263-.172 1.417-.368 1.922a3.868 3.868 0 01-.913 1.403 3.892 3.892 0 01-1.403.913c-.504.196-1.079.329-1.922.368-.844.037-1.112.048-3.263.048s-2.42-.008-3.263-.048-1.417-.172-1.923-.368a3.871 3.871 0 01-1.402-.913 3.882 3.882 0 01-.913-1.402C.803 13.18.67 12.605.63 11.762.594 10.92.583 10.651.583 8.5c0-2.15.008-2.42.048-3.263.04-.844.172-1.417.368-1.922.198-.53.51-1.008.913-1.403A3.877 3.877 0 013.314.999C3.82.803 4.393.67 5.237.631 6.08.594 6.349.583 8.5.583z",fill:"#E0BEA2"}))},I=[{abouts:"\u041e \u043d\u0430\u0441"},{abouts:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}],Y=[{abouts:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"},{abouts:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430"},{abouts:"\u0411\u043e\u043d\u0443\u0441\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430"}],J=[{abouts:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"},{abouts:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"},{abouts:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}],K=[{abouts:"+38(073) 096 36 44"},{abouts:"info@yanki.com"}],U=[{id:1,icons:Object(E.jsx)(q,{})},{id:2,icons:Object(E.jsx)(G,{})}],X=function(){return Object(E.jsx)(S,{children:Object(E.jsxs)(A,{children:[Object(E.jsxs)(B,{children:[Object(E.jsx)(P,{children:"\u041a\u041e\u041c\u041f\u0410\u041d\u0418\u042f"}),Object(E.jsx)(L,{children:I.map((function(e){return Object(E.jsx)(T,{children:e.abouts},e.abouts)}))})]}),Object(E.jsxs)(B,{children:[Object(E.jsx)(P,{children:"\u041f\u041e\u041b\u0415\u0417\u041d\u041e\u0415"}),Object(E.jsx)(L,{children:Y.map((function(e){return Object(E.jsx)(T,{children:e.abouts},e.abouts)}))})]}),Object(E.jsxs)(B,{children:[Object(E.jsx)(P,{children:"\u041f\u041e\u041a\u0423\u041f\u0410\u0422\u0415\u041b\u042e"}),Object(E.jsx)(L,{children:J.map((function(e){return Object(E.jsx)(T,{children:e.abouts},e.abouts)}))})]}),Object(E.jsxs)(B,{children:[Object(E.jsx)(P,{children:"\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b"}),Object(E.jsx)(F,{children:U.map((function(e){return Object(E.jsx)(R,{children:e.icons},e.id)}))}),Object(E.jsx)(L,{children:K.map((function(e){return Object(E.jsx)(T,{children:e.abouts},e.abouts)}))})]})]})})},Q=l.d.div.withConfig({displayName:"styled__HeaderContainer"})(["background-color:",";svg path{fill:",";}height:85px;z-index:2;"],(function(e){var t=e.theme;return e.isDark?t.colors.white():"inherit"}),(function(e){var t=e.theme;return e.isDark?t.colors.mainPrimary():t.colors.white()})),Z=l.d.div.withConfig({displayName:"styled__HeaderContent"})(["",";",";padding:25px 0 20px 0;z-index:2;"],(function(e){return e.theme.mixins.mainGrid}),(function(e){return e.theme.mixins.flexCenterSpaceBetween})),$=l.d.div.withConfig({displayName:"styled__AboutsCompany"})(["",";column-gap:25px;z-index:2;color:","};"],(function(e){return e.theme.mixins.flexCenter}),(function(e){var t=e.theme;return e.isDark?t.colors.blackPrimary():t.colors.white()})),ee=l.d.div.withConfig({displayName:"styled__SocialsMedia"})(["",";column-gap:32px;z-index:2;"],(function(e){return e.theme.mixins.flexCenter})),te=l.d.button.withConfig({displayName:"styled__LogoContainer"})(["z-index:2;"]),ne=l.d.div.withConfig({displayName:"styled__Settings"})(["",";column-gap:24px;z-index:2;color:","};"],(function(e){return e.theme.mixins.flexCenter}),(function(e){var t=e.theme;return e.isDark?t.colors.blackPrimary():t.colors.white()})),ie=l.d.div.withConfig({displayName:"styled__MenuContainer"})(["z-index:2;"]),ae=l.d.button.withConfig({displayName:"styled__AboutCompanyWrapper"})(["",""],(function(e){return e.theme.mixins.flexCenter})),re=Object(l.d)(k).attrs({variant:"dHeader18"}).withConfig({displayName:"styled__AboutCompanyTitle"})([""]),oe=function(e){var t=e.label;return Object(E.jsx)(ae,{children:Object(E.jsx)(re,{children:t})})},le=["styles"],ce=function(e){e.styles;var t=Object(D.a)(e,le);return a.a.createElement("svg",Object.assign({width:"11",height:"7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M5.019 3.89L8.908 0l1.11 1.11-5 5-5-5L1.13 0l3.889 3.89z",fill:"#252525"}))},se=l.d.div.withConfig({displayName:"styled__LanguageContainer"})(["flex-direction:row;"]),de=l.d.button.withConfig({displayName:"styled__LanguageContent"})(["",";justify-content:center;column-gap:9px;"],(function(e){return e.theme.mixins.flexCenter})),he=Object(l.d)(k).attrs({variant:"dHeader18"}).withConfig({displayName:"styled__LanguageTitle"})([""]),fe=function(){return Object(E.jsx)(se,{children:Object(E.jsxs)(de,{children:[Object(E.jsx)(he,{children:"RU"}),Object(E.jsx)(ce,{})]})})},ue=l.d.div.withConfig({displayName:"styled__MoneyContainer"})(["flex-direction:row;"]),je=l.d.button.withConfig({displayName:"styled__MoneyContent"})(["",";justify-content:center;column-gap:9px;"],(function(e){return e.theme.mixins.flexCenter})),me=Object(l.d)(k).attrs({variant:"dHeader18"}).withConfig({displayName:"styled__MoneyTitle"})([""]),xe=function(){return Object(E.jsx)(ue,{children:Object(E.jsxs)(je,{children:[Object(E.jsx)(me,{children:"RUB"}),Object(E.jsx)(ce,{})]})})},be=function(e){var t=e.icon;return Object(E.jsx)(ae,{children:t})},pe=["styles"],ge=function(e){e.styles;var t=Object(D.a)(e,pe);return a.a.createElement("svg",Object.assign({width:"34",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{fill:"#E0BEA2",d:"M0 0h34v4H0zM0 10h26v4H0zM0 20h18v4H0z"}))},ye=["styles"],we=function(e){e.styles;var t=Object(D.a)(e,ye);return a.a.createElement("svg",Object.assign({width:"195",height:"40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M38.26.43c.082 0 .123.123.123.368 0 .246-.041.369-.123.369-1.27 0-2.825.798-4.667 2.395-1.843 1.556-3.48 3.52-4.913 5.896l-6.387 10.685v13.695c0 1.27.102 2.19.307 2.764a1.84 1.84 0 001.167 1.167c.614.204 1.576.307 2.886.307.123 0 .184.123.184.368 0 .246-.061.369-.184.369-1.351 0-2.415-.02-3.193-.062l-4.606-.061-4.545.061c-.819.041-1.924.062-3.316.062-.082 0-.123-.123-.123-.369 0-.245.041-.368.123-.368 1.31 0 2.272-.103 2.886-.307.614-.205 1.024-.594 1.229-1.167.245-.614.368-1.535.368-2.764V21.433L6.51 7.493C4.995 5.117 3.726 3.48 2.702 2.578 1.72 1.638.88 1.167.184 1.167.061 1.167 0 1.044 0 .798 0 .553.061.43.184.43L2.088.49c.9.082 1.535.123 1.904.123 1.433 0 3.5-.04 6.202-.123L14.248.43c.082 0 .123.123.123.368 0 .246-.041.369-.123.369-.696 0-1.249.164-1.658.491-.369.328-.553.758-.553 1.29 0 .655.286 1.433.86 2.333l8.413 13.266 5.65-9.642c1.105-1.843 1.658-3.419 1.658-4.729 0-.983-.307-1.72-.921-2.21-.573-.533-1.412-.8-2.518-.8-.123 0-.184-.122-.184-.368 0-.245.061-.368.184-.368l3.255.061c1.883.082 3.562.123 5.036.123.696 0 1.535-.04 2.518-.123L38.26.43zM81.765 38.076c.205 0 .307.123.307.368 0 .246-.102.369-.307.369-.819 0-2.088-.041-3.808-.123-1.801-.082-3.09-.123-3.869-.123-1.023 0-2.272.041-3.746.123a59.527 59.527 0 01-3.316.123c-.164 0-.246-.123-.246-.369 0-.245.082-.368.246-.368 1.065 0 1.822-.103 2.272-.307.492-.246.737-.655.737-1.229 0-.696-.41-1.862-1.228-3.5l-4.176-8.29H49.523l-2.395 5.342c-.532 1.187-.798 2.293-.798 3.316 0 1.474.512 2.62 1.535 3.44 1.065.818 2.477 1.228 4.238 1.228.204 0 .307.123.307.368 0 .246-.103.369-.307.369-.737 0-1.802-.041-3.194-.123a78.477 78.477 0 00-4.053-.123c-1.105 0-2.436.041-3.992.123a60.078 60.078 0 01-3.377.123c-.164 0-.246-.123-.246-.369 0-.245.082-.368.246-.368 1.146 0 2.108-.225 2.886-.676.778-.491 1.556-1.33 2.334-2.518.777-1.228 1.699-3.03 2.763-5.404L58.797.184c.082-.123.266-.184.552-.184.328 0 .512.061.553.184L75.255 30.4c1.433 2.907 2.62 4.913 3.562 6.019.942 1.105 1.924 1.658 2.948 1.658zM50.322 23.03H63.71L56.647 9.028 50.322 23.03zM129.164.43c.082 0 .123.123.123.368 0 .246-.041.369-.123.369-1.637 0-2.927.655-3.869 1.965-.941 1.27-1.412 2.989-1.412 5.159v31.443c0 .123-.102.205-.307.245-.164.041-.287.021-.369-.06L94.405 7.123v23.89c0 2.17.45 3.889 1.351 5.158.9 1.27 2.15 1.904 3.746 1.904.082 0 .123.123.123.368 0 .246-.041.369-.123.369-1.146 0-2.026-.02-2.64-.062l-3.317-.061-3.807.061c-.697.041-1.7.062-3.01.062-.122 0-.184-.123-.184-.369 0-.245.062-.368.184-.368 1.802 0 3.214-.635 4.238-1.904 1.064-1.27 1.597-2.989 1.597-5.159V5.036c-1.352-1.474-2.518-2.477-3.501-3.01-.942-.573-1.924-.86-2.948-.86-.082 0-.123-.122-.123-.368 0-.245.041-.368.123-.368l2.58.061c.532.041 1.31.062 2.333.062L95.695.49c.573-.04 1.269-.061 2.088-.061.327 0 .573.082.736.246.164.163.45.511.86 1.044.696.941 1.188 1.576 1.474 1.903l21.249 24.504V8.29c0-2.211-.45-3.951-1.351-5.22-.901-1.27-2.15-1.904-3.746-1.904-.082 0-.123-.123-.123-.369 0-.245.041-.368.123-.368l2.64.061c1.311.082 2.416.123 3.317.123.819 0 1.965-.04 3.439-.123l2.763-.061zM173.771 38.076c.123 0 .185.123.185.368 0 .246-.062.369-.185.369h-6.878c-.655 0-1.208.02-1.658.061-.45.041-.819.061-1.105.061-.655 0-1.229-.143-1.72-.43-.45-.327-1.023-.9-1.719-1.719-.656-.819-1.843-2.395-3.562-4.729a12.3 12.3 0 00-.737-.92 38.555 38.555 0 00-.86-1.23L147.487 19.1l-1.351 1.351v13.388c0 1.27.102 2.19.307 2.764a1.84 1.84 0 001.167 1.167c.614.204 1.576.307 2.886.307.164 0 .246.123.246.368 0 .246-.082.369-.246.369a64.32 64.32 0 01-3.193-.062l-4.606-.061-4.545.061c-.819.041-1.924.062-3.316.062-.082 0-.123-.123-.123-.369 0-.245.041-.368.123-.368 1.31 0 2.272-.103 2.886-.307.614-.205 1.024-.594 1.229-1.167.245-.614.368-1.535.368-2.764V5.404c0-1.228-.123-2.129-.368-2.702-.205-.573-.615-.962-1.229-1.167-.573-.245-1.494-.368-2.763-.368-.123 0-.184-.123-.184-.369 0-.245.061-.368.184-.368l3.255.061c1.883.082 3.377.123 4.483.123 1.228 0 2.784-.04 4.667-.123l3.132-.061c.123 0 .184.123.184.368 0 .246-.061.369-.184.369-1.269 0-2.211.123-2.825.368-.573.246-.982.676-1.228 1.29-.205.573-.307 1.474-.307 2.702v13.02l11.545-11.792c1.188-1.187 1.781-2.272 1.781-3.254 0-.737-.327-1.31-.982-1.72-.655-.41-1.577-.614-2.764-.614-.123 0-.184-.123-.184-.369 0-.245.061-.368.184-.368l2.887.061c1.801.082 3.48.123 5.035.123 1.679 0 3.419-.04 5.22-.123l2.764-.061c.123 0 .184.123.184.368 0 .246-.061.369-.184.369-1.883 0-3.951.553-6.203 1.658a22.5 22.5 0 00-6.141 4.299l-6.94 7.062 9.09 12.283c2.661 3.807 4.646 6.51 5.957 8.106 1.351 1.556 2.436 2.539 3.254 2.948.819.368 1.863.553 3.132.553zM190.247 33.838c0 1.27.102 2.19.307 2.764.205.573.593.962 1.167 1.167.614.204 1.576.307 2.886.307.123 0 .184.123.184.368 0 .246-.061.369-.184.369-1.351 0-2.416-.02-3.193-.062l-4.668-.061-4.544.061a70.06 70.06 0 01-3.317.062c-.081 0-.122-.123-.122-.369 0-.245.041-.368.122-.368 1.311 0 2.273-.103 2.887-.307.614-.205 1.023-.594 1.228-1.167.246-.614.369-1.535.369-2.764V5.404c0-1.228-.123-2.129-.369-2.702-.205-.573-.614-.962-1.228-1.167-.614-.245-1.576-.368-2.887-.368-.081 0-.122-.123-.122-.369 0-.245.041-.368.122-.368l3.317.061c1.883.082 3.398.123 4.544.123 1.269 0 2.846-.04 4.729-.123l3.132-.061c.123 0 .184.123.184.368 0 .246-.061.369-.184.369-1.269 0-2.211.123-2.825.368-.614.246-1.023.676-1.228 1.29-.205.573-.307 1.474-.307 2.702v28.311z",fill:"#E0BEA2"}))},Oe=["styles"],ve=function(e){e.styles;var t=Object(D.a)(e,Oe);return a.a.createElement("svg",Object.assign({width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M19.729 17.989L25 23.259 23.259 25l-5.27-5.271a11.026 11.026 0 01-6.913 2.423C4.962 22.152 0 17.19 0 11.076 0 4.962 4.962 0 11.076 0c6.114 0 11.076 4.962 11.076 11.076a11.026 11.026 0 01-2.423 6.913zm-2.469-.913a8.587 8.587 0 002.43-6 8.612 8.612 0 00-8.614-8.615 8.612 8.612 0 00-8.615 8.615 8.612 8.612 0 008.615 8.615 8.587 8.587 0 006-2.43l.184-.185z",fill:"#252525"}))},Ce=["styles"],_e=function(e){e.styles;var t=Object(D.a)(e,Ce);return a.a.createElement("svg",Object.assign({width:"20",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M.5 25a9.524 9.524 0 0119.048 0h-2.381A7.143 7.143 0 002.88 25H.5zm9.524-10.714A7.14 7.14 0 012.88 7.143 7.14 7.14 0 0110.024 0a7.14 7.14 0 017.143 7.143 7.14 7.14 0 01-7.143 7.143zm0-2.381a4.76 4.76 0 004.762-4.762 4.76 4.76 0 00-4.762-4.762 4.76 4.76 0 00-4.762 4.762 4.76 4.76 0 004.762 4.762z",fill:"#E0BEA2"}))},ze=["styles"],Ne=function(e){e.styles;var t=Object(D.a)(e,ze);return a.a.createElement("svg",Object.assign({width:"25",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M12.501 2.161c2.936-2.636 7.474-2.549 10.302.285a7.5 7.5 0 01.295 10.295l-10.6 10.615L1.902 12.74a7.5 7.5 0 0110.6-10.58zm8.532 2.051a4.997 4.997 0 00-6.862-.19l-1.669 1.497-1.67-1.497a4.999 4.999 0 00-6.867.193 4.999 4.999 0 00-.24 6.813l8.775 8.79 8.775-8.788a5 5 0 00-.242-6.818z",fill:"#E0BEA2"}))},Ee=["styles"],ke=function(e){e.styles;var t=Object(D.a)(e,Ee);return a.a.createElement("svg",Object.assign({width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M3.817 5.48L0 1.666 1.665 0l3.816 3.817h17.937a1.177 1.177 0 011.128 1.514l-2.825 9.415a1.177 1.177 0 01-1.127.84H6.17v2.353h12.946v2.354H4.993a1.177 1.177 0 01-1.176-1.177V5.48zm2.353.69v7.061h13.548l2.119-7.06H6.17zM5.582 25a1.766 1.766 0 110-3.531 1.766 1.766 0 010 3.531zm14.122 0a1.765 1.765 0 110-3.53 1.765 1.765 0 010 3.53z",fill:"#E0BEA2"}))},He=[{id:1,icon:Object(E.jsx)(ve,{})},{id:2,icon:Object(E.jsx)(_e,{})},{id:3,icon:Object(E.jsx)(Ne,{})},{id:4,icon:Object(E.jsx)(ke,{})}],Me=[{label:"NEW"},{label:"\u041a\u0410\u0422\u0410\u041b\u041e\u0413"},{label:"\u041e \u041d\u0410\u0421"}],Se=function(e){var t=e.isDark;return Object(E.jsx)(Q,{isDark:t,children:Object(E.jsxs)(Z,{children:[Object(E.jsx)(ie,{children:Object(E.jsx)(ge,{})}),Object(E.jsx)($,{isDark:t,children:Me.map((function(e){return Object(E.jsx)(oe,{label:e.label},e.label)}))}),Object(E.jsx)(te,{children:Object(E.jsx)(we,{})}),Object(E.jsxs)(ne,{isDark:t,children:[Object(E.jsx)(fe,{}),Object(E.jsx)(xe,{})]}),Object(E.jsx)(ee,{children:He.map((function(e){return Object(E.jsx)(be,{icon:e.icon},e.id)}))})]})})},Ae=l.d.div.withConfig({displayName:"styles__PagesContainer"})([""]),Le=n(4),Te=l.d.div.withConfig({displayName:"styled__MainContainer"})([""]),Be=l.d.div.withConfig({displayName:"styled__MainContent"})([""]),Pe=l.d.div.withConfig({displayName:"styled__CategoryContainer"})(["",";"],(function(e){return e.theme.mixins.mainGrid})),Fe=Object(l.d)(k).attrs({variant:"dText36"}).withConfig({displayName:"styled__CategoryTitle"})(["color:",";"],(function(e){return e.theme.colors.blackPrimary()})),Re=l.d.div.withConfig({displayName:"styled__BoxContainer"})(["position:relative;bottom:85px;"]),De=l.d.div.withConfig({displayName:"styled__BoxTitle"})(["",";position:absolute;flex-direction:column;width:100%;top:400px;left:0px;color:",";"],(function(e){return e.theme.mixins.flexCenter}),(function(e){return e.theme.colors.white()})),We=l.d.image.withConfig({displayName:"styled__PhotoModel1"})(["margin:0 -5px;"]),Ge=l.d.image.withConfig({displayName:"styled__PhotoModel2"})([""]),Ve=l.d.image.withConfig({displayName:"styled__PhotoModel3"})(["margin:0 -5px;"]),qe=Object(l.d)(k).attrs({variant:"dHeader46"}).withConfig({displayName:"styled__NewCollection"})(["margin-bottom:20px;"]),Ie=Object(l.d)(k).attrs({variant:"dHeader16"}).withConfig({displayName:"styled__WatchProducts"})([""]),Ye=l.d.button.withConfig({displayName:"styled__WatchProductsContainer"})(["flex-direction:row;margin-top:20px;",";justify-content:center;column-gap:7px;"],(function(e){return e.theme.mixins.flexCenter})),Je=l.d.div.withConfig({displayName:"styled__ArrowContainer"})([""]),Ke=l.d.div.withConfig({displayName:"styled__BoxPhoto"})(["",";"],(function(e){return e.theme.mixins.flexCenterCenter})),Ue=["styles"],Xe=function(e){e.styles;var t=Object(D.a)(e,Ue);return a.a.createElement("svg",Object.assign({width:"120",height:"1",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{fill:"#fff",d:"M0 0h120v1H0z"}))},Qe=["styles"],Ze=function(e){e.styles;var t=Object(D.a)(e,Qe);return a.a.createElement("svg",Object.assign({width:"7",height:"10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M3.89 5L0 1.11 1.11 0l5 5-5 5L0 8.89 3.89 5z",fill:"#fff"}))},$e=n.p+"static/media/mainModel1.79be3725.png",et=n.p+"static/media/mainModel2.8b939955.png",tt=n.p+"static/media/mainModel3.ee6ba095.png",nt=function(){return Object(E.jsx)(Re,{children:Object(E.jsxs)(Ke,{children:[Object(E.jsx)(We,{children:Object(E.jsx)("img",{src:$e,alt:"photoModel"})}),Object(E.jsxs)(Ge,{children:[Object(E.jsx)("img",{src:et,alt:"photoModel"}),Object(E.jsxs)(De,{children:[Object(E.jsx)(qe,{children:"\u041d\u043e\u0432\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f"}),Object(E.jsx)(Xe,{}),Object(E.jsxs)(Ye,{children:[Object(E.jsx)(Ie,{children:"\u0421\u041c\u041e\u0422\u0420\u0415\u0422\u042c \u041d\u041e\u0412\u0418\u041d\u041a\u0418"}),Object(E.jsx)(Je,{children:Object(E.jsx)(Ze,{})})]})]})]}),Object(E.jsx)(Ve,{children:Object(E.jsx)("img",{src:tt,alt:"photoModel"})})]})})},it=n(34),at=n(41),rt=n.n(at),ot=(n(66),n(67),l.d.div.withConfig({displayName:"styled__SliderContainer"})(["",";.slick-slide{padding:0;height:450px;}.slick-slider{height:450px;}"],(function(e){return e.theme.mixins.mainGrid}))),lt=l.d.div.withConfig({displayName:"styled__SliderWrap"})([""]),ct=l.d.button.withConfig({displayName:"styled__SliderBottomBox"})(["position:relative;bottom:40px;background:",";backdrop-filter:blur(3px);width:274px;height:40px;",""],(function(e){return e.theme.colors.mainPrimary(75)}),(function(e){return e.theme.mixins.flexCenterCenter})),st=l.d.div.withConfig({displayName:"styled__SliderPhoto"})([""]),dt=Object(l.d)(k).attrs({variant:"dText20"}).withConfig({displayName:"styled__SliderText"})(["color:",";"],(function(e){return e.theme.colors.white()})),ht=n.p+"static/media/sliderCoat.f6b8f761.png",ft=n.p+"static/media/sliderJackets.360e9cdf.png",ut=n.p+"static/media/sliderFur.454a1869.png",jt=n.p+"static/media/sliderParks.29df479c.png",mt=l.d.div.withConfig({displayName:"styled__ArrowContainerRight"})(["position:relative;bottom:245px;left:1065px;z-index:1;width:40px;height:40px;"]),xt=l.d.div.withConfig({displayName:"styled__ArrowContainerLeft"})(["position:relative;top:248px;left:20px;z-index:1;width:40px;height:40px;"]),bt=l.d.button.withConfig({displayName:"styled__ArrowBox"})(["background:",";",";width:100%;height:100%;"],(function(e){return e.theme.colors.mainPrimary()}),(function(e){return e.theme.mixins.flexCenterCenter})),pt=["styles"],gt=function(e){e.styles;var t=Object(D.a)(e,pt);return a.a.createElement("svg",Object.assign({width:"14",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),a.a.createElement("path",{d:"M8.882 12.133L.067 3.318 2.585.8l11.333 11.333L2.585 23.467.067 20.949l8.815-8.816z",fill:"#fff"}))},yt=["styles"],wt=function(e){var t=e.styles,n=void 0===t?{}:t,i=Object(D.a)(e,yt);return a.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"14",height:"24",fill:"none"},i),a.a.createElement("rect",{width:"100%",height:"100%"}),a.a.createElement("g",{className:n.currentLayer||"currentLayer"},a.a.createElement("path",{d:"M5.103 12.133l8.815 8.816-2.518 2.518L.067 12.133 11.4.8l2.518 2.518-8.815 8.815z",fill:"#fff"})))},Ot=function(e){var t=e.onClick,n=e.isLeft,i=n?xt:mt,a=n?wt:gt;return Object(E.jsx)(i,{onClick:t,children:Object(E.jsx)(bt,{children:Object(E.jsx)(a,{})})})},vt=[{category:"\u041f\u0430\u043b\u044c\u0442\u043e",photo:ht},{category:"\u041a\u0443\u0440\u0442\u043a\u0438",photo:ft},{category:"\u0428\u0443\u0431\u044b",photo:ut},{category:"\u041f\u0430\u0440\u043a\u0438",photo:jt},{category:"\u041f\u0430\u043b\u044c\u0442\u043e",photo:ht},{category:"\u041a\u0443\u0440\u0442\u043a\u0438",photo:ft},{category:"\u0428\u0443\u0431\u044b",photo:ut},{category:"\u041f\u0430\u0440\u043a\u0438",photo:jt}],Ct=function(){var e={infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,nextArrow:Object(E.jsx)(Ot,{isLeft:!1}),prevArrow:Object(E.jsx)(Ot,{isLeft:!0})};return Object(E.jsx)(ot,{children:Object(E.jsx)(rt.a,Object(it.a)(Object(it.a)({},e),{},{children:vt.map((function(e){return Object(E.jsxs)(lt,{children:[Object(E.jsx)(st,{children:Object(E.jsx)("img",{src:e.photo,alt:"photoSlider"})}),Object(E.jsx)(ct,{children:Object(E.jsx)(dt,{children:e.category})})]},e.category)}))}))})},_t=function(){return Object(E.jsx)(Te,{children:Object(E.jsxs)(Be,{children:[Object(E.jsx)(nt,{}),Object(E.jsxs)(Pe,{children:[Object(E.jsx)(Fe,{children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(E.jsx)(Ct,{})]})]})})};!function(e){e.DASHBOARD="/",e.CATALOG="catalog",e.CATEGORY="category",e.PRODUCT="product",e.YANKI="yanki"}(x||(x={}));var zt=function(e){return"".concat(x.YANKI,"/").concat(e)},Nt=function(){return Object(Le.n)([{path:zt(""),element:Object(E.jsx)(_t,{})},{path:zt(x.CATALOG),element:Object(E.jsx)("div",{children:"Catalog"})},{path:zt(x.CATEGORY),children:[{path:":idCategory",element:Object(E.jsx)("div",{children:"Category"})}]},{path:"*",element:Object(E.jsx)(Le.a,{to:zt(""),replace:!0})}])},Et=function(){return Object(E.jsxs)(Ae,{children:[Object(E.jsx)(Se,{isDark:!1}),Object(E.jsx)(Nt,{}),Object(E.jsx)(X,{})]})},kt=n.p+"static/media/Raleway-Light.58bcdae0.ttf",Ht=n.p+"static/media/Raleway-Bold.18960343.ttf",Mt=Object(l.b)(['*,*::before,*::after{box-sizing:border-box;}*{@font-face{font-family:"Raleway";src:local("Raleway-Bold"),local("RalewayBold"),url(',');font-weight:700;font-display:swap;}@font-face{font-family:"Raleway";src:local("Raleway"),url(',");font-weight:300;font-display:swap;}font:inherit;font-size:100%;font-family:'Raleway',sans-serif;}*{margin:0;padding:0;border:0;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1.25;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:none;}table{border-collapse:collapse;border-spacing:0;}input{-webkit-appearance:none;box-shadow:none;}button{background:transparent;border:none;cursor:pointer;outline:none;color:inherit;}a{color:inherit;}.scroll-bar>div:first-child{overflowX:hidden !important}.scroll-bar>div:first-child::-webkit-scrollbar{background:transparent;}"],Ht,kt),St=function(){return Object(E.jsxs)(l.a,{theme:N,children:[Object(E.jsx)(Mt,{}),Object(E.jsx)(c.a,{children:Object(E.jsx)(Et,{})})]})};o.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(St,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.5749dbe2.chunk.js.map