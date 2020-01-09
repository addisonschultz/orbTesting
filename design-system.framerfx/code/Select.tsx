import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSelect = props => {
    return <System.Select {...props}></System.Select>
}

export const Select = withHOC(InnerSelect)

Select.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Select, {
    inline: {
        title: "Inline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hideLabel: {
        title: "Hide label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    invalid: {
        title: "Invalid",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    invalidText: {
        title: "Invalid text",
        type: ControlType.String,
        defaultValue: "",
    },
    light: {
        title: "Light",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    noLabel: {
        title: "No label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
