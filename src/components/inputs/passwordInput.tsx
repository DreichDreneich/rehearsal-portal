import * as React from 'react';

interface IProps {
    value: string;
    onChange: (value: string) => void;
    className?: string; 
}

export class PasswordInput extends React.Component<IProps, void> {
    onChange = (el: React.FormEvent<HTMLInputElement>) => {
        const {onChange} = this.props;
        onChange(el.currentTarget.value);
    }

    render() {
        const {value, className} = this.props;
        return (
            <div className={className || 'col-md-12'}>
                <input 
                    type='password'
                    onChange={this.onChange}
                    value={value}
                />
            </div>
        )
    }
}