export function DisabledInput({ name, label, value }:
    { name: string; label: string; value: string; }) {

    return (
        <div className="input-group">
            <div className="input-group-text">
                {label}
            </div>
            <input name={name}
                type="text"
                value={value}
                className="form-control"
                disabled={true} />
        </div>
    );
}
