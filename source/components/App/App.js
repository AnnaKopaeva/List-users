import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import * as actions from '../../actions'

import ListUsers from './ListUsers'
import PreLoader from '../PreLoader/preLoader'
import Pagination from "../pagination/pagination";

//style
import './app.sass'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perPage: 5,
            active: 1,
            loading: true
        }
    }

    handlerClick = (active) => {
        this.setState({ active });
    }

    componentWillMount(){

        //get number page
        var active = location.toString();
        var reg = /\?pages=(\d*)(.*)/;
        var a = active.match(reg)
        active =  a ? Number(a[1]): 1;

        this.setState({ active });

        // first load data
        this.props.fetchData()
    }

    componentDidMount(){
      this.setState({loading: !this.state.loading})
    }

    render(){
        const {data} = this.props;
        const {perPage, active, loading} = this.state;

        //slice array, and get need an array of data
        var dataGet = data.slice((active - 1) * perPage, active * perPage);
        const number = data.length;
        return (
            <main>
                <div className="main-wrapper">
                  {loading
                    ? < PreLoader />
                    : <ListUsers data={dataGet} />
                  }
                  <Pagination
                    number={number}
                    perPage={perPage}
                    active={active}
                    handlerClick={this.handlerClick}
                  />
                </div>
            </main>
        )
    }
}

const RoutePagination = () => (
    <main className="blog">
        <Switch>
            <Route path='/users' component={App}/>
        </Switch>
    </main>
)

Pagination.propTypes = {
    perPage: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    handlerClick: PropTypes.func.isRequired
}

export default connect(
    state => state,
    actions
)(App)
