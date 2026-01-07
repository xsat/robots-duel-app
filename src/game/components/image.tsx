export function Image({ source }: { source: string }) {
    return (
        <img className="rounded img-fluid" src={source} />
    );
}
