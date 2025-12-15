import { useEffect, useState } from "react"

interface BatteryState {
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number
}

const useBattery = () => {
  const [batteryState, setBatteryState] = useState<BatteryState | null>(null)

  useEffect(() => {
    if (typeof navigator !== "undefined" && "getBattery" in navigator) {
      const getBattery = async () => {
        try {
          const battery = await (navigator as any).getBattery()
          const updateBatteryStatus = () => {
            setBatteryState({
              charging: battery.charging,
              chargingTime: battery.chargingTime,
              dischargingTime: battery.dischargingTime,
              level: battery.level,
            })
          }

          updateBatteryStatus()

          battery.addEventListener("chargingchange", updateBatteryStatus)
          battery.addEventListener("levelchange", updateBatteryStatus)
          battery.addEventListener("chargingtimechange", updateBatteryStatus)
          battery.addEventListener(
            "dischargingtimechange",
            updateBatteryStatus
          )

          return () => {
            battery.removeEventListener("chargingchange", updateBatteryStatus)
            battery.removeEventListener("levelchange", updateBatteryStatus)
            battery.removeEventListener(
              "chargingtimechange",
              updateBatteryStatus
            )
            battery.removeEventListener(
              "dischargingtimechange",
              updateBatteryStatus
            )
          }
        } catch (error) {
          console.error("Failed to get battery status:", error)
        }
      }

      getBattery()
    }
  }, [])

  return batteryState
}

export { useBattery }
