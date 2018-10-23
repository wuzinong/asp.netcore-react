import * as React from 'react';
import {HashRouter,BrowserRouter,Router,Route,Switch,Link,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from '../redux/store/configureStore';
import asyncComponent from '../libs/AsyncComponents';
// import Loadable from 'react-loadable';

// import Loading from '../components/loading';

// import Hello from '../views/Hello';
// import Home from '../views/Home';
// import NotFound from '../views/NotFound';
// import About from '../views/About';
// import List from '../views/List';


const Hello = asyncComponent(()=>import('../views/Hello'));
const Home = asyncComponent(()=>import('../views/Home'));
const NotFound = asyncComponent(()=>import('../views/NotFound'));
const About = asyncComponent(()=>import('../views/About'));
const List = asyncComponent(()=>import('../views/List'));

// function MyLoading(){
//     return <div>Loading...</div>
// }

// const Hello = Loadable({
//    loader:()=>import('../views/Hello/index'),
//    loading:MyLoading
// });

// const Home = Loadable({
//     loader:()=>import('../views/Home/index'),
//     loading:MyLoading
//  });
//  const NotFound = Loadable({
//     loader:()=>import('../views/NotFound/index'),
//     loading:MyLoading
//  });
 

const store = configureStore();

const App =()=>(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Hello" 
                        component = {Hello}
                    ></Route>
                    <Route path="/Home" 
                        component = {Home}
                    ></Route>
                    <Route path="/NotFound"
                      component = {NotFound}
                    ></Route>
                    <Route path="/About"
                        component = {About}
                    ></Route>
                    <Route path="/List"
                        component = {List}
                    >
                    </Route>
                    <Redirect exact path='*' to='/NotFound'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
)
export default App;