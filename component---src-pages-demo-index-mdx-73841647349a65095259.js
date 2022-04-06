"use strict";(self.webpackChunkgatsby_starte_carbon=self.webpackChunkgatsby_starte_carbon||[]).push([[6718],{3624:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7294),n=a(8650),i=a.n(n),s=a(1597),c=a(6553),o=a(7275),l=a(5900),A=a.n(l),b=function(e){var t,a=e.title,n=e.theme,i=e.tabs,s=void 0===i?[]:i;return r.createElement("div",{className:A()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=s.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,n=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,c=i.baseUrl,o=i.subDirectory,l=c+"/edit/"+i.branch+o+"/src/pages"+t;return c?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},d=a(4703),g=a(1721),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,c=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===c,l=new RegExp(c+"/?(#.*)?$"),b=n.replace(l,a);return r.createElement("li",{key:e,className:A()((t={},t["PageTabs-module--selected-item--aBB0K"]=o,t),"PageTabs-module--list-item--024o6")},r.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+b},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(r.Component),u=m,k=a(7296),h=a(5387),y=a(3732),w=function(e){var t=e.date,a=new Date(t);return t?r.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(y.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,A=t.frontmatter,g=void 0===A?{}:A,m=t.relativePagePath,y=t.titleType,f=g.tabs,E=g.title,N=g.theme,x=g.description,S=g.keywords,v=g.date,R=(0,h.Z)().interiorTheme,I=(0,s.useStaticQuery)("2456312558").site.pathPrefix,B=I?n.pathname.replace(I,""):n.pathname,C=f?B.split("/").filter(Boolean).slice(-1)[0]||i()(f[0],{lower:!0}):"",T=N||R;return r.createElement(o.Z,{tabs:f,homepage:!1,theme:T,pageTitle:E,pageDescription:x,pageKeywords:S,titleType:y},r.createElement(b,{title:l?r.createElement(l,null):E,label:"label",tabs:f,theme:T}),f&&r.createElement(u,{title:E,slug:B,tabs:f,currentTab:C}),r.createElement(k.Z,{padded:!0},a,r.createElement(p,{relativePagePath:m}),r.createElement(w,{date:v})),r.createElement(d.Z,{pageContext:t,location:n,slug:B,tabs:f,currentTab:C}),r.createElement(c.Z,null))}},9575:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return y}});var r=a(3366),n=(a(7294),a(4983)),i=a(3624),s=["components"],c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)}},l=o("PageDescription"),A=o("AnchorLinks"),b=o("AnchorLink"),p=o("Row"),d=o("Column"),g=o("ArticleCard"),m=o("Aside"),u=o("Video"),k={_frontmatter:c},h=i.Z;function y(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)(h,Object.assign({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l,{mdxType:"PageDescription"},(0,n.kt)("p",null,"This page is meant to demonstrate some of the components in action. You can\ncheck out the markdown used for this page\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/pages/demo/index.mdx"},"on github"),".")),(0,n.kt)(A,{mdxType:"AnchorLinks"},(0,n.kt)(b,{mdxType:"AnchorLink"},"Building bonds"),(0,n.kt)(b,{mdxType:"AnchorLink"},"Global accessibility standards"),(0,n.kt)(b,{mdxType:"AnchorLink"},"Small anchor links"),(0,n.kt)(b,{mdxType:"AnchorLink"},"Videos")),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},(0,n.kt)(g,{title:"Getting started",href:"/getting-started",actionIcon:"arrowRight",mdxType:"ArticleCard"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6klEQVQoz3XTaUzTBxjH8ace8zZT4xJjpkwTFRVpnYTVVv/YgtNsYVOJ4JEIxkTEIx5TNAEPEAUaYPNKjM4zVEExKho80C2KCZRWLrUgUDvxABUVb2j7/5pqYnyzF0/ye/V59X1ks0Mlwwkxh18gSgWacAcSVsJCwwMsk96THqaSraikKO0EmBsQUxmdlOtolOt0jrAjegcR2c1Y6mCTXUW+gEdeIqHFiDYfGVfAXG0VyWNqSda52KK843uzE9EXIkF5SNApJPgUostHgs//D3ioFQk+R695NYzOecnvaV7iV6gk6N18F1qOGEqQkCIGrHSjO/yWoJ1t9FtcjwSeISKz6SvQrpJRC9G5r+i1yE3UP5DeCFlLYEU86P56TfcF9fSNbWRIWiuxJ9+TnNjCnw0QVw59lzURvvMZlrt+0IekVvqHl+AdLRgKOth/DwovPyR+Qj7W3DcsroaArS4Gb7hDdClYr35gfWgJB/ZVc9wN04t8jMxpYd2NdtKqQNKdYEqyIYFWfj7djssDaxduZVAXA+56SHdBn6hLaIx5JJRBWwcYtTOZPX4Vz97B3H9BJhYSFHuRbbdB0mpgxLzzyKhjaA+8IasU9sS0smpkKbt3NbPABt2mFSEheURegb3F7STpbRQWP2f/f2Aq8CEhZ+kflsuWChC/Omp+EfLDIQbEuYi2qCRGwXJjHbMW3SUgtRXRnUTGHmXgmgfEnOtg3d+vSaqBWVdVvk1oQgJP0N9kJaUSZHsNzDnoYmDERZbq29g4w0fcH160iU/ovaQRMVUiEwqQ8VZEcdAztp7hlqcEbHpMt2jnp3a/US7wS0YV226BpN6ClDIPG2beJ8vgI8voIUfvZehkJ2IsRWOuRH48gWiPIuabyKRyZKINMZSjmeJA9DbMlkfkNII/Qdl8zcPSaXZWj6gmc4pKhuIhM8zLMFMdEm6n668N9PitgR6RdXSNvIeE+7/p5qfrNLUC+cnG1OxmMms/d/gRW4lAVhe+peQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/0eda2/Article_06.webp 288w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/460e2/Article_06.webp 576w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/e0ca3/Article_06.webp 1152w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/d02be/Article_06.webp 1728w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/13898/Article_06.webp 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",alt:"Dark article layout mockup",title:"Dark article layout mockup",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.kt)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},(0,n.kt)(g,{title:"Theme configuration",href:"/guides/configuration",actionIcon:"arrowRight",mdxType:"ArticleCard"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6klEQVQoz3XTaUzTBxjH8ace8zZT4xJjpkwTFRVpnYTVVv/YgtNsYVOJ4JEIxkTEIx5TNAEPEAUaYPNKjM4zVEExKho80C2KCZRWLrUgUDvxABUVb2j7/5pqYnyzF0/ye/V59X1ks0Mlwwkxh18gSgWacAcSVsJCwwMsk96THqaSraikKO0EmBsQUxmdlOtolOt0jrAjegcR2c1Y6mCTXUW+gEdeIqHFiDYfGVfAXG0VyWNqSda52KK843uzE9EXIkF5SNApJPgUostHgs//D3ioFQk+R695NYzOecnvaV7iV6gk6N18F1qOGEqQkCIGrHSjO/yWoJ1t9FtcjwSeISKz6SvQrpJRC9G5r+i1yE3UP5DeCFlLYEU86P56TfcF9fSNbWRIWiuxJ9+TnNjCnw0QVw59lzURvvMZlrt+0IekVvqHl+AdLRgKOth/DwovPyR+Qj7W3DcsroaArS4Gb7hDdClYr35gfWgJB/ZVc9wN04t8jMxpYd2NdtKqQNKdYEqyIYFWfj7djssDaxduZVAXA+56SHdBn6hLaIx5JJRBWwcYtTOZPX4Vz97B3H9BJhYSFHuRbbdB0mpgxLzzyKhjaA+8IasU9sS0smpkKbt3NbPABt2mFSEheURegb3F7STpbRQWP2f/f2Aq8CEhZ+kflsuWChC/Omp+EfLDIQbEuYi2qCRGwXJjHbMW3SUgtRXRnUTGHmXgmgfEnOtg3d+vSaqBWVdVvk1oQgJP0N9kJaUSZHsNzDnoYmDERZbq29g4w0fcH160iU/ovaQRMVUiEwqQ8VZEcdAztp7hlqcEbHpMt2jnp3a/US7wS0YV226BpN6ClDIPG2beJ8vgI8voIUfvZehkJ2IsRWOuRH48gWiPIuabyKRyZKINMZSjmeJA9DbMlkfkNII/Qdl8zcPSaXZWj6gmc4pKhuIhM8zLMFMdEm6n668N9PitgR6RdXSNvIeE+7/p5qfrNLUC+cnG1OxmMms/d/gRW4lAVhe+peQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/0eda2/Article_06.webp 288w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/460e2/Article_06.webp 576w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/e0ca3/Article_06.webp 1152w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/d02be/Article_06.webp 1728w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/13898/Article_06.webp 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",alt:"Dark article layout mockup",title:"Dark article layout mockup",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.kt)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},(0,n.kt)(g,{title:"Contributions",href:"/contributions",actionIcon:"arrowRight",mdxType:"ArticleCard"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6klEQVQoz3XTaUzTBxjH8ace8zZT4xJjpkwTFRVpnYTVVv/YgtNsYVOJ4JEIxkTEIx5TNAEPEAUaYPNKjM4zVEExKho80C2KCZRWLrUgUDvxABUVb2j7/5pqYnyzF0/ye/V59X1ks0Mlwwkxh18gSgWacAcSVsJCwwMsk96THqaSraikKO0EmBsQUxmdlOtolOt0jrAjegcR2c1Y6mCTXUW+gEdeIqHFiDYfGVfAXG0VyWNqSda52KK843uzE9EXIkF5SNApJPgUostHgs//D3ioFQk+R695NYzOecnvaV7iV6gk6N18F1qOGEqQkCIGrHSjO/yWoJ1t9FtcjwSeISKz6SvQrpJRC9G5r+i1yE3UP5DeCFlLYEU86P56TfcF9fSNbWRIWiuxJ9+TnNjCnw0QVw59lzURvvMZlrt+0IekVvqHl+AdLRgKOth/DwovPyR+Qj7W3DcsroaArS4Gb7hDdClYr35gfWgJB/ZVc9wN04t8jMxpYd2NdtKqQNKdYEqyIYFWfj7djssDaxduZVAXA+56SHdBn6hLaIx5JJRBWwcYtTOZPX4Vz97B3H9BJhYSFHuRbbdB0mpgxLzzyKhjaA+8IasU9sS0smpkKbt3NbPABt2mFSEheURegb3F7STpbRQWP2f/f2Aq8CEhZ+kflsuWChC/Omp+EfLDIQbEuYi2qCRGwXJjHbMW3SUgtRXRnUTGHmXgmgfEnOtg3d+vSaqBWVdVvk1oQgJP0N9kJaUSZHsNzDnoYmDERZbq29g4w0fcH160iU/ovaQRMVUiEwqQ8VZEcdAztp7hlqcEbHpMt2jnp3a/US7wS0YV226BpN6ClDIPG2beJ8vgI8voIUfvZehkJ2IsRWOuRH48gWiPIuabyKRyZKINMZSjmeJA9DbMlkfkNII/Qdl8zcPSaXZWj6gmc4pKhuIhM8zLMFMdEm6n668N9PitgR6RdXSNvIeE+7/p5qfrNLUC+cnG1OxmMms/d/gRW4lAVhe+peQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/0eda2/Article_06.webp 288w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/460e2/Article_06.webp 576w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/e0ca3/Article_06.webp 1152w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/d02be/Article_06.webp 1728w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/13898/Article_06.webp 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/7fc1e/Article_06.png 288w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/a5df1/Article_06.png 576w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png 1152w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/0b124/Article_06.png 1728w","/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/0c3f5/Article_06.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/ebd956040be4c438af81a5204152b45c/3cbba/Article_06.png",alt:"Dark article layout mockup",title:"Dark article layout mockup",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,n.kt)(l,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters.")),(0,n.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(d,{colMd:5,colLg:8,mdxType:"Column"},(0,n.kt)("h2",null,"Section heading"),(0,n.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Add-on repositories, or repos, are components built for a specific product or\nexperience. The repos are built on top of the core Carbon repo, and enable")),(0,n.kt)("p",null,"IBMers believe in progress—that application of intelligence, reason and science\ncan improve business, society and the human condition.")),(0,n.kt)(d,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},(0,n.kt)(m,{mdxType:"Aside"},(0,n.kt)("p",null,(0,n.kt)("strong",null,"Good design is always",(0,n.kt)("br",null),"good design.")),(0,n.kt)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in\nstylistic terms, but the modernist attitudes and approach used at the time.")))),(0,n.kt)("h2",null,"Small anchor links"),(0,n.kt)("p",null,"Swab barque interloper™ chantey doubloon starboard grog black jack gangway\nrutters π."),(0,n.kt)(A,{small:!0,mdxType:"AnchorLinks"},(0,n.kt)(b,{mdxType:"AnchorLink"},"Header"),(0,n.kt)(b,{mdxType:"AnchorLink"},"Header again")),(0,n.kt)("h3",null,"Header"),(0,n.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),(0,n.kt)("h3",null,"Header again"),(0,n.kt)("p",null,"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.\nPinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen\nhalter furl. Swab barque interloper chantey doubloon starboard grog black jack\ngangway rutters."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"This is a demonstration of an ordered list item. This list item is\nparticularly long to demonstrate how the text wraps and aligns with the first\nline.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"This is a nested list item, it should wrap in the same way. Typically,\nnested list items should be of the same type (ordered, unordered) as their\nparent."))),(0,n.kt)("li",{parentName:"ol"},"Ordered list item"),(0,n.kt)("li",{parentName:"ol"},"Ordered list item")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This is a demonstration of an unordered list item. This list item is\nparticularly long to demonstrate how the text wraps and aligns with the first\nline.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is a nested list item, it should wrap in the same way. Typically,\nnested list items should be of the same type (ordered, unordered) as their\nparent."))),(0,n.kt)("li",{parentName:"ul"},"Unordered list item"),(0,n.kt)("li",{parentName:"ul"},"Unordered list item")),(0,n.kt)("h2",null,"Images"),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/9oADAMBAAIQAxAAAAHXzbizxBgqP//EABsQAAEEAwAAAAAAAAAAAAAAAAABAgMREhQz/9oACAEBAAEFAth5Pggt2Ixty9P/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AY2kM//EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMSMf/aAAgBAgEBPwHLrREhyf/EAB4QAAIBAwUAAAAAAAAAAAAAAAARIQECEBIxQVFx/9oACAEBAAY/AuCjersnfDUl3p//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMVGBkaH/2gAIAQEAAT8hbFFJ0iQmBSZ5JmvtIsinaOz1j//aAAwDAQACAAMAAAAQHw//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFx/9oACAEDAQE/EEoXewxS/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMYH/2gAIAQIBAT8QAxW5yOwz/8QAHRABAQABBAMAAAAAAAAAAAAAAREAIVFhcTFB8P/aAAgBAQABPxBdMkqCcmuBpJtY0SHbfEnqHkvOeDvI4UWIoqvvPlb5/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/8006174cef307d9cf1a013bc15b3dd6c/0eda2/large-image.webp 288w","/gatsby-starter-carbon/static/8006174cef307d9cf1a013bc15b3dd6c/460e2/large-image.webp 576w","/gatsby-starter-carbon/static/8006174cef307d9cf1a013bc15b3dd6c/e0ca3/large-image.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/8006174cef307d9cf1a013bc15b3dd6c/69549/large-image.jpg 288w","/gatsby-starter-carbon/static/8006174cef307d9cf1a013bc15b3dd6c/473e3/large-image.jpg 576w","/gatsby-starter-carbon/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg",alt:"Large blocky illustration",title:"Large blocky illustration",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,n.kt)("h2",null,"Videos"),(0,n.kt)(u,{title:"Eyes",vimeoId:"310583077",mdxType:"Video"}))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-demo-index-mdx-73841647349a65095259.js.map