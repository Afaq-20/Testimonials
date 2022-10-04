const imgEl = document.querySelector("img")
const nameEl = document.querySelector(".name")

const textEl = document.querySelector(".text")
const testimonials = [
    {
        url: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        text: "Your company is truly upstanding and is behind its product 100%. Not able to tell you how happy I am with microsoft. We were treated like royalty.",
        name: "- Faustine Q."
    },
    {
        url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        text: "No matter where you go, microsoft is the coolest, most happening thing around! If you want real marketing that works and effective implementation",
        name: "- Nickey V."
    },
    {
        url: "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        text: "Absolutely wonderful! I will let my mum know about this, she could really make use of microsoft!",
        name: "- Herculie N."
    }
]
let idx = 0
updateTestimonial();

function updateTestimonial() {
    const { url, text , name} = testimonials[idx]
    imgEl.src = url;
    textEl.innerText = text;
    nameEl.innerText = name
    idx++
    if (idx === 3) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 2000)
}