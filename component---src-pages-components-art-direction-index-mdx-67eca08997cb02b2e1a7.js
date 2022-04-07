"use strict";(self.webpackChunkgatsby_starte_carbon=self.webpackChunkgatsby_starte_carbon||[]).push([[1381],{3624:function(A,e,t){t.d(e,{Z:function(){return N}});var a=t(7294),r=t(8650),i=t.n(r),s=t(1597),n=t(6553),o=t(7275),c=t(5900),l=t.n(c),g=function(A){var e,t=A.title,r=A.theme,i=A.tabs,s=void 0===i?[]:i;return a.createElement("div",{className:l()("PageHeader-module--page-header--NqfPe",(e={},e["PageHeader-module--with-tabs--vbQ-W"]=s.length,e["PageHeader-module--dark-mode--WCeH8"]="dark"===r,e))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},p=function(A){var e=A.relativePagePath,t=A.repository,r=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||r,n=i.baseUrl,o=i.subDirectory,c=n+"/edit/"+i.branch+o+"/src/pages"+e;return n?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=t(4703),d=t(1721),b=function(A){function e(){return A.apply(this,arguments)||this}return(0,d.Z)(e,A),e.prototype.render=function(){var A=this.props,e=A.title,t=A.tabs,r=A.slug,n=r.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(A){var e,t=i()(A,{lower:!0,strict:!0}),o=t===n,c=new RegExp(n+"/?(#.*)?$"),g=r.replace(c,t);return a.createElement("li",{key:A,className:l()((e={},e["PageTabs-module--selected-item--aBB0K"]=o,e),"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+g},A))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},e}(a.Component),E=b,u=t(7296),h=t(5387),w=t(3732),B=function(A){var e=A.date,t=new Date(e);return e?a.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(w.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(A){var e=A.pageContext,t=A.children,r=A.location,c=A.Title,l=e.frontmatter,d=void 0===l?{}:l,b=e.relativePagePath,w=e.titleType,N=d.tabs,y=d.title,j=d.theme,Q=d.description,k=d.keywords,x=d.date,f=(0,h.Z)().interiorTheme,D=(0,s.useStaticQuery)("2456312558").site.pathPrefix,Y=D?r.pathname.replace(D,""):r.pathname,v=N?Y.split("/").filter(Boolean).slice(-1)[0]||i()(N[0],{lower:!0}):"",P=j||f;return a.createElement(o.Z,{tabs:N,homepage:!1,theme:P,pageTitle:y,pageDescription:Q,pageKeywords:k,titleType:w},a.createElement(g,{title:c?a.createElement(c,null):y,label:"label",tabs:N,theme:P}),N&&a.createElement(E,{title:y,slug:Y,tabs:N,currentTab:v}),a.createElement(u.Z,{padded:!0},t,a.createElement(p,{relativePagePath:b}),a.createElement(B,{date:x})),a.createElement(m.Z,{pageContext:e,location:r,slug:Y,tabs:N,currentTab:v}),a.createElement(n.Z,null))}},7828:function(A,e,t){t.r(e),t.d(e,{_frontmatter:function(){return n},default:function(){return m}});var a=t(3366),r=(t(7294),t(4983)),i=t(3624),s=["components"],n={},o=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}},c=o("PageDescription"),l=o("ArtDirection"),g={_frontmatter:n},p=i.Z;function m(A){var e=A.components,t=(0,a.Z)(A,s);return(0,r.kt)(p,Object.assign({},g,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"PageDescription"},(0,r.kt)("p",null,"On the web,\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Art_direction"},"art direction"),"\nrefers to changing the image rendered at different display sizes. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"ArtDirection")," component allows you to provide multiple images achieve this\ngoal.")),(0,r.kt)("h2",null,"Example"),(0,r.kt)(l,{mdxType:"ArtDirection"},(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAcedYA//xAAYEAEAAwEAAAAAAAAAAAAAAAABAhEgMf/aAAgBAQABBQI6xox//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxABAAMAAAAAAAAAAAAAAAAAAQAgMv/aAAgBAQAGPwKaGv8A/8QAGBABAAMBAAAAAAAAAAAAAAAAAQARYSD/2gAIAQEAAT8hFgUNYVhiOf/aAAwDAQACAAMAAAAQs8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAACAQUAAAAAAAAAAAAAAAABEQAgITGRsf/aAAgBAQABPxAAhSbsQ1GIjyl8p//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/5f7834458ce96d6084183dd6b544432d/0eda2/mobile.webp 288w","/gatsby-starter-carbon/static/5f7834458ce96d6084183dd6b544432d/460e2/mobile.webp 576w","/gatsby-starter-carbon/static/5f7834458ce96d6084183dd6b544432d/e0ca3/mobile.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/5f7834458ce96d6084183dd6b544432d/69549/mobile.jpg 288w","/gatsby-starter-carbon/static/5f7834458ce96d6084183dd6b544432d/473e3/mobile.jpg 576w","/gatsby-starter-carbon/static/5f7834458ce96d6084183dd6b544432d/2e753/mobile.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/5f7834458ce96d6084183dd6b544432d/2e753/mobile.jpg",alt:"Mobile image",title:"Mobile image",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAcedYA//xAAYEAACAwAAAAAAAAAAAAAAAAAAAQIRIP/aAAgBAQABBQIcaz//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAEAAwAAAAAAAAAAAAAAAAABACAy/9oACAEBAAY/Apoa/wD/xAAZEAEBAAMBAAAAAAAAAAAAAAABEQAgYSH/2gAIAQEAAT8hPWWdwhTiNf/aAAwDAQACAAMAAAAQM8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEBAAMBAAAAAAAAAAAAAAABEQAgMbH/2gAIAQEAAT8QIKAWK4ZRksqr5r//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/e6054767c240469eea72a2b02940941c/0eda2/tablet.webp 288w","/gatsby-starter-carbon/static/e6054767c240469eea72a2b02940941c/460e2/tablet.webp 576w","/gatsby-starter-carbon/static/e6054767c240469eea72a2b02940941c/e0ca3/tablet.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/e6054767c240469eea72a2b02940941c/69549/tablet.jpg 288w","/gatsby-starter-carbon/static/e6054767c240469eea72a2b02940941c/473e3/tablet.jpg 576w","/gatsby-starter-carbon/static/e6054767c240469eea72a2b02940941c/2e753/tablet.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/e6054767c240469eea72a2b02940941c/2e753/tablet.jpg",alt:"Tablet image",title:"Tablet image",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAciVYA//xAAYEAEAAwEAAAAAAAAAAAAAAAABAhEgIf/aAAgBAQABBQILWPMf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAQUAAAAAAAAAAAAAAAAAAAIRIDEy/9oACAEBAAY/ArY0mP8A/8QAGRABAAIDAAAAAAAAAAAAAAAAARFhACAh/9oACAEBAAE/IeAizgEpqHX/2gAMAwEAAgADAAAAEHPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxABAAEFAQAAAAAAAAAAAAAAAREAICExUXH/2gAIAQEAAT8QKAUPGlQSGxL5i3//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/c7b03eb575e60d6e73a360765d60f8eb/0eda2/desktop.webp 288w","/gatsby-starter-carbon/static/c7b03eb575e60d6e73a360765d60f8eb/460e2/desktop.webp 576w","/gatsby-starter-carbon/static/c7b03eb575e60d6e73a360765d60f8eb/e0ca3/desktop.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/c7b03eb575e60d6e73a360765d60f8eb/69549/desktop.jpg 288w","/gatsby-starter-carbon/static/c7b03eb575e60d6e73a360765d60f8eb/473e3/desktop.jpg 576w","/gatsby-starter-carbon/static/c7b03eb575e60d6e73a360765d60f8eb/2e753/desktop.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/c7b03eb575e60d6e73a360765d60f8eb/2e753/desktop.jpg",alt:"Desktop image",title:"Desktop image",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.kt)("h2",null,"Code"),(0,r.kt)("p",null,"You can place up to three images inside of the ArtDirection component. The first\nwill be used for mobile, the second for tablet, and the third for desktop. If\nonly two images are provided, the second image will be used for both tablet and\ndesktop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/ArtDirection.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/ArtDirection",path:"components/ArtDirection.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/ArtDirection"},"<ArtDirection>\n\n![Mobile image](./mobile.jpg)\n\n![Tablet image](./tablet.jpg)\n\n![Desktop image](./desktop.jpg)\n\n</ArtDirection>\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-art-direction-index-mdx-67eca08997cb02b2e1a7.js.map