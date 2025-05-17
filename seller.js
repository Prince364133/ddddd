import { db } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const form = document.getElementById("reelForm");
const input = document.getElementById("reelUrl");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const url = input.value.trim();
  if (!url.includes("youtube.com/shorts/")) {
    alert("Invalid Shorts link.");
    return;
  }
  await addDoc(collection(db, "reels"), {
    url: url,
    createdAt: serverTimestamp()
  });
  alert("Reel added!");
  input.value = "";
});