(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{b9jT:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return l}));a("E5k/"),a("AqHK");var n=a("q1tI"),r=a.n(n),s=a("Nhdc"),c=a("d004"),i=a("beUH"),o=a.n(i),l="1349964496";t.default=function(e){var t=e.data,a=e.pageContext,n=a.categories,i=a.tags,l=a.tag;return r.a.createElement(s.c,{categories:n,tags:i,hideNavBtnIfSmallDevice:!0},r.a.createElement(s.b,null),r.a.createElement("section",{className:o.a.title},r.a.createElement("h2",null,"# ",l)),r.a.createElement(c.a,{categories:n,tags:i,posts:t.allMarkdownRemark.edges.map((function(e){var t=e.node.frontmatter;return Object.assign({},t)}))}))}},beUH:function(e,t,a){e.exports={container:"PostList-module--container--3FzQq",postList:"PostList-module--postList--2miCW",navigation:"PostList-module--navigation--2qn5Y",title:"PostList-module--title--3U3zm"}},d004:function(e,t,a){"use strict";a("AqHK");var n=a("Nhdc"),r=a("q1tI"),s=a.n(r),c=a("beUH"),i=a.n(c);t.a=function(e){var t=e.categories,a=e.tags,c=e.posts;return s.a.createElement("div",{className:i.a.container},s.a.createElement("section",{className:i.a.postList},c.map((function(e){var t=e.category,a=e.date,c=e.slug,i=e.tags,o=e.title,l=e.description;return s.a.createElement(r.Fragment,{key:c},s.a.createElement(n.h,{key:c,createdAt:a,title:o,href:c,description:l,category:{href:"/category/"+t[0],category:t[0]},tags:i.map((function(e){return{href:"/tag/"+e,tag:e}}))}),s.a.createElement("hr",null))}))),s.a.createElement("section",{className:i.a.navigation},s.a.createElement(n.d,{categories:t,tags:a})))}}}]);
//# sourceMappingURL=component---src-containers-post-list-by-tag-tsx-e45ae434ec11e69798eb.js.map