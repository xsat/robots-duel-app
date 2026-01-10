import { JSX, useState, useRef } from 'react';
import { Button, Change, DisabledInput, Editable, Image, Input, Progress, Select, Option } from "./components"
import { DataConnection, Peer } from "peerjs";

import blueRobotLeft from "url:../assets/blue_robot_left.png";
import redRobotLeft from "url:../assets/red_robot_left.png";

export default function Start(): JSX.Element {
    const [myId, setMyId] = useState("Loading...");
    const peer = useRef(new Peer());
    peer.current.on('open', (id: string) => { setMyId(id) });

    const [image, setImage] = useState(blueRobotLeft);

    const colorOptions: Option[] = [
        { value: "blue", label: "Blue" },
        { value: "red", label: "Red" }
    ];

    const onChangeColor: Change = (value: string) => {
        if (value == "blue") {
            setImage(blueRobotLeft)
        } else if (value == "red") {
            setImage(redRobotLeft)
        }
    }

    const onChangeEnemyId: Change = (value: string) => { console.log(value) }
    const onChangePlayerName: Change = (value: string) => { console.log(value) }

    return (
        <>
            <div className="row">
                <div className="col-sm-2 mt-3">
                    <Select name="color" label="Color" value="blue" options={colorOptions} onChange={onChangeColor} />
                </div>
                <div className="col-sm-4 mt-3">
                    <DisabledInput name="my_id" label="My ID" value={myId} />
                </div>
                <div className="col-sm-4 mt-3">
                    <Input name="enemy_id" label="Enemy ID" value="" onChange={onChangeEnemyId} />
                </div>
                <div className="col-sm-2 mt-3">
                    <Button label="Duel &#128640;" onClick={() => { console.log(1) }} />
                </div>
            </div>
            <div className="row mt-3 fs-2 text-secondary">
                <div className="col-5">
                    <Editable value="Player 1" onInput={onChangePlayerName} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <Progress percentage={100} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <Image source={image} />
                </div>
            </div>
        </>
    );
}
