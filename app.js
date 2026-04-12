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
        keyword: "gadgets",
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop"
    },
    {
        title: "Healthy Living",
        desc: "Simple habits and nutritious choices for a stronger body and mind.",
        tag: "Health",
        keyword: "healthy",
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop"
    },
    {
        title: "Coding Journey",
        desc: "From beginner bugs to building real-world applications with JavaScript.",
        tag: "Programming",
        keyword: "coding",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
    },
    {
        title: "Travel Diaries",
        desc: "Beautiful places, unforgettable experiences, and stories from the road.",
        tag: "Travel",
        keyword: "travel",
        imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
    },
    {
        title: "Web Design Trends",
        desc: "Discover modern UI/UX patterns and design systems shaping the web today.",
        tag: "Design",
        keyword: "design",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
        title: "Machine Learning Basics",
        desc: "Understanding algorithms, neural networks, and AI applications in real world.",
        tag: "AI",
        keyword: "code",
        imageUrl: "https://atriainnovation.com/uploads/2023/11/portada-9.jpg"
    },
    {
        title: "Photography Tips",
        desc: "Master composition, lighting, and storytelling to capture stunning images.",
        tag: "Photography",
        keyword: "nature",
        imageUrl: "https://www.shutterstock.com/image-photo/serenity-summer-day-durmitor-national-600nw-2623341111.jpg"
    },
    {
        title: "Productivity Hacks",
        desc: "Time management strategies and tools to boost your daily productivity.",
        tag: "Lifestyle",
        keyword: "productivity",
        imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"
    }
];

function getRandomDate() {
    const startDate = new Date(2025, 1, 22);
    const endDate = new Date(2025, 10, 11);
    const randomTime = Math.random() * (endDate - startDate) + startDate.getTime();
    return new Date(randomTime);
}

function formatDate(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

cards.forEach((card, index) => {
    const data = blogData[index];
    
    titles[index].textContent = data.title;
    descriptions[index].textContent = data.desc;
    tags[index].textContent = data.tag;
    images[index].src = data.imageUrl;
    
    const randomDate = getRandomDate();
    dates[index].textContent = formatDate(randomDate);
    
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
        card.style.transition = "all 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 150);
});