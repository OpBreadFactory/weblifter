'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section className="relative">
                    {/* Background */}
                    <div className="absolute inset-0 -z-20">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}>
                            <img
                                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=3276&h=4095&fit=crop&q=80"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                    </div>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                    
                    <ContainerScroll
                        titleComponent={
                            <>
                                    <Link
                                        href="#link"
                                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950 mb-8">
                                    <span className="text-foreground text-sm">Get Started Today</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-16 md:mb-20">
                                    Intelligent Websites That <span className="text-red-600">Work for You</span>
                                </motion.h2>
                            </>
                        }
                    >
                        <Image
                            src="/dashboard-image.png"
                            alt="Market Insight Dashboard"
                            height={720}
                            width={1400}
                            className="mx-auto rounded-2xl object-cover h-full object-center"
                            draggable={false}
                        />
                    </ContainerScroll>

                    {/* Spline Component */}
                    <div className="relative z-10 -mt-8 md:-mt-12 px-4 md:px-8">
                        <Card className="w-full h-[500px] bg-transparent relative overflow-hidden border-0">
                            <Spotlight
                                className="-top-40 left-0 md:left-60 md:-top-20"
                                fill="white"
                            />
                            
                            <div className="flex h-full flex-col md:flex-row">
                                {/* Left content */}
                                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center items-center text-center">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600">
                                        AI that Works for You
                                    </h1>
                                    <p className="mt-4 text-neutral-700 max-w-lg mx-auto">
                                        AI-powered websites that automate lead capture, customer support, and content management—so you can focus on growing your business.
                                    </p>
                        </div>

                                {/* Right content */}
                                <div className="flex-1 relative">
                                    <SplineScene 
                                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Circular Gallery Component */}
                    <div className="relative z-10 mt-16 md:mt-24 px-4 md:px-8">
                        <div className="w-full bg-background text-foreground" style={{ height: '500vh' }}>
                            <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
                                <div className="text-center mb-8 absolute top-16 z-10">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">This Could be Your Next Web</h1>
                                    <p className="text-muted-foreground">Scroll to rotate the gallery</p>
                        </div>
                                <div className="w-full h-full pt-32 md:pt-40">
                                    <CircularGallery items={galleryData} />
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const galleryData: GalleryItem[] = [
    {
        common: 'Modern Web Design',
        binomial: 'Professional Website',
        photo: {
            url: '/Image Gallery 1.png',
            text: 'Modern web design showcase',
            pos: 'center',
            by: 'Weblifter'
        }
    },
    {
        common: 'E-commerce Platform',
        binomial: 'Online Store Solution',
        photo: {
            url: '/Image-Gallery-2.png',
            text: 'E-commerce platform design',
            pos: 'center',
            by: 'Weblifter'
        }
    },
    {
        common: 'Business Website',
        binomial: 'Corporate Solution',
        photo: {
            url: '/Image Gallery 3.png',
            text: 'Business website design',
            pos: 'center',
            by: 'Weblifter'
        }
    },
    {
        common: 'Creative Portfolio',
        binomial: 'Portfolio Website',
        photo: {
            url: '/Image Gallery 4.png',
            text: 'Creative portfolio design',
            pos: 'center',
            by: 'Weblifter'
        }
    },
    {
        common: 'Landing Page',
        binomial: 'Marketing Website',
        photo: {
            url: '/Image gallery 5.png',
            text: 'Landing page design',
            pos: 'center',
            by: 'Weblifter'
        }
    },
    {
        common: 'Food & Beverage Website',
        binomial: 'Brand Showcase',
        photo: {
            url: '/Gallery 6.png',
            text: 'Food and beverage website design',
            pos: 'center',
            by: 'Weblifter'
        }
    },
]

const menuItems = [
    { name: 'Automation', href: '#link' },
    { name: 'Services', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-foreground hover:text-red-600 block duration-150 font-medium">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-foreground hover:text-red-600 block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <Image
                src="/WEBLIFTERLOGO.png"
                alt="Weblifter Logo"
                width={40}
                height={40}
                className="h-8 w-auto object-contain"
                priority
            />
            <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Weblifter
            </span>
        </div>
    )
}
