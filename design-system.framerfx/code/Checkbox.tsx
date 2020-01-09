import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCheckbox = props => {
    return <System.Checkbox {...props}></System.Checkbox>
}

export const Checkbox = withHOC(InnerCheckbox)

Checkbox.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Checkbox, {
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    defaultChecked: {
        title: "Default checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    indeterminate: {
        title: "Indeterminate",
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
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    wrapperClassName: {
        title: "Wrapper class name",
        type: ControlType.String,
    },
})
