import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCheckboxSkeleton = props => {
    return <System.CheckboxSkeleton {...props}></System.CheckboxSkeleton>
}

export const CheckboxSkeleton = withHOC(InnerCheckboxSkeleton)

CheckboxSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(CheckboxSkeleton, {})
