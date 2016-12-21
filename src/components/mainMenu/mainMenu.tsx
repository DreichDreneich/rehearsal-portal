import * as React from 'react';
import {Link} from 'react-router';

export interface IMainMenuProps {
    title: string;

    routeConfig: IRoute[];
}

export class MainMenu extends React.Component<IMainMenuProps, null> {
    private buildMenu = () => {
        return <ul className="nav navbar-nav"> {
            this.props.routeConfig.map((route, idx) => {
                debugger;
                if(!route.childrens) {
                    return <li key={idx}><Link className="navbar-brand" to={'/' + route.link}>{route.name}</Link></li>
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
            })
        }
        </ul>
    }

    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to={'/'}>Rehearsal Portal</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        {this.buildMenu()}
                    </div>
                </div>
            </nav>
        ) 
    }
}