"use strict";(self.webpackChunkgatsby_starte_carbon=self.webpackChunkgatsby_starte_carbon||[]).push([[3402],{3624:function(e,A,a){a.d(A,{Z:function(){return w}});var t=a(7294),n=a(8650),s=a.n(n),o=a(1597),r=a(6553),l=a(7275),i=a(5900),c=a.n(i),m=function(e){var A,a=e.title,n=e.theme,s=e.tabs,o=void 0===s?[]:s;return t.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(A={},A["PageHeader-module--with-tabs--vbQ-W"]=o.length,A["PageHeader-module--dark-mode--WCeH8"]="dark"===n,A))},t.createElement("div",{className:"bx--grid"},t.createElement("div",{className:"bx--row"},t.createElement("div",{className:"bx--col-lg-12"},t.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var A=e.relativePagePath,a=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||n,r=s.baseUrl,l=s.subDirectory,i=r+"/edit/"+s.branch+l+"/src/pages"+A;return r?t.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},t.createElement("div",{className:"bx--col"},t.createElement("a",{className:"EditLink-module--link--IDrl1",href:i},"Edit this page on GitHub"))):null},g=a(4703),d=a(1721),b=function(e){function A(){return e.apply(this,arguments)||this}return(0,d.Z)(A,e),A.prototype.render=function(){var e=this.props,A=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var A,a=s()(e,{lower:!0,strict:!0}),l=a===r,i=new RegExp(r+"/?(#.*)?$"),m=n.replace(i,a);return t.createElement("li",{key:e,className:c()((A={},A["PageTabs-module--selected-item--aBB0K"]=l,A),"PageTabs-module--list-item--024o6")},t.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return t.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},t.createElement("div",{className:"bx--grid"},t.createElement("div",{className:"bx--row"},t.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},t.createElement("nav",{"aria-label":A},t.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},A}(t.Component),u=b,f=a(7296),E=a(5387),h=a(3732),y=function(e){var A=e.date,a=new Date(A);return A?t.createElement(h.X2,{className:"last-modified-date-module--row--XJoYQ"},t.createElement(h.sg,null,t.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var A=e.pageContext,a=e.children,n=e.location,i=e.Title,c=A.frontmatter,d=void 0===c?{}:c,b=A.relativePagePath,h=A.titleType,w=d.tabs,Q=d.title,N=d.theme,B=d.description,k=d.keywords,T=d.date,j=(0,E.Z)().interiorTheme,x=(0,o.useStaticQuery)("2456312558").site.pathPrefix,Y=x?n.pathname.replace(x,""):n.pathname,C=w?Y.split("/").filter(Boolean).slice(-1)[0]||s()(w[0],{lower:!0}):"",v=N||j;return t.createElement(l.Z,{tabs:w,homepage:!1,theme:v,pageTitle:Q,pageDescription:B,pageKeywords:k,titleType:h},t.createElement(m,{title:i?t.createElement(i,null):Q,label:"label",tabs:w,theme:v}),w&&t.createElement(u,{title:Q,slug:Y,tabs:w,currentTab:C}),t.createElement(f.Z,{padded:!0},a,t.createElement(p,{relativePagePath:b}),t.createElement(y,{date:T})),t.createElement(g.Z,{pageContext:A,location:n,slug:Y,tabs:w,currentTab:C}),t.createElement(r.Z,null))}},2502:function(e,A,a){a.r(A),a.d(A,{_frontmatter:function(){return r},default:function(){return f}});var t=a(3366),n=(a(7294),a(4983)),s=a(3624),o=["components"],r={},l=function(e){return function(A){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",A)}},i=l("PageDescription"),c=l("Tabs"),m=l("Tab"),p=l("Row"),g=l("Column"),d=l("Title"),b={_frontmatter:r},u=s.Z;function f(e){var A=e.components,a=(0,t.Z)(e,o);return(0,n.kt)(u,Object.assign({},b,a,{components:A,mdxType:"MDXLayout"}),(0,n.kt)(i,{mdxType:"PageDescription"},(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tabs>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tab>")," components are used together to display and swap\nbetween content. Like all of the MDX components, you’ll need to give the content\nyou pass in a line of whitespace. When in doubt, follow the examples. Everything\nshould be left aligned, indenting ",(0,n.kt)("inlineCode",{parentName:"p"},"<Tab>")," will result in errors.")),(0,n.kt)("h2",null,"Example"),(0,n.kt)(c,{mdxType:"Tabs"},(0,n.kt)(m,{label:"Just text",mdxType:"Tab"},(0,n.kt)("p",null,"The tab component can be used for a variety of content. From text, to images, to\ncolumns. If you want to have multiple columns, you’ll need to use our ",(0,n.kt)("inlineCode",{parentName:"p"},"Row")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"Column")," helpers as demonstrated in the “Two images” tab.")),(0,n.kt)(m,{label:"Single image",mdxType:"Tab"},(0,n.kt)("p",null,"If your content is full width, you don’t need ",(0,n.kt)("inlineCode",{parentName:"p"},"Row")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Column")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAboQoBv/AP/EABYQAAMAAAAAAAAAAAAAAAAAAAABFP/aAAgBAQABBQKNESIkf//EABcRAQADAAAAAAAAAAAAAAAAAAADETL/2gAIAQMBAT8Bh0t//8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIQIv/aAAgBAgEBPwFTmf/EABUQAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEBAAY/AlV//8QAFhAAAwAAAAAAAAAAAAAAAAAAARBh/9oACAEBAAE/IbBrf//aAAwDAQACAAMAAAAQiA//xAAZEQACAwEAAAAAAAAAAAAAAAAAAREhYZH/2gAIAQMBAT8QZ2J5xH//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQIBAT8QYzN//8QAGBABAQEBAQAAAAAAAAAAAAAAAQARIWH/2gAIAQEAAT8QEcsyeLw3/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/0eda2/colors.webp 288w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/460e2/colors.webp 576w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/e0ca3/colors.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/69549/colors.jpg 288w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/473e3/colors.jpg 576w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg",alt:"color array",title:"color array",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.kt)(m,{label:"Two images",mdxType:"Tab"},(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(g,{colSm:6,colLg:6,mdxType:"Column"},(0,n.kt)("p",null,"Column one"),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAboQoBv/AP/EABYQAAMAAAAAAAAAAAAAAAAAAAABFP/aAAgBAQABBQKNESIkf//EABcRAQADAAAAAAAAAAAAAAAAAAADETL/2gAIAQMBAT8Bh0t//8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIQIv/aAAgBAgEBPwFTmf/EABUQAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEBAAY/AlV//8QAFhAAAwAAAAAAAAAAAAAAAAAAARBh/9oACAEBAAE/IbBrf//aAAwDAQACAAMAAAAQiA//xAAZEQACAwEAAAAAAAAAAAAAAAAAAREhYZH/2gAIAQMBAT8QZ2J5xH//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQIBAT8QYzN//8QAGBABAQEBAQAAAAAAAAAAAAAAAQARIWH/2gAIAQEAAT8QEcsyeLw3/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/0eda2/colors.webp 288w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/460e2/colors.webp 576w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/e0ca3/colors.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/69549/colors.jpg 288w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/473e3/colors.jpg 576w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg",alt:"color array",title:"color array",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.kt)(g,{colSm:6,colLg:6,mdxType:"Column"},(0,n.kt)("p",null,"Column two"),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAboQoBv/AP/EABYQAAMAAAAAAAAAAAAAAAAAAAABFP/aAAgBAQABBQKNESIkf//EABcRAQADAAAAAAAAAAAAAAAAAAADETL/2gAIAQMBAT8Bh0t//8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIQIv/aAAgBAgEBPwFTmf/EABUQAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEBAAY/AlV//8QAFhAAAwAAAAAAAAAAAAAAAAAAARBh/9oACAEBAAE/IbBrf//aAAwDAQACAAMAAAAQiA//xAAZEQACAwEAAAAAAAAAAAAAAAAAAREhYZH/2gAIAQMBAT8QZ2J5xH//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQIBAT8QYzN//8QAGBABAQEBAQAAAAAAAAAAAAAAAQARIWH/2gAIAQEAAT8QEcsyeLw3/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/0eda2/colors.webp 288w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/460e2/colors.webp 576w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/e0ca3/colors.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/69549/colors.jpg 288w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/473e3/colors.jpg 576w","/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/gatsby-starter-carbon/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg",alt:"color array",title:"color array",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))))),(0,n.kt)("h2",null,"Code"),(0,n.kt)(d,{mdxType:"Title"},"Text"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Tabs/Tabs.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Tabs",path:"components/Tabs/Tabs.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Tabs"},'// Start with the wrapper component (Tabs)\n\n<Tabs>\n\n<Tab label="Text">\n\nThe tab component can be used for a variety of content. From text, to images, to\ncolumns. If you want to have multiple columns, you’ll need to use our `Row` and\n`Column` helpers as demonstrated in the "Two images" tab.\n\n</Tab>\n')),(0,n.kt)(d,{mdxType:"Title"},"Single image"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Tabs/Tabs.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Tabs",path:"components/Tabs/Tabs.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Tabs"},'<Tab label="Single image">\n  If your content is full width, you don’t need `Row` and `Column` ![color\n  array](images/colors.jpg)\n</Tab>\n')),(0,n.kt)(d,{mdxType:"Title"},"Multiple images"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Tabs/Tabs.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Tabs",path:"components/Tabs/Tabs.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Tabs"},'<Tab label="Two images">\n\n<Row>\n<Column colSm={6} colLg={6}>\n\nColumn one\n\n![color array](images/colors.jpg)\n\n</Column>\n<Column colSm={6} colLg={6}>\n\nColumn two\n\n![color array](images/colors.jpg)\n\n</Column>\n</Row>\n\n</Tab>\n\n// Make sure you close the wrapper component\n\n</Tabs>\n')))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-tabs-mdx-92f10ebacb8d4cbc9db2.js.map