const vid = document.getElementById("introVid");
console.debug(vid)

const seen = sessionStorage.getItem("seenVid")

if (seen !== "true") {
    document.addEventListener("mousemove", () => {
      vid.play();
    });

    vid.addEventListener("ended", () => {
      vid.style.opacity = "0";
      console.log("opacity set");
      setTimeout(() => {
          vid.style.display = "none";
          sessionStorage.setItem("seenVid", "true")
      }, 300); // small delay so opacity fade is visible
    });
} else {
    vid.style.display = "none"
}