(this.webpackJsonpuser=this.webpackJsonpuser||[]).push([[0],{18:function(e,t,n){e.exports={success:"StyleSheet_12_success__2J596"}},21:function(e,t,n){e.exports=n(45)},26:function(e,t,n){},27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),o=(n(26),n(9),n(1)),u=n(2),i=n(3),m=n(4),s=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-default"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Home"))))))}}]),n}(l.a.Component),p=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).change=function(){a.setState({name:Math.random().toString(36).substring(2,8),roll:a.state.roll+1,age:a.state.age+1}),console.log("Button Clicked")},a.state={name:Math.random().toString(36).substring(2,8),roll:101,age:25,mroll:a.props.roll},console.log("Home - constructor"),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Home - Did_mount")}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.roll<105&&(console.log("Home - Should_Update"),console.log(e,t),!0)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Home - snap"),console.log(e,t),45}},{key:"componentDidUpdate",value:function(e,t,n){console.log("Home- did_Update"),console.log(e,t,n)}},{key:"render",value:function(){return console.log("Home - render - child of student"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-10 col-xs-offset-1"},l.a.createElement("h4",null,"Hello ",this.state.name,", Roll No.",this.state.roll,", Your age: ",this.state.age),l.a.createElement("button",{className:"btn btn-warning",onClick:this.change},"Change on click"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Home - derived",t),console.log("mroll",e),e.roll!==t.roll?{mroll:e.roll}:null}}]),n}(l.a.Component),h=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),a=t.call(this,e),console.log("Student - constructor"),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Student - Did_mount")}},{key:"shouldComponentUpdate",value:function(e,t){console.log("Student - Should_Update"),console.log(e,t)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){console.log("Student - snap"),console.log(e,t)}},{key:"componentDidUpdate",value:function(e,t,n){console.log("Student - did_Update"),console.log(e,t,n)}},{key:"componentWillUnmount",value:function(){console.log("Student - unmount")}},{key:"render",value:function(){return console.log("Student - render - child of App"),l.a.createElement("div",null,l.a.createElement("h3",null,"Hi ",this.props.name,", Roll No: ",this.props.roll," "),l.a.createElement(p,{mroll:this.props.roll}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){console.log("student - derived")}}]),n}(a.Component),E=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).NameChange=function(){e.setState({string:"Helllooo...!!!",name:"asdfg"})},e.state={string:"Hello World",name:"qwerty"},console.log("String ---\x3e ",e.state.string),console.log("Name ---\x3e ",e.state.name),e}return Object(u.a)(n,[{key:"render",value:function(){return console.log("String Change to ",this.state.string),console.log("Name Change to ",this.state.name),l.a.createElement("div",null,l.a.createElement("p",null,"=========== Class_component =========="),l.a.createElement("p",null,this.state.string),l.a.createElement("button",{className:"btn btn-primary",onClick:this.NameChange},"Change Name"),l.a.createElement(f,{name:this.state.name}))}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"I am class_component2, ",this.props.name," "))}}]),n}(a.Component),b=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monster:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},this.state.monster.map((function(e){return l.a.createElement("h1",{key:e.id},e.name," ")})))}}]),n}(a.Component),d=function(e){return console.log(e),l.a.createElement("div",null,l.a.createElement("p",null,"========== functional comp ============="),l.a.createElement("h1",null,"Hello ",e.name),e.children)},v=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"========== class comp ============="),l.a.createElement("h1",null,"Hello ",this.props.name),this.props.children)}}]),n}(a.Component),g=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={message:"Welcome Users"},e}return Object(u.a)(n,[{key:"changeMsg",value:function(){this.setState({message:"Thank you"})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("p",null,"========== class comp for state - Message ============="),l.a.createElement("h1",null,"Hello ",this.state.message),l.a.createElement("button",{onClick:function(){return e.changeMsg()}},"Click ME"))}}]),n}(a.Component),j=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={count:0},a}return Object(u.a)(n,[{key:"increment",value:function(){var e=this;this.setState({count:this.state.count+1},(function(){console.log("CallBack Value",e.state.count)})),console.log(this.state.count)}},{key:"increment2",value:function(){this.setState((function(e){return{count:e.count+1}})),console.log("inc 2",this.state.count)}},{key:"incrementFive",value:function(){this.increment2(),this.increment2(),this.increment2(),this.increment2(),this.increment2()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h3",null,"Count -> ",this.state.count),l.a.createElement("button",{onClick:function(){return e.incrementFive()}},"Increment by 5"),l.a.createElement("button",{onClick:function(){return e.increment2()}},"Increment by 1"))}}]),n}(a.Component),O=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.age;return l.a.createElement("div",null,l.a.createElement("p",null,"==== class comp for props Destructuring ===="),l.a.createElement("h2",null,"Hello ",t," you are ",n," years old"))}}]),n}(a.Component),y=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"clickHandler",value:function(){console.log("Event_handler Button clicked")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"=== class component Event_handler ====="),l.a.createElement("button",{onClick:this.clickHandler},"Click"))}}]),n}(a.Component),C=n(6),k=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).clickHandler=function(){a.setState({message:"GoodBye, Have a nice Day!!"}),console.log(Object(C.a)(a))},a.state={message:"Hello User"},a}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"======= EventBinding =========="),l.a.createElement("h3",null,this.state.message),l.a.createElement("button",{onClick:this.clickHandler},"Click Me"))}}]),n}(a.Component);var S=function(e){return l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.greetHandler("Child")}},"Greet Parent"))},H=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={parentName:"Parent"},a.greetParent=a.greetParent.bind(Object(C.a)(a)),a}return Object(u.a)(n,[{key:"greetParent",value:function(e){alert("Hello ".concat(this.state.parentName," from ").concat(e))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"=== Parent Component ==="),l.a.createElement(S,{greetHandler:this.greetParent}))}}]),n}(a.PureComponent),F=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isLogged:!0},a}return Object(u.a)(n,[{key:"render",value:function(){return this.state.isLogged&&l.a.createElement("h2",null,"Welcome Admin")}}]),n}(a.Component);var U=function(){var e=["John","Emily","Joe"].map((function(e,t){return l.a.createElement("h2",{key:t},t," ","User's Name: "+e)}));return l.a.createElement("div",null,e)},D=(n(27),n(18)),N=n.n(D);var R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"error"},"Error"),l.a.createElement("h2",{className:N.a.success},"Success"))},B=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).HandleUsername=function(e){a.setState({name:e.target.value})},a.HandleComments=function(e){a.setState({comments:e.target.value})},a.HandleTopic=function(e){a.setState({topic:e.target.value})},a.HandleSubmit=function(e){alert("UserName: ".concat(a.state.name,", Comments: ").concat(a.state.comments,", Topic: ").concat(a.state.topic)),e.preventDefault()},a.state={name:"",comments:"",topic:"react"},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.comments,a=e.topic;return l.a.createElement("form",{onSubmit:this.HandleSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"User Name: "),l.a.createElement("input",{type:"text",value:t,onChange:this.HandleUsername})),l.a.createElement("div",null,l.a.createElement("label",null,"Comments: "),l.a.createElement("textarea",{type:"text",value:n,onChange:this.HandleComments})),l.a.createElement("div",null,l.a.createElement("label",null,"Topics: "),l.a.createElement("select",{value:a,onChange:this.HandleTopic},l.a.createElement("option",{value:"react"},"React"),l.a.createElement("option",{value:"angular"},"Angular"),l.a.createElement("option",{value:"vue"},"Vue"))),l.a.createElement("button",{type:"submit"},"Submit"))}}]),n}(a.Component),P=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).ChangeState=function(){a.setState({name:"poiuy"})},a.state={name:"zxcv"},console.log("Life Cycle B: Constructor"),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Life Cycle B: componentDidMount")}},{key:"shouldComponentUpdate",value:function(){return console.log("Life Cycle B: shouldComponentUpdate"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Life Cycle B: getSnapshotBeforeUpdate"),null}},{key:"componentDidUpdate",value:function(){console.log("Life Cycle B: componentDidUpdate")}},{key:"render",value:function(){return console.log("Life Cycle B: render"),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"LifeCycle B"),l.a.createElement("p",null,this.state.name),l.a.createElement("button",{onClick:this.ChangeState},"Change"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Life Cycle B: getDerivedStateFromProps"),null}}]),n}(a.Component),x=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).ChangeState=function(){a.setState({name:"asdfg"})},a.state={name:"qwerty"},console.log("Constructor"),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"shouldComponentUpdate",value:function(){return console.log("shouldComponentUpdate"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("getSnapshotBeforeUpdate"),null}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"render",value:function(){return console.log("render"),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"LifeCycle A"),l.a.createElement("p",null,this.state.name),l.a.createElement("button",{onClick:this.ChangeState},"Change"),l.a.createElement(P,null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("getDerivedStateFromProps"),null}}]),n}(a.Component);function w(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,"Qwerty"))}function M(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement(w,null)))))}function _(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Fragment Demo"),l.a.createElement("p",null,"Pragraph"),l.a.createElement(M,null))}var A=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("Regular"),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Regular Component ",this.props.name))}}]),n}(a.Component),I=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("Pure"),l.a.createElement("div",null,l.a.createElement("h4",null,"Pure Component ",this.props.name))}}]),n}(a.PureComponent);var T=l.a.memo((function(e){var t=e.name;return console.log("Memo"),l.a.createElement(l.a.Fragment,null,t)})),L=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={name:"Parent"},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({name:"Qwerty"})}),5e3)}},{key:"render",value:function(){var e=this.state.name;return console.log("========= Parent Component ========="),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Parent Component"),l.a.createElement(A,{name:e}),l.a.createElement(I,{name:e}),l.a.createElement(T,{name:e}))}}]),n}(a.Component),W=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).clickHandler=function(){alert(a.inputRef.current.value)},a.inputRef=l.a.createRef(),a.cbRef=null,a.setCbRef=function(e){a.cbRef=e},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.cbRef&&(this.cbRef.focus(),console.log(this.cbRef))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"text",ref:this.inputRef}),l.a.createElement("input",{type:"text",ref:this.setCbRef}),l.a.createElement("button",{onClick:this.clickHandler},"Click"))}}]),n}(a.Component),J=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).inputRef=l.a.createRef(),a}return Object(u.a)(n,[{key:"focusInput",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"text",ref:this.inputRef}))}}]),n}(a.Component),q=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).clickHandler=function(){a.componentRef.current.focusInput()},a.componentRef=l.a.createRef(),a}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,{ref:this.componentRef}),l.a.createElement("button",{onClick:this.clickHandler},"Focus Input"))}}]),n}(a.Component),G=l.a.forwardRef((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"text",ref:t}))})),Q=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).clickHandler=function(){a.inputRef.current.focus()},a.inputRef=l.a.createRef(),a}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(G,{ref:this.inputRef}),l.a.createElement("button",{onClick:this.clickHandler},"Focus"))}}]),n}(a.Component),V=document.getElementById("modal-root"),z=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).el=document.createElement("div"),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){V.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){V.removeChild(this.el)}},{key:"render",value:function(){return c.a.createPortal(this.props.children,this.el)}}]),n}(l.a.Component);function Y(){return l.a.createElement("div",{className:"modal"},l.a.createElement("button",null,"Click"))}var K=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={clicks:0},a.handleClick=a.handleClick.bind(Object(C.a)(a)),a}return Object(u.a)(n,[{key:"handleClick",value:function(){this.setState((function(e){return{clicks:e.clicks+1}}))}},{key:"render",value:function(){return l.a.createElement("div",{onClick:this.handleClick},l.a.createElement("p",null,"Number of clicks: ",this.state.clicks),l.a.createElement("p",null,"Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler."),l.a.createElement(z,null,l.a.createElement(Y,null)))}}]),n}(l.a.Component);var X=function(e){var t=e.HeroName;if("Joker"===t)throw new Error("Not a hero");return l.a.createElement(l.a.Fragment,null,t,l.a.createElement("br",null))},Z=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e),console.log(t)}},{key:"render",value:function(){return this.state.hasError?l.a.createElement("h1",null,"Something Went Wrong"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.Component),$=function(e,t){return function(n){Object(m.a)(r,n);var a=Object(i.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=a.call(this,e)).incrementCount=function(){n.setState((function(e){return{count:e.count+t}}))},n.state={count:0},n}return Object(u.a)(r,[{key:"render",value:function(){return console.log("withCounter",this.props.name),l.a.createElement(l.a.Fragment,null,l.a.createElement(e,Object.assign({count:this.state.count,incrementCount:this.incrementCount},this.props)))}}]),r}(l.a.Component)},ee=$(function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.incrementCount;return console.log("clickCounter",this.props.name),l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-warning",onClick:n},this.props.name," Clicked ",t," Times"))}}]),n}(a.Component),10),te=$(function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.incrementCount;return console.log("hoverCounter",this.props.name),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{onMouseOver:n},this.props.name," Hovered Heading ",t," Times"))}}]),n}(a.Component),5),ne=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.incrementCount;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:n},"Clicked ",t," Times"))}}]),n}(a.Component),ae=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.incrementCount;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{onMouseOver:n},"Hovered ",t," Times"))}}]),n}(a.Component),le=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,"     ",this.props.name(!1),"       ")}}]),n}(a.Component),re=l.a.createContext("Guest"),ce=re.Provider,oe=re.Consumer,ue=re,ie=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Component F"),l.a.createElement(oe,null,(function(e){return l.a.createElement("h3",null,"Hello ",e)})))}}]),n}(a.Component),me=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,"Component E context ",this.context,l.a.createElement(ie,null))}}]),n}(a.Component);me.contextType=ue;var se=me,pe=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(se,null))}}]),n}(a.Component),he=n(19),Ee=n(20),fe=n.n(Ee),be=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).ChangeHandler=function(e){a.setState(Object(he.a)({},e.target.name,e.target.value))},a.SubmitHandler=function(e){e.preventDefault(),console.log(a.state),fe.a.post("https://jsonplaceholder.typicode.com/posts",a.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.state={Id:"",title:"",body:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.Id,n=e.title,a=e.body;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:this.SubmitHandler},l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"Id",value:t,placeholder:"Id",onChange:this.ChangeHandler})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"title",value:n,placeholder:"Title",onChange:this.ChangeHandler})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"body",value:a,placeholder:"Body",onChange:this.ChangeHandler})),l.a.createElement("button",{type:"submit"},"Submit")))}}]),n}(a.Component),de=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),a=t.call(this,e),console.log("App - constructor - parent"),console.log(e),a.state={roll:105},console.log("App - constructor"),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("App - Did_mount")}},{key:"shouldComponentUpdate",value:function(e,t){console.log("App - Should_Update"),console.log(e,t)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){console.log("App - snap"),console.log(e,t)}},{key:"componentDidUpdate",value:function(e,t,n){console.log("App - did_Update"),console.log(e,t,n)}},{key:"componentWillUnmount",value:function(){console.log("App - unmount")}},{key:"render",value:function(){return console.log("App - render"),l.a.createElement("div",{className:"App"},l.a.createElement(s,null),"1 ",l.a.createElement(h,{name:"Ross",roll:this.state.roll+1}),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"2 ",l.a.createElement(E,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"3 ",l.a.createElement(b,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"4 ",l.a.createElement(g,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"5 ",l.a.createElement(d,{name:"Bruce"},l.a.createElement("p",null,"I'm Children prop")),"5 ",l.a.createElement(v,{name:"Diana"},l.a.createElement("p",null,"I'm Children 2nd prop")),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"6 ",l.a.createElement(j,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"7 ",l.a.createElement(O,{name:"qwerty",age:20}),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"8 ",l.a.createElement(y,null),"8 ",l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"9 ",l.a.createElement(H,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"10 ",l.a.createElement(F,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"11 ",l.a.createElement(U,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"12 ",l.a.createElement(R,null),"12 ",l.a.createElement(R,{primary:!0}),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"13 ",l.a.createElement(B,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"14 ",l.a.createElement(x,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"15 ",l.a.createElement(_,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"16 ",l.a.createElement(L,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"17 ",l.a.createElement(W,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"18 ",l.a.createElement(J,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"19 ",l.a.createElement(q,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"20 ",l.a.createElement(Q,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"21 ",l.a.createElement(K,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"22 ",l.a.createElement(Z,null,l.a.createElement(X,{HeroName:"Batman "})),l.a.createElement(Z,null,l.a.createElement(X,{HeroName:"Superman "})),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"23 ",l.a.createElement(ee,{name:"qwerty"}),l.a.createElement(te,{name:"qwertyuiop"}),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"24 // for 1st output",l.a.createElement(ne,null),l.a.createElement(ae,null),l.a.createElement(le,{name:function(e){return e?"Admin":"Guest"}}),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"25",l.a.createElement(ce,{value:"Qwerty"},l.a.createElement(pe,null)),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),"26",l.a.createElement(be,null))}}]),n}(a.Component);c.a.render(l.a.createElement(de,{name:"Props_Example_index"}),window.document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8d0c24be.chunk.js.map