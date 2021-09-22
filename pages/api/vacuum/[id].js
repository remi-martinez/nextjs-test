import {vacuums} from "./vacuums";

export default function handler({query: { id } }, res) {
    if (!id || !Number.isInteger(+id) ) {
        res.status(404).json({
            message: `The provided id is not an integer value.`
        })
    }

    const filtered = vacuums.filter((v) => v.id === +id)
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({
            message: `Vacuum id ${id} does not exist.`
        })
    }
}
