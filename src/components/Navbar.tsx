// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User, BookOpen, Link2, Mail } from 'lucide-react'
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)

// Handle navbar background on scroll
useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 20)
}
window.addEventListener('scroll', handleScroll)
return () => window.removeEventListener('scroll', handleScroll)
}, [])

const navigation = [
{ name: 'About me (CV)', href: '/about', icon: User },
{ name: 'Blog', href: 'https://blog.osga.dev', icon: BookOpen },
{ name: 'LinkTree', href: '/linktree', icon: Link2 },
{ name: 'Contact me', href: '/contact', icon: Mail },
]

return (
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
	? 'bg-black/70 backdrop-blur-md shadow-lg' : 'bg-transparent' }`}>
	<div className="max-w-6xl mx-auto px-4">
		<div className="flex justify-between items-center h-16">
			{/* Logo */}
			<div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
				<Link href="/" className="text-xl font-bold text-white">
				osga.dev
				</Link>
			</div>

			{/* Desktop Navigation */}
			<div className="hidden md:flex space-x-1">
				{navigation.map((item) => {
				const Icon = item.icon
				return (
				<Link key={item.name} href={item.href}
					className="group relative flex items-center px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300">
				<Icon className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
				<span>{item.name}</span>
				<span
					className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
				</Link>
				)
				})}
			</div>

			{/* Mobile menu button */}
			<div className="md:hidden flex items-center">
				<button onClick={()=> setIsOpen(!isOpen)}
					className="relative inline-flex items-center justify-center p-2 rounded-lg text-gray-300
					hover:text-white transition-colors duration-300"
					aria-label="Open main menu"
					>
					{isOpen ? (
					<X className="w-6 h-6 transform transition-transform duration-300 rotate-90" />
					) : (
					<Menu className="w-6 h-6 transform transition-transform duration-300" />
					)}
				</button>
			</div>
		</div>
	</div>

	{/* Mobile Navigation */}
	<div className={`md:hidden absolute w-full backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden
		${isOpen ? 'max-h-96 opacity-100 bg-black/70' : 'max-h-0 opacity-0 bg-transparent' }`}>
		<div className={`px-4 py-3 transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0'
			: '-translate-y-6' }`}>
			{navigation.map((item, index) => {
			const Icon = item.icon
			return (
			<Link key={item.name} href={item.href} className={`group flex items-center space-x-3 px-4 py-3 rounded-lg
				text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium transform transition-all
				duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0' }`} style={{
				transitionDelay: `${index * 100}ms` }} onClick={()=> setIsOpen(false)}
			>
			<Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
			<span>{item.name}</span>
			</Link>
			)
			})}
		</div>
	</div>
</nav>
)
}

export default Navbar
