// Neon cursor elementi oluştur
const cursor = document.createElement("div");
document.body.appendChild(cursor);

// Neon cursor için stiller
Object.assign(cursor.style, {
    position: "absolute",
    width: "20px",
    height: "20px",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "50%",
    pointerEvents: "none",
    boxShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)",
    transform: "translate(-50%, -50%)",
    background: "transparent",
});

// Fare hareketini takip et
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

// Neon rengini sürekli değiştir
setInterval(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    cursor.style.boxShadow = `0 0 10px rgba(${r}, ${g}, ${b}, 0.7),
                              0 0 20px rgba(${r}, ${g}, ${b}, 0.5),
                              0 0 30px rgba(${r}, ${g}, ${b}, 0.3)`;
    cursor.style.borderColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
}, 300); // Renk her 300ms'de bir değişir
