import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBreadcrumbSkeleton = props => {
    return <System.BreadcrumbSkeleton {...props}></System.BreadcrumbSkeleton>
}

export const BreadcrumbSkeleton = withHOC(InnerBreadcrumbSkeleton)

BreadcrumbSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(BreadcrumbSkeleton, {})
