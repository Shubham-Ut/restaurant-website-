"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { type PropsWithChildren, useEffect, useRef } from "react"

export function Reveal(props: PropsWithChildren<{ delay?: number }>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start("show")
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: props.delay ?? 0 },
        },
      }}
    >
      {props.children}
    </motion.div>
  )
}
