import { HStack, Switch, Text, useColorMode, VStack } from "native-base"
import React from "react"

import { useColors } from "@./theme"

export function SettingsScreen() {
    const { surface } = useColors()
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <VStack mx="2">
            <VStack space="2">
                <Text px="4" fontSize="lg">
                    Appearance
                </Text>
                <HStack
                    alignItems="center"
                    bg={surface}
                    rounded="2xl"
                    p="4"
                    justifyContent="space-between"
                >
                    <Text
                        id="dark-mode-setting-label"
                        onPress={toggleColorMode}
                        flex="1"
                    >
                        Dark Mode
                    </Text>
                    <Switch
                        aria-labelledby="dark-mode-setting-label"
                        isChecked={colorMode === "dark"}
                        onToggle={toggleColorMode}
                    />
                </HStack>
            </VStack>
        </VStack>
    )
}

export default SettingsScreen
