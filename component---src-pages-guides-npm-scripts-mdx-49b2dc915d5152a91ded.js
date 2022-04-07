"use strict";(self.webpackChunkgatsby_starte_carbon=self.webpackChunkgatsby_starte_carbon||[]).push([[5668],{3624:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),l=a(8650),r=a.n(l),i=a(1597),o=a(6553),s=a(7275),c=a(5900),m=a.n(c),u=function(e){var t,a=e.title,l=e.theme,r=e.tabs,i=void 0===r?[]:r;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,l=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||l,o=r.baseUrl,s=r.subDirectory,c=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4703),b=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,o=l.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),u=l.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),h=g,k=a(7296),y=a(5387),v=a(3732),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,m=t.frontmatter,b=void 0===m?{}:m,g=t.relativePagePath,v=t.titleType,f=b.tabs,E=b.title,w=b.theme,P=b.description,x=b.keywords,C=b.date,T=(0,y.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,Z=D?l.pathname.replace(D,""):l.pathname,B=f?Z.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",H=w||T;return n.createElement(s.Z,{tabs:f,homepage:!1,theme:H,pageTitle:E,pageDescription:P,pageKeywords:x,titleType:v},n.createElement(u,{title:c?n.createElement(c,null):E,label:"label",tabs:f,theme:H}),f&&n.createElement(h,{title:E,slug:Z,tabs:f,currentTab:B}),n.createElement(k.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(N,{date:C})),n.createElement(p.Z,{pageContext:t,location:l,slug:Z,tabs:f,currentTab:B}),n.createElement(o.Z,null))}},4432:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n,l=a(3366),r=(a(7294),a(4983)),i=a(3624),o=["components"],s={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),m={_frontmatter:s},u=i.Z;function d(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)(u,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Sites built with the Carbon Gatsby theme starter come ready to go with some\nhelpful npm scripts. You can run these commands by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn [command]")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm run [command]"))),(0,r.kt)("h2",null,"Clean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clean")," - this is used to clean gatsby’s cache and public directory. It\nshould be used sparingly, only when you’re experiencing weird errors or\ncaching issues.")),(0,r.kt)("h2",null,"Develop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dev")," - this is your primary for starting up your gatsby site for\ndevelopment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dev:clean")," - this is provided as a convenience; it first runs ",(0,r.kt)("inlineCode",{parentName:"li"},"clean"),"\nthen ",(0,r.kt)("inlineCode",{parentName:"li"},"dev"))),(0,r.kt)("h2",null,"Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"build")," - this is what you’ll use to bundle your site. Gatsby will minimize\nyour images and create a static, blazing fast site in your ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"serve")," - this can be run to serve the bundle locally after running ",(0,r.kt)("inlineCode",{parentName:"li"},"build"),".\nIt can be used to debug locally if any issues are encountered durring build."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"build:clean")," - this is a provided as a convenience, it first runs ",(0,r.kt)("inlineCode",{parentName:"li"},"clean"),"\nthen ",(0,r.kt)("inlineCode",{parentName:"li"},"build"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-npm-scripts-mdx-49b2dc915d5152a91ded.js.map