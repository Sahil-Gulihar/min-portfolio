'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, Mail } from 'lucide-react'
import { SocialLink } from '@/components/social-link'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className="min-h-[screen-20px] bg-background flex   justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-card rounded-lg shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <SocialLink 
              href="https://github.com/sahil-gulihar" 
              icon={Github} 
              label="GitHub"
            />
            <SocialLink 
              href="https://linkedin.com/in/sahil-gulihar" 
              icon={Linkedin} 
              label="Linkedin"
            />
            <SocialLink 
              href="https://drive.google.com/file/d/1LaBFRkK8xgkm_oKPfD-xCGaclCIsUBWd/view?usp=sharing" 
              icon={FileText} 
              label="Resume"
            />
            <SocialLink 
              href="mailto:hire@sahilgulihar.me" 
              icon={Mail} 
              label="Email"
            />
          </div>
          
          <ContactForm />
        </div>
      </motion.div>
    </div>
  )
}

