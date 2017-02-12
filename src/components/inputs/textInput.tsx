import * as React from 'react';
import Input from 'react-toolbox/lib/input';

interface IProps {
    value: string | number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    disabled?: boolean;
    key?: any;
    className?: string; 
    type?: 'text' | 'password' | 'number'
}

export class TextInput extends React.Component<IProps, void> {
    onValueChange = (value, e) => {
        this.props.onChange(value);
    }

    render() {
        const {placeholder, disabled, value, className, type} = this.props;
        return (
            <div className={className || 'col-md-12'}>
                <Input 
                    type={type || 'text'}
                    label={placeholder}
                    floating
                    onChange={this.onValueChange}
                    value={value}
                    disabled={disabled}
                />
            </div>
        )
    }
}