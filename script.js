// 1) Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

// 2) Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

// 3) Obtain a reference the element with a class of dashed and remove it.

// 4) Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const articleChange = document.querySelector(".article__header");
console.log(articleChange);
articleChange.textContent = "Welcome to Josh's blog";

const allArticleHeader = document.querySelectorAll(".article__header");
for (let i = 0; i < allArticleHeader.length; i++){
    allArticleHeader[i].classList.add("important")
}
console.log(allArticleHeader);


const removeDashed = document.querySelector(".dashed");
removeDashed.classList.remove("dashed");
console.log(removeDashed);

const articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod");
console.log(articleFooter);



