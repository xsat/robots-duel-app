import { JSX, useState } from 'react';
import { Change } from './change';

export interface Option { value: string; label: string; }

export function Select({ name, label, value, options, onChange }:
    { name: string; label: string; value: string; options: Option[]; onChange: Change }): JSX.Element {
    const [selectValue, setSelectValue] = useState(value);

    return (
        <div className="input-group">
            <div className="input-group-text">
                {label}
            </div>
            <select name={name} className="form-select" value={selectValue} aria-label={label} onChange={(event: any) => {
                setSelectValue(event.target.value);

                onChange(event.target.value)
            }}>
                {options.map((option) => {
                    return (
                        <option key={name + option.value} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
