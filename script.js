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
      from: "nose",
    },
    {
      id: "video-3",
      src: "videos/video-3.mp4",
      from: "Roberto y..",
    },
    {
      id: "video-4",
      src: "videos/video-4.mp4",
      from: "nidea",
    },
    {
      id: "video-5",
      src: "videos/video-5.mp4",
      from: "meolvide",
    },
    {
      id: "video-6",
      src: "videos/video-6.mp4",
      from: "?",
    },
    {
      id: "video-7",
      src: "videos/video-7.mp4",
      from: "??",
    },
    {
      id: "video-8",
      src: "videos/video-8.mp4",
      from: "???",
    },
    {
      id: "video-9",
      src: "videos/video-9.mp4",
      from: "meolvide2",
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
      from: "??",
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
      from: "??",
    },
    {
      id: "video-19",
      src: "videos/video-19.mp4",
      from: "???",
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
      }
  ];
  
  // 2. Build the cards and add them to the page.
  document.addEventListener("DOMContentLoaded", () => {
    const strip = document.getElementById("videoStrip");
    if (!strip) return;
  
    videos.forEach((videoData) => {
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
  
    const video = document.createElement("video");
    video.setAttribute("preload", "none");
    video.setAttribute("controls", "controls");
    video.setAttribute("playsinline", "playsinline");
    // Lazy: real src is added later
    video.dataset.src = videoData.src;
  
    const playHint = document.createElement("div");
    playHint.className = "play-hint";
    playHint.textContent = "Tap to play";
  
    wrapper.appendChild(video);
    wrapper.appendChild(playHint);
  
    const meta = document.createElement("div");
    meta.className = "video-meta";
  
    const name = document.createElement("div");
    name.className = "friend-name";
    name.innerHTML = `<span>${videoData.from}</span>`;
  
    const note = document.createElement("div");
    note.className = "friend-note";
    note.textContent = videoData.note || "";
  
    meta.appendChild(name);
    meta.appendChild(note);
  
    card.appendChild(wrapper);
    card.appendChild(meta);
  
    return card;
  }
  
  // 3. Lazy loading with IntersectionObserver.
  function setupLazyLoading() {
    const strip = document.querySelector(".video-strip");
    const lazyVideos = document.querySelectorAll("video[data-src]");
  
    if (!("IntersectionObserver" in window) || lazyVideos.length === 0) {
      // Fallback: load everything if IntersectionObserver is not supported
      lazyVideos.forEach((video) => {
        if (!video.src) {
          video.src = video.dataset.src;
        }
      });
      return;
    }
  
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
  
          const video = entry.target;
          const src = video.dataset.src;
  
          if (src && !video.src) {
            video.src = src;
          }
  
          obs.unobserve(video);
        });
      },
      {
        root: strip,       // observe inside the horizontal strip
        rootMargin: "80px",
        threshold: 0.25,
      }
    );
  
    lazyVideos.forEach((video) => observer.observe(video));
  }