import{m as k,j as e,a as t,D as J,d as $,F as f,N as w,I as K,b as T,H as U,c as z,r as h,A as X,C as Q,T as Z,e as D,B,f as ee,g as te,L as ae,h as re,i as oe,k as ne,l as se,n as ie,S as L,o as le,p as ce,q as W,s as de,R as A,t as v,u as he,v as me,w as pe,x as ue,y as ge,z as fe,E as be,G as xe,J as G,K as H,M as O,O as Y,P as V,Q as ye,U as we,V as ve,W as Ce,X as Ne,Y as ke,Z as Se,_ as Ie,$ as d,a0 as Fe,a1 as De,a2 as Le,a3 as _e,a4 as je,a5 as Re,a6 as Ee,a7 as Te,a8 as ze,a9 as Be,aa as We,ab as Ae,ac as Pe,ad as Me,ae as C,af as $e,ag as Ge,ah as He,ai as I,aj as Oe,ak as Ye,al as Ve}from"./vendor.eb4cc308.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const qe=k(a=>({sideBar:{backgroundColor:"#10265ddc",boxShadow:"0px 8px 10px rgba(0, 0, 0, 0.5)",height:"fit-content",color:"white",padding:"2rem 3rem",zIndex:99,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},navMenu:{fontSize:"2rem",color:"white",cursor:"pointer",transform:"translateY(-10px)",transition:"color 0.3s","&:hover":{color:"#32CD30"},[a.breakpoints.down("sm")]:{fontSize:"1.5rem"},[a.breakpoints.down("xs")]:{fontSize:"1.5rem"}},drawer:{backgroundColor:"#10265ddc !important",width:"100%",height:"fit-content",color:"white",padding:"1.5rem",zIndex:99},MuiDrawer:{padding:"2em 1.8em",width:"13em",height:"fit-content",fontStyle:" normal",fontWeight:" normal",fontSize:" 24px",background:"#10265ddc !important",overflow:"hidden",borderTopRightRadius:"40px",borderBottomRightRadius:"40px",[a.breakpoints.down("sm")]:{width:"11em",height:"fit-content",padding:"1em 1.5em"}},closebtn:{fontSize:"1rem",fontWeight:"bold",cursor:"pointer",color:"white",position:"absolute",backgroundColor:"#10265ddc",borderRadius:"50%",padding:".7rem",boxShadow:"0px 8px 10px rgba(0, 0, 0, 0.5) !important",right:20,top:20,transition:"color 0.2s","&:hover":{backgroundColor:"#32CD30"},[a.breakpoints.down("sm")]:{right:15,top:8}},closebtnIcon:{fontSize:"2rem","&:hover":{color:"#F2F2F2",transition:"color 0.2s"}},drawerItem:{margin:"2rem auto",borderRadius:"78.8418px",background:"#152b61",color:"white",width:"85%",height:"60px",display:"flex",alignItems:"center",justifyContent:"space-evenly",padding:"0 30px",boxSizing:"border-box",border:"2.5px solid",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.5)",borderColor:"white",transition:"background-color 0.2s, color 0.2s","&:hover":{background:"#10265ddc",color:"#32CD30",border:"none ",boxShadow:"0px 8px 10px rgba(0, 0, 0, 0.5)"},[a.breakpoints.down("sm")]:{width:"100%",padding:"0 25px",height:"aut0"}},drawerLinks:{width:"50%",fontSize:"1.3rem",fontWeight:600,[a.breakpoints.down("sm")]:{fontSize:"1.125rem"}},drawerIcon:{fontSize:"1.6rem",[a.breakpoints.down("sm")]:{fontSize:"1.385rem"}}})),Je=({isOpen:a,onClose:n})=>{const o=qe();return e("div",{className:o.sideBar,children:t(J,{variant:"temporary",classes:{paper:o.MuiDrawer},className:o.drawer,disableScrollLock:!0,open:a,onClose:n,children:[e("div",{className:o.closebtn,children:e($,{className:o.closebtnIcon,onClick:n,role:"button",tabIndex:"0","aria-label":"Close"})}),e("br",{}),e("div",{children:t("div",{className:"navLink--container",children:[e(f,{left:!0,children:e(w,{to:"/",smooth:!0,spy:"true",duration:2e3,children:t("div",{className:o.drawerItem,children:[e(K,{className:o.drawerIcon}),e("span",{className:o.drawerLinks,children:"Home"})]})})}),e(f,{left:!0,children:e(w,{to:"/about",smooth:!0,spy:"true",duration:2e3,children:t("div",{className:o.drawerItem,children:[e(T,{className:o.drawerIcon}),e("span",{className:o.drawerLinks,children:"About"})]})})}),e(f,{left:!0,children:e(w,{to:"/Projects",smooth:!0,spy:"true",duration:2e3,children:t("div",{className:o.drawerItem,children:[e(U,{className:o.drawerIcon}),e("span",{className:o.drawerLinks,children:"Projects"})]})})}),e(f,{left:!0,children:e(w,{to:"/contact",smooth:!0,spy:!0,duration:2e3,children:t("div",{className:o.drawerItem,children:[e(T,{className:o.drawerIcon}),e("span",{className:o.drawerLinks,children:"Contact"})]})})}),e(f,{left:!0,children:e(w,{to:"https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing",smooth:!0,spy:"true",duration:2e3,children:t("div",{className:o.drawerItem,children:[e(z,{className:o.drawerIcon}),e("span",{className:o.drawerLinks,children:"Resume"})]})})}),e(f,{left:!0,children:e(w,{to:"https://iam-dev.hashnode.dev/",smooth:!0,spy:"true",duration:2e3,children:t("div",{className:o.drawerItem,children:[e(z,{className:o.drawerIcon}),e("span",{className:o.drawerLinks,children:"Blogs"})]})})})]})})]})})},P="/assets/logo2.dcc86432.gif",Ke=[{text:"Home",href:"/"},{text:"About",href:"/about"},{text:"Projects",href:"/projects"},{text:"Contact",href:"/contact"},{text:"Blogs",href:"https://ronexlemon.medium.com/"}],Ue=[oe,ne,se,ie,L],Xe=()=>{const[a,n]=h.exports.useState(!1);return e(X,{position:"sticky",sx:{backgroundColor:"#152b61",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)"},children:e(Q,{maxWidth:"xl",children:t(Z,{disableGutters:!0,children:[e("a",{href:"/",children:e("img",{src:P,alt:"logo",className:"logo-img"})}),e(D,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:800,letterSpacing:".2rem",color:"inherit",fontSize:"1.5rem",textDecoration:"none","&:hover":{color:"#32cd30"}},children:"Ronex Ondimu"}),t(B,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[e(ee,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{n(!a)},color:"inherit",children:e(te,{})}),a&&e(Je,{isOpen:a,onClose:()=>{n(!1)}})]}),e("a",{href:"/",children:e("img",{src:P,alt:"logo",className:"logo-img2"})}),e(D,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:800,letterSpacing:".1rem",color:"inherit",fontSize:"1.5rem",textDecoration:"none","&:hover":{color:"#32cd30"}},children:"Ronex Ondimu"}),e(B,{justifyContent:"flex-end",sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:Ke.map((s,r)=>{const c=Ue[r];return e("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:e(ae,{to:s.href,style:{textDecoration:"none",color:"inherit"},target:s.href.includes("http")?"_blank":"_self",children:t(re,{className:"header-buttons",sx:{my:2,color:"white",display:"flex",fontFamily:"poppins",fontSize:12,alignItems:"center",marginRight:"1.5rem"},children:[e(c,{style:{marginRight:"0.9rem"}}),e(D,{color:"white",style:{fontSize:"16px"},children:s.text})]},s)})},r)})})]})})})},Qe=()=>e("div",{style:{height:"100%"},children:e(le,{options:{strings:["Software Engineer","Backend Developer","Web3 Developer","Curious Learner"],autoStart:!0,loop:!0,deleteSpeed:60},style:{height:"100%"}})}),Ze="/assets/avatar.e16c98ac.svg",et=()=>t("div",{className:"homeBottom",children:[t("h1",{style:{fontSize:"2.6rem",marginBottom:"1rem",marginTop:"-9rem"},className:"homeBottom-title",children:["Some Things ",e("span",{style:{color:"#32CD30"},children:"About Me"})]}),t("div",{className:"introduction",children:[t("div",{className:"intro-text",children:[t("p",{children:["I am Ronex  Ondimu, An Information Technology and Engineering Student with good, ",e("span",{style:{color:"#32CD30"},children:"problem solving "}),"skills & passionate about BlockChain and Software  development"]}),e("br",{}),t("p",{children:["I love working as a"," ",e("span",{style:{color:"#32CD30"},children:"Backend Developer"})," and My tech stack includes NodeJs, Express.js, React, TypeScript."]}),e("br",{}),t("p",{children:["I am also proficient in Solidity, JavaScript and love"," ",e("span",{style:{color:"#32CD30"},children:"solving problems"})," involving data structures and algorithms."]}),e("br",{}),t("p",{children:["I'm also an active participant in various"," ",e("span",{style:{color:"#32CD30"},children:"open source programs "})," such as"," ",t("span",{style:{color:"#32CD30"},children:["Devpost"," "]}),"I contributed 9 successful pull requests to different projects during recent"," ",e("span",{style:{color:"#32CD30"},children:"Hackerank  hackathon programe"})," and earned rewards and Swags."]}),e("br",{}),t("p",{children:["I love making side projects and learn about new"," ",e("span",{style:{color:"#32CD30"},children:"technologies"}),"."]}),e("br",{}),t("p",{children:["Checkout my ",e("span",{style:{color:"#32CD30"},children:"social links"})," ","for more about me."," "]})]}),e("div",{className:"intro-image",children:e(ce,{children:e("img",{class:"rounded w-36 h-36",src:Ze,alt:"Extra large avatar"})})})]})]}),tt="/assets/developer.a835d9b3.svg",at="/assets/RonexOndimu.b8a24f2d.pdf",rt=k(a=>({resumeContainer:{display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem",marginTop:"4rem",[a.breakpoints.down("sm")]:{marginTop:"2rem"}},resumeBtn:{color:"white",borderRadius:"30px",textTransform:"inherit",textDecoration:"none",width:"150px",fontSize:"1.2rem",height:"50px",fontWeight:"bold",border:"3px solid #F2F2F2",transition:"100ms ease-out","&:hover":{backgroundColor:"#10265ddc",boxShadow:"0px 8px 10px rgba(0, 0, 0, 0.5)",color:"#32CD30",border:"3px solid #10265ddc"},[a.breakpoints.down("sm")]:{width:"180px"}},contactBtn:{backgroundColor:"#10265ddc",boxShadow:"0px 8px 10px rgba(0, 0, 0, 0.5)",color:"#32CD30",fontWeight:"bold",borderRadius:"30px",textTransform:"inherit",textDecoration:"none",width:"150px",height:"50px",fontSize:"1.2rem",transition:"100ms ease-out","&:hover":{backgroundColor:"#152b61",color:"white",border:"3px solid white"},[a.breakpoints.down("sm")]:{display:"none"}}})),ot=()=>{const a=rt();return t("div",{className:"home",children:[t("div",{className:"home-parent",children:[t("div",{className:"home-content",children:[t("div",{className:"heading-text",children:[e("h1",{style:{fontFamily:"Fira Code",fontSize:"2.5rem",position:"static"},className:"home-animation",children:"HI"}),t("h1",{className:"home-animation",style:{fontFamily:"Fira Code",fontSize:"2.5rem",position:"static"},children:["I'M"," ",e("span",{style:{color:"#32CD30",position:"static",textDecoration:""},children:"RONEX ONDIMU"})]})]}),e("div",{className:"text-animation",children:e(Qe,{})}),t("div",{className:a.resumeContainer,children:[e("a",{href:at,download:"resume",target:"_blank",rel:"noreferrer",children:e(W,{className:a.resumeBtn,children:"Download CV"})}),e(de,{to:"/contact",smooth:!0,spy:"true",duration:2e3,children:e(W,{className:a.contactBtn,children:"Contact"})})]})]}),e("img",{className:"rounded w-36 h-36 homepage-avatar",src:tt,alt:"Extra large avatar"})]}),e(et,{})]})},nt="/assets/contactsGreen.65d792bf.svg",l={whatsapp:"https://wa.me/254701707772",github:"https://github.com/RonexLemon",linkedIn:"https://www.linkedin.com/in/ronex-ondimu/",twitter:"https://twitter.com/ronexondimu",youtube:"https://youtube.com/"},N={email:"ronexondimu@gmail.com",phone:"+254701707772",address:"Nairobi, Kenya",sheetAPI:""};const st=k(a=>({input:{border:"4px solid white",backgroundColor:"#152b61",color:"white",fontWeight:500,transition:"border 0.2s ease-in-out","&:focus":{border:"4px solid #32CD30"}},message:{border:"4px solid white",backgroundColor:"#152b61",color:"white",fontWeight:500,transition:"border 0.2s ease-in-out","&:focus":{border:"4px solid #32CD30"}},label:{backgroundColor:"#152b61",color:"#32CD30",fontWeight:600,fontSize:"1rem",padding:"0 5px",transform:"translate(25px,50%)",display:"flex",alignItems:"flex-start",width:"fit-content",justifyContent:"center"},socialIcon:{width:"45px",height:"45px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"21px",backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)",color:"white",transition:"250ms ease-in-out","&:hover":{transform:"scale(1.1)",border:"4px solid #f2f2f2",backgroundColor:"#f2f2f2",color:"white"}},freecodecamp:{"&:hover":{color:"black !important"}},detailsIcon:{border:"4px solid #10265ddc",backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)",color:"white",borderRadius:"50%",width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"23px",transition:"250ms ease-in-out",flexShrink:0,"&:hover":{transform:"scale(1.1)",border:"4px solid #32CD30",backgroundColor:"#32CD30",color:"white"}},submitBtn:{border:"4px solid green",backgroundColor:"#10265ddc",padding:"0 1rem",color:"white",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)",transition:"250ms ease-in-out","&:hover":{transform:"scale(1.08)",backgroundColor:"#32CD30",color:"white"}}})),it=()=>{const a={}.VITE_PUBLIC_KEY,n={}.VITE_TEMPLATE_ID,o={}.VITE_SERVICE_ID,[i,s]=h.exports.useState(!1),r=st(),[c,b]=h.exports.useState(""),[p,m]=h.exports.useState(""),[g,x]=h.exports.useState(""),[y,_]=h.exports.useState(!1),[j,S]=h.exports.useState(""),R=u=>{u!=="clickaway"&&s(!1)},E=u=>{if(u.preventDefault(),c&&p&&g)if(Ce(p)){const q={from_name:c,from_email:p,message:g,to_email:"ronexondimu@gmail.com"};Ne.send(o,n,q,a).then(F=>{console.log("Email sent successfully!",F),_(!0),S(""),b(""),m(""),x(""),s(!1)},F=>{console.error("Failed to send email:",F),S("Failed to send email"),s(!0)})}else S("Invalid email"),s(!0);else S("Enter all the fields"),s(!0)};return A.useEffect(()=>{let u;return y&&(u=setTimeout(()=>{_(!1)},5e3)),()=>clearTimeout(u)},[y]),t(v,{children:[t("div",{className:"contact",children:[t("h1",{style:{marginTop:"3rem",fontFamily:"Fira Code",position:"static"},children:["Have a ",e("span",{style:{color:"#32CD30"},children:"Question"})," on your mind??"]}),e("p",{style:{textAlign:"center"},children:"Or just want to discuss a project? Contact Me using any of the links!!"})]}),t("div",{className:"contacts",id:"contacts",children:[t("div",{className:"contacts--container",children:[t("h1",{style:{marginTop:"3rem",fontFamily:"Fira Code",fontSize:"2.5rem",fontWeight:"bold"},children:[e("span",{style:{color:"#32CD30"},children:"Hire"})," Me!"]}),t("div",{className:"contacts-body",children:[t("div",{className:"contacts-form",children:[t("form",{onSubmit:E,children:[t("div",{className:"input-container",children:[e("label",{htmlFor:"Name",className:r.label,children:"Name"}),e("input",{placeholder:"John Doe",value:c,onChange:u=>b(u.target.value),type:"text",name:"name",className:`form-input ${r.input}`})]}),t("div",{className:"input-container",children:[e("label",{htmlFor:"email",className:r.label,children:"Email"}),e("input",{placeholder:"John@doe.com",value:p,onChange:u=>m(u.target.value),type:"email",name:"Email",className:`form-input ${r.input}`})]}),t("div",{className:"input-container",children:[e("label",{htmlFor:"message",className:r.label,children:"Message"}),e("textarea",{placeholder:"Type your message....",value:g,onChange:u=>x(u.target.value),type:"text",name:"Message",className:`form-message ${r.message}`})]}),e("div",{className:"submit-btn",children:t("button",{type:"submit",className:r.submitBtn,onClick:E,children:[e("p",{style:{alignSelf:"end"},children:y?"Sent":"Send"}),e("div",{className:"submit-icon",children:y?e(v,{children:e(me,{className:"success-icon"})}):e(v,{children:e(he,{className:"send-icon"})})})]})})]}),e(pe,{anchorOrigin:{vertical:"top",horizontal:"center"},open:i,autoHideDuration:4e3,onClose:R,children:e(ue,{action:e(A.Fragment,{children:e(ge,{size:"small","aria-label":"close",color:"inherit",onClick:R,children:e($,{fontSize:"small"})})}),style:{backgroundColor:j?"#ff0000":y?"#32CD32":"#FFA500",color:"white"},message:j||(y?"Message sent successfully!":"Warning message here")})})]}),t("div",{className:"contacts-details",children:[t("a",{href:`mailto:${N.email}`,className:"personal-details",children:[e("div",{className:r.detailsIcon,children:e(fe,{})}),e("p",{style:{color:"white"},className:"email",children:N.email})]}),t("a",{href:`tel:${N.phone}`,className:"personal-details",children:[e("div",{className:r.detailsIcon,children:e(be,{})}),e("p",{style:{color:"white"},children:N.phone})]}),t("a",{className:"personal-details",href:"https://www.google.com/mymaps/viewer?mid=1SuwNJ-HqTWSF2Bmaur7HqmVqZBk&hl=en",target:"_blank",rel:"noopener noreferrer",children:[e("div",{className:r.detailsIcon,children:e(xe,{})}),e("p",{style:{color:"white"},children:N.address})]}),t("div",{className:"socialmedia-icons",children:[e("a",{href:l.whatsapp,target:"_blank",rel:"noreferrer",className:r.socialIcon,children:e(G,{"aria-label":"WhatsApp",style:{color:"#25D366"}})}),e("a",{href:l.twitter,target:"_blank",rel:"noreferrer",className:r.socialIcon,children:e(H,{"aria-label":"Twitter",style:{color:"#00acee "}})}),e("a",{href:l.github,target:"_blank",rel:"noreferrer",className:`${r.socialIcon} socialIcon`,children:e(O,{"aria-label":"GitHub",style:{color:"##1d1a1a"},className:`${r.GitHub} GitHub`})}),e("a",{href:l.linkedIn,target:"_blank",rel:"noreferrer",className:r.socialIcon,children:e(Y,{"aria-label":"LinkedIn",style:{color:"#0C63BC"}})}),l.instagram&&e("a",{href:l.instagram,target:"_blank",rel:"noreferrer",className:r.socialIcon,children:e(V,{"aria-label":"Instagram",style:{color:"#d62976 "}})}),l.hashnode&&e("a",{href:l.hashnode,target:"_blank",rel:"noreferrer",className:r.socialIcon,children:e(L,{"aria-label":"hashnode",style:{color:"#2962FF"}})}),l.leetcode&&e("a",{href:l.leetcode,target:"_blank",rel:"noreferrer",className:r.socialIcon,children:e(ye,{"aria-label":"Leetcode",style:{color:"#FFD700"}})}),l.freecodecamp&&e("a",{href:l.freecodecamp,target:"_blank",rel:"noreferrer",className:`${r.socialIcon} socialIcon`,children:e(we,{"aria-label":"freecodecamp",style:{color:"#f2f2f2"},className:`${r.freecodecamp} freecodecamp`})}),l.hackerrank&&e("a",{href:l.hackerrank,target:"_blank",rel:"noreferrer",className:r.socialIcon,children:e(ve,{"aria-label":"hackerrank",style:{color:"#008000"}})})]})]})]})]}),e("img",{src:nt,alt:"contacts",className:"contacts--img"})]})]})},lt="/assets/tender.d444379f.png",ct="/assets/gig.7882b1d4.png",dt="/assets/share.6b1f7b2f.png",ht="/assets/connect.4d64909f.png",mt="/assets/canva.8b5a4570.png",pt=[{id:1,projectName:"TenderSpace",projectDesc:"TenderSpace is a Decentralized Procurrement Application Build On BlockChain",tags:["React","Vite","Solidity","Tailwind Css","Polygon"],code:"https://github.com/Ronexlemon/TenderSpace.git",demo:"https://tender-space.vercel.app/",image:lt},{id:2,projectName:"GigPro",projectDesc:"A Freelancer Market Place,Payment through Streaming in real time",tags:["React","Vite","Solidity","Tailwind Css","Superfluid","Celo"],code:"https://github.com/Ronexlemon/GigPro.git",demo:"https://gig-pro-six.vercel.app/",image:ct},{id:3,projectName:"ShareFlow",projectDesc:"A peer to peer Decentralized Finance (DEFI)",tags:["React","Vite","Solidity","Tailwind Css","Fantom"],code:"https://github.com/Ronexlemon/Share-Flow.git",demo:"https://share-flow.vercel.app/",image:dt},{id:4,projectName:"PulseConnects",projectDesc:"Link Social media Account with Web3 Wallets",tags:["React","Vite","Solidity","Tailwind Css","SocialConnect","Celo"],code:"https://github.com/Ronexlemon/pulseConnects.git",demo:"https://pulseconnect.vercel.app/",image:ht},{id:5,projectName:"SafariCanvas",projectDesc:"Africa NFT Heritage Dapp",tags:["Vite","Solidity","Tailwind Css","SocialConnect","Polygon"],code:"https://github.com/Ronexlemon/SafariCanvas.git",demo:"https://safari-canvas.vercel.app/",image:mt}];function ut({id:a,name:n,desc:o,tags:i,code:s,demo:r,image:c}){const p=k(m=>({iconBtn:{display:"flex",alignItems:"center",justifyContent:"center",width:50,height:50,borderRadius:50,border:'2px solid ""',color:m.tertiary,transition:"all 0.2s","&:hover":{backgroundColor:"",color:m.primary,transform:"scale(1.1)",border:"2px solid "}},icon:{fontSize:"1.1rem",transition:"all 0.2s","&:hover":{}}}))();return e(f,{bottom:!0,children:t("div",{className:"singleProject",children:[t("div",{className:"projectContent",children:[e("h2",{id:n.replace(" ","-").toLowerCase(),children:n}),e("img",{src:c||"https://via.placeholder.com/300x200.png?text=No+Image+Available",alt:n}),t("div",{className:"project--showcaseBtn",children:[e("a",{href:r,target:"_blank",rel:"noreferrer",className:p.iconBtn,"aria-labelledby":`${n.replace(" ","-").toLowerCase()} ${n.replace(" ","-").toLowerCase()}-demo`,children:e(ke,{id:`${n.replace(" ","-").toLowerCase()}-demo`,className:p.icon,"aria-label":"Demo"})}),e("a",{href:s,target:"_blank",rel:"noreferrer",className:p.iconBtn,"aria-labelledby":`${n.replace(" ","-").toLowerCase()} ${n.replace(" ","-").toLowerCase()}-code`,children:e(Se,{id:`${n.replace(" ","-").toLowerCase()}-code`,className:p.icon,"aria-label":"Code"})})]})]}),e("p",{className:"project--desc",children:o}),e("div",{className:"project--lang",children:i.map((m,g)=>e("span",{children:m},g))})]},a)})}function gt(){const[a,n]=h.exports.useState(""),o=pt.filter(i=>{const s=a.toLowerCase(),r=i.projectName.toLowerCase().includes(s),c=i.projectDesc.toLowerCase().includes(s),b=i.tags.some(p=>p.toLowerCase()===s);return r||c||b});return t("div",{className:"projects",children:[t("h1",{style:{marginTop:"2.5rem",fontFamily:"Fira Code",fontWeight:"bold"},children:["My Recent ",e("span",{style:{color:"#32CD30"},children:"Projects"})]}),e("p",{children:"These are some of the projects that I have been working on in my own time!"}),t("div",{className:"projectPage-container",children:[e("div",{className:"projectPage-search",children:e("input",{type:"text",value:a,onChange:i=>n(i.target.value),placeholder:"Search project...",className:"search"})}),e(Ie,{className:"project-grid",container:!0,direction:"row",alignItems:"center",justifyContent:"center",spacing:3,children:o.length===0?e(v,{children:e("p",{style:{height:"10rem",fontSize:"2rem",fontWeight:"bold",color:"#F3F3F3"},children:"No Poject Found"})}):e(v,{children:o.map(i=>e(ut,{id:i.id,name:i.projectName,desc:i.projectDesc,tags:i.tags,code:i.code,demo:i.demo,image:i.image},i.id))})})]})]})}const ft=()=>{const[a,n]=h.exports.useState(window.innerWidth);h.exports.useEffect(()=>{const i=()=>{n(window.innerWidth)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]);const o=()=>a>=1e3?6:a>=799&&a<=999?4:3;return t("div",{className:"techstack",children:[t("h1",{children:["My"," ",e("span",{style:{color:"#32CD30",marginTop:"3rem",fontFamily:"Fira Code",fontWeight:"bold"},children:"SkillSet"})]}),e("div",{className:"techstack-row",children:t(d.Group,{itemsPerRow:o(),children:[e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(Fe,{style:{width:"60%",height:"5rem",color:"#FFC300"}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(De,{style:{width:"60%",height:"5rem",backgroundColor:"#FFFFFF",color:"#007ACC"}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(Le,{style:{width:"60%",height:"5rem",color:"#E34F26"}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(_e,{style:{width:"60%",height:"5rem",color:"#1572B6"}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(je,{style:{width:"60%",height:"5rem",color:"#61DBFB"}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(Re,{style:{width:"60%",height:"5rem",color:"green"}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(Ee,{style:{width:"60%",height:"5rem",color:"green"}})})]})})]})},bt="/assets/coder.29f0efb5.svg",xt="/assets/expGreen.1ece21c4.svg";const yt="/assets/expImgWhite.5b661c8a.svg";function wt({id:a,company:n,jobtitle:o,startYear:i,endYear:s}){return e(f,{bottom:!0,children:t("div",{className:"experience-card",children:[e("div",{className:"expcard-img",children:e("img",{src:yt,alt:"expImgWhite"})}),t("div",{className:"experience-details",children:[t("h6",{children:[i,"-",s]}),e("h4",{children:o}),e("h5",{children:n})]})]},a)})}function vt(){return e("div",{className:"experience",id:"experience",children:t("div",{className:"experience-body",children:[e("div",{className:"experience-image",children:e("img",{src:xt,alt:"expGreen"})}),t("div",{className:"experience-description",children:[t("h1",{className:"experience-title",children:[e("span",{style:{color:"#32CD30"},children:"Work"})," Experience"]}),[{id:1,company:"Africa Blockchain.",jobtitle:"BlockChain Developer Intern",startYear:"Sep 2022 ",endYear:" Dec 2022",links:"https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing"},{id:2,company:"Celo KENYA",jobtitle:"BlockChain Development Intern",startYear:"MAY 2022 ",endYear:" DEC 2022",links:"https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing"},{id:3,company:"Kenya Law",jobtitle:"InformationTechnology Support",startYear:"Jan 2023 ",endYear:" Aug 2023",links:"https://drive.google.com/file/d/1qaCLFp_R9WbJNN2L1Ud5IGK83frEBE0z/view?usp=sharing"}].map(n=>e("a",{href:n.links,className:"experience-tag",children:e(wt,{id:n.id,jobtitle:n.jobtitle,company:n.company,startYear:n.startYear,endYear:n.endYear},n.id)},n.id))]})]})})}const Ct=()=>{const[a,n]=h.exports.useState(window.innerWidth);h.exports.useEffect(()=>{const i=()=>{n(window.innerWidth)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]);const o=()=>a>=1e3?8:4;return t("div",{className:"techstack",children:[t("h1",{children:["Tools i"," ",e("span",{style:{color:"#32CD30",marginTop:"3.5rem",fontFamily:"Fira Code",fontWeight:"bold"},children:"use"})]}),e("div",{className:"techstack-row",children:t(d.Group,{itemsPerRow:o(),children:[e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(Te,{style:{width:"60%",height:"auto",color:"#007ACC"}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(ze,{style:{width:"60%",height:"auto",color:"#FF6C37"}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(Be,{style:{width:"60%",height:"auto",color:"#FF6C37"}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(We,{style:{width:"60%",height:"auto",color:"#d4acc4  "}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(Ae,{style:{width:"60%",height:"auto",color:"#00C4CC    "}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(Pe,{style:{width:"60%",height:"auto",color:"#36c5f0 "}})}),e(d,{raised:!0,className:"item",style:{backgroundColor:"#10265ddc",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.5)"},children:e(Me,{style:{width:"60%",height:"auto",color:"#000000 "}})})]})})]})},Nt=()=>{const[a,n]=h.exports.useState(window.innerWidth);return h.exports.useEffect(()=>{const o=()=>{n(window.innerWidth)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),t("div",{className:"about",children:[t("h1",{className:"about-heading",children:[e("span",{style:{color:"#32CD30"},children:"About"})," Me"]}),t("div",{className:"about-parent",children:[t("div",{className:"about-text",children:[t("p",{style:{textAlign:"justify"},children:["Hi people, I am"," ",e("span",{style:{color:"#32CD30",fontWeight:"bold"},children:"Ronex Ondimu"})," ","from Nairobi,Kenya.",e("span",{style:{color:"#32CD30",fontWeight:"bold"}})," ","and currently I'm looking for openings for"," ",t("span",{style:{color:"#32CD30",fontWeight:"bold"},children:[" ","Software,Web3 development  and Security"," "]}),"Roles."]}),e("br",{}),t("p",{style:{textAlign:"justify"},children:["Apart from developement, some things I like are",e("br",{}),e("br",{}),t("ul",{children:[t("li",{children:[e(C,{style:{display:"inline"}})," ","Exploring tech-stuff"]}),t("li",{children:[e(C,{style:{display:"inline"}})," ","Watching Anime"]}),t("li",{children:[e(C,{style:{display:"inline"}})," ","Action Games"]}),t("li",{children:[e(C,{style:{display:"inline"}})," ","Yollow"]}),t("li",{children:[e(C,{style:{display:"inline"}})," ","Travelling"]})]})]})]}),e("img",{className:"rounded about-image",src:bt,alt:"Extra large avatar"})]}),e("div",{style:{paddingTop:"2rem"},children:e(vt,{})}),e(ft,{}),e(Ct,{}),e("h1",{className:"graph-heading"}),e("br",{})]})},kt=k(a=>({footer:{width:"100%",backgroundColor:"#152b61 !important",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"2rem",boxShadow:"0px 0px 4px 0px rgba(0, 0, 0, 0.6)",padding:"2rem 0"},socialmedia:{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"},socialIcon:{margin:"0 0.5rem",fontSize:"1.5rem",transition:"all 0.2s ease-in-out","&:hover":{transform:"scale(1.2)"}}})),St=()=>{const a=kt();return t("footer",{className:a.footer,children:[t("div",{className:a.socialmedia,children:[e("a",{href:l.whatsapp,target:"_blank",rel:"noreferrer",className:a.socialIcon,children:e(G,{"aria-label":"WhatsApp",style:{color:"#25D366"}})}),e("a",{href:l.twitter,target:"_blank",rel:"noreferrer",className:a.socialIcon,children:e(H,{"aria-label":"Twitter",style:{color:"#00acee "}})}),e("a",{href:l.github,target:"_blank",rel:"noreferrer",className:a.socialIcon,children:e(O,{"aria-label":"GitHub",style:{color:"##1d1a1a"}})}),e("a",{href:l.linkedIn,target:"_blank",rel:"noreferrer",className:a.socialIcon,children:e(Y,{"aria-label":"LinkedIn",style:{color:"#0C63BC"}})}),l.instagram&&e("a",{href:l.instagram,target:"_blank",rel:"noreferrer",className:a.socialIcon,children:e(V,{"aria-label":"Instagram",style:{color:"#d62976 "}})}),l.hashnode&&e("a",{href:l.hashnode,target:"_blank",rel:"noreferrer",className:a.socialIcon,children:e(L,{"aria-label":"hashnode",style:{color:"#2962FF"}})})]}),e("div",{className:`${a.footerText} text-sm text-gray-500 sm:text-center dark:text-gray-400 footer-left-text`,children:"Developed by Ronex"})]})},It=()=>{const a=h.exports.useCallback(async o=>{await $e(o)},[]),n=h.exports.useCallback(async o=>{},[]);return e(Ge,{id:"tsparticles",init:a,loaded:n,style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},params:{background:{color:"#152b61"},fullScreen:{enable:!0,zIndex:-1},particles:{number:{value:25,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.7,width:2},move:{enable:!0,speed:4,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})},Ft=()=>t("div",{className:"App",children:[e(It,{className:"particle"}),t("div",{className:"AppContent",children:[e(Xe,{}),t(He,{children:[e(I,{exact:!0,path:"/",element:e(ot,{})}),e(I,{exact:!0,path:"/projects",element:e(gt,{})}),e(I,{exact:!0,path:"/contact",element:e(it,{})}),e(I,{exact:!0,path:"/about",element:e(Nt,{})})]})]}),e(St,{})]}),Dt="modulepreload",Lt=function(a){return"/"+a},M={},_t=function(n,o,i){if(!o||o.length===0)return n();const s=document.getElementsByTagName("link");return Promise.all(o.map(r=>{if(r=Lt(r),r in M)return;M[r]=!0;const c=r.endsWith(".css"),b=c?'[rel="stylesheet"]':"";if(!!i)for(let g=s.length-1;g>=0;g--){const x=s[g];if(x.href===r&&(!c||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${b}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":Dt,c||(m.as="script",m.crossOrigin=""),m.href=r,document.head.appendChild(m),c)return new Promise((g,x)=>{m.addEventListener("load",g),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},jt=a=>{a&&a instanceof Function&&_t(()=>import("./vendor.eb4cc308.js").then(n=>n.am),["assets/vendor.eb4cc308.js","assets/vendor.f5dd84e4.css"]).then(({getCLS:n,getFID:o,getFCP:i,getLCP:s,getTTFB:r})=>{n(a),o(a),i(a),s(a),r(a)})};Oe();const Rt=Ye.createRoot(document.getElementById("root"));Rt.render(e(v,{children:e(Ve,{children:e(Ft,{})})}));jt();
