import {vacuums} from "./vacuums";

export default function handler(req, res) {
    res.status(200).json(
        vacuums
    )
}
