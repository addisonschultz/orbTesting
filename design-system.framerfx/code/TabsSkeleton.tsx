import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTabsSkeleton = props => {
    return <System.TabsSkeleton {...props}></System.TabsSkeleton>
}

export const TabsSkeleton = withHOC(InnerTabsSkeleton)

TabsSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TabsSkeleton, {})
