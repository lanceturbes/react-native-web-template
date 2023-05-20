import { NativeBaseProvider } from "native-base"
import React from "react"

import { AppRouter } from "@./router"
import { colorModeManager, themeConfig } from "@./theme"

export default function App() {
    return (
        <NativeBaseProvider
            config={themeConfig}
            colorModeManager={colorModeManager}
        >
            <AppRouter />
        </NativeBaseProvider>
    )
}
