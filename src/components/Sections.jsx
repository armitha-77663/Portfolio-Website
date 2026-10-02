import {useRef,useState} from 'react'
import {motion,useScroll,useSpring} from 'framer-motion'
import {Mail,Github,Linkedin,Copy,Check} from 'lucide-react'
import {skills,links} from '../data/content'
export const Section=({id,title,children,className=''})=><section id={id} className={`mx-auto max-w-6xl px-5 py-24 ${className}`}>
<motion.h2 initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="font-display font-bold text-4xl sm:text-5xl mb-12">{title}</motion.h2>{children}</section>
const rise={initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:true,margin:'-40px'}}

export function About(){
const stats=[['CGPA','8.28/10'],['Degree','B.Tech CSE'],['University','Amrita Vishwa Vidyapeetham'],['Experience','2026 Summer Internship']]
return <Section id="about" title="About">
<div className="grid md:grid-cols-2 gap-10">
<motion.div {...rise}><p className="text-xl leading-relaxed text-mute max-w-prose">I am passionate about developing software solutions that are efficient, scalable, and user-centric, and I strive to build applications that solve real-world problems while delivering a seamless user experience.</p>
<p className="mt-6 text-mute max-w-prose">Looking for a software engineering internship where I can apply my programming skills, collaborate with experienced professionals, and help build reliable, scalable, user-focused applications.</p></motion.div>
<div className="grid grid-cols-2 gap-4">{stats.map(([k,v],i)=><motion.div key={k} {...rise} transition={{delay:i*.08}} className="card p-5"><p className="text-sm text-mute">{k}</p><p className="font-display font-bold text-xl mt-1 break-words">{v}</p></motion.div>)}</div>
</div></Section>}

export function Skills(){
const [sel,setSel]=useState(skills[0])
return <Section id="skills" title="Skills">
<div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
<div className="flex flex-wrap gap-3 content-start">{skills.map(s=><button key={s.name} onMouseEnter={()=>setSel(s)} onFocus={()=>setSel(s)} onClick={()=>setSel(s)} className={`px-5 py-3 rounded-full border transition hover:-translate-y-0.5 ${sel.name===s.name?'border-violet bg-violet/15':'border-line bg-panel'}`}>{s.name}</button>)}</div>
<motion.div key={sel.name} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="card p-6" aria-live="polite">
<p className="text-sm text-cyan">{sel.group}</p><h3 className="font-display font-bold text-2xl mt-1">{sel.name}</h3><p className="mt-3 text-mute">{sel.note}</p></motion.div>
</div></Section>}

export function Experience(){
const ref=useRef(),{scrollYProgress}=useScroll({target:ref,offset:['start 80%','end 60%']}),h=useSpring(scrollYProgress,{stiffness:100,damping:30})
return <Section id="experience" title="Experience">
<div ref={ref} className="relative pl-8 sm:pl-12 max-w-3xl">
<div className="absolute left-2 top-2 bottom-2 w-px bg-line"><motion.div style={{scaleY:h}} className="origin-top h-full w-px bg-gradient-to-b from-violet to-cyan"/></div>
<span className="absolute left-0 top-2 size-4 rounded-full bg-violet ring-4 ring-bg"/>
<motion.div {...rise} className="card p-6">
<p className="text-sm text-cyan">Summer 2026 · Mobile App Development</p>
<h3 className="font-display font-bold text-2xl mt-1">Summer Internship at Sterlo</h3>
<p className="text-mute mt-1">Part of this internship: the TrackForce App</p>
<ul className="mt-4 space-y-2 text-mute list-disc pl-5">
<li>Worked on the backend logic of the TrackForce App.</li>
<li>Integrated databases with real-time changing distances of moving targets.</li>
<li>Calculated the distance of the person from the beacons using location/coordinate tracking and RSSI signals.</li></ul></motion.div>
</div></Section>}

