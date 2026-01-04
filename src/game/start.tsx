import { Button, Change, Input, Select, Option } from "./components"

export default function Start() {
    const colorOptions: Option[] = [
        { value: "blue", label: "Blue" },
        { value: "red", label: "Red" }
    ];

    const onChangeColor: Change = (value: string) => { console.log(value) }
    const onChangeEnemyId: Change = (value: string) => { console.log(value) }

    return (
        <>
            <div className="row">
                <div className="col-sm-2 mt-3">
                    <Select name="color" label="Color" value="red" options={colorOptions} onChange={onChangeColor} />
                </div>
                <div className="col-sm-4 mt-3">
                    <Input name="my_id" label="My ID" value="" onChange={() => { console.log(1) }} isDisabled={true} />
                </div>
                <div className="col-sm-4 mt-3">
                    <Input name="enemy_id" label="Enemy ID" value="" onChange={onChangeEnemyId} />
                </div>
                <div className="col-sm-2 mt-3">
                    <Button label="Duel &#128640;" onClick={() => { console.log(1) }} />
                </div>
            </div>
        </>
    );
}
