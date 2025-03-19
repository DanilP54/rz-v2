"use client"
import { useHover, useWindowScroll } from "@mantine/hooks"
import { IconArrowBigUpFilled } from "@tabler/icons-react"

export const ScrollArrow = () => {

  const [{ y: scrollPostition }, scrollTo] = useWindowScroll();
  const { ref, hovered } = useHover<HTMLDivElement>()
  return (
    <>
      {
        scrollPostition > 1600 && (
          <div onClick={() => scrollTo({ y: 0 })} ref={ref} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
            position: 'fixed',
            top: 120,
            right: 5,
            cursor: 'pointer',
          }}>
            <IconArrowBigUpFilled size={25} />
          </div>
        )
      }
    </>
  )
}
