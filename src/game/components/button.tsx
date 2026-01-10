import { JSX } from "react";

export function Button({ label, onClick }: { label: string; onClick: any }): JSX.Element {
    return (
        <button type="button" className="btn btn-secondary form-control" onClick={onClick}>
            {label}
        </button>
    )
}
