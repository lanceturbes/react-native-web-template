import React from "react"
import { Platform } from "react-native"
import { NativeRouter } from "react-router-native"

import AppRoutes from "./app-routes"
import RoutesWithBackButtonSupport from "./routes-with-back-button-support"

export function AppRouter() {
    return (
        <NativeRouter>
            {Platform.OS === "android" ? (
                <RoutesWithBackButtonSupport />
            ) : (
                <AppRoutes />
            )}
        </NativeRouter>
    )
}

export default AppRouter
