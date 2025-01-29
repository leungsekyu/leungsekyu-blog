import { pageColor } from '@store/theme'

interface Props {
  color: string
}

export default function PageColorSetter({ color }: Props) {
  pageColor.set(color)
  return null
}
