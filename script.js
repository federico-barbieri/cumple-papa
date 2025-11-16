// 1. Your videos go here.
// Replace `src` with your own file paths or URLs.
const videos = [
    {
      id: "video-1",
      src: "videos/video-1.mp4",
      from: "Ethel",
    },
    {
      id: "video-2",
      src: "videos/video-2.mp4",
      from: "Guille",
    },
    {
      id: "video-3",
      src: "videos/video-3.mp4",
      from: "Roberto y Angela",
    },
    {
      id: "video-4",
      src: "videos/video-4.mp4",
      from: "Eugenia",
    },
    {
      id: "video-5",
      src: "videos/video-5.mp4",
      from: "Sandra",
    },
    {
      id: "video-6",
      src: "videos/video-6.mp4",
      from: "Fabian y Nelly",
    },
    {
      id: "video-7",
      src: "videos/video-7.mp4",
      from: "Ines",
    },
    {
      id: "video-8",
      src: "videos/video-8.mp4",
      from: "Fabian",
    },
    {
      id: "video-9",
      src: "videos/video-9.mp4",
      from: "Pepe",
    },
    {
      id: "video-10",
      src: "videos/video-10.mp4",
      from: "Jose y Feli",
    },
    {
      id: "video-11",
      src: "videos/video-11.mp4",
      from: "Marcelo",
    },
    {
      id: "video-12",
      src: "videos/video-12.mp4",
      from: "Emilio",
    },
    {
      id: "video-13",
      src: "videos/video-13.mp4",
      from: "Ana",
    },
    {
      id: "video-14",
      src: "videos/video-14.mp4",
      from: "Marcelo",
    },
    {
      id: "video-15",
      src: "videos/video-15.mp4",
      from: "Adriana",
    },
    {
      id: "video-16",
      src: "videos/video-16.mp4",
      from: "Emilio",
    },
    {
      id: "video-17",
      src: "videos/video-17.mp4",
      from: "Hernán",
    },
    {
      id: "video-18",
      src: "videos/video-18.mp4",
      from: "Sandra",
    },
    {
      id: "video-19",
      src: "videos/video-19.mp4",
      from: "Dany",
    },
    {
      id: "video-20",
      src: "videos/video-20.mp4",
      from: "Pablo",
    },
    {
      id: "video-21",
      src: "videos/video-21.mp4",
      from: "Mariano",
    },
    {
      id: "video-22",
      src: "videos/video-22.mp4",
      from: "Emma",
    },
    {
      id: "video-23",
      src: "videos/video-23.mp4",
      from: "Federico",
    },
    {
      id: "video-24",
      src: "videos/video-24.mp4",
      from: "Nacho",
    },
    {
      id: "video-25",
      src: "videos/video-25.mp4",
      from: "Adriana",
    },
    {
      id: "video-26",
      src: "videos/video-26.mp4",
      from: "Lucas",
    },
    {
      id: "video-27",
      src: "audio/fabiana.mp3",
      from: "Fabiana",
    },
    {
      id: "video-28",
      src: "videos/video-28.mp4",
      from: "Lucca y Zina",
    },
    {
      id: "video-29",
      src: "videos/video-29.mp4",
      from: "Fede",
    },
    {
      id: "foto-1",
      src: "images/foto-1.jpeg",
      from: "",
    },
    {
      id: "foto-2",
      src: "images/foto-2.jpeg",
      from: "",
    },
    {
      id: "foto-3",
      src: "images/foto-3.jpeg",
      from: "",
    },
    {
      id: "foto-4",
      src: "images/foto-4.jpeg",
      from: "",
    },
    {
      id: "foto-5",
      src: "images/foto-5.jpeg",
      from: "",
    },
    {
      id: "foto-6",
      src: "images/foto-6.jpeg",
      from: "",
    },
    {
      id: "foto-1",
      src: "images/foto-1.jpeg",
      from: "",
    },
    {
      id: "foto-7",
      src: "images/foto-7.jpeg",
      from: "",
    },
    {
      id: "foto-8",
      src: "images/foto-8.jpeg",
      from: "",
    },
    {
      id: "foto-9",
      src: "images/foto-9.jpeg",
      from: "",
    },
    {
      id: "foto-10",
      src: "images/foto-10.jpeg",
      from: "",
    },
    {
      id: "foto-11",
      src: "images/foto-11.jpeg",
      from: "",
    },
    {
      id: "foto-12",
      src: "images/foto-12.jpeg",
      from: "",
    },
    {
      id: "foto-13",
      src: "images/foto-13.jpeg",
      from: "",
    },
    {
      id: "foto-14",
      src: "images/foto-14.jpeg",
      from: "",
    },
    {
      id: "foto-15",
      src: "images/foto-15.jpeg",
      from: "",
    },
    {
      id: "foto-16",
      src: "images/foto-16.jpeg",
      from: "",
    },
    {
      id: "foto-17",
      src: "images/foto-17.jpeg",
      from: "",
    },
    {
      id: "foto-18",
      src: "images/foto-18.jpeg",
      from: "",
    },
    {
      id: "foto-19",
      src: "images/foto-19.jpeg",
      from: "",
    },
    {
      id: "foto-20",
      src: "images/foto-20.jpeg",
      from: "",
    },
    {
      id: "foto-21",
      src: "images/foto-21.jpeg",
      from: "",
    },
    {
      id: "foto-22",
      src: "images/foto-22.jpeg",
      from: "",
    },
    {
      id: "foto-23",
      src: "images/foto-23.jpeg",
      from: "",
    },
    {
      id: "foto-24",
      src: "images/foto-24.jpeg",
      from: "",
    },
    {
      id: "foto-25",
      src: "images/foto-25.jpeg",
      from: "",
    },
    {
      id: "foto-26",
      src: "images/foto-26.jpeg",
      from: "",
    },
    {
      id: "foto-27",
      src: "images/foto-27.jpeg",
      from: "",
    },
    {
      id: "foto-28",
      src: "images/foto-28.jpeg",
      from: "",
    },
    {
      id: "foto-29",
      src: "images/foto-29.jpeg",
      from: "",
    },
    {
      id: "foto-30",
      src: "images/foto-30.jpeg",
      from: "",
    },
    {
      id: "foto-31",
      src: "images/foto-31.jpeg",
      from: "",
    },
    {
      id: "foto-32",
      src: "images/foto-32.jpeg",
      from: "",
    },
    {
      id: "foto-33",
      src: "images/foto-33.jpeg",
      from: "",
    },
    {
      id: "foto-34",
      src: "images/foto-34.jpeg",
      from: "",
    },
    {
      id: "foto-35",
      src: "images/foto-35.jpeg",
      from: "",
    },
    {
      id: "foto-36",
      src: "images/foto-36.jpeg",
      from: "",
    },
    {
      id: "foto-37",
      src: "images/foto-37.jpeg",
      from: "",
    },
    {
      id: "foto-38",
      src: "images/foto-38.jpeg",
      from: "",
    },
    {
      id: "foto-39",
      src: "images/foto-39.jpeg",
      from: "",
    },
    {
      id: "foto-40",
      src: "images/foto-40.jpeg",
      from: "",
    }
  ];
  
