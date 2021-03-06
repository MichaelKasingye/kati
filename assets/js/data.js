const projectGroup = document.querySelector('.project-group');

const data = [
    {
        "typeOfProject":"Portfolio ",
        "shortDescription":"Portfolio  site (HTML, CSS, JavaScript)",
        "image": "https://i.pinimg.com/originals/44/83/37/448337fd82e8c13de37548a9e7ca1261.jpg",
        "projectLink": "https://michaelkasingye.netlify.app/"      
    },
  {
        "typeOfProject":"E-commerce",
        "shortDescription":"Jumia Clone - Mini (React-Contex API JS)",
        "image": "https://i.pinimg.com/564x/dc/51/00/dc5100a29f67ce40f4972172e3a8c236.jpg",
        "projectLink": "https://jumia-clone-7426b.web.app"      
    },
    {
        "typeOfProject":"Weather",
        "shortDescription":"Weather Forecast App (React JS)",
        "image": "https://i.pinimg.com/originals/41/25/00/412500dd8a3c60b3d754ac12c9242709.png",
        "projectLink": "https://weatherforcastapp.netlify.app/"      
    },
    {
        "typeOfProject":"Mini-shop",
        "shortDescription":"Demo Mini-shop site (React-Next JS)",
        "image": "https://i.pinimg.com/originals/7f/84/e6/7f84e6245c28a0e056b88c5c1b389cde.jpg",
        "projectLink": "https://miniecommerce.netlify.app/"      
    },
    {
      "typeOfProject":"Restaurant",
      "shortDescription":"Demo Restaurant site (React-Next JS) ",
      "image": "https://i.pinimg.com/originals/53/13/34/531334345574129dcc9e53d39d3ce0fc.jpg",
      "projectLink": "https://foodiiy.netlify.app/"      
  },
  {
    "typeOfProject":"Banking",
    "shortDescription":"Loan Repayment App (React-Redux JS)",
    "image": "https://i.pinimg.com/originals/9c/d0/ff/9cd0ff6a77f0ae22de9272d498fe225c.jpg",
    "projectLink": "https://loana.netlify.app/"      
},
    {
        "typeOfProject":"Web Site Development",
        "shortDescription":"Online Web Editor (React JS)",
        "image": "https://i.pinimg.com/originals/dc/86/d3/dc86d33039eb687e6e58e9d996db2e48.png",
        "projectLink": "https://codeeditoronline.netlify.app/"      
    }
  
];

window.addEventListener('load', (event)=>{
    showProjects(data)
});
// target="_blank" rel="noopener noreferrer

function showProjects(data){
    const htmlString = data.map((project)=>{
        return `
        <div class="row">
        a href="${project.projectLink}" target="_blank" rel="noopener noreferrer>
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-box">
            <div class="icon"><i class="bx bxl-dribbble"></i></div>
            <h4><a href="" target="_blank" rel="noopener noreferrer>${project.typeOfProject}</a></h4>
            <p>${project.shortDescription}</p>
          </div>
          </a>
        </div>
        `;
    }).join('');

    projectGroup.innerHTML = htmlString;
}
