import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Inline from './components/inline';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import Stylesheet from './components/Stylesheet';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRenderProps from './components/CounterRenderProps';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Jhonatan">
        <ComponentC />
      </UserProvider>

      {/* <CounterRenderProps>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProps>
      <CounterRenderProps>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProps> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? 'Jhonatan' : 'guest')} /> */}
      {/* <ClickCounter name="jhonatan" />
      <HoverCounter /> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="SuperMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.sucess}>sucess</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name={'jhonatan'} />
      <Welcome /> */}
      {/* <Hello name="Bruce" heroname="batman">
        <p>This is children props</p>
      </Hello>
      <Hello name="Clark" heroname="syperman">
        <button>button</button>
      </Hello>
      // <Hello name="Diana" heroname="wonder woman" />
      <Welcome name="Bruce" heroname="batman" />
      <Welcome name="Clark" heroname="syperman" />
      <Welcome name="Diana" heroname="wonder woman" /> */}
      {/* <Welcome name="Bruce" heroname="batman" /> */}
    </div>
  );
}

export default App;
