import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import Header from './Header';
import Home from './Home';
import Results from './Results';
import Result from './Result';
import Login from './Login';
import Profile from './Profile';
import SchedulePickup from './SchedulePickup';
import './App.css';

const pages = {
    home: 0,
    results: 1,
    result: 2,
    login: 3,
    profile: 4,
    pickup: 5
};

class App extends Component {
    constructor() {
        super();
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.clickHome = this.clickHome.bind(this);
        this.clickLogin = this.clickLogin.bind(this);
        this.clickProfile = this.clickProfile.bind(this);
        this.handleResultSelection = this.handleResultSelection.bind(this);
        this.handleBackToResults = this.handleBackToResults.bind(this);
        this.handleBackToResult = this.handleBackToResult.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.centerPickupChosen = this.centerPickupChosen.bind(this);
        this.handleChangeCenter = this.handleChangeCenter.bind(this);
        this.state = {
            currentPage: pages.home,
            previousPage: pages.home,
            search: '',
            result: null,
            loggedIn: false,
            username: '',
            center: true
        };
    }

    getResults() {
        return [
            {
                title: 'Goodwill',
                accepts: 'furniture, clothes, books',
                no: 'cribs, large appliances',
                address: '175 Willow Avenue, Boston MA 03167',
                distance: '0.2 mi',
                phone: "(123)456-7890"
            },
            {
                title: 'Animal Shelter',
                accepts: 'furniture, clothes, books',
                no: 'opened food',
                address: '5042 Woodlawn Drive, Boston MA 03167',
                distance: '1.4 mi',
                phone: "(123)456-7890"
            },
            {
                title: 'Habitat for Humanity',
                accepts: 'furniture, flooring, hardware',
                no: 'mattresses, TVs, shingles',
                address: '15 Macintosh Road, Boston MA 03167',
                distance: '3 mi',
                phone: "(123)456-7890"
            },
            {
                title: 'Savers',
                accepts: 'clothes, jewelry, furniture, shoes',
                no: 'large appliances',
                address: '6 Shift Road, Boston MA 03167',
                distance: '2 mi',
                phone: "(123)456-7890"
            },
            {
                title: 'Cradles to Crayons',
                accepts: "children's clothing, books",
                no: 'DVDs, car seats, furniture',
                address: '807 Jaapokki Avenue, Boston MA 03167',
                distance: '2 mi',
                phone: "(123)456-7890"
            }
        ];
    }

    clickHome() {
        this.setState({
            search: '',
            currentPage: pages.home
        });
    }

    clickLogin() {
        this.setState((prevState, props) => {
            return {
                currentPage: pages.login,
                prevPage: prevState.currentPage
            };
        });
    }

    clickProfile() {
        this.setState((prevState, props) => {
            return {
                currentPage: pages.profile,
                prevPage: prevState.currentPage
            }
        });
    }

    handleLogin(name) {
        this.setState((prevState, props) => {
            return {
                loggedIn: true,
                currentPage: prevState.prevPage,
                username: name
            };
        });
    }

    handleLogout() {
        this.setState((prevState, props) => {
            return {
                loggedIn: false,
                currentPage: prevState.prevPage,
                username: ''
            };
        });
    }

    handleSearchChange(e) {
        // on mobile, when you click on the search bar it scrolls down,
        // so this is to prevent that
        document.body.scrollTop = 0; // For Chrome, Safari and Opera 
        document.documentElement.scrollTop = 0; 
        const search = e.target.value;
        if (search) {
            this.setState({
                search: search,
                currentPage: pages.results
            });
        } else {
            this.setState({
                search: search,
                currentPage: pages.home
            });
        }
    }

    handleBackToResults() {
        this.setState({
            currentPage: pages.results
        });
    }

    handleBackToResult() {
        this.setState({
            currentPage: pages.result
        });
    }

    handleResultSelection(result) {
        this.setState({
            currentPage: pages.result,
            result: result
        });
    }

    centerPickupChosen(isCenter) {
        this.setState({
            currentPage: pages.pickup,
            center: isCenter
        });
    }

    handleChangeCenter() {
        this.setState((prevState, props) => {
            return {
                center: !prevState.center
            };
        });
    }

    getContents() {
        // control the logic for which page to render under the header
        switch(this.state.currentPage) {
            case pages.home:
                return (
                    null
                );
            case pages.results:
                return (
                    <Results data={this.getResults()} selectResult={this.handleResultSelection} />
                );
            case pages.result:
                return (
                    <Result data={this.state.result} goBack={this.handleBackToResults} pickup={this.centerPickupChosen} loggedIn={this.state.loggedIn} goLogin={this.clickLogin} />
                );
            case pages.login:
                return (
                    <Login login={this.handleLogin}/>
                );
            case pages.profile:
                return (
                    <Profile username={this.state.username} logout={this.handleLogout} />
                );
            case pages.pickup:
                return (
                    <SchedulePickup title={this.state.result.title + (this.state.center ? " employee" : " volunteer") + " pickup"} center={this.state.center} togglePickup={this.handleChangeCenter} goBack={this.handleBackToResult} />
                );
            default:
                return (
                    null
                );
        }
    }

  render() {
    // This is the main page! 
    // The header is always there
    // The first two { } sets are to control the logic of keeping the
    // same search bar on both the home page and the search results page
    // The third { } where it says { this.getContents() } refers to the 
    // getContents function above. Basically what that does is based on 
    // which page should be displayed, it will display that component!
    return (
      <div className="App" tabindex="0">
        <Header loggedIn={this.state.loggedIn} goHome={this.clickHome} goLogin={this.clickLogin} goProfile={this.clickProfile}/>
        { this.state.currentPage === pages.home ? <Home /> : null }
        {
            (this.state.currentPage === pages.home) || (this.state.currentPage === pages.results)  ?
            <form>
                <FormGroup controlId="searchBar">
                    <FormControl 
                        type="text"
                        value={this.state.search}
                        placeholder="ex. chair, Boston, clothes"
                        onChange={this.handleSearchChange}
                    />
                </FormGroup>
            </form>
                : null
        }
        { this.getContents() }
      </div>
    );
  }
}

export default App;
