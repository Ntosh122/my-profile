import React from 'react'
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
const footerLinks =[
    {
        title:'Facebook',
        href:'',
    },
    {
        title:'Github',
        href:'/',
    },
    {
        title:'LinkedIn',
        href:'/',
    },
]
const Footer = () => {
  return (
    <footer className='relative -z-10 overflow-x-clip '>
        <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container ">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between z-10'>
            <div className='text-white/40'>Copyright &copy; {new Date().getFullYear()} Ntokozo Gumede❤️ All rights reserved.</div>
            <nav className='flex flex-col items-center gap-8  md:flex-row'>
                {
                    footerLinks.map(item=>(
                        <a href='#' key={item.title} className='inline-flex items-center gap-1.5 '>
                            <span className='font-semibold '>{item.title}</span>
                            <ArrowUpRight className='size-4'/>
                        </a>
                    ))
                }
            </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
