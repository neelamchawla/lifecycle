import React, { Component } from 'react'
import { Header } from './components/0_Header';
import Student from './components/1_Student'
import Class_component from './components/2_class_component';
import Monster from './components/3_Monster';
import Greet from './components/5_Greet';
import Welcome from './components/5_Welcome';
import Message from './components/4_Message';
import Count from './components/6_Count';
import Destructuring from './components/7_Destructuring';
import Event_handler from './components/8_Event_handler';
import EventBinding from './components/8_EventBinding';
import ParentComponent from './components/9_ParentComponent';
import UserGreet from './components/10_UserGreet';
import NameList from './components/11_NameList';
import StyleSheet from './components/12_StyleSheet';
import Form from './components/13_Form';
import LifeCycleA from './components/14_LifeCycleA';
import Fragments from './components/15_Fragments';
// import PureComp from './components/16_PureComp';
import ParentComp from './components/16_ParentComp';
import RefsDemo from './components/17_RefsDemo';
import Input from './components/18_Input';
import FocusInput from './components/19_FocusInput';
import FRParentInput from './components/20_FRParentInput';
import PortalDemo from './components/21_PortalDemo';
import ErrorDemo from './components/22_ErrorDemo';
import ErrorBoundary from './components/22_ErrorBoundary';
import ClickCounter from './components/23_ClickCounter';
import HoverCounter from './components/23_HoverCounter';
import ClickCounterTwo from './components/24_ClickCounterTwo';
import HoverCounterTwo from './components/24_HoverCounterTwo';
import User from './components/24_User';
// import Counter from './components/24_Counter';
import ComponentC from './components/25_ComponentC';
import { UserProvider } from './components/25_UserContext';
// import PostList from './components/26_PostList';
import PostForm from './components/26_PostForm';
import App2 from './App2';

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log("App - constructor - parent");  
    console.log(props);
    this.state = {
      roll: 105
    }
    console.log("App - constructor")
  }

// static getDerivedStateFromProps(props, state){
//     console.log("App - derived");
// }

componentDidMount(){
    console.log("App - Did_mount");
}

shouldComponentUpdate(nextProps, nextState){
    console.log("App - Should_Update");
    console.log(nextProps, nextState);
}

getSnapshotBeforeUpdate(prevProps, nextState){
    console.log("App - snap");
    console.log(prevProps, nextState);
}

componentDidUpdate(prevProps, prevState, snapshot){
    console.log("App - did_Update");
    console.log(prevProps, prevState, snapshot)
}

componentWillUnmount(){
    console.log("App - unmount")
}

  render() {
    console.log("App - render");  
    return (
      <div className="App">
        <Header />
        1 <Student name="Ross" roll={this.state.roll + 1} />
        <br /><hr/><br />
        2 <Class_component />
        <br /><hr/><br />
        3 <Monster />
        <br /><hr/><br />
        4 <Message />
        <br /><hr/><br />
        5 <Greet name="Bruce" ><p>I'm Children prop</p></Greet>
        5 <Welcome name="Diana" ><p>I'm Children 2nd prop</p></Welcome>
        <br /><hr/><br />
        6 <Count />
        <br /><hr/><br />
        7 <Destructuring name={"qwerty"} age={20}/>
        <br /><hr/><br />
        8 <Event_handler />
        8 <EventBinding />
        <br /><hr/><br />
        9 <ParentComponent />
        <br /><hr/><br />
        10 <UserGreet />
        <br /><hr/><br />
        11 <NameList />
        <br /><hr/><br />
        12 <StyleSheet />
        12 <StyleSheet primary={true}/> 
        <br /><hr/><br />
        {/*  using props: true/false */}
        
        13 <Form />
        <br /><hr/><br />

        14 <LifeCycleA />
        <br /><hr/><br />
        15 <Fragments />
        <br /><hr/><br />
        16 <ParentComp />
        <br /><hr/><br />
        17 <RefsDemo />
        <br /><hr/><br />
        18 <Input />
        <br /><hr/><br />
        19 <FocusInput />
        <br /><hr/><br />
        20 <FRParentInput />
        <br /><hr/><br />
        21 <PortalDemo />
        <br /><hr/><br />
        22 <ErrorBoundary>
            <ErrorDemo HeroName="Batman " />
        </ErrorBoundary>

        <ErrorBoundary>
            <ErrorDemo HeroName="Superman " />
        </ErrorBoundary>

        {/* <ErrorBoundary>
            <ErrorDemo HeroName="Joker" />
        </ErrorBoundary> */}
        <br /><hr/><br />
        23 <ClickCounter name="qwerty" />
        <HoverCounter name="qwertyuiop" />
        <br /><hr/><br />

        24 // for 1st output
        <ClickCounterTwo />
            <HoverCounterTwo />  
        {/* <User name={() => "qwerty" }/> */}
        <User name={(isLogged) => isLogged ? "Admin" : "Guest" }/>
            
        {/* {/* // for 2nd output
        // using render in count.js */}
        {/* <Counter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount= {incrementCount} /> }/>
        <Counter render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount= {incrementCount} /> }/> */}

        {/* // for 3rd output
        // using props and removing render from count.js */}
        {/* <Counter>
        {(count, incrementCount) => (<ClickCounterTwo count={count}incrementCount={incrementCount} /> )}
        </Counter>
        
        <Counter>
        {(count, incrementCount) => (<HoverCounterTwo count={count}incrementCount={incrementCount} /> )}
        </Counter> */}
        <br /><hr/><br />

        25
        {/* Step 2: Provider component is responsible for providing all the vale to the descendant component by using "value" attribute on the provider component */}
        {/* with the below value = Qwerty */}
        <UserProvider value="Qwerty">
          <ComponentC />
        </UserProvider>

        {/* with the default value = guest */}
        {/* <ComponentC /> */}
        <br /><hr/><br />

        26
        {/* <PostList /> */}
        <PostForm />
        {/* <App2 /> */}
        <br /><hr/><br />

        27.
        <App2 />
      </div>
    )
  }
}
