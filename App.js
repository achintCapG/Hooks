import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ParentComponent from './components/ParentComponent';
// import Memo from './components/Memo';
import FocusInput from './components/FocusInput';
import RefTimer from './components/RefTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';
// import HookMouse from './components/HookMouse';
// import UseEffect1 from './components/UseEffect1';
// import MouseContainer from './components/MouseContainer';
// import IntervalCounter from './components/IntervalCounter';
// import DataFetching from './components/DataFetching';
// import DataFetching2 from './components/DataFetching2';
// import Context1 from './components/Context1';
// import Context2 from './components/Context2';
// import Reducer1 from './components/Reducer1';
// import Reducer2 from './components/Reducer2';
// import DataFetchRed from './components/DataFetchRed';
// import DataFetchRed2 from './components/DataFetchRed2';


export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <HookMouse /> */}
      {/* <UseEffect1 /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalCounter /> */}
      {/* <DataFetching2 /> */}

      {/* <UserContext.Provider value={'Awesome'}> */}
        {/* <Context1 /> */}
        {/* <Context2 />
      </UserContext.Provider> */}

      {/* <Reducer1 /> */}
      {/* <Reducer2 /> */}
      {/* <DataFetchRed /> */}
      {/* <DataFetchRed2 /> */}

      {/* <ParentComponent /> */}
      {/* <Memo /> */}
      {/* <FocusInput /> */}
      {/* <RefTimer /> */}
      {/* <DocTitleOne /> */}
{/* <DocTitleTwo /> */}
{/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      <UserForm />

    </div>
  );
}

export default App;
