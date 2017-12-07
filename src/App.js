import React, { Component } from 'react';
import Typist from 'react-typist';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import Header from './Header';
import Home from './Home';
import Results from './Results';
import Result from './Result';
import Login from './Login';
import Profile from './Profile';
import SchedulePickup from './SchedulePickup';
import SelectVersion from './SelectVersion';
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
        this.state = {
            currentPage: pages.home,
            previousPage: pages.home,
            search: '',
            where: '',
            support: '',
            result: null,
            loggedIn: false,
            username: '',
            pickupStyle: 0, // 0 is center employee, 1 is volunteer
            version: 0,
            v: 0,
            showGhost: true,
            typing: true
        };
    }

    // hard coded results
    getResults = () => {
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

    // callback that happens when the DONATR is clicked
    // in order to set this.state.currentPage to home
    // and to clear the search term
    clickHome = () => {
        this.setState({
            search: '',
            currentPage: pages.home
        });
    }

    // callback to set this.state.currentPage to the
    // login page AND also to keep track of what the previous
    // page was before you were taken to the login page
    // so that after logging in you can be taken back to that
    // previous page :)
    // used both when you click on the Login button in the header
    // and when you try to schedule a pickup but are not logged in
    clickLogin = () => {
        this.setState((prevState, props) => {
            return {
                currentPage: pages.login,
                prevPage: prevState.currentPage
            };
        });
    }

    // callback to take you to the profile page
    // called when you click on the profile icon in the header
    clickProfile = () => {
        this.setState((prevState, props) => {
            return {
                currentPage: pages.profile,
                prevPage: prevState.currentPage
            }
        });
    }

    // callback for what happens when the user logs in
    // sets this.state.loggedIn to true (so that it will display
    // the profile icon instead of Login in the header)
    // and also keeps track of the user's username so that
    // it can be displayed on the profile page
    // also sets the current page to whatever the previous page was!
    handleLogin = (name) => {
        this.setState((prevState, props) => {
            return {
                loggedIn: true,
                currentPage: prevState.prevPage,
                username: name
            };
        });
    }

    // callback for when you logout
    // also clears the stored username
    handleLogout = () => {
        this.setState((prevState, props) => {
            return {
                loggedIn: false,
                currentPage: prevState.prevPage,
                username: ''
            };
        });
    }

    // this is the callback for what should happen when
    // the user types into the search bar
    // if the search term is empty, it sets the current page to the home page
    // if it's not empty, sets the current page to the results page
    handleSearchChange = (e) => {
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
			const page = (this.state.where || this.state.support) ? pages.results : pages.home;
            this.setState({
                search: search,
                currentPage: page
            });
        }
    }

    // this is the callback for what should happen when
    // the user types into the where search bar
    // if the search term is empty, it sets the current page to the home page
    // if it's not empty, sets the current page to the results page
    handleWhereSearchChange = (e) => {
        // on mobile, when you click on the search bar it scrolls down,
        // so this is to prevent that
        document.body.scrollTop = 0; // For Chrome, Safari and Opera 
        document.documentElement.scrollTop = 0; 
        const search = e.target.value;
        if (search) {
            this.setState({
                where: search,
                currentPage: pages.results
            });
        } else {
			const page = (this.state.search || this.state.support) ? pages.results : pages.home;
            this.setState({
                where: search,
                currentPage: page
            });
        }
    }

    // this is the callback for what should happen when
    // the user types into the support search bar
    // if the search term is empty, it sets the current page to the home page
    // if it's not empty, sets the current page to the results page
    handleSupportSearchChange = (e) => {
        // on mobile, when you click on the search bar it scrolls down,
        // so this is to prevent that
        document.body.scrollTop = 0; // For Chrome, Safari and Opera 
        document.documentElement.scrollTop = 0; 
        const search = e.target.value;
        if (search) {
            this.setState({
                support: search,
                currentPage: pages.results
            });
        } else {
			const page = (this.state.search || this.state.where) ? pages.results : pages.home;
            this.setState({
                support: search,
                currentPage: page
            });
        }
    }

    // callback for when the user presses the "back" button
    // on the individual Result page to take them back to the
    // search results page
    handleBackToResults = () => {
        this.setState({
            currentPage: pages.results
        });
    }

    // callback for when the user is on the schedule pickup
    // page and presses the back button to take them back to the
    // individual search result page
    handleBackToResult = () => {
        this.setState({
            currentPage: pages.result
        });
    }

    // callback for when the user clicks a result on the search results
    // page. This is used to store what result they clicked on and also
    // to change the current page to the individual result page
    handleResultSelection = (result) => {
        this.setState({
            currentPage: pages.result,
            result: result
        });
    }

    // callback to set whether or not the user is scheduling a pickup
    // through the center or through volunteer
    handleShowSchedulePickup = () => {
        this.setState({
            currentPage: pages.pickup
        });
    }

    // callback to change if the pickup is through the center or through 
    // a volunteer by setting it to the opposite of whatever it previously was
    handleChangeCenterPickup = (val) => {
        this.setState((prevState, props) => {
            return {
                pickupStyle: val
            };
        });
    }

    getContents = () => {
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
                    <Result data={this.state.result} goBack={this.handleBackToResults} pickup={this.handleShowSchedulePickup} loggedIn={this.state.loggedIn} goLogin={this.clickLogin} />
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
                    <SchedulePickup title={this.state.result.title + " pickup"} pickupStyle={this.state.pickupStyle} togglePickup={this.handleChangeCenterPickup} goBack={this.handleBackToResult} />
                );
            default:
                return (
                    null
                );
        }
    }

    hideGhost = () => {
        this.setState({showGhost: false});
        document.getElementById("searchBar").focus();
    }

    handleFinishTypistLoop = () => {
        this.setState({ typing: false }, () => {
            this.setState({ typing: true })
        });
    }

  render() {
    // This is the main page! 
    // The header is always there
    // The first two { } sets are to control the logic of keeping the
    // same search bar on both the home page and the search results page
    // The third { } where it says { this.getContents() } refers to the 
    // getContents function above. Basically what that does is based on 
    // which page should be displayed, it will display that component!
      //
        const typistClass = this.state.showGhost ? 'show' : 'hide';
    return (
        <div className="App" tabindex="0">
            <Header loggedIn={this.state.loggedIn} goHome={this.clickHome} goLogin={this.clickLogin} goProfile={this.clickProfile}/>
            { this.state.currentPage === pages.home ? <Home /> : null }
            {
                (this.state.currentPage === pages.home) || (this.state.currentPage === pages.results)  ?
                <div className="search-container" onClick={this.hideGhost}>
                    { this.state.typing ? 
                        <Typist
                            className={typistClass}
                            onTypingDone={this.handleFinishTypistLoop}
                        >
                            <span className="typist">centers near Boston, MA</span>
                            <Typist.Backspace count={23} delay={500} />
                            <span className="typist">furniture</span>
                            <Typist.Backspace count={9} delay={500} />
                            <span className="typist">clothes</span>
                            <Typist.Backspace count={7} delay={500} />
                            <span className="typist">couch</span>
                            <Typist.Backspace count={5} delay={500} />
                            <span className="typist">animal shelters</span>
                            <Typist.Backspace count={15} delay={500} />
                            <span className="typist">disaster relief</span>
                            <Typist.Backspace count={15} delay={500} />
                            <span className="typist">what do you want to search?</span>
                        </Typist>
                        : ''
                    }
                    <form className="searchBar">
                        <FormGroup controlId="searchBar">
                            <FormControl 
                                type="text"
                                value={this.state.search}
                                placeholder=""
                                onChange={this.handleSearchChange}
                            />
                        </FormGroup>
                    </form>
                </div>
                : null
            }
            { this.getContents() }
        </div>
    );
  }
}

export default App;
