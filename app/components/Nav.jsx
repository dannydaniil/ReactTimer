var React = require('react');

// both of these required to change indecies
// IndexLink is the route of the application
// rest of Links are sublinks
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

    // all react classes must have this
    render: function() {

        // all react classes must return
        return (
            <div className="top-bar">
                <div class="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link" activeStyle={{
                                fontWeight: 'bold'
                            }}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link" activeStyle={{
                                fontWeight: 'bold'
                            }}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by
                            <a href="https://github.com/dannydaniil" target="_blank">Daniil, Daniel Chris</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
