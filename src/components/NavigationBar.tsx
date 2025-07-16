'use client';

import { useState, useEffect } from 'react';

export default function NavigationBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'ewaste', label: 'E-waste' },
        { id: 'impact', label: 'Impact' },
        { id: 'tips', label: 'Tips' },
        { id: 'quiz', label: 'Quiz' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'pledge', label: 'Pledge' },
        { id: 'contact', label: 'Contact' }
    ];

    const getNavLinkClasses = (sectionId: string) => {
        return `hover:text-[#3B82F6] ${activeSection === sectionId ? 'text-base border-b-2 border-[#3B82F6] text-[#3B82F6]' : 'text-[15px]'}`;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);

            const sections = document.querySelectorAll('section');
            let currentSection = 'home';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        // Check initial scroll position on mount
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className={`p-4 container mx-auto flex justify-between items-center transition-all duration-300 ${isScrolled ? 'text-black py-2' : 'text-white'}`}>
                <h1 className="text-2xl font-bold"><span className='text-[#4ADE80]'>E-Waste</span><span className='text-[#3B82F6]'>Wise</span></h1>
                <ul className="flex space-x-4 font-medium">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={getNavLinkClasses(item.id)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}