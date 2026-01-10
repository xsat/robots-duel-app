import { Change } from './change';

export function Editable({ value, onInput }: { value: string; onInput: Change }) {
    return (
        <span contentEditable={"plaintext-only"}
            suppressContentEditableWarning={true}
            onInput={(event: any) => { onInput(event.target.textContent) }}>
            {value}
        </span>
    );
}
