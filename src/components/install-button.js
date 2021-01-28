import React, { useState, useEffect } from "react"
import { Button } from "easy-as-pie-ui"

export const InstallButton = () => {
  const [showInstallBtn, setShowInstallBtn] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      const isIOS =
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("iPad") ||
        (navigator.userAgent.includes("Macintosh") &&
          typeof navigator.maxTouchPoints === "number" &&
          navigator.maxTouchPoints > 2)

      const isSupportingBrowser = window.hasOwnProperty(
        "BeforeInstallPromptEvent"
      )

      setShowInstallBtn(
        (isIOS && isSupportingBrowser) ||
          (isSupportingBrowser &&
            (localStorage.getItem("brunerDynamicsInstalled") === "" ||
              localStorage.getItem("brunerDynamicsInstalled") === "false"))
      )

      // This will only be called if the browser is eligible and PWA has NOT been installed yet
      window.addEventListener("beforeinstallprompt", () => {
        localStorage.setItem("brunerDynamicsInstalled", "false")
        setShowInstallBtn(true)
      })

      window.addEventListener("appinstalled", () => {
        localStorage.setItem("brunerDynamicsInstalled", "true")
      })
    }
  }, [])

  let installButton

  if (showInstallBtn) {
    installButton = (
      <div
        class="install-btn"
        onClick={() => {
          if (typeof document !== "undefined") {
            document.querySelector("pwa-install").openPrompt()
          }
        }}
      >
        <Button size="sm" color="blue">
          Install +
        </Button>
      </div>
    )
  }

  return (
    <>
      {installButton}
      <pwa-install
        usecustom
        iconpath="https://bruner-dynamics.richardtaylordawson.com/images/favicon.png"
        manifestpath="/manifest.webmanifest"
      ></pwa-install>
    </>
  )
}
