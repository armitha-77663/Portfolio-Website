import {useState} from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import {Section} from './Sections'
import {projects} from '../data/content'
import ProjectModal from './ProjectModal'
import Visual from './Visual'
function Card({p,i,open}){
const tilt=e=>{const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5
e.currentTarget.style.transform=`perspective(800px) rotateY(${x*5}deg) rotateX(${-y*5}deg)`
e.currentTarget.style.background=`radial-gradient(260px circle at ${(x+.5)*100}% ${(y+.5)*100}%,rgba(155,140,255,.16),var(--color-panel))`}
const reset=e=>{e.currentTarget.style.transform='';e.currentTarget.style.background=''}
return <motion.li initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}} className={i===0?'lg:col-span-2':''}>
<button onClick={open} onMouseMove={tilt} onMouseLeave={reset} className="card w-full h-full text-left p-6 transition-[transform,border-color] duration-150 hover:border-violet block">
<p className="text-sm text-cyan">{p.tag}</p><h3 className="font-display font-bold text-2xl sm:text-3xl mt-1">{p.title}</h3>
<p className="text-mute mt-2 max-w-prose">{p.summary}</p>
<div className="mt-5 rounded-xl border border-line bg-bg p-4"><Visual id={p.id}/></div>
<div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="text-xs px-3 py-1 rounded-full border border-line text-mute">{t}</span>)}</div>
<span className="mt-4 inline-block text-sm text-violet">View details</span></button></motion.li>}
export default function Projects(){
const [sel,setSel]=useState(null)
return <Section id="projects" title="Projects">
<ul className="grid lg:grid-cols-2 gap-6">{projects.map((p,i)=><Card key={p.id} p={p} i={i} open={()=>setSel(p)}/>)}</ul>
<AnimatePresence>{sel&&<ProjectModal p={sel} onClose={()=>setSel(null)}/>}</AnimatePresence></Section>}
