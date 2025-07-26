import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Home from './pages/Home';
import useStateHook from './pages/useStateHook';
import useEffectHook from './pages/useEffectHook';
import UseCallbackHook from './pages/useCallbackHook';
import UseLayoutEffectHook from './pages/UseLayoutEffectHook';
import UseMemoHook from './pages/useMemoHook';
import UseRefHook from './pages/useRefHook';
import UseReducerHook from './pages/useReducerHook';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>| <Link to="/use-state-hook">useState</Link> |{' '}
        <Link to="/use-effect-hook">useEffect</Link> |{' '}
        <Link to="/use-layouteffect-hook">useLayoutEffect</Link> |{' '}
        <Link to="/use-callback-hook">useCallback</Link> |{' '}
        <Link to="/use-memo-hook">useMemo</Link> |{' '}
        <Link to="/use-ref-hook">useRef</Link> |{' '}
        <Link to="/use-reducer-hook">useReducer</Link> |{' '}
      </nav>
      <br />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/use-state-hook" Component={useStateHook} />
        <Route path="/use-effect-hook" Component={useEffectHook} />
        <Route path="/use-layouteffect-hook" Component={UseLayoutEffectHook} />
        <Route path="/use-callback-hook" Component={UseCallbackHook} />
        <Route path="/use-memo-hook" Component={UseMemoHook} />
        <Route path="/use-ref-hook" Component={UseRefHook} />
        <Route path="/use-reducer-hook" Component={UseReducerHook} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
