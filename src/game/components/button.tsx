export function Button({ label, onClick }: { label: string; onClick: any }) {
    return (
        <button type="button" className="btn btn-secondary form-control" onClick={onClick}>
            {label}
        </button>
    )
}
