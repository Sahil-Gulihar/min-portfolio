import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
      >
        <Icon size={20} />
        <span>{label}</span>
      </Link>
    </motion.div>
  )
}

