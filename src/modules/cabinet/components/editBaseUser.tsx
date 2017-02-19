import * as React from 'react';

import {PageHeader} from 'components';


export class EditBaseUser extends React.Component<void, void> {
    render() {
        return (
            <div>
                <PageHeader 
                    title="Создать новую сеть баз"
                />
                <hr/>
            </div>
        )
    }
}