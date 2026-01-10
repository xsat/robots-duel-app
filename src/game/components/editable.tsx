import { JSX } from 'react';
import { Change } from './change';

export function Editable({ value, onInput }: { value: string; onInput: Change }): JSX.Element {
    return (
        <span contentEditable={"plaintext-only"}
            suppressContentEditableWarning={true}
            onInput={(event: any) => { onInput(event.target.textContent) }}>
            {value}
        </span>
    );
}
