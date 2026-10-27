const navbtn = document.getElementById ("navbtn");
const navbar = document.getElementById ("navbar");
navbtn.addEventListener("click",()=>
{
    navbar.classList.toggle("active");
    
}
);
const deactivate = document.getElementById ("deactivate");
deactivate.addEventListener("click",() =>
{
    navbar.classList.remove("active");
}
);
const navlinks = document.querySelectorAll("#navlinks a");
navlinks.forEach((nowlink)  =>
   {
    nowlink.addEventListener("click",() =>
      {navlinks.forEach((link) =>
      { link.classList.remove("current");
      });
         
         nowlink.classList.add("current");
         navbar.classList.remove("active");
   });
        
    }
   );
   const viewmore = document.getElementById("Vmore");
   const more = document.querySelectorAll(".more");
   viewmore.addEventListener("click", ()=>
   {
    more.forEach((project) =>
    {project.classList.toggle("display");
        
        if(project.classList.contains("display")){
            viewmore.textContent="View Less"
        }
        else{
            viewmore.textContent="View More"
        };
    });
   }
   );
   const skillsmore = document.getElementById("skillsmore");
   const extra = document.querySelectorAll(".extra");
   skillsmore.addEventListener("click", ()=> {
    extra.forEach((skill) =>
    {
        skill.classList.toggle("display");
        if(skill.classList.contains("display"))
        {skillsmore.textContent="View Less"}
        else{
            skillsmore.textContent="View More"
        };
    });
   });
 


