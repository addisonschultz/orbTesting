import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerAccordion = props => {
    return <System.Accordion {...props}></System.Accordion>
}

export const Accordion = withHOC(InnerAccordion)

Accordion.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Accordion, {
    align: {
        title: "Align",
        type: ControlType.Enum,
        defaultValue: "end",
        options: ["start", "end"],
        optionTitles: ["start", "end"],
    },
})
