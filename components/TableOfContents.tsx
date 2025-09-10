'use client'

import { useEffect } from 'react'

export default function TableOfContents() {
  useEffect(() => {
    // Toggle TOC on mobile
    const tocToggle = document.getElementById('toc-toggle')
    const toc = document.getElementById('toc')
    
    if (tocToggle && toc) {
      const handleToggle = () => {
        toc.classList.toggle('open')
      }
      
      tocToggle.addEventListener('click', handleToggle)
      
      // Close TOC when clicking outside on mobile
      const handleClickOutside = (e: Event) => {
        if (window.innerWidth <= 1024 && !toc.contains(e.target as Node) && !tocToggle.contains(e.target as Node)) {
          toc.classList.remove('open')
        }
      }
      
      document.addEventListener('click', handleClickOutside)
      
      // Cleanup
      return () => {
        tocToggle.removeEventListener('click', handleToggle)
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [])

  useEffect(() => {
    // Smooth scrolling for TOC links
    const tocLinks = document.querySelectorAll('.toc-link')
    
    const handleClick = (e: Event) => {
      e.preventDefault()
      const link = e.target as HTMLAnchorElement
      const targetId = link.getAttribute('href')?.substring(1)
      const targetElement = document.getElementById(targetId || '')
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      
      // Close TOC on mobile after click
      if (window.innerWidth <= 1024) {
        const toc = document.getElementById('toc')
        toc?.classList.remove('open')
      }
    }
    
    tocLinks.forEach(link => {
      link.addEventListener('click', handleClick)
    })
    
    // Highlight active TOC section on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const tocLinks = document.querySelectorAll('.toc-link')
      
      let current = ''
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || ''
        }
      })
      
      tocLinks.forEach(link => {
        link.classList.remove('text-tech-600', 'font-semibold')
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('text-tech-600', 'font-semibold')
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup
    return () => {
      tocLinks.forEach(link => {
        link.removeEventListener('click', handleClick)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Toggle button for mobile TOC */}
      <button id="toc-toggle" className="fixed top-4 left-4 z-50 p-2 bg-earth-600 text-white rounded-lg shadow-md lg:hidden">
        <i className="fas fa-bars"></i>
      </button>

      {/* Table of Contents */}
      <nav className="toc-fixed" id="toc">
        <div className="mb-8">
          <h3 className="font-serif text-lg font-semibold text-earth-800 mb-4">Table of Contents</h3>
        </div>

        <ul className="space-y-2 text-sm">
          <li>
            <a href="#overview" className="toc-link block py-2 text-earth-700 hover:text-tech-600">1. System Overview</a>
          </li>
          <li>
            <a href="#architecture" className="toc-link block py-2 text-earth-700 hover:text-tech-600">2. Architecture and Components</a>
          </li>
          <li>
            <a href="#features" className="toc-link block py-2 text-earth-700 hover:text-tech-600">3. Main Functions and Features</a>
          </li>
          <li>
            <a href="#implementation" className="toc-link block py-2 text-earth-700 hover:text-tech-600">4. Implementation and Optimization</a>
          </li>
          <li>
            <a href="#feasibility" className="toc-link block py-2 text-earth-700 hover:text-tech-600">5. Cost Estimation</a>
          </li>
        </ul>

        <div className="mt-8 p-4 bg-earth-100 rounded-lg">
          <p className="text-xs text-earth-600 mb-2">Price Range</p>
          <p className="font-semibold text-earth-800">$33 - $65</p>
          <p className="text-xs text-earth-600 mt-1">For basic system</p>
        </div>
      </nav>
    </>
  )
}
