document.querySelector(".fa-bars").addEventListener('click', () => {
    document.querySelector(".dropdown").style.display = 'block';
    document.querySelector(".fa-xmark").style.display = 'block';
})

document.querySelector(".fa-xmark").addEventListener('click', () => {
    document.querySelector(".dropdown").style.display = 'none';
    document.querySelector(".fa-xmark").style.display = 'none';
})

document.querySelector(".nd").addEventListener('click', () => {
    document.querySelector(".dropdown").style.display = 'none';
    document.querySelector(".fa-xmark").style.display = 'none';
})

document.querySelector(".nd1").addEventListener('click', () => {
    document.querySelector(".dropdown").style.display = 'none';
    document.querySelector(".fa-xmark").style.display = 'none';
})

document.querySelector(".nd2").addEventListener('click', () => {
    document.querySelector(".dropdown").style.display = 'none';
    document.querySelector(".fa-xmark").style.display = 'none';
})

document.querySelector(".nd3").addEventListener('click', () => {
    document.querySelector(".dropdown").style.display = 'none';
    document.querySelector(".fa-xmark").style.display = 'none';
})

document.querySelector(".nd4").addEventListener('click', () => {
    document.querySelector(".dropdown").style.display = 'none';
    document.querySelector(".fa-xmark").style.display = 'none';
})
if(window.innerWidth>1024) {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector(".hero-description").style.transform = 'translate(-5vw, 10vw)'
        document.querySelector(".slider").style.transform = 'translate(7vw, 10vw) scale(1.35, 1.35)'
    })
}

else if(window.innerWidth == 1024 && window.innerHeight == 1366) {
    document.querySelector(".hero-description").style.transform = 'translate(-10%, 40%)'
    document.querySelector(".slider").style.transform = 'translate(40%, 60%) scale(1.75, 1.75)'
}

else if(window.innerWidth == 1024 && window.innerHeight == 600) {
    document.querySelector(".hero-description").style.transform = 'translate(-10%, 15%)'
    document.querySelector(".slider").style.transform = 'translate(40%, 35%) scale(1.35, 1.35)'
}

else if(window.innerWidth >= 768 && window.innerWidth <= 1024) {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector(".hero-description").style.transform = 'translateY(175%)'
        document.querySelector(".slider").style.transform = 'translateY(11vh) scale(2.25, 2.25)'
    })
}

else {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.hero-description').style.transform = 'translateY(15vh)'
        document.querySelector(".slider").style.transform = 'translateY(60vh) scale(2.5, 2.5)'
    })
}

document.getElementById('am').style.color = 'goldenrod';

document.querySelector('.fa-solid.fa-angle-right.americano').addEventListener('click', () => {
    document.getElementById('am').style.removeProperty('color');
    document.getElementById('cap').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-100%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-100%)`;
    document.querySelector('.espresso').style.transform = `translate(-100%)`;
    document.querySelector('.irish').style.transform = `translate(-100%)`;
    document.querySelector('.latte').style.transform = `translate(-100%)`;
    document.querySelector('.mocha').style.transform = `translate(-100%)`;
    document.querySelector('.affogato').style.transform = `translate(-100%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-100%)`;
})

document.querySelector('.fa-solid.fa-angle-right.cappuccino').addEventListener('click', () => {
    document.getElementById('cap').style.removeProperty('color');
    document.getElementById('es').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-200%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-200%)`;
    document.querySelector('.espresso').style.transform = `translate(-200%)`;
    document.querySelector('.irish').style.transform = `translate(-200%)`;
    document.querySelector('.latte').style.transform = `translate(-200%)`;
    document.querySelector('.mocha').style.transform = `translate(-200%)`;
    document.querySelector('.affogato').style.transform = `translate(-200%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-200%)`;
})

document.querySelector('.fa-solid.fa-angle-right.espresso').addEventListener('click', () => {
    document.getElementById('es').style.removeProperty('color');
    document.getElementById('ir').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-300%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-300%)`;
    document.querySelector('.espresso').style.transform = `translate(-300%)`;
    document.querySelector('.irish').style.transform = `translate(-300%)`;
    document.querySelector('.latte').style.transform = `translate(-300%)`;
    document.querySelector('.mocha').style.transform = `translate(-300%)`;
    document.querySelector('.affogato').style.transform = `translate(-300%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-300%)`;
})

document.querySelector('.fa-solid.fa-angle-right.irish').addEventListener('click', () => {
    document.getElementById('ir').style.removeProperty('color');
    document.getElementById('lat').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-400%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-400%)`;
    document.querySelector('.espresso').style.transform = `translate(-400%)`;
    document.querySelector('.irish').style.transform = `translate(-400%)`;
    document.querySelector('.latte').style.transform = `translate(-400%)`;
    document.querySelector('.mocha').style.transform = `translate(-400%)`;
    document.querySelector('.affogato').style.transform = `translate(-400%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-400%)`;
})

