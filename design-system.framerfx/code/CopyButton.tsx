import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCopyButton = props => {
    return <System.CopyButton {...props}></System.CopyButton>
}

export const CopyButton = withHOC(InnerCopyButton)

CopyButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CopyButton, {
    iconDescription: {
        title: "Icon description",
        type: ControlType.String,
        defaultValue: "Copy to clipboard",
    },
    feedback: {
        title: "Feedback",
        type: ControlType.String,
        defaultValue: "Copied!",
    },
    feedbackTimeout: {
        title: "Feedback timeout",
        type: ControlType.Number,
        defaultValue: 2000,
    },
})
