import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Router} from 'react-router';

import {EditBaseUser} from '../components/editBaseUser';

export class CreateBaseUser extends React.Component<void, void> {
    render () {
        return (
            <EditBaseUser />            
        )
    }
}

