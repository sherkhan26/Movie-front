import { FC } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="md:hidden fixed top-4 right-4 z-50 p-3 bg-gray-800 rounded-lg border border-gray-700"
      onClick={onClick}
    >
      <HiMenuAlt3 size={20} className="text-white" />
    </button>
  )
}

export default MobileMenuButton
