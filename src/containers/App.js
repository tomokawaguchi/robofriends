import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roboData: [],
            searchInputs: ''
        }
    }

    // Fetching data via API
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(userArray => this.setState({ roboData: userArray }))
        .catch(error => console.log(error))
    }

    //Callback function on search change event
    handleSearchChange = (event) => {
        this.setState({ searchInputs: event.target.value });
    }

    render() {
        const { roboData, searchInputs } = this.state;
        const filteredRobots = roboData.filter(robots => {
            return robots.name.toLowerCase().includes(searchInputs.toLowerCase());
        });

        return !roboData.length ? 
            <h1>Loading...</h1>
        : (
            <div className='tc'>
                <header>
                    <h1 className='f1'>RoboFriends</h1>
                </header>
                <section>
                    <SearchBox onSearchChange={this.handleSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList data={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </section>
            </div>
        );
    }
}

export default App;