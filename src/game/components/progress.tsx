export function Progress({ percentage }: { percentage: number; }) {
    return (
        <div role="progressbar" className="progress">
            <div className="progress-bar bg-secondary" style={{ width: percentage + '%' }}>&nbsp;</div>
        </div>
    );
}
