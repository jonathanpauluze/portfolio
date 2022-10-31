import { ButtonProps } from './types'

export function Button(props: ButtonProps) {
  return (
    <div className="bg-neutral-900 h-screen w-screen text-white">
      {props.children}
    </div>
  )
}
