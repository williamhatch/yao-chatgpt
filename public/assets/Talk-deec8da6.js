import{_ as x,r,w as y,v as k,o as n,c as a,a as t,F as b,b as w,d as l,e as C,f as d,t as c,g as _,h as p}from"./index-f8afdcb0.js";const D={components:{},data(){return{contentDiv:[],textarea:"",a:[],flag:!0,show:!1,closeChat:this.close}},created(){},mounted(){this.scrollToBottom()},updated(){this.scrollToBottom()},methods:{scrollToBottom(){this.$nextTick(()=>{let s=this.$el.querySelector(".talk-content");s.scrollTop=s.scrollHeight})},sendInfo(){alert("aaa")},isShow(){},iptFocus(){},async submit(){let s=this.textarea;console.log("content:",s),this.textarea="";let i={name:"你",url:"",content:s,right:!0,time:new Date().toLocaleTimeString()};this.contentDiv.push(i);let o={name:"AI",url:"",content:await(await fetch("/api/ai/ask",{method:"POST",body:JSON.stringify({prompt:s}),headers:{"Content-Type":"application/json"}})).json(),right:!1,time:new Date().toLocaleTimeString()};this.contentDiv.push(o)},exit(){this.$emit("close",this.flag)}}},T={class:"talk"},B=t("div",{class:"talk-header"},[t("h2",null,"智能AI对话")],-1),S={class:"talk-content"},F={style:{"margin-top":"20px"}},z={key:0},A={style:{display:"flex","justify-content":"flex-end","align-items":"center"}},N={class:"name_right"},I={style:{"font-size":"0.5rem",color:"#9b9b9b"}},V={class:"url_right"},j={class:"content_right"},K=["textContent"],L={key:1},H={style:{display:"flex","align-items":"center"}},O={class:"url_left"},q={class:"name_left"},E={style:{"font-size":"0.5rem",color:"#9b9b9b"}},J={class:"content_left"},P=["textContent"],U={class:"talk-message"},$={class:"talk-message-content"},G={class:"talk-message-send"};function M(s,i,m,v,o,h){const u=r("a-avatar"),f=r("a-textarea"),g=r("a-button");return y((n(),a("div",T,[B,t("div",S,[(n(!0),a(b,null,w(o.contentDiv,e=>(n(),a("div",F,[e.right?(n(),a("div",z,[t("div",A,[t("div",N,[t("p",I,c(e.time),1)]),t("div",V,[l(u,{shape:"circle",size:30},{default:d(()=>[_("你")]),_:1})])]),t("div",j,[t("div",{textContent:c(e.content)},null,8,K)])])):p("",!0),e.right?p("",!0):(n(),a("div",L,[t("div",H,[t("div",O,[l(u,{shape:"circle",size:30,style:{backgroundColor:"#f56a00",verticalAlign:"middle"}},{default:d(()=>[_("AI")]),_:1})]),t("div",q,[t("p",E,c(e.time),1)])]),t("div",J,[t("div",{textContent:c(e.content)},null,8,P)])]))]))),256))]),t("div",U,[t("div",$,[l(f,{style:{"overflow-y":"hidden"},value:o.textarea,"onUpdate:value":i[0]||(i[0]=e=>o.textarea=e),resize:"none",type:"textarea",rows:"1",onKeyup:C(h.submit,["enter","native"]),oninput:'this.style.height = "";this.style.height = this.scrollHeight + "px"'},null,8,["value","onKeyup"])]),t("div",G,[l(g,{type:"text",onClick:h.submit},{default:d(()=>[_("发送")]),_:1},8,["onClick"])])])],512)),[[k,o.flag]])}const R=x(D,[["render",M]]);export{R as default};