document.querySelector('.fa-solid.fa-angle-right.latte').addEventListener('click', () => {
    document.getElementById('lat').style.removeProperty('color');
    document.getElementById('mo').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-500%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-500%)`;
    document.querySelector('.espresso').style.transform = `translate(-500%)`;
    document.querySelector('.irish').style.transform = `translate(-500%)`;
    document.querySelector('.latte').style.transform = `translate(-500%)`;
    document.querySelector('.mocha').style.transform = `translate(-500%)`;
    document.querySelector('.affogato').style.transform = `translate(-500%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-500%)`;
})

document.querySelector('.fa-solid.fa-angle-right.mocha').addEventListener('click', () => {
    document.getElementById('mo').style.removeProperty('color');
    document.getElementById('af').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-600%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-600%)`;
    document.querySelector('.espresso').style.transform = `translate(-600%)`;
    document.querySelector('.irish').style.transform = `translate(-600%)`;
    document.querySelector('.latte').style.transform = `translate(-600%)`;
    document.querySelector('.mocha').style.transform = `translate(-600%)`;
    document.querySelector('.affogato').style.transform = `translate(-600%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-600%)`;
})

document.querySelector('.fa-solid.fa-angle-right.affogato').addEventListener('click', () => {
    document.getElementById('af').style.removeProperty('color');
    document.getElementById('fr').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-700%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-700%)`;
    document.querySelector('.espresso').style.transform = `translate(-700%)`;
    document.querySelector('.irish').style.transform = `translate(-700%)`;
    document.querySelector('.latte').style.transform = `translate(-700%)`;
    document.querySelector('.mocha').style.transform = `translate(-700%)`;
    document.querySelector('.affogato').style.transform = `translate(-700%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-700%)`;
})

document.querySelector('.fa-solid.fa-angle-left.cappuccino').addEventListener('click', () => {
    document.getElementById('cap').style.removeProperty('color');
    document.getElementById('am').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(0%)`;
    document.querySelector('.cappuccino').style.transform = `translate(0%)`;
    document.querySelector('.espresso').style.transform = `translate(0%)`;
    document.querySelector('.irish').style.transform = `translate(0%)`;
    document.querySelector('.latte').style.transform = `translate(0%)`;
    document.querySelector('.mocha').style.transform = `translate(0%)`;
    document.querySelector('.affogato').style.transform = `translate(0%)`;
    document.querySelector('.frappuccino').style.transform = `translate(0%)`;
})

document.querySelector('.fa-solid.fa-angle-left.espresso').addEventListener('click', () => {
    document.getElementById('es').style.removeProperty('color');
    document.getElementById('cap').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-100%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-100%)`;
    document.querySelector('.espresso').style.transform = `translate(-100%)`;
    document.querySelector('.irish').style.transform = `translate(-100%)`;
    document.querySelector('.latte').style.transform = `translate(-100%)`;
    document.querySelector('.mocha').style.transform = `translate(-100%)`;
    document.querySelector('.affogato').style.transform = `translate(-100%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-100%)`;
})

document.querySelector('.fa-solid.fa-angle-left.irish').addEventListener('click', () => {
    document.getElementById('ir').style.removeProperty('color');
    document.getElementById('es').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-200%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-200%)`;
    document.querySelector('.espresso').style.transform = `translate(-200%)`;
    document.querySelector('.irish').style.transform = `translate(-200%)`;
    document.querySelector('.latte').style.transform = `translate(-200%)`;
    document.querySelector('.mocha').style.transform = `translate(-200%)`;
    document.querySelector('.affogato').style.transform = `translate(-200%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-200%)`;
})

document.querySelector('.fa-solid.fa-angle-left.latte').addEventListener('click', () => {
    document.getElementById('lat').style.removeProperty('color');
    document.getElementById('ir').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-300%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-300%)`;
    document.querySelector('.espresso').style.transform = `translate(-300%)`;
    document.querySelector('.irish').style.transform = `translate(-300%)`;
    document.querySelector('.latte').style.transform = `translate(-300%)`;
    document.querySelector('.mocha').style.transform = `translate(-300%)`;
    document.querySelector('.affogato').style.transform = `translate(-300%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-300%)`;
})

document.querySelector('.fa-solid.fa-angle-left.mocha').addEventListener('click', () => {
    document.getElementById('mo').style.removeProperty('color');
    document.getElementById('lat').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-400%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-400%)`;
    document.querySelector('.espresso').style.transform = `translate(-400%)`;
    document.querySelector('.irish').style.transform = `translate(-400%)`;
    document.querySelector('.latte').style.transform = `translate(-400%)`;
    document.querySelector('.mocha').style.transform = `translate(-400%)`;
    document.querySelector('.affogato').style.transform = `translate(-400%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-400%)`;
})

