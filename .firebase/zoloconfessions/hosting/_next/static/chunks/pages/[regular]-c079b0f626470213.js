(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{4431:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[regular]",function(){return t(82)}])},8332:function(e,s,t){"use strict";var n=t(5893),l=t(1360);let c=e=>{let{data:s}=e,{frontmatter:t,content:c}=s;return(0,n.jsx)("section",{className:"section",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"flex h-[40vh] items-center justify-center",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h1",{className:"mb-4",children:t.title}),(0,l.gI)(c,"div","content")]})})})})};s.Z=c},4113:function(e,s,t){"use strict";t.d(s,{Z:function(){return x}});var n=t(5893),l=t(7294);let c=e=>{let{title:s,children:t,className:c}=e,[a,r]=(0,l.useState)(!1);return(0,n.jsxs)("div",{className:"accordion border border-border rounded ".concat(c),children:[(0,n.jsxs)("button",{className:"relative block w-full bg-[#2e3b47] px-4 py-3.5 text-left text-dark",onClick:()=>r(!a),children:[s,(0,n.jsx)("svg",{className:"absolute right-4 top-1/2 m-0 -translate-y-1/2 w-4 h-4 ".concat(a&&"rotate-180"),version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512.011 512.011",style:{enableBackground:"new 0 0 512.011 512.011"},xmlSpace:"preserve",children:(0,n.jsx)("path",{fill:"#fff",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),(0,n.jsx)("div",{className:"px-4 py-3.5 ".concat(!a&&"hidden"),children:t})]})};var a=t(1664),r=t.n(a);let i=e=>{let{href:s,type:t,rel:l,children:c}=e;return(0,n.jsx)(r(),{href:s,target:"_blank",rel:"noopener noreferrer ".concat(l?"follow"===l?"":l:"nofollow"),className:"btn me-4 mb-4 border-none text-sm hover:bg-primary ".concat("outline"===t?"btn-outline-primary":"btn-primary"),children:c})};var o=t(8189),d=t(6671);let m=e=>{let{children:s,language:t}=e;return(0,n.jsx)(o.Z,{language:t,style:d.Vg,children:s})};var h=t(640);t(1496);var x={Button:i,Accordion:c,Youtube:function(e){let{id:s,title:t,...l}=e;return(0,n.jsx)("div",{className:"rounded overflow-hidden",children:(0,n.jsx)(h.Z,{id:s,title:t,...l})})},Video:function(e){let{title:s,width:t=500,height:l="auto",src:c,...a}=e;return(0,n.jsxs)("video",{className:"rounded overflow-hidden",width:t,height:l,controls:!0,...a,children:[(0,n.jsx)("source",{src:c.match(/^https?:/)?c:"/videos/".concat(c),type:"video/mp4"}),s]})},Tab:function(e){let{children:s}=e;return(0,n.jsx)("li",{className:"tab-item my-0 hidden",children:s})},Tabs:function(e){let{children:s}=e,t=(0,l.useRef)(null),c=(e,s)=>{let n=[...e.currentTarget.parentElement.children],l=[...t.current.children],c=l.find(e=>!e.classList.contains("hidden")),a=n.find(e=>e.classList.contains("active"));c!==l[s]&&(a.classList.remove("active"),e.currentTarget.classList.add("active"),c.classList.add("hidden"),l[s].classList.remove("hidden"))};return(0,l.useEffect)(()=>{[...t.current.children][0].classList.remove("hidden")},[]),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("ul",{className:"mb-0 flex list-none items-center space-x-4 pl-0",children:s.map((e,s)=>(0,n.jsx)("li",{className:"tab-link m-0 cursor-pointer rounded px-8 py-3 text-sm ".concat(0===s&&"active"),onClick:e=>c(e,s),children:e.props.name},s))}),(0,n.jsx)("ul",{className:"tab-items mt-1 mb-0 list-none rounded bg-[#242e38] p-6",ref:t,children:s})]})},Notice:function(e){let{type:s,children:t}=e;return(0,n.jsxs)("div",{className:"notice ".concat(s," relative rounded mt-8"),children:[(0,n.jsxs)("div",{className:"absolute h-[30px] -top-[30px] z-10 left-0 p-3 flex items-center",children:[(0,n.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fill:"#fff",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}),(0,n.jsx)("p",{className:"my-0 text-dark ml-1.5 capitalize",children:s})]}),(0,n.jsx)("div",{className:"p-3",children:t})]})},Gist:function(e){let{src:s}=e;return(0,n.jsx)("iframe",{width:"100%",height:"350",src:"data:text/html;charset=utf-8,\n        <head><base target='_blank' /></head>\n        <body><script src='".concat(s,"'></script>\n        </body>\n      ")})},Code:m}},82:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return x},default:function(){return u}});var n=t(5893),l=t(8332),c=t(4492),a=t(6626),r=t(1360),i=t(8093),o=t(4113);let d=e=>{let{data:s}=e,{frontmatter:t,mdxContent:l}=s,{title:c}=t,{contact_form_action:d}=a.f;return(0,n.jsx)("section",{className:"section pt-[72px]",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"mx-auto lg:col-8",children:[(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(i.R,{...l,components:o.Z})}),(0,n.jsxs)("div",{className:"mt-12 pt-12",children:[(0,r.gI)(c,"h3","h5 font-normal text-3xl"),(0,n.jsxs)("form",{className:"contact-form mt-6",action:d,children:[(0,n.jsxs)("div",{className:"row mb-6",children:[(0,n.jsxs)("div",{className:"md:col-6",children:[(0,n.jsx)("label",{className:"mb-2 block",htmlFor:"name",children:"Name"}),(0,n.jsx)("input",{className:"form-input w-full",name:"name",type:"text",placeholder:"Alex Smith",required:!0})]}),(0,n.jsxs)("div",{className:"mt-6 md:mt-0 md:col-6",children:[(0,n.jsx)("label",{className:"mb-2 block",htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{className:"form-input w-full",name:"email",type:"email",placeholder:"hello@gmail.com",required:!0})]})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{className:"mb-2 block",htmlFor:"subject",children:"Subject"}),(0,n.jsx)("input",{className:"form-input w-full",name:"subject",type:"text",placeholder:"Reasons for contact",required:!0})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{className:"mb-2 block",htmlFor:"message",children:"Message"}),(0,n.jsx)("textarea",{className:"form-textarea w-full",rows:"6",placeholder:"Your message"})]}),(0,n.jsx)("button",{className:"btn btn-primary rounded text-sm",children:"Send Message"})]})]})]})})})})},m=e=>{let{data:s}=e,{frontmatter:t,mdxContent:l}=s,{title:c}=t;return(0,n.jsx)("section",{className:"!pt-[60px] pb-10",children:(0,n.jsxs)("div",{className:"container",children:[(0,r.gI)(c,"h1","h1 mb-20 text-center"),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"mx-auto lg:col-11",children:(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(i.R,{...l,components:o.Z})})})})]})})},h=e=>{let{data:s}=e,{title:t,meta_title:a,description:r,image:i,noindex:o,canonical:h,layout:x}=s.frontmatter,{content:u}=s;return(0,n.jsx)(c.Z,{title:t,description:r||u.slice(0,120),meta_title:a,image:i,noindex:o,canonical:h,children:"404"===x?(0,n.jsx)(l.Z,{data:s}):"contact"===x?(0,n.jsx)(d,{data:s}):(0,n.jsx)(m,{data:s})})};var x=!0,u=h}},function(e){e.O(0,[664,122,438,492,774,888,179],function(){return e(e.s=4431)}),_N_E=e.O()}]);