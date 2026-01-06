import { useState } from 'react';
import { Change } from './change';

export function Editable({ value, onInput }: { value: string; onInput: Change }) {
    const [editableValue, setEditableValue] = useState(value);

    return (
        <span contentEditable={"plaintext-only"}
            suppressContentEditableWarning={true}
            onInput={(event: any) => {
                setEditableValue(event.target.textContent);

                onInput(event.target.textContent)
            }}>
            {editableValue}
        </span>
    );
}
