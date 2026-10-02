import {motion} from 'framer-motion'
export default function Visual({id}){
if(id==='trackforce')return <div className="relative h-32" role="img" aria-label="BLE beacons signalling a phone">
{[15,50,85].map((l,i)=><div key={l} className="absolute top-4" style={{left:l+'%'}}><span className="ring absolute size-8 rounded-full border border-cyan" style={{animationDelay:i*.6+'s'}}/><span className="absolute size-8 rounded-full grid place-items-center text-[10px] text-cyan">B{i+1}</span></div>)}
<motion.div className="absolute bottom-3 size-5 rounded-md bg-violet" animate={{left:['20%','75%','20%']}} transition={{duration:8,repeat:Infinity,ease:'easeInOut'}}/></div>
if(id==='vidhai')return <ol className="flex flex-wrap items-center gap-2 text-sm" aria-label="Crop, data, ML, recommendation">{['Crop','Data','ML','Recommendation'].map((s,i)=><motion.li key={s} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:i*.25}} className="flex items-center gap-2"><span className="px-3 py-2 rounded-lg border border-line">{s}</span>{i<3&&<span className="text-violet">›</span>}</motion.li>)}</ol>
return <div className="h-32 relative" role="img" aria-label="Two events overlapping in a calendar slot">
<div className="absolute inset-x-0 top-1/2 border-t border-dashed border-line"/>
<motion.div className="absolute h-10 w-2/5 rounded-lg bg-violet/70" animate={{left:['0%','30%','0%']}} transition={{duration:5,repeat:Infinity}} style={{top:'20%'}}/>
<motion.div className="absolute h-10 w-2/5 rounded-lg bg-cyan/70" animate={{right:['0%','30%','0%']}} transition={{duration:5,repeat:Infinity}} style={{top:'50%'}}/>
<motion.p className="absolute right-0 bottom-0 text-xs text-cyan" animate={{opacity:[0,0,1,0,0]}} transition={{duration:5,repeat:Infinity}}>Conflict detected</motion.p></div>}
