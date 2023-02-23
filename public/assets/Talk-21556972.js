/* empty css             */import{_ as y,r as c,w as D,v as I,o as n,c as l,a as e,b as r,d,F as x,e as w,f as S,g as h,t as _,h as m,i as b}from"./index-25020b1d.js";const T={components:{},data(){return{isDarkTheme:!1,contentDiv:[],textarea:"",right:!0,show:!1,flag:!0,closeChat:this.close,sessionId:""}},created(){let s=localStorage.getItem("dark_theme");this.isDarkTheme=s=="dark";let t=localStorage.getItem("session_id");if(t){this.sessionId=t;let i=localStorage.getItem(this.sessionId);i&&(this.contentDiv=JSON.parse(i))}},watch:{isDarkTheme:{handler(s,t){t!=null&&(localStorage.setItem("dark_theme",this.isDarkTheme?"dark":"light"),this.isDarkTheme?(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")))},deep:!0,immediate:!0}},mounted(){this.scrollToBottom()},updated(){this.scrollToBottom()},methods:{scrollToBottom(){this.$nextTick(()=>{let s=this.$el.querySelector(".talk-content");s.scrollTop=s.scrollHeight})},clear(){this.sessionId&&(localStorage.removeItem(this.sessionId),localStorage.removeItem("session_id")),this.contentDiv=[],this.sessionId=""},async submit(){let s=this.textarea;if(s.trim().length==0)return;this.textarea="";let t=!1;this.contentDiv.length==0&&(t=!0);let i={name:"你",url:"",showAvartar:t,content:s,right:!0,time:new Date().toLocaleTimeString()};this.contentDiv.push(i),this.save();let v=await this.ask(s),a={name:"AI",url:"",showAvartar:t,content:v,right:!1,time:new Date().toLocaleTimeString()};this.contentDiv.push(a),this.save()},save(){this.sessionId&&localStorage.setItem(this.sessionId,JSON.stringify(this.contentDiv))},async ask(s){let i=await(await fetch("/api/ai/ask",{method:"POST",body:JSON.stringify({prompt:s,session_id:this.sessionId}),headers:{"Content-Type":"application/json"}})).json();return i.session_id&&(!this.sessionId||!this.sessionId.length)&&(this.sessionId=i.session_id,this.saveSession(this.sessionId)),i.message},saveSession(s){localStorage.setItem("session_id",s)},exit(){this.$emit("close",this.flag)}}},A={class:"talk"},B={class:"talk-header"},C=e("div",{class:"talk-message-title"},"智能AI对话",-1),L={class:"talk-message-clear"},N={class:"talk-content"},F={key:0},z={key:0,style:{display:"flex","justify-content":"flex-end","align-items":"center"}},V={class:"name_right"},O={style:{"font-size":"0.5rem",color:"#9b9b9b"}},j={class:"url_right"},E={class:"content_right"},J={class:"content"},K={key:1},U={key:0,style:{display:"flex","align-items":"center"}},q={class:"url_left"},H={class:"name_left"},M={style:{"font-size":"0.5rem",color:"#9b9b9b"}},P={class:"content_left"},G={class:"content"},Q={class:"talk-message"},R={class:"talk-message-content"},W={class:"talk-message-send"};function X(s,t,i,v,a,u){const p=c("a-switch"),g=c("a-button"),k=c("a-avatar"),f=c("a-textarea");return D((n(),l("div",A,[e("div",B,[C,e("div",L,[r(p,{"checked-children":"暗","un-checked-children":"亮",checked:a.isDarkTheme,"onUpdate:checked":t[0]||(t[0]=o=>a.isDarkTheme=o)},null,8,["checked"]),r(g,{type:"text",onClick:u.clear},{default:d(()=>[h("新会话")]),_:1},8,["onClick"])])]),e("div",N,[(n(!0),l(x,null,w(a.contentDiv,o=>(n(),l("div",null,[o.right?(n(),l("div",F,[o.showAvartar?(n(),l("div",z,[e("div",V,[e("p",O,_(o.time),1)]),e("div",j,[r(k,{shape:"circle",size:30},{default:d(()=>[h("你")]),_:1})])])):m("",!0),e("div",E,[e("pre",J,_(o.content),1)])])):m("",!0),o.right?m("",!0):(n(),l("div",K,[o.showAvartar?(n(),l("div",U,[e("div",q,[r(k,{shape:"circle",size:30,style:{backgroundColor:"#f56a00",verticalAlign:"middle"}},{default:d(()=>[h("AI")]),_:1})]),e("div",H,[e("p",M,_(o.time),1)])])):m("",!0),e("div",P,[e("pre",G,_(o.content),1)])]))]))),256))]),e("div",Q,[e("div",R,[r(f,{class:"input-area",ref:"textarea",id:"textinput",value:a.textarea,"onUpdate:value":t[1]||(t[1]=o=>a.textarea=o),autoSize:"",rows:1,onKeydown:t[2]||(t[2]=S(b(o=>u.submit(),["exact","prevent"]),["enter"]))},null,8,["value"])]),e("div",W,[r(g,{type:"text",onClick:u.submit},{default:d(()=>[h("发送")]),_:1},8,["onClick"])])])],512)),[[I,a.flag]])}const $=y(T,[["render",X]]);export{$ as default};