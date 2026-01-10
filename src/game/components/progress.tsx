import { JSX } from 'react';

export function Progress({ percentage }: { percentage: number; }): JSX.Element {
    return (
        <div role="progressbar" className="progress">
            <div className="progress-bar bg-secondary" style={{ width: percentage + '%' }}>&nbsp;</div>
        </div>
    );
}
