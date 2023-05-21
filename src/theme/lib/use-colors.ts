import { useColorModeValue } from "native-base"
import { IColors } from "native-base/lib/typescript/theme/base/colors"

export function useColors(): ColorConfig {
    return useColorModeValue(lightColors, darkColors)
}

type ColorUsage = "surface" | "onSurface"

const lightColors: Record<ColorUsage, IColors> = {
    surface: "light.50",
    onSurface: "muted.900"
} as const

type ColorConfig = typeof lightColors

const darkColors: ColorConfig = {
    surface: "dark.50",
    onSurface: "muted.50"
}

export default useColors
