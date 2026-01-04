export interface Option { value: string; label: string; }

export function Select({ name, label, options, onChange }: { name: string; label: string; options: Option[]; onChange: any }) {
    return (
        <div className="input-group">
            <div className="input-group-text">{label}</div>
            <select name={name} className="form-select" aria-label={label} onChange={onChange}>
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
