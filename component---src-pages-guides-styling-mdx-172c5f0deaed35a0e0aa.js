"use strict";(self.webpackChunkgatsby_starte_carbon=self.webpackChunkgatsby_starte_carbon||[]).push([[6055],{489:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var n=a(3366),l=(a(7294),a(4983)),o=a(4295),r=["components"],s={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},c=i("PageDescription"),m=i("InlineNotification"),u={_frontmatter:s},d=o.Z;function p(e){var t=e.components,a=(0,n.Z)(e,r);return(0,l.kt)(d,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(c,{mdxType:"PageDescription"},(0,l.kt)("p",null,"The carbon theme uses Sass to take advantage of the carbon-components styles and\nvariables while authoring novel components. In addition, we use css modules to\nensure we don’t collide with devs and make sure our components are portable and\nshadowable.")),(0,l.kt)("h2",null,"Local Styles"),(0,l.kt)("p",null,"For your application’s local styles, you can just import your style sheet\n",(0,l.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/docs/global-css/#adding-global-styles-without-a-layout-component"},"directly into a ",(0,l.kt)("inlineCode",{parentName:"a"},"gatsby-browser.js")),"\nfile at the root of your project."),(0,l.kt)("p",null,"You can also use sass modules like we do in the theme, this would make it easier\nfor you to share your component with other theme consumers down the line."),(0,l.kt)("p",null,"Every Sass file in your project automatically has access to the the following\ncarbon resources:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"colors – ",(0,l.kt)("inlineCode",{parentName:"li"},"background: carbon--gray-10;")),(0,l.kt)("li",{parentName:"ul"},"spacing - ",(0,l.kt)("inlineCode",{parentName:"li"},"margin: $spacing-05;")),(0,l.kt)("li",{parentName:"ul"},"theme-tokens - ",(0,l.kt)("inlineCode",{parentName:"li"},"color: $text-01;")),(0,l.kt)("li",{parentName:"ul"},"motion -\n",(0,l.kt)("inlineCode",{parentName:"li"},"transition: all $duration--moderate-01 motion(entrance, productive);")),(0,l.kt)("li",{parentName:"ul"},"typography - ",(0,l.kt)("inlineCode",{parentName:"li"},"@include carbon--type-style('body-long-01');"))),(0,l.kt)("h2",null,"Targeting theme components"),(0,l.kt)(m,{mdxType:"InlineNotification"},(0,l.kt)("p",null,"We reserve the right to change classes between major releases. Use this strategy\nat your own risk.")),(0,l.kt)("p",null,"Theme component classes have a hash of their styles tacked on to the end. This\nis both to prevent collisions, and also to prevent sneaky breaking changes to\nyour styles if we update the class underneath you and you were relying on our\nstyles."),(0,l.kt)("p",null,"However, you can target the classes without the hash by using a\n",(0,l.kt)("a",{parentName:"p",href:"https://css-tricks.com/almanac/selectors/a/attribute/"},"partial selector"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"[class*='Banner-module--column'] {\n  color: $text-04;\n}\n")),(0,l.kt)("p",null,"This will match the class that starts with ",(0,l.kt)("inlineCode",{parentName:"p"},"Banner-module--column")," and would be\nimmune to any changes to the hash. We may at some point remove the hash if this\nbecomes an issue."))}p.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),l=a(8650),o=a.n(l),r=a(5444),s=a(5426),i=a(4311),c=a(5900),m=a.n(c),u=function(e){var t,a=e.title,l=e.theme,o=e.tabs,r=void 0===o?[]:o;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,l=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||l,s=o.baseUrl,i=o.subDirectory,c=s+"/edit/"+o.branch+i+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,s=l.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===s,c=new RegExp(s+"/?(#.*)?$"),u=l.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=i,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component),b=g,y=a(2881),k=a(6958),f=a(36),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,m=t.frontmatter,h=void 0===m?{}:m,g=t.relativePagePath,f=t.titleType,w=h.tabs,E=h.title,N=h.theme,x=h.description,P=h.keywords,T=h.date,C=(0,k.Z)().interiorTheme,D=(0,r.useStaticQuery)("2456312558").site.pathPrefix,Z=D?l.pathname.replace(D,""):l.pathname,B=w?Z.split("/").filter(Boolean).slice(-1)[0]||o()(w[0],{lower:!0}):"",j=N||C;return n.createElement(i.Z,{tabs:w,homepage:!1,theme:j,pageTitle:E,pageDescription:x,pageKeywords:P,titleType:f},n.createElement(u,{title:c?n.createElement(c,null):E,label:"label",tabs:w,theme:j}),w&&n.createElement(b,{title:E,slug:Z,tabs:w,currentTab:B}),n.createElement(y.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(v,{date:T})),n.createElement(p.Z,{pageContext:t,location:l,slug:Z,tabs:w,currentTab:B}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-styling-mdx-172c5f0deaed35a0e0aa.js.map