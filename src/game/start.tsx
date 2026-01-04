import {Input, Select, Option} from "./components"

export default function Start() {
    const colorOptions: Option[] = [
        { value: "blue", label: "Blue" },
        { value: "red", label: "Red" }
    ];

    return (
        <>
            <div className="row">
                <div className="col-sm-2 mt-3">
                    <Select name="color" label="Color" options={colorOptions} onChange={() => { console.log(1) }} />
                </div>
                <div className="col-sm-4 mt-3">
                    <Input name="my_id" label="My ID" value="" onChange={() => { console.log(1) }} isDisabled={true} />
                </div>
                <div className="col-sm-4 mt-3">
                    <Input name="enemy_id" label="Enemy ID" value="33" onChange={() => { console.log(1) }} />
                </div>
            </div>
        </>
    );
}