document.querySelector('.fa-solid.fa-angle-left.affogato').addEventListener('click', () => {
    document.getElementById('af').style.removeProperty('color');
    document.getElementById('mo').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-500%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-500%)`;
    document.querySelector('.espresso').style.transform = `translate(-500%)`;
    document.querySelector('.irish').style.transform = `translate(-500%)`;
    document.querySelector('.latte').style.transform = `translate(-500%)`;
    document.querySelector('.mocha').style.transform = `translate(-500%)`;
    document.querySelector('.affogato').style.transform = `translate(-500%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-500%)`;
})

document.querySelector('.fa-solid.fa-angle-left.frappuccino').addEventListener('click', () => {
    document.getElementById('fr').style.removeProperty('color');
    document.getElementById('af').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-600%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-600%)`;
    document.querySelector('.espresso').style.transform = `translate(-600%)`;
    document.querySelector('.irish').style.transform = `translate(-600%)`;
    document.querySelector('.latte').style.transform = `translate(-600%)`;
    document.querySelector('.mocha').style.transform = `translate(-600%)`;
    document.querySelector('.affogato').style.transform = `translate(-600%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-600%)`;
})

document.getElementById('am').addEventListener('click', () => {
    document.getElementById('am').style.color = `goldenrod`;
    document.getElementById('cap').style.removeProperty('color');
    document.getElementById('es').style.removeProperty('color');
    document.getElementById('ir').style.removeProperty('color');
    document.getElementById('lat').style.removeProperty('color');
    document.getElementById('mo').style.removeProperty('color');
    document.getElementById('af').style.removeProperty('color');
    document.getElementById('fr').style.removeProperty('color');
    document.querySelector('.americano').style.transform = `translate(0%)`;
    document.querySelector('.cappuccino').style.transform = `translate(0%)`;
    document.querySelector('.espresso').style.transform = `translate(0%)`;
    document.querySelector('.irish').style.transform = `translate(0%)`;
    document.querySelector('.latte').style.transform = `translate(0%)`;
    document.querySelector('.mocha').style.transform = `translate(0%)`;
    document.querySelector('.affogato').style.transform = `translate(0%)`;
    document.querySelector('.frappuccino').style.transform = `translate(0%)`;
})

document.getElementById('cap').addEventListener('click', () => {
    document.getElementById('cap').style.color = `goldenrod`;
    document.getElementById('am').style.removeProperty('color');
    document.getElementById('es').style.removeProperty('color');
    document.getElementById('ir').style.removeProperty('color');
    document.getElementById('lat').style.removeProperty('color');
    document.getElementById('mo').style.removeProperty('color');
    document.getElementById('af').style.removeProperty('color');
    document.getElementById('fr').style.removeProperty('color');
    document.querySelector('.americano').style.transform = `translate(-100%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-100%)`;
    document.querySelector('.espresso').style.transform = `translate(-100%)`;
    document.querySelector('.irish').style.transform = `translate(-100%)`;
    document.querySelector('.latte').style.transform = `translate(-100%)`;
    document.querySelector('.mocha').style.transform = `translate(-100%)`;
    document.querySelector('.affogato').style.transform = `translate(-100%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-100%)`;
})

document.getElementById('es').addEventListener('click', () => {
    document.getElementById('es').style.color = `goldenrod`;
    document.getElementById('am').style.removeProperty('color');
    document.getElementById('cap').style.removeProperty('color');
    document.getElementById('ir').style.removeProperty('color');
    document.getElementById('lat').style.removeProperty('color');
    document.getElementById('mo').style.removeProperty('color');
    document.getElementById('af').style.removeProperty('color');
    document.getElementById('fr').style.removeProperty('color');
    document.querySelector('.americano').style.transform = `translate(-200%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-200%)`;
    document.querySelector('.espresso').style.transform = `translate(-200%)`;
    document.querySelector('.irish').style.transform = `translate(-200%)`;
    document.querySelector('.latte').style.transform = `translate(-200%)`;
    document.querySelector('.mocha').style.transform = `translate(-200%)`;
    document.querySelector('.affogato').style.transform = `translate(-200%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-200%)`;
})

