import {useEffect,useState} from 'react'
import {ArrowUp} from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Terminal from './components/Terminal'
import {About,Skills,Experience,Research,Education,Extracurricular,Contact,Footer} from './components/Sections'
const ids=['home','about','skills','experience','projects','research','education','extracurricular','contact']
export default function App(){
const [active,setActive]=useState('home'),[term,setTerm]=useState(false),[top,setTop]=useState(false)
useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-45% 0px -50% 0px'})
ids.forEach(i=>{const el=document.getElementById(i);el&&io.observe(el)});return()=>io.disconnect()},[])
useEffect(()=>{const k=e=>{if(e.key==='/'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();setTerm(true)}if(e.key==='Escape')setTerm(false)}
const s=()=>setTop(scrollY>600);addEventListener('keydown',k);addEventListener('scroll',s);return()=>{removeEventListener('keydown',k);removeEventListener('scroll',s)}},[])
const nav=['research','education','extracurricular'].includes(active)?({research:'projects',education:'experience',extracurricular:'contact'})[active]:active
return <><Navbar active={nav}/><main><Hero openTerminal={()=>setTerm(true)}/><About/><Skills/><Experience/><Projects/><Research/><Education/><Extracurricular/><Contact/></main><Footer/>
<Terminal open={term} setOpen={setTerm}/>
{top&&<a href="#home" aria-label="Back to top" className="fixed bottom-4 left-4 z-50 p-3 rounded-full card hover:border-violet"><ArrowUp size={18}/></a>}</>}
