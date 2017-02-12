import * as React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox, ListItemContent, ListItemLayout} from 'react-toolbox/lib/list';

interface IRListProps {
    title: string;
    items: IListItem[];
    selectable?: boolean;
}

interface IListItem {
    avatar?: string;
    header?: string;
    subheader?: string;
    rightActions?: JSX.Element[];
    data?: JSX.Element;
}

export class RList extends React.Component<IRListProps, void> {

    renderItem = (item: IListItem, key: any) => {
        const {header, subheader, rightActions, data, avatar} = item;
        const img = <img className="" src={avatar} />

        return (
            <ListItem>
                <ListItemLayout className="list-item-layout"
                    avatar={img}
                    itemContent={data}
                    leftActions={[]}
                    rightActions={[]}
                >
                </ListItemLayout>
            </ListItem>
        )
    }

    render() {
        debugger;
        const {title, items, selectable} = this.props;
        return (
             <List selectable={selectable} ripple>
                <ListSubHeader caption={title} />
                {items.map(this.renderItem)}
             </List>
        );
    }
}