// Helper function to check if file is an image
function isImage(src) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  return imageExtensions.some(ext => src.toLowerCase().endsWith(ext));
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy to avoid mutating original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 2. Build the cards and add them to the page.
document.addEventListener("DOMContentLoaded", () => {
  const strip = document.getElementById("videoStrip");
  if (!strip) return;

  // Shuffle the array before rendering
  const shuffledMedia = shuffleArray(videos);

  shuffledMedia.forEach((videoData) => {
    const card = createVideoCard(videoData);
    strip.appendChild(card);
  });

  setupLazyLoading();
});

function createVideoCard(videoData) {
  const card = document.createElement("article");
  card.className = "video-card";
  card.setAttribute("data-video-id", videoData.id);

  const wrapper = document.createElement("div");
  wrapper.className = "video-wrapper";

  const isImageFile = isImage(videoData.src);

  if (isImageFile) {
    // Create image element
    const img = document.createElement("img");
    img.setAttribute("loading", "lazy");
    img.setAttribute("alt", `Photo from ${videoData.from}`);
    img.dataset.src = videoData.src;
    wrapper.appendChild(img);
  } else {
    // Create video element
    const video = document.createElement("video");
    video.setAttribute("preload", "none");
    video.setAttribute("controls", "controls");
    video.setAttribute("playsinline", "playsinline");
    video.dataset.src = videoData.src;
    wrapper.appendChild(video);
  }

  const meta = document.createElement("div");
  meta.className = "video-meta";

  if (videoData.from) {

    const name = document.createElement("div");
    name.className = "friend-name";
    name.innerHTML = `<span>${videoData.from}</span>`;

    const note = document.createElement("div");
    note.className = "friend-note";
    note.textContent = videoData.note || "";

    meta.appendChild(note);

    meta.appendChild(name);

  }

  card.appendChild(wrapper);
  card.appendChild(meta);

  return card;
}

// 3. Lazy loading with IntersectionObserver.
function setupLazyLoading() {
  const strip = document.querySelector(".video-strip");
  const lazyVideos = document.querySelectorAll("video[data-src]");
  const lazyImages = document.querySelectorAll("img[data-src]");
  const lazyMedia = [...lazyVideos, ...lazyImages];

  if (!("IntersectionObserver" in window) || lazyMedia.length === 0) {
    // Fallback: load everything if IntersectionObserver is not supported
    lazyMedia.forEach((media) => {
      if (!media.src) {
        media.src = media.dataset.src;
      }
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const media = entry.target;
        const src = media.dataset.src;

        if (src && !media.src) {
          media.src = src;
        }

        obs.unobserve(media);
      });
    },
    {
      root: strip,
      rootMargin: "80px",
      threshold: 0.25,
    }
  );

  lazyMedia.forEach((media) => observer.observe(media));
}