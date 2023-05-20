import { Box, useColorModeValue } from "native-base"
import React from "react"
import { Outlet } from "react-router-dom"

import { HeaderBar } from "@./common/ui"

export function AppLayout() {
    const screenBg = useColorModeValue("light.200", "dark.100")

    return (
        <Box flex="1" bg={screenBg}>
            <HeaderBar />
            <Outlet />
        </Box>
    )
}
