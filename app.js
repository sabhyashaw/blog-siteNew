const cards = document.querySelectorAll(".card-container");
const titles = document.querySelectorAll(".card-title");
const descriptions = document.querySelectorAll(".card-desc");
const dates = document.querySelectorAll(".aurthor-date");
const tags = document.querySelectorAll(".card-tag-container span");
const images = document.querySelectorAll(".card-image");

const blogData = [
    {
        title: "Latest Gadgets",
        desc: "Explore smart AI devices and next-gen accessories transforming modern life.",
        tag: "Technology",
        keyword: "gadgets"
    },
    {
        title: "Healthy Living",
        desc: "Simple habits and nutritious choices for a stronger body and mind.",
        tag: "Health",
        keyword: "healthy"
    },
    {
        title: "Coding Journey",
        desc: "From beginner bugs to building real-world applications with JavaScript.",
        tag: "Programming",
        keyword: "coding"
    },
    {
        title: "Travel Diaries",
        desc: "Beautiful places, unforgettable experiences, and stories from the road.",
        tag: "Travel",
        keyword: "travel"
    }
];

cards.forEach((card, index) => {
    const data = blogData[index % blogData.length];

    titles[index].textContent = data.title;
    descriptions[index].textContent = data.desc;
    tags[index].textContent = data.tag;

    images[index].src = `https://loremflickr.com/600/400/${data.keyword}?random=${index}`;

    const today = new Date();
    dates[index].textContent = today.toDateString();

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
        card.style.transition = "all 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 150);
});