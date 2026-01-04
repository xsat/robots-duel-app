import { useState } from 'react';
import { Change } from './change';

export function Input({ name, label, value, onChange, isDisabled = false }:
    { name: string; label: string; value: string; onChange: Change; isDisabled?: boolean }) {
    const [inputValue, setInputValue] = useState(value);

    return (
        <div className="input-group">
            <div className="input-group-text">
                {label}
            </div>
            <input name={name}
                type="text"
                value={inputValue}
                className="form-control"
                disabled={isDisabled}
                onChange={(event: any) => {
                    setInputValue(event.target.value);

                    onChange(event.target.value)
                }} />
        </div>
    );
}
