import React from "react"
import { NativeRouter } from "react-router-native"

import AppRoutes from "./app-routes"

export function AppRouter() {
    return (
        <NativeRouter>
            <AppRoutes />
        </NativeRouter>
    )
}

export default AppRouter
