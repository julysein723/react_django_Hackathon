import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LocationPage from './pages/LocationPage';
import MainPage from './pages/MainPages/MainPage';
import CommunityPage from './pages/CommunityPage';
import CartPage from './pages/CartPage';
import MyPage from './pages/MyPage';
import PostPage from './pages/PostPage';
import UnderBarContainer from './containers/Main/UnderBarContainer';


const App = () => {
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={LocationPage}/>
                <Route path='/main' exact component={MainPage}/>
                <Route path='/main/post' component={PostPage}/>
                <Route path='/community' component={CommunityPage}/>
                <Route path='/cart' component={CartPage}/>
                <Route path='/my' component={MyPage}/>
            </Switch>
        </Router>
    )
}

export default App;