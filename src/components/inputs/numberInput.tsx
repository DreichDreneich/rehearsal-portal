import * as React from 'react';

interface IProps {
    value: number;
    onChange: (value: number) => void;
    placeholder?: string;
    disabled?: boolean;
}

export class NumberInput extends React.Component<IProps, void> {
    onChange = (el: React.FormEvent<HTMLInputElement>) => {
        const {onChange} = this.props;
        onChange(Number.parseInt(el.currentTarget.value));
    }

    render() {
        const {placeholder, disabled, value} = this.props;
        return (
            <div className='col-md-12'>
                <input 
                    type='number' 
                    placeholder={placeholder} 
                    disabled={disabled}
                    onChange={this.onChange}
                    value={value}
                />
            </div>
        )
    }
}