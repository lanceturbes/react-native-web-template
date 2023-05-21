import React from "react"

import AppRoutes from "./app-routes"
import useAndroidBackHandler from "./use-android-back-handler"

export function RoutesWithBackButtonSupport() {
    useAndroidBackHandler()
    return <AppRoutes />
}

export default RoutesWithBackButtonSupport
