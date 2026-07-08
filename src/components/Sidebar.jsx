import { useState } from "react";
 
const menu=[
 
"Dashboard",
"Planejamento",
"Capacity Planning",
"Priorização",
"Operação",
"Riscos",
"Projetos",
"Forecast"
 
];
 
function Sidebar(){
 
const[collapsed,setCollapsed]=useState(false);
 
return(
 
<div
style={{
 
width:collapsed?"80px":"250px",
background:"#111827",
color:"#FFF",
transition:"0.3s",
display:"flex",
flexDirection:"column"
 
}}
>
 
<div
style={{
 
padding:20,
fontWeight:"bold",
fontSize:20
 
}}
>
 
NDM
 
</div>
 
<button
 
onClick={()=>setCollapsed(!collapsed)}
 
style={{
 
margin:"0 20px 20px",
padding:10,
background:"#6D28D9",
border:"none",
color:"#FFF",
cursor:"pointer",
borderRadius:8
 
}}
 
>
 
{collapsed?">":"<"}
 
</button>
 
{
 
menu.map(item=>(
 
<div
 
key={item}
 
style={{
 
padding:16,
cursor:"pointer"
 
}}
 
>
 
{collapsed?item[0]:item}
 
</div>
 
))
 
}
 
</div>
 
)
 
}
 
export default Sidebar;
 