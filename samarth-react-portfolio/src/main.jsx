import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";

const skills=[
 ["Backend","Java, Spring Boot, REST APIs, JWT, Authentication, Role-Based Access Control"],
 ["Frontend","React, JavaScript, HTML, CSS, Tailwind CSS, Axios"],
 ["Data & Core","MySQL, SQL, OOP, CRUD, API Development"]
];
const projects=[
 ["01","FULL-STACK PLATFORM","Student Placement & Recruitment System","Managed students, companies, job postings, applications and recruitment workflows with JWT authentication and role-based access.","Java · Spring Boot · React · MySQL · JWT · Axios"],
 ["02","E-COMMERCE","Unique Sports Shop","Responsive e-commerce application for browsing sports products and managing customer purchases.","HTML · CSS · JavaScript · React"],
 ["03","BACKEND APPLICATION","Student Management System","CRUD application with REST APIs for creating, updating, retrieving and deleting student records.","Java · Spring Boot · REST API · MySQL"],
 ["04","BACKEND APPLICATION","Expense Tracker","Application for recording income and expenses with categorized transaction management and tracking.","Java · Spring Boot · MySQL · REST API"]
];

function ContactForm(){
 const [form,setForm]=useState({name:"",email:"",message:""});
 const [state,setState]=useState("idle");
 const submit=async(e)=>{
  e.preventDefault(); setState("sending");
  try{
   const r=await fetch("https://formsubmit.co/ajax/dedgesamarth@gmail.com",{
    method:"POST", headers:{"Content-Type":"application/json","Accept":"application/json"},
    body:JSON.stringify({...form,_subject:`Portfolio enquiry from ${form.name}`,_template:"table",_captcha:"false"})
   });
   if(!r.ok) throw new Error();
   setState("sent"); setForm({name:"",email:"",message:""});
  }catch{setState("error")}
 };
 return <form className="contact-form reveal" onSubmit={submit}>
  <label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name"/></label>
  <label>Your email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="name@company.com"/></label>
  <label>Message<textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me about the opportunity..."/></label>
  <button className="btn primary full" disabled={state==="sending"}>{state==="sending"?"Sending...":"Send message ↗"}</button>
  {state==="sent"&&<p className="success">Message sent successfully. Samarth will receive your enquiry.</p>}
  {state==="error"&&<p className="error">Submission failed. Please email directly at dedgesamarth@gmail.com.</p>}
 </form>
}

