import { Box, ScrollView, useColorModeValue } from "native-base"
import React from "react"
import { Platform } from "react-native"
import { Outlet } from "react-router-dom"

import { AppBar, HeaderBar, TabBar } from "@./common/ui"

export function AppLayout() {
    const screenBg = useColorModeValue("light.200", "dark.100")

    return (
        <Box bg={screenBg} flex="1">
            {Platform.OS === "web" ? <HeaderBar /> : <AppBar />}
            <ScrollView flex="1">
                <Outlet />
            </ScrollView>
            {Platform.OS !== "web" && <TabBar />}
        </Box>
    )
}
