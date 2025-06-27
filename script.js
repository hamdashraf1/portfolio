// Global Variables
let activeSection = "hero"
const isScrolling = false
let lucide // Declare the lucide variable

// DOM Elements
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const floatingCharacter = document.getElementById("floatingCharacter")
const heroParticles = document.getElementById("heroParticles")
const contactForm = document.getElementById("contactForm")

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  initializeScrollTracking()
  initializeHeroParticles()
  initializeAnimations()
  initializeContactForm()

  // Initialize Lucide icons
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons()
  }
})

// Navigation Functions
function initializeNavigation() {
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMobileMenu)
  }

  // Navigation links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)

      // Close mobile menu if open
      if (navMenu.classList.contains("active")) {
        toggleMobileMenu()
      }
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active")
    }
  })
}

function toggleMobileMenu() {
  navMenu.classList.toggle("active")

  // Update icon
  const icon = navToggle.querySelector("i")
  if (navMenu.classList.contains("active")) {
    icon.setAttribute("data-lucide", "x")
  } else {
    icon.setAttribute("data-lucide", "menu")
  }

  // Reinitialize icons
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons()
  }
}

// Scroll Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80 // Account for fixed nav

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function initializeScrollTracking() {
  let ticking = false

  function updateActiveSection() {
    const sections = ["hero", "about", "skills", "projects", "ai-prompts", "contact"]
    const scrollPosition = window.scrollY + window.innerHeight / 2

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (activeSection !== section) {
            activeSection = section
            updateFloatingCharacter()
            updateActiveNavLink()
          }
          break
        }
      }
    }

    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateActiveSection)
      ticking = true
    }
  }

  window.addEventListener("scroll", requestTick)
}

function updateActiveNavLink() {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    const href = link.getAttribute("href").substring(1)
    if (href === activeSection) {
      link.style.color = "#2dd4bf"
    } else {
      link.style.color = "#cbd5e1"
    }
  })
}

// Floating Character Functions
function updateFloatingCharacter() {
  if (!floatingCharacter) return

  // Remove all position classes
  floatingCharacter.className = "floating-character"

  // Add current section class
  floatingCharacter.classList.add(activeSection)

  // Update position based on section
  const positions = {
    hero: { left: "70%", top: "50%", scale: 1 },
    about: { left: "85%", top: "30%", scale: 0.6 },
    skills: { left: "85%", top: "30%", scale: 0.6 },
    projects: { left: "15%", top: "40%", scale: 0.7 },
    "ai-prompts": { left: "80%", top: "60%", scale: 0.5 },
    contact: { left: "20%", top: "70%", scale: 0.6 },
  }

  const position = positions[activeSection] || positions.hero

  floatingCharacter.style.left = position.left
  floatingCharacter.style.top = position.top
  floatingCharacter.style.transform = `translate(-50%, -50%) scale(${position.scale})`
}

// Hero Particles
function initializeHeroParticles() {
  if (!heroParticles) return

  // Create particles
  for (let i = 0; i < 20; i++) {
    createParticle()
  }
}

function createParticle() {
  const particle = document.createElement("div")
  particle.className = "hero-particle"

  // Random position
  particle.style.left = Math.random() * 100 + "%"
  particle.style.top = Math.random() * 100 + "%"

  // Random animation delay
  particle.style.animationDelay = Math.random() * 2 + "s"
  particle.style.animationDuration = 3 + Math.random() * 2 + "s"

  heroParticles.appendChild(particle)
}

// Animation Functions
function initializeAnimations() {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
      }
    })
  }, observerOptions)

  // Observe animated elements
  const animatedElements = document.querySelectorAll(
    [
      ".section-header",
      ".stat-card",
      ".experience-item",
      ".education-card",
      ".skill-card",
      ".project-card",
      ".prompt-card",
      ".contact-info",
      ".contact-form-container",
    ].join(","),
  )

  animatedElements.forEach((el) => {
    observer.observe(el)
  })
}

// Contact Form Functions
function initializeContactForm() {
  if (!contactForm) return

  contactForm.addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Basic validation
  if (!name || !email || !message) {
    showNotification("Please fill in all fields", "error")
    return
  }

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email address", "error")
    return
  }

  // Simulate form submission
  const submitButton = contactForm.querySelector(".form-submit")
  const originalText = submitButton.innerHTML

  submitButton.innerHTML = '<i data-lucide="loader-2"></i><span>Sending...</span>'
  submitButton.disabled = true

  // Reinitialize icons
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons()
  }

  // Simulate API call
  setTimeout(() => {
    submitButton.innerHTML = originalText
    submitButton.disabled = false

    // Reset form
    contactForm.reset()

    showNotification("Message sent successfully!", "success")

    // Reinitialize icons
    if (typeof window.lucide !== "undefined") {
      window.lucide.createIcons()
    }
  }, 2000)
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// AI Prompts Functions
function copyPrompt(button, promptText) {
  navigator.clipboard
    .writeText(promptText)
    .then(() => {
      const originalContent = button.innerHTML
      button.innerHTML = '<i data-lucide="check"></i><span>Copied!</span>'
      button.classList.add("copied")

      // Reinitialize icons
      if (typeof window.lucide !== "undefined") {
        window.lucide.createIcons()
      }

      setTimeout(() => {
        button.innerHTML = originalContent
        button.classList.remove("copied")

        // Reinitialize icons
        if (typeof window.lucide !== "undefined") {
          window.lucide.createIcons()
        }
      }, 2000)
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err)
      showNotification("Failed to copy prompt", "error")
    })
}

// Notification System
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  // Create notification
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i data-lucide="${type === "success" ? "check-circle" : type === "error" ? "x-circle" : "info"}"></i>
            <span>${message}</span>
        </div>
    `

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 1000;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === "success" ? "background: #059669;" : ""}
        ${type === "error" ? "background: #dc2626;" : ""}
        ${type === "info" ? "background: #2563eb;" : ""}
    `

  document.body.appendChild(notification)

  // Initialize icons
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons()
  }

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Auto remove
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 3000)
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Performance Optimizations
const debouncedScroll = debounce(() => {
  // Handle scroll-based animations
}, 100)

window.addEventListener("scroll", debouncedScroll)

// Lazy Loading for Images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", initializeLazyLoading)

// Smooth scroll polyfill for older browsers
if (!("scrollBehavior" in document.documentElement.style)) {
  const script = document.createElement("script")
  script.src = "https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js"
  document.head.appendChild(script)
}

// Error Handling
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error)
})

// Service Worker Registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful")
      })
      .catch((err) => {
        console.log("ServiceWorker registration failed")
      })
  })
}

// Export functions for global access
window.scrollToSection = scrollToSection
window.copyPrompt = copyPrompt
