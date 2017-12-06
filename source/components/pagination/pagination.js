import React, { PropTypes }  from 'react'
import { Link } from 'react-router-dom'

//style
import './pagination.sass'

class Pagination extends React.Component {

    getPages() {
        const { number, perPage } = this.props;
        const pages = Math.ceil(number / perPage);

        var arr = [];
        for (let i=1; i <= pages; i++) {
            arr.push(i)
        }
        return arr
    }

    render() {
        const getPages = this.getPages(); //return array of number
        const { handlerClick, active, number, perPage } = this.props;

        const pages = Math.ceil(number / perPage);
        const before = (active - 1) < 1 ? 1 : active - 1;
        const next = (active + 1 >= pages) ? pages : active + 1;

        const listPages = getPages.map((number, key) => (
            <li key={key}
                className={active == number ? 'active' : ''}
                onClick={() => handlerClick(number)}
            >
                <Link to={`/users?pages=${number}`} >{number}</Link>
            </li>
        ));
        return(
            <div className="pagination">
                <ul className="pagination_list">
                    <li onClick={() => handlerClick(before)}>
                        <Link to={`/posts?pages=${before}`}>
                            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                        </Link>
                    </li>
                    {listPages}
                    <li onClick={() => handlerClick(next)} >
                        <Link to={`/posts?pages=${next}`}>
                            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

Pagination.propTypes = {
    active: PropTypes.number.isRequired,
    handlerClick: PropTypes.func.isRequired
}

export default Pagination
