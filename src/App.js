
import './App.css';
import GlobalContextProvider from './components/GlobalContext';
import MyRoutes from './MyRoutes';

function App() {
  return (
   <>
   <GlobalContextProvider>
    <MyRoutes/>
   </GlobalContextProvider>
    
  </>
  );
}

export default App;
