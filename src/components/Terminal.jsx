import {useEffect,useRef,useState} from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import {links,skillNames} from '../data/content'
const CMD={whoami:()=>'Armitha Jayamurugan',skills:()=>skillNames.join('  '),projects:()=>'TrackForce App, Vidhai-X, University Event Planner',
currently_building:()=>'Aspect-Based Sentiment Analysis of Amazon Product Reviews',contact:()=>links.email,help:()=>'whoami  skills  projects  currently_building  contact  clear  exit'}
export default function Terminal({open,setOpen}){
const [log,setLog]=useState([{c:null,o:'Type help to see commands.'}]),[v,setV]=useState(''),end=useRef(),inp=useRef()
useEffect(()=>{if(open)setTimeout(()=>inp.current?.focus(),60)},[open])
useEffect(()=>{end.current?.scrollIntoView({block:'nearest'})},[log])
const run=e=>{e.preventDefault();const c=v.trim();setV('');if(!c)return;if(c==='clear')return setLog([]);if(c==='exit')return setOpen(false)
const f=CMD[c];setLog(l=>[...l,{c,o:f?f():`command not found: ${c}. Try help.`}])}
return <AnimatePresence>{open&&<motion.div role="dialog" aria-label="Terminal" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} className="fixed z-[65] bottom-4 right-4 left-4 sm:left-auto sm:w-[26rem] card shadow-2xl shadow-black/50 text-sm">
<div className="flex justify-between px-4 py-2 border-b border-line text-mute"><span>terminal</span><button onClick={()=>setOpen(false)} aria-label="Close terminal">esc</button></div>
<div className="p-4 h-56 overflow-y-auto font-mono" onClick={()=>inp.current?.focus()}>
{log.map((l,i)=><div key={i} className="mb-2">{l.c!==null&&<div className="text-cyan">$ {l.c}</div>}<div className="text-mute whitespace-pre-wrap break-words">{l.o}</div></div>)}
<form onSubmit={run} className="flex gap-2"><span className="text-cyan">$</span><input ref={inp} value={v} onChange={e=>setV(e.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck="false" className="flex-1 bg-transparent outline-none"/></form><div ref={end}/></div>
</motion.div>}</AnimatePresence>}
