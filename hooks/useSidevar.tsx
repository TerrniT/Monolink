import { AnimationControls, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"

type SidebarProps = {
  controls: AnimationControls
  controlTitleText: AnimationControls
  controlText: AnimationControls
  showLess: () => void
  showMore: () => void
  active: boolean

}

const useSidevar = (): SidebarProps => {
  const controls = useAnimation()
  const controlText = useAnimation()
  const controlTitleText = useAnimation()

  const [active, setActive] = useState<boolean>(false)

  const showMore = () => {
    controls.start({
      width: '250px',
      transition: { duration: 0.001 },
    })
    controlText.start({
      opacity: 1,
      display: 'block',
      transition: { delay: 0.3 },
    })
    controlTitleText.start({
      opacity: 1,
      transition: { delay: 0.3 },
    })

    setActive(true)
  }

  const showLess = () => {
    controls.start({
      width: '125px',
      transition: { duration: 0.001 },
    })

    controlText.start({
      opacity: 0,
      display: 'none',
    })

    controlTitleText.start({
      opacity: 0,
    })

    setActive(false)
  }

  useEffect(() => {
    showMore()
  }, [])


  return (
    {
      showLess,
      showMore,
      active,
      controls,
      controlTitleText,
      controlText
    }
  )
}

export default useSidevar
