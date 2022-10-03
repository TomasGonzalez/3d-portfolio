/*! For license information please see main.7d687f63.js.LICENSE.txt */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${e=>e.theme.colors.primary};
  border-top: 0px solid ${e=>e.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  flex: 1;
  width: 90%;
  color: ${e=>e.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,Sb=e=>{const{floatingCamera:n,scrollElement:r,setFloatingCamera:i}=Fx((e=>e)),a=(0,t.useCallback)((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;null==r||r.scroll({top:t*r.scrollHeight,behavior:"smooth"}),null==e||e.onRequestClose()}),[r,e]);return t.createElement(_b(),Kg({ariaHideApp:!1,closeTimeoutMS:500,style:{overlay:{backgroundColor:"rgba(0,0,0,0.9)",zIndex:1},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderWidth:0,backgroundColor:"rgba(0,0,0,0.0)",height:"80%"}}},e),bb.map((e=>t.createElement(wb,{onClick:()=>a(e.position)},e.name))))},{navTitle:Mb}=S_,Ab=Le.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  margin-left: 15px;
  height: 50px;
  z-index: 1;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};
`,Eb=Le.button`
  display: flex;
  align-items: center;
  height: 100%;
  width: 60px;
  border: 1px none;
  justify-content: center;
  border-right-width: 0px;
  background-color: transparent;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,Cb=()=>{const[e,n]=(0,t.useState)(!1),{innerWidth:r}=function(){var e=(0,t.useState)((function(){return"undefined"===typeof window?vb:xb()})),n=e[0],r=e[1];function i(){r(xb())}return qb((function(){return"undefined"===typeof window?function(){}:(window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)})}),[]),n}(),[i,a]=(0,t.useState)(r),{isNavVisible:o}=Fx((e=>e));return(0,t.useEffect)((()=>{a(r)}),[r]),t.createElement(lb.CSSTransitionGroup,{transitionName:"example",transitionAppearTimeout:500,transitionAppear:!0,transitionEnter:!0,transitionLeave:!0},t.createElement(Sb,{isOpen:e,onRequestClose:()=>n(!1)}),t.createElement(Ab,{windowWidth:i},t.createElement("div",{style:{width:75}}),t.createElement("div",null,Mb),t.createElement(Eb,{onClick:()=>n(!0)},t.createElement(gb,{color:Qy.colors.primary,size:30}))))},{relevantStops:Tb}=S_,Rb=Le.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  height: 40px;
  padding: 0px 40px;
  z-index: 19999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  font-size: 25px;
  font-weight: bold;
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};
`,Bb=Le.button`
  padding: 5px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${e=>e.theme.colors.primary};
  border-top: 0px solid ${e=>e.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${e=>e.theme.colors.primaryLight};
  }
`,Pb=Le.div`
  display: flex;
  justify-content: space-between;
  background-color: ${e=>e.theme.colors.contrast};
  opacity: 0.4;
  align-items: center;
  position: fixed;
  width: ${e=>e.windowWidth-30}px;
  height: 50px;
  z-index: 99999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${e=>e.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${e=>e.theme.colors.dark};
  font-size: 29px;
  font-weight: bold;
  border-image-source: ${e=>`linear-gradient(to left, transparent, ${e.theme.colors.primary}, transparent)`};

  &:hover {
    opacity: 1;
  }
`,Lb=Le.div`
  position: absolute;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary};
  opacity: 0.2;
  z-index: -1;
  width: ${e=>100*e.progress}%;
`;const Ib=function(){const{floatingCamera:e,setFloatingCamera:n,scrollElement:r}=Fx(),[i,a]=(0,t.useState)(0);(0,t.useEffect)((()=>{r&&(r.onscroll=()=>{const{scrollTop:e,scrollHeight:t}=r;a(1.125*e/t)})}),[r]);const o=(0,t.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return null==r?void 0:r.scroll({top:e*r.scrollHeight,behavior:"smooth"})}),[r]);return e?t.createElement(Pb,{onClick:()=>n(!1)},t.createElement("div",null),t.createElement("div",null,"Go Back."),t.createElement("div",null)):t.createElement(Rb,null,t.createElement("div",null),t.createElement(Bb,{onClick:()=>{let e=Math.floor(i*Tb.length-.3);i*Tb.length===8&&(e=6),e>=0&&o(Tb[e].position)},className:"controls"},"Prev page"),t.createElement(Bb,{onClick:()=>{let e=Math.ceil(i*Tb.length+.69);e<=Tb.length&&o(Tb[e].position)},className:"controls"},"Next page"),t.createElement("div",null),t.createElement(Lb,{progress:i}))};const Db=function(){return t.createElement(Te,{theme:Qy},t.createElement(Cb,null),t.createElement(Ib,null),t.createElement(sb,null))},zb=e=>{e&&e instanceof Function&&n.e(27).then(n.bind(n,4027)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};r.createRoot(document.getElementById("root")).render(t.createElement(t.StrictMode,null,t.createElement(Db,null))),zb()})()})();