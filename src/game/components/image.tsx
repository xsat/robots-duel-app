import { JSX } from "react";

export function Image({ source }: { source: string }): JSX.Element {
    return (
        <img className="rounded img-fluid" src={source} />
    );
}
