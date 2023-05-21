import { Box, useColorModeValue } from "native-base"
import React from "react"
import { Platform } from "react-native"
import { Outlet } from "react-router-dom"

import { AppBar, HeaderBar, TabBar } from "@./common/ui"

export function AppLayout() {
    const screenBg = useColorModeValue("light.200", "dark.100")

    return (
        <>
            <Box flex="1" bg={screenBg}>
                {Platform.OS === "web" ? <HeaderBar /> : <AppBar />}
                <Outlet />
            </Box>
            {Platform.OS !== "web" && <TabBar />}
        </>
    )
}
