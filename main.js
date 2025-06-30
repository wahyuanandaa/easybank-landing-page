// Utility selector
const $ = (selector) => document.querySelector(selector)

const dom = {
  hamMenu: $(".ham-menu"),
  menu: $(".nav-header--nav-links"),
  backdrop: $(".nav-header--backdrop"),
  header: $("header"),
  main: $("main"),
  footer: $("footer")
}

const toggleMenuClasses = () => {
  dom.hamMenu.classList.toggle("change")
  dom.menu.classList.toggle("inactive")
  dom.menu.classList.toggle("nav-links_show")
  dom.backdrop.classList.toggle("remove")
  dom.backdrop.classList.toggle("backdrop_overlay")
}

const updateBackdropAccessibility = () => {
  dom.backdrop.setAttribute(
    "aria-hidden",
    dom.backdrop.classList.contains("remove") ? "true" : "false"
  )
}

const handleKeyboardAccess = () => {
  const isMenuOpen = dom.backdrop.classList.contains("backdrop_overlay")
  dom.main.inert = isMenuOpen
  dom.footer.inert = isMenuOpen
}

const toggleMenu = () => {
  toggleMenuClasses()
  updateBackdropAccessibility()
  handleKeyboardAccess()
}

const closeMenu = () => {
  dom.hamMenu.classList.remove("change")
  dom.menu.classList.add("inactive")
  dom.menu.classList.remove("nav-links_show")
  dom.backdrop.classList.add("remove")
  dom.backdrop.classList.remove("backdrop_overlay")
  dom.backdrop.setAttribute("aria-hidden", "true")
  dom.main.inert = false
  dom.footer.inert = false
}

const createScrollToTopButton = () => {
  const btn = document.createElement("button")
  const img = document.createElement("img")
  img.src = "./images/arrow-up.png"
  img.alt = "Scroll to top"
  img.className = "scroll-to-top-image"
  btn.appendChild(img)
  btn.className = "scroll-to-top"
  btn.setAttribute("aria-label", "Scroll to top")

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" })
  btn.addEventListener("click", handleClick)
  btn.handleClick = handleClick
  return btn
}

const scrollToTop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const scrollBtn = $(".scroll-to-top")
    if (entry.isIntersecting) {
      if (scrollBtn) {
        scrollBtn.removeEventListener("click", scrollBtn.handleClick)
        scrollBtn.remove()
      }
    } else {
      if (!scrollBtn) {
        const btn = createScrollToTopButton()
        dom.main.appendChild(btn)
      }
    }
  })
})

// Event listeners

dom.hamMenu.addEventListener("click", toggleMenu)
dom.hamMenu.addEventListener("keydown", (e) => {
  if (e.key === "Enter") toggleMenu()
})
dom.backdrop.addEventListener("click", closeMenu)

scrollToTop.observe(dom.header)
