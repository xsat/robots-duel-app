export function Input({ name, label, value, onChange, isDisabled = false }: { name: string; label: string; value: string; onChange: any; isDisabled?: boolean }) {
    return (
        <div className="input-group">
            <div className="input-group-text">{label}</div>
            <input name={name} type="text" value={value} className="form-control" disabled={isDisabled} onChange={onChange} />
        </div>
    );
}
