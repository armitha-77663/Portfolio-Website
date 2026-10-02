import {useEffect,useState} from 'react'
import {motion,useMotionValue,useTransform,useSpring} from 'framer-motion'
import {Github,Linkedin,Download,ArrowDown} from 'lucide-react'
import {links} from '../data/content'
const words=['Software Developer','Problem Solver','Full-Stack Explorer','ML Enthusiast','Computer Science Undergraduate']
const code=['const idea = build();','idea.solve(realWorldProblems);']
export default function Hero({openTerminal}){
const [w,setW]=useState(0),[typed,setTyped]=useState(0)
const mx=useMotionValue(0),my=useMotionValue(0),rx=useSpring(useTransform(my,[-1,1],[8,-8]),{stiffness:120,damping:20}),ry=useSpring(useTransform(mx,[-1,1],[-8,8]),{stiffness:120,damping:20})
useEffect(()=>{const t=setInterval(()=>setW(x=>(x+1)%words.length),2600);return()=>clearInterval(t)},[])
useEffect(()=>{const t=setInterval(()=>setTyped(x=>x<code.join('').length?x+1:x),55);return()=>clearInterval(t)},[])
const move=e=>{const r=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-r.left)/r.width*2-1);my.set((e.clientY-r.top)/r.height*2-1)
e.currentTarget.style.setProperty('--x',e.clientX-r.left+'px');e.currentTarget.style.setProperty('--y',e.clientY-r.top+'px')}
const l1=code[0].slice(0,typed),l2=code[1].slice(0,Math.max(0,typed-code[0].length))
return <section id="home" onMouseMove={move} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16" style={{background:'radial-gradient(500px circle at var(--x,70%) var(--y,30%),rgba(155,140,255,.14),transparent 70%)'}}>
<div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
<div>
<p className="text-cyan font-medium mb-4">Computer Science Undergraduate</p>
<h1 className="font-display font-extrabold leading-[.95] tracking-tight text-[clamp(2.6rem,9vw,6.5rem)]">
{['ARMITHA','JAYAMURUGAN'].map((t,i)=><span key={t} className="block overflow-hidden"><motion.span className="block" initial={{y:'100%'}} animate={{y:0}} transition={{delay:.1+i*.12,duration:.7,ease:[.2,.8,.2,1]}}>{t}</motion.span></span>)}</h1>
<p className="mt-6 text-xl text-mute">Building software that solves real problems.</p>
<p className="mt-1 text-xl h-8"><motion.span key={w} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="inline-block">{words[w]}</motion.span></p>
<p className="mt-6 inline-block card px-4 py-2 text-sm">CGPA <b className="text-violet">8.28 / 10</b></p>
<div className="mt-8 flex flex-wrap gap-3 items-center">
<a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-violet text-bg font-semibold px-6 py-3 hover:-translate-y-0.5 transition">View My Work <ArrowDown size={16}/></a>
<a href="/resume.pdf" download="Armitha_Jayamurugan_CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 hover:border-cyan hover:-translate-y-0.5 transition"><Download size={16}/> Download Resume</a>
<a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-full border border-line hover:border-violet transition"><Github size={18}/></a>
<a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-full border border-line hover:border-violet transition"><Linkedin size={18}/></a>
</div></div>
<motion.div style={{rotateX:rx,rotateY:ry,transformPerspective:900}} className="card p-5 shadow-2xl shadow-violet/10 hidden sm:block">
<div className="flex gap-1.5 mb-4" aria-hidden>{['#ff6b6b','#ffd166','#5fd4ff'].map(c=><i key={c} className="size-2.5 rounded-full" style={{background:c}}/>)}</div>
<pre className="text-sm leading-7 text-mute min-h-14 overflow-x-auto" aria-label="const idea = build(); idea.solve(realWorldProblems);">{l1}{'\n'}{l2}<span className="inline-block w-2 h-4 bg-cyan align-middle animate-pulse"/></pre>
<button onClick={openTerminal} className="mt-5 text-sm text-cyan hover:underline">Press / to open the terminal</button>
</motion.div></div></section>}
