import { DesktopNavigation } from './navigation/DesktopNavigation'
import { MobileNavigation } from './navigation/MobileNavigation'

export function Sidebar() {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
    </>
  )
}
