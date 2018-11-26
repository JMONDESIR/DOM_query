// 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const firstSection = document.querySelector(".article__header");
firstSection.textContent = "Welcome to the Joel Mondesir blog";

// 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const allSection = document.querySelectorAll(".article__header");
for (var i = 0; i < allSection.length; i++) {
  allSection[i].classList.add("important");
}

// 3. Obtain a reference the element with a class of dashed and remove it.
const dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");

// 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");
