// $("#Next").click(function(){
// 	$("#Slider").append($("#Slider img:first-of-type"));
// });

// $("#Prev").click(function(){
// 	$("#Slider").prepend($("#Slider img:last-of-type"));
// });

var i = 0;
// document.getElementById("info1").innerHTML = "";
// var txt = "document.getElementByIdinnerText";

var speed = 70;

const para = document.getElementById("info1")
const txt = para.innerText
para.innerHTML = ""
function typeWriter() {
  if (i < txt.length) {
    para.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// const typed = new Typed('.typedText',{
//     strings: ["asaijiawojoadoaiwdoi", ],
//     typeSpeed:100,
//     backSpeed: 50,
//     backDelay: 2000,
//     loop:true
//  });

// "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam harum dolore sapiente
// rem, nulla, rerum accusamus saepe ut ea quisquam ducimus soluta aperiam porro iusto ipsam sit sed
// distinctio officia?
// Nobis eius dignissimos dolor repellat veniam a, vel placeat atque, dolores molestiae laborum nam
// voluptatibus itaque neque ab ipsa! Alias nemo necessitatibus sint magnam totam iste quibusdam ullam
// minima quis.
// Omnis quod, cupiditate laudantium ipsa consequatur repellendus eveniet possimus, praesentium amet
// deserunt exercitationem cum itaque nemo facere ipsam doloribus veritatis officia vitae sequi
// necessitatibus obcaecati illo odio magnam. Est, temporibus?
// Temporibus, ipsum. Illum labore deserunt quia et reiciendis repudiandae maiores obcaecati saepe
// provident quaerat, eaque doloribus molestias fugiat suscipit atque aliquam debitis fugit minima quo at
// minus mollitia nam! Id?
// Natus distinctio suscipit molestias commodi, autem tenetur delectus molestiae quia hic vitae saepe
// similique optio eos ipsum ut ratione repellat blanditiis. Dolorum rerum nostrum consectetur hic natus
// repellat, vitae voluptates.
// Enim earum delectus eos optio assumenda alias id, sapiente animi est eum ab minus culpa saepe rem quia
// impedit corporis eveniet, eaque at? Suscipit sed repellendus, quae obcaecati soluta eum.
// Dolorem culpa aliquid illo quod voluptatum! Id architecto nostrum nobis veritatis repudiandae, aperiam
// non reiciendis eveniet cupiditate dolorum, neque, officia voluptatem molestiae sunt inventore optio qui
// recusandae ex? Quidem, quisquam.
// Neque iure doloribus quod rerum repudiandae obcaecati aspernatur consectetur iusto voluptas quae quidem
// incidunt molestiae, est eius quo. Sit voluptas distinctio amet optio numquam perferendis, magnam
// temporibus mollitia natus! Iste.
// "Quia dolor qui voluptatum voluptas eveniet. Laborum, consequuntur quibusdam tempora, libero soluta at"
// "iusto odit impedit quos assumenda aliquam eos rerum nam veniam consectetur. Dicta ipsam id officia"
// "veniam doloribus?"
// "Perspiciatis, sit! Architecto eos dolorem vero maxime repellendus commodi omnis quod magni rem!"
// "Accusantium nostrum amet unde delectus, perspiciatis cumque quaerat autem aperiam corporis debitis,"
// +"magnam error, odio maxime temporibus?";