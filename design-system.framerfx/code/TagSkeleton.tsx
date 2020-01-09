import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTagSkeleton = props => {
    return <System.TagSkeleton {...props}></System.TagSkeleton>
}

export const TagSkeleton = withHOC(InnerTagSkeleton)

TagSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TagSkeleton, {})
