import { useState, useEffect } from "react"

interface GeolocationState {
  latitude: number | null
  longitude: number | null
  error: GeolocationPositionError | null
}

const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
  })

  useEffect(() => {
    if (!navigator.geolocation) {
      return
    }

    const onSuccess = (position: GeolocationPosition) => {
      setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      })
    }

    const onError = (error: GeolocationPositionError) => {
      setState({
        latitude: null,
        longitude: null,
        error,
      })
    }

    const watchId = navigator.geolocation.watchPosition(onSuccess, onError)

    return () => {
      navigator.geolocation.clearWatch(watchId)
    }
  }, [])

  return state
}

export { useGeolocation }
