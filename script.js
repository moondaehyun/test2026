document.addEventListener("DOMContentLoaded", () => {
  function setupSmoothScroll(linkElement, targetSection) {
    if (linkElement && targetSection) {
      linkElement.addEventListener("click", function (event) {
        event.preventDefault();

        const targetY = targetSection.offsetTop;
        const startY = window.pageYOffset;
        const distance = targetY - startY;

        const duration = 800;
        let startTime;

        function animateScroll(currentTime) {
          if (startTime === undefined) {
            startTime = currentTime;
          }
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);
          const newY = startY + distance * easeOutCubic(progress);

          window.scrollTo(0, newY);

          if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
          }
        }
        requestAnimationFrame(animateScroll);
      });
    }
  }

  const myeongryangLink = document.querySelector(
    ".top-nav ul li:nth-child(1) a"
  );
  const myeongryangSection = document.getElementById("myeongryang-details");

  const deokhyeLink = document.querySelector(".top-nav ul li:nth-child(2) a");
  const deokhyeSection = document.getElementById("deokhye-details");

  const gwanghaeLink = document.querySelector(".top-nav ul li:nth-child(3) a");
  const gwanghaeSection = document.getElementById("gwanghae-details");

  const gunhamdoLink = document.querySelector(".top-nav ul li:nth-child(4) a");
  const gunhamdoSection = document.getElementById("gunhamdo-details");

  setupSmoothScroll(myeongryangLink, myeongryangSection);
  setupSmoothScroll(deokhyeLink, deokhyeSection);
  setupSmoothScroll(gwanghaeLink, gwanghaeSection);
  setupSmoothScroll(gunhamdoLink, gunhamdoSection);

  setupSmoothScroll(myeongryangLink, myeongryangSection);
  setupSmoothScroll(deokhyeLink, deokhyeSection);
  setupSmoothScroll(gwanghaeLink, gwanghaeSection);
  setupSmoothScroll(gunhamdoLink, gunhamdoSection);

  /**
   *
   * @param {string} sectionId
   * @param {string} openBtnId
   * @param {string} closeBtnId
   */
  function setupSectionToggle(sectionId, openBtnId, closeBtnId) {
    const section = document.getElementById(sectionId);
    const openButton = document.getElementById(openBtnId);
    const closeButton = document.getElementById(closeBtnId);

    if (!section || !openButton || !closeButton) {
      console.warn("필요한 요소를 찾을 수 없습니다:", sectionId);
      return;
    }

    openButton.addEventListener("click", (e) => {
      e.preventDefault();

      section.classList.add("fact-check-active");
    });

    closeButton.addEventListener("click", (e) => {
      e.preventDefault();

      section.classList.remove("fact-check-active");
    });
  }

  setupSectionToggle(
    "myeongryang-details",
    "open-myeongryang-modal",
    "close-myeongryang-modal"
  );
  setupSectionToggle(
    "deokhye-details",
    "open-deokhye-modal",
    "close-deokhye-modal"
  );
  setupSectionToggle(
    "gwanghae-details",
    "open-gwanghae-modal",
    "close-gwanghae-modal"
  );
  setupSectionToggle(
    "gunhamdo-details",
    "open-gunhamdo-modal",
    "close-gunhamdo-modal"
  );
});
