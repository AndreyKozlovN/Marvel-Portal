import {Link, NavLink} from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> Информационный Портал
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink exact activeStyle={{'color': '#9f0013'}} to="/">Персонажи</NavLink></li>
                    /
                    <li><NavLink activeStyle={{'color': '#9f0013'}} to="/comics">Комиксы</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;