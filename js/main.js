let FAQContentSection = document.querySelector(".faq-content-section");
FAQContentSection.addEventListener("click", (e) => {
  console.log(e.target.closest(".faq-content-header"));
  const faqHeader = e.target.closest(".faq-content-header");
  if (!faqHeader) return;
  const i = faqHeader.querySelector("i");
  i.classList.toggle("ri-subtract-line");
  const faqParent = faqHeader.parentElement;
  console.log(faqParent);
  const faqBody = faqParent.querySelector(".faq-content-body");
  faqBody.classList.toggle("open");

  // other close faqs
  const otherFaqs = FAQContentSection.querySelectorAll(".faq-content");
  console.log(otherFaqs);

  otherFaqs.forEach((faqContent) => {
    if (faqContent != faqParent) {
      const faqBody = faqContent.querySelector(".faq-content-body");
      const faqIcon = faqContent.querySelector("i");
      faqBody.classList.remove("open");
      faqIcon.classList.remove("ri-subtract-line")
    }
  });
});
const hamburgerBtn = document.querySelector(".hamburger");
const crossBtn = document.querySelector(".cross");
const mobileMenuWrapper = document.querySelector(".navbar .mobile-menu-wrapper");
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 768) {
      mobileMenuWrapper.style.right = '-250px';
    }
  }, 150);
});

hamburgerBtn.addEventListener('click', ()=>{
   mobileMenuWrapper.style.right = '0px';
})
crossBtn.addEventListener('click', ()=>{
   mobileMenuWrapper.style.right = '-250px';
})
