import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCodeSnippet = props => {
    return <System.CodeSnippet {...props}></System.CodeSnippet>
}

export const CodeSnippet = withHOC(InnerCodeSnippet)

CodeSnippet.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CodeSnippet, {
    type: {
        title: "Type",
        type: ControlType.Enum,
        defaultValue: "single",
        options: ["single", "inline", "multi"],
        optionTitles: ["single", "inline", "multi"],
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
    feedback: {
        title: "Feedback",
        type: ControlType.String,
    },
    copyButtonDescription: {
        title: "Copy button description",
        type: ControlType.String,
        defaultValue: "copyButtonDescription",
    },
    copyLabel: {
        title: "Copy label",
        type: ControlType.String,
        defaultValue: "copyLabel",
    },
    showMoreText: {
        title: "Show more text",
        type: ControlType.String,
        defaultValue: "Show more",
    },
    showLessText: {
        title: "Show less text",
        type: ControlType.String,
        defaultValue: "Show less",
    },
    light: {
        title: "Light",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
