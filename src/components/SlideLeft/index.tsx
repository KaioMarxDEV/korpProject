import { Transition } from "@headlessui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export default function SlideLeft({children}: Props) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-all delay-150 duration-1000"
      enterFrom="opacity-0 translate-x-24"
      enterTo="opacity-100 translate-x-0"
      leave="transition-all delay-150 duration-1000"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-24"
    >
      {children}
    </Transition>
  )
}