export function Research(){
const steps=['Text','Preprocessing','TF-IDF','Multinomial Naive Bayes','Aspect + Sentiment','Visualization']
return <Section id="research" title="Currently Building">
<div className="card p-6 sm:p-8">
<p className="text-sm text-cyan">Research paper · Python · NLP · Machine Learning · Streamlit</p>
<h3 className="font-display font-bold text-2xl sm:text-3xl mt-2">Aspect-Based Sentiment Analysis of Amazon Product Reviews</h3>
<p className="mt-4 text-mute max-w-prose">Identifies product aspects such as battery, camera, display and performance, and classifies their sentiment as positive, negative or neutral.</p>
<ol className="mt-8 flex flex-col lg:flex-row gap-3 lg:items-center">{steps.map((s,i)=><motion.li key={s} {...rise} transition={{delay:i*.12}} className="flex lg:items-center gap-3 lg:flex-1"><span className="flex-1 rounded-xl border border-line bg-bg px-3 py-3 text-sm text-center">{s}</span>{i<steps.length-1&&<span aria-hidden className="text-violet hidden lg:block">›</span>}</motion.li>)}</ol>
<ul className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-mute"><li className="card p-4">Interactive Streamlit dashboard</li><li className="card p-4">Aspect-wise sentiment visualization</li><li className="card p-4">AI-based review summarization</li></ul>
</div></Section>}

export function Education(){
const rows=[['Amrita Vishwa Vidyapeetham','2024–2028','B.Tech in Computer Science and Engineering · CGPA 8.28/10'],['BVB','2022–2024','High School'],['CS Academy','2015–2022','Middle and High School']]
return <Section id="education" title="Education"><ol className="max-w-3xl border-l border-line ml-2">{rows.map(([n,y,d])=><motion.li key={n} {...rise} className="pl-8 pb-10 last:pb-0 relative"><span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-cyan"/><p className="text-sm text-cyan">{y}</p><h3 className="font-display font-bold text-xl">{n}</h3><p className="text-mute">{d}</p></motion.li>)}</ol></Section>}

export function Extracurricular(){
const items=['Community service initiatives and outreach programs','Social awareness and community-development activities','Drug Abuse Awareness Marathon','Blood Donation Camp','Eye Checkup Camp','Volunteered in improving a Government School']
const langs=[['Tamil','Native'],['English',''],['Japanese','Beginner']]
return <Section id="extracurricular" title="Beyond code"><div className="grid md:grid-cols-[1.4fr_1fr] gap-6">
<div className="card p-6"><h3 className="font-display font-bold text-xl">National Service Scheme (NSS)</h3><p className="text-cyan text-sm">Active Member / Volunteer</p>
<ul className="mt-4 grid sm:grid-cols-2 gap-2 text-mute text-sm">{items.map(i=><li key={i} className="flex gap-2"><span className="text-violet">•</span>{i}</li>)}</ul></div>
<div className="card p-6"><h3 className="font-display font-bold text-xl">Languages</h3><ul className="mt-4 space-y-3">{langs.map(([l,p])=><motion.li key={l} {...rise} className="flex justify-between border-b border-line pb-2"><span>{l}</span><span className="text-mute">{p}</span></motion.li>)}</ul></div>
</div></Section>}

export function Contact(){
const [ok,setOk]=useState(false)
const copy=async()=>{try{await navigator.clipboard.writeText(links.email);setOk(true);setTimeout(()=>setOk(false),2000)}catch{}}
const row="card p-5 flex items-center gap-3 hover:border-violet transition break-all"
return <Section id="contact" title="Let's build something useful.">
<p className="text-mute text-lg max-w-prose -mt-6 mb-10">I'm open to software engineering internships, collaborative projects, and opportunities to build meaningful technology.</p>
<div className="grid md:grid-cols-3 gap-4">
<a href={`mailto:${links.email}`} className={row}><Mail className="shrink-0 text-violet"/>{links.email}</a>
<a href={links.github} target="_blank" rel="noreferrer" className={row}><Github className="shrink-0 text-violet"/>github.com/armitha-77663</a>
<a href={links.linkedin} target="_blank" rel="noreferrer" className={row}><Linkedin className="shrink-0 text-violet"/>LinkedIn</a></div>
<button onClick={copy} className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet text-bg font-semibold px-6 py-3 hover:-translate-y-0.5 transition" aria-live="polite">
<motion.span key={ok} initial={{scale:.5,rotate:-30}} animate={{scale:1,rotate:0}} className="inline-flex">{ok?<Check size={16}/>:<Copy size={16}/>}</motion.span>{ok?'Copied':'Copy Email'}</button>
</Section>}

export const Footer=()=><footer className="border-t border-line py-8 text-center text-sm text-mute">© 2026 Armitha Jayamurugan</footer>
