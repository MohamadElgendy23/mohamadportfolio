import React from "react";

function Footer() {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <div className="flex items-center justify-center gap-12 mt-8">
        <div>
          <a href="/">
            <i class="fas fa-mobile-alt text-3xl" title="(385) 576-8791"></i>
          </a>
        </div>
        <div>
          <a href="/">
            <i
              class="fa fa-envelope text-3xl"
              title="mohamadelgendy13@gmail.com"
            ></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/MohamadElgendy23" target="blank">
            <i class="fa-brands fa-github text-3xl"></i>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/mohamad-elgendy-4b3bb61ba/"
            target="blank"
          >
            <i class="fa-brands fa-linkedin text-3xl"></i>
          </a>
        </div>
      </div>
      <div className="text-3xl mt-10 cursor-pointer">
        <i class="fas fa-arrow-alt-circle-up" onClick={scrollToTop}></i>
      </div>
    </div>
  );
}

export default Footer;