function App(){
 const [menu,setMenu]=useState(false);
 useEffect(()=>{
  const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.1});
  document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));
  const move=e=>{document.documentElement.style.setProperty("--x",e.clientX+"px");document.documentElement.style.setProperty("--y",e.clientY+"px")};
  window.addEventListener("mousemove",move); return()=>{observer.disconnect();window.removeEventListener("mousemove",move)}
 },[]);
 return <><div className="glow"/><header className={"nav "+(menu?"open":"")}>
   <a className="brand" href="#home">SD<span>.</span></a>
   <nav>{["About","Skills","Projects","Experience"].map(x=><a key={x} onClick={()=>setMenu(false)} href={"#"+x.toLowerCase()}>{x}</a>)}</nav>
   <a className="navbtn" href="#contact">Let's Talk ↗</a><button className="hamburger" onClick={()=>setMenu(!menu)}>☰</button>
  </header>
  <main>
   <section id="home" className="hero section">
    <div className="reveal"><div className="eyebrow"><i/>AVAILABLE FOR OPPORTUNITIES</div><h1>Building reliable<br/><span>software,</span> not just<br/>interfaces.</h1>
    <p>I'm <b>Samarth Dedge</b>, a Computer Science Engineering student focused on <b>Java backend and full-stack development</b>. I build practical applications with Spring Boot, REST APIs, MySQL and React.</p>
    <div className="actions"><a className="btn primary" href="#projects">View my work ↓</a><a className="btn" href="#contact">Contact me</a></div>
    <div className="links"><a target="_blank" href="https://www.linkedin.com/in/samarth-dedge-9730030950-/">LinkedIn ↗</a><a target="_blank" href="https://github.com/darkvampire09">GitHub ↗</a><a href="mailto:dedgesamarth@gmail.com">Email ↗</a></div></div>
    <div className="visual reveal"><div className="arch"/><img src="/samarth-dedge.jpg" alt="Samarth Dedge"/><div className="label one">JAVA / SPRING BOOT</div><div className="label two">FULL-STACK DEVELOPER</div></div>
   </section>
   <section id="about" className="section about"><div className="kicker reveal">01 / ABOUT</div><div className="two"><h2 className="reveal">A developer who cares about <span>how things work underneath.</span></h2><div className="reveal"><p>I am a B.Tech Computer Science Engineering student graduating in 2027, with hands-on experience developing backend and full-stack applications. My focus is translating requirements into structured, maintainable software.</p><p>My work includes CRUD systems, RESTful APIs, JWT authentication, role-based access control, relational databases and responsive React interfaces.</p><div className="pills"><b>Problem Solving</b><b>Logic Building</b><b>Quick Learning</b><b>Adaptability</b></div></div></div></section>
   <section id="skills" className="section dark"><div className="kicker reveal">02 / TOOLKIT</div><h2 className="reveal">Technologies I use to <span>build and ship.</span></h2><div className="cards">{skills.map((s,i)=><article className="card reveal" key={s[0]}><small>0{i+1}</small><h3>{s[0]}</h3><div>{s[1].split(", ").map(x=><b key={x}>{x}</b>)}</div></article>)}</div></section>
   <section id="projects" className="section"><div className="kicker reveal">03 / SELECTED WORK</div><h2 className="reveal">Projects built around <span>real application flows.</span></h2><div className="projects">{projects.map(p=><article className="project reveal" key={p[0]}><small>{p[0]}</small><div><em>{p[1]}</em><h3>{p[2]}</h3><p>{p[3]}</p><code>{p[4]}</code></div><strong>↗</strong></article>)}</div></section>
   <section id="experience" className="section exp"><div className="kicker reveal">04 / EXPERIENCE & EDUCATION</div>
    {[["EXPERIENCE","Full Stack Intern","Nexanova Pro Tech","Gained practical exposure to full-stack application development and modern web development workflows."],["EXPERIENCE","Java Backend Development Intern","CodVeda IT Solutions","Completed a backend development internship project and gained practical exposure to Java-based backend development."],["EXPERIENCE","Java File Handling Intern","CodTech IT Solutions","Worked on file handling, API-related tasks, backend development concepts and SQL queries."],["2023 — 2027","B.Tech, Computer Science Engineering","Bhagwant Institute of Technology, Barshi","Affiliated to Dr. Babasaheb Ambedkar Technological University (DBATU), Maharashtra."]].map(x=><article className="job reveal" key={x[1]}><small>{x[0]}</small><div><h3>{x[1]}</h3><b>{x[2]}</b><p>{x[3]}</p></div></article>)}</section>
   <section id="contact" className="section contact"><div className="reveal"><div className="kicker">05 / CONTACT</div><h2>Have an opportunity?<br/><span>Let's discuss it.</span></h2><p>Hiring for Java Backend, Software Development or Full-Stack? Send me the role details.</p><div className="details"><a href="mailto:dedgesamarth@gmail.com">dedgesamarth@gmail.com</a><a href="tel:+919730030950">+91 9730030950</a><span>Paranda, Dharashiv, Maharashtra</span></div></div><ContactForm/></section>
  </main><footer><div className="brand">SD<span>.</span></div><p>© {new Date().getFullYear()} Samarth Dedge</p><a href="#home">BACK TO TOP ↑</a></footer>
 </>;
}
createRoot(document.getElementById("root")).render(<App/>);