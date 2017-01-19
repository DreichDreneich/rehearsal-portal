import * as React from 'react';
import {Link} from 'react-router';
import {IRoute} from 'models';
import {isRoute} from './helpers';

interface IMainMenuProps {
    title: string;

    routeConfig: IRoute[];

    rightSectionConfig?: (IRoute | JSX.Element) []
}

export class MainMenu extends React.Component<IMainMenuProps, null> {

    private buildRoute = (route: IRoute, idx: number) => {
        if(!route.childrens) {
            return <li key={idx}><Link to={'/' + route.link}>{route.name}</Link></li>
        } else {
            return (
                <li key={idx} className="dropdown">
                    <a href="#" 
                        className="dropdown-toggle" 
                        data-toggle="dropdown" 
                        role="button" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        {route.name}
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                        {route.childrens.map((r, i) => {
                            return <li key={i}><Link className="navbar-brand" to={'/' + r.link}>{r.name}</Link></li>
                        })}
                    </ul>
                </li>
            )
        }
    }

    private buildLeftSide = () => {
        return <ul className="nav navbar-nav"> {
            this.props.routeConfig.map((route, idx) => this.buildRoute(route, idx))
        }
        </ul>
    }

    private buildRightSide = () => {
        return (
            <ul className="nav navbar-nav navbar-right"> 
                {this.buildRightSection()}
            </ul>
        )
    }

    buildRightSection() {
        if(!this.props.rightSectionConfig)
            return null;

        return this.props.rightSectionConfig.map((elem, idx) => {
            if(isRoute(elem)) {
                return this.buildRoute(elem, idx);
            } else {
                return elem;
            }
        });
    }

    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to={'/'}>Rehearsal Portal</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        {this.buildLeftSide()}
                        {this.buildRightSide()}
                    </div>
                </div>
            </nav>
        ) 
    }
}