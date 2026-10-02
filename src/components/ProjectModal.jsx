import {useEffect} from 'react'
import {motion} from 'framer-motion'
import {X} from 'lucide-react'
import Visual from './Visual'
export default function ProjectModal({p,onClose}){
useEffect(()=>{const f=e=>e.key==='Escape'&&onClose();addEventListener('keydown',f);document.body.style.overflow='hidden';return()=>{removeEventListener('keydown',f);document.body.style.overflow=''}},[onClose])
const H=({children})=><h4 className="text-sm text-cyan mt-6 mb-1">{children}</h4>
return <motion.div className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
<motion.div role="dialog" aria-modal="true" aria-label={p.title} onClick={e=>e.stopPropagation()} initial={{y:40,scale:.97}} animate={{y:0,scale:1}} exit={{y:40}} className="card w-full max-w-2xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 rounded-b-none sm:rounded-b-[1.25rem]">
<div className="flex justify-between gap-4"><div><p className="text-sm text-mute">{p.tag}</p><h3 className="font-display font-bold text-3xl">{p.title}</h3></div>
<button autoFocus aria-label="Close project details" onClick={onClose} className="p-2 h-fit rounded-full border border-line"><X size={18}/></button></div>
<div className="mt-5 rounded-xl border border-line bg-bg p-4"><Visual id={p.id}/></div>
<H>Problem</H><p className="text-mute">{p.problem}</p><H>Solution</H><p className="text-mute">{p.solution}</p>
<H>What I worked on</H><ul className="list-disc pl-5 text-mute space-y-1">{p.worked.map(w=><li key={w}>{w}</li>)}</ul>
<H>Technologies</H><div className="flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="text-sm px-3 py-1 rounded-full border border-line">{t}</span>)}</div>
<p className="mt-6 text-sm text-mute">Project details available on request.</p>
</motion.div></motion.div>}
