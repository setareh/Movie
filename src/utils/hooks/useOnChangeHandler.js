import { useState } from "react"

export const useOnChangeHandler = (initial) => {
    const [value, setValue] = useState(initial);

    const onChangeHandler = (e) => {
        setValue(e.target.value);        
    }

    return [value, setValue, onChangeHandler]
}