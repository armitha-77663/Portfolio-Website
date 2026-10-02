import {useEffect,useState} from 'react'
import {Menu,X} from 'lucide-react'
import {motion,useScroll,useSpring} from 'framer-motion'
const items=['home','about','skills','experience','projects','contact']
export default function Navbar({active}){
const [open,setOpen]=useState(false),[solid,setSolid]=useState(false)
const {scrollYProgress}=useScroll(),sx=useSpring(scrollYProgress,{stiffness:120,damping:30})
useEffect(()=>{const f=()=>setSolid(scrollY>40);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[])
return <header className={`fixed top-0 inset-x-0 z-50 transition ${solid?'bg-bg/70 backdrop-blur-lg border-b border-line':''}`}>
<motion.div style={{scaleX:sx}} className="absolute top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-violet to-cyan"/>
<nav aria-label="Main" className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
<a href="#home" className="font-display font-bold text-lg">AJ</a>
<ul className="hidden md:flex gap-1">{items.map(i=><li key={i}><a href={`#${i}`} aria-current={active===i?'page':undefined} className={`px-3 py-2 rounded-full text-sm capitalize transition ${active===i?'bg-white/10 text-white':'text-mute hover:text-white'}`}>{i}</a></li>)}</ul>
<button className="md:hidden p-2" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
</nav>
{open&&<ul className="md:hidden bg-bg/95 backdrop-blur-lg border-t border-line px-5 py-3">{items.map(i=><li key={i}><a href={`#${i}`} onClick={()=>setOpen(false)} className="block py-3 capitalize text-lg">{i}</a></li>)}</ul>}
</header>}
