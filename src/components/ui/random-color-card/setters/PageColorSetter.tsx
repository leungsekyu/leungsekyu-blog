import { pageColor } from '@store/theme'

interface PageColorSetterProps {
  color: string
}

export default function PageColorSetter({ color }: PageColorSetterProps) {
  pageColor.set(color)
  return null
}
