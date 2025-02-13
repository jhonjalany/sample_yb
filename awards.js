const highhonors = [
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"},
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"},
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"},
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"},
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"},
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"}
];

const honors = [
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"},
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"},
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"},
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"},
  {img: "female_student.webp", name: "name of student"},
  {img: "male_student.webp", name: "name of student"}
];

let elementhigh_honor = document.querySelector(".high_honor");
let elementhonor = document.querySelector(".honor");

 let rendered_image = "";

 for(let i = 0; i != highhonors.length; i++){
  rendered_image += `
    <div class="student_div">
    <img class= "student_image" src="${highhonors[i].img}" loading="lazy" alt="refresh this website" onclick="openImage('${highhonors[i].img}')">
    <h1 class= "student_name">${highhonors[i].name}</h1>
    </div>
  `
 };
elementhigh_honor.innerHTML = rendered_image;


 rendered_image = "";

 for(let i = 0; i != honors.length; i++){
  rendered_image += `
  <div class="student_div">
    <img class="student_image" src="${honors[i].img}" loading="lazy" alt="Refresh this website" onclick="openImage('${honors[i].img}')">
    <h1 class="student_name">${honors[i].name}</h1>
    </div>
  `
 };
 elementhonor.innerHTML = rendered_image;

 
// Function to open image modal
function openImage(src) {
  const modal = document.getElementById("imageModal");
  const expandedImg = document.getElementById("expandedImg");

  expandedImg.src = src;
  modal.style.display = "flex"; // Show modal
}

// Function to close image modal
function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

// Ensure modal is hidden on page load (Failsafe)
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("imageModal").style.display = "none";
});