document.getElementById('ir').addEventListener('click', () => {
    document.getElementById('ir').style.color = `goldenrod`;
    document.getElementById('am').style.removeProperty('color');
    document.getElementById('es').style.removeProperty('color');
    document.getElementById('cap').style.removeProperty('color');
    document.getElementById('lat').style.removeProperty('color');
    document.getElementById('mo').style.removeProperty('color');
    document.getElementById('af').style.removeProperty('color');
    document.getElementById('fr').style.removeProperty('color');
    document.querySelector('.americano').style.transform = `translate(-300%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-300%)`;
    document.querySelector('.espresso').style.transform = `translate(-300%)`;
    document.querySelector('.irish').style.transform = `translate(-300%)`;
    document.querySelector('.latte').style.transform = `translate(-300%)`;
    document.querySelector('.mocha').style.transform = `translate(-300%)`;
    document.querySelector('.affogato').style.transform = `translate(-300%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-300%)`;
})

document.getElementById('lat').addEventListener('click', () => {
    document.getElementById('ir').style.removeProperty('color');
    document.getElementById('am').style.removeProperty('color');
    document.getElementById('es').style.removeProperty('color');
    document.getElementById('cap').style.removeProperty('color');
    document.getElementById('lat').style.color = `goldenrod`
    document.getElementById('mo').style.removeProperty('color');
    document.getElementById('af').style.removeProperty('color');
    document.getElementById('fr').style.removeProperty('color');
    document.querySelector('.americano').style.transform = `translate(-400%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-400%)`;
    document.querySelector('.espresso').style.transform = `translate(-400%)`;
    document.querySelector('.irish').style.transform = `translate(-400%)`;
    document.querySelector('.latte').style.transform = `translate(-400%)`;
    document.querySelector('.mocha').style.transform = `translate(-400%)`;
    document.querySelector('.affogato').style.transform = `translate(-400%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-400%)`;
})

document.getElementById('mo').addEventListener('click', () => {
    document.getElementById('ir').style.removeProperty('color');
    document.getElementById('am').style.removeProperty('color');
    document.getElementById('es').style.removeProperty('color');
    document.getElementById('cap').style.removeProperty('color');
    document.getElementById('lat').style.removeProperty('color');
    document.getElementById('mo').style.color = `goldenrod`;
    document.getElementById('af').style.removeProperty('color');
    document.getElementById('fr').style.removeProperty('color');
    document.querySelector('.americano').style.transform = `translate(-500%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-500%)`;
    document.querySelector('.espresso').style.transform = `translate(-500%)`;
    document.querySelector('.irish').style.transform = `translate(-500%)`;
    document.querySelector('.latte').style.transform = `translate(-500%)`;
    document.querySelector('.mocha').style.transform = `translate(-500%)`;
    document.querySelector('.affogato').style.transform = `translate(-500%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-500%)`;
})

document.getElementById('af').addEventListener('click', () => {
    document.getElementById('ir').style.removeProperty('color');
    document.getElementById('am').style.removeProperty('color');
    document.getElementById('es').style.removeProperty('color');
    document.getElementById('cap').style.removeProperty('color');
    document.getElementById('lat').style.removeProperty('color');
    document.getElementById('mo').style.removeProperty('color');
    document.getElementById('af').style.color = `goldenrod`;
    document.getElementById('fr').style.removeProperty('color');
    document.querySelector('.americano').style.transform = `translate(-600%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-600%)`;
    document.querySelector('.espresso').style.transform = `translate(-600%)`;
    document.querySelector('.irish').style.transform = `translate(-600%)`;
    document.querySelector('.latte').style.transform = `translate(-600%)`;
    document.querySelector('.mocha').style.transform = `translate(-600%)`;
    document.querySelector('.affogato').style.transform = `translate(-600%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-600%)`;
})

document.getElementById('fr').addEventListener('click', () => {
    document.getElementById('ir').style.removeProperty('color');
    document.getElementById('am').style.removeProperty('color');
    document.getElementById('es').style.removeProperty('color');
    document.getElementById('cap').style.removeProperty('color');
    document.getElementById('lat').style.removeProperty('color');
    document.getElementById('mo').style.removeProperty('color');
    document.getElementById('af').style.removeProperty('color');
    document.getElementById('fr').style.color = `goldenrod`;
    document.querySelector('.americano').style.transform = `translate(-700%)`;
    document.querySelector('.cappuccino').style.transform = `translate(-700%)`;
    document.querySelector('.espresso').style.transform = `translate(-700%)`;
    document.querySelector('.irish').style.transform = `translate(-700%)`;
    document.querySelector('.latte').style.transform = `translate(-700%)`;
    document.querySelector('.mocha').style.transform = `translate(-700%)`;
    document.querySelector('.affogato').style.transform = `translate(-700%)`;
    document.querySelector('.frappuccino').style.transform = `translate(-700%)`;
})

const form = document.getElementById("contactForm");
const successPopup = document.getElementById("successPopup");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  successPopup.style.display = "block";

  setTimeout(() => {
    successPopup.style.display = "none";
  }, 3000);

  form.reset();
});
