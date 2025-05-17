import { db } from "../firebase.js";
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const container = document.getElementById("reelsContainer");

const getEmbedUrl = (url) => {
  const id = url.split("/shorts/")[1]?.split("?")[0];
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}`;
};

async function loadReels() {
  const q = query(collection(db, "reels"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  container.innerHTML = "";
  snapshot.forEach(doc => {
    const link = doc.data().url;
    const div = document.createElement("div");
    div.className = "reel";
    div.innerHTML = `<iframe src="${getEmbedUrl(link)}" allow="autoplay; fullscreen"></iframe>`;
    container.appendChild(div);
  });
}

loadReels();