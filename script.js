// Small interactions for the portfolio
document.getElementById('year').textContent = new Date().getFullYear();

function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  // For now, we open mailto as a simple fallback. Replace with backend endpoint if available.
  const subject = encodeURIComponent(`Website message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
  window.location.href = `mailto:sunggyung328@icloud.com?subject=${subject}&body=${body}`;
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = a.getAttribute('href');
    if(target.length>1){
      e.preventDefault();
      document.querySelector(target).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Video modal logic: plays local files or embeds YouTube links
const videoModal = document.getElementById('video-modal');
const videoWrap = document.getElementById('video-wrap');

function closeVideoModal(){
  if(!videoModal) return;
  videoModal.setAttribute('aria-hidden','true');
  // remove media content
  videoWrap.innerHTML = '';
}

document.addEventListener('click', (e)=>{
  // Open YouTube
  const yt = e.target.closest('.watch-youtube');
  if(yt){
    const url = yt.getAttribute('data-youtube');
    if(url){
      const embed = convertYoutubeToEmbed(url);
      videoWrap.innerHTML = `<iframe src="${embed}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      videoModal.setAttribute('aria-hidden','false');
    }
  }

  // Play local file (video)
  const pl = e.target.closest('.play-local');
  if(pl){
    const src = pl.getAttribute('data-src');
    if(src){
      videoWrap.innerHTML = `<video controls autoplay src="${src}"></video>`;
      videoModal.setAttribute('aria-hidden','false');
    }
  }

  // Close button
  if(e.target.closest('.modal-close')){
    closeVideoModal();
  }
});

// Close modal on backdrop click
if(videoModal){
  videoModal.addEventListener('click', (e)=>{
    if(e.target === videoModal) closeVideoModal();
  });
}

function convertYoutubeToEmbed(url){
  // common YouTube patterns
  try{
    const u = new URL(url);
    if(u.hostname.includes('youtube.com')){
      const v = u.searchParams.get('v');
      if(v) return `https://www.youtube.com/embed/${v}`;
    }
    if(u.hostname.includes('youtu.be')){
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
  }catch(err){
    // fallback: return as-is
  }
  return url;
}

// Match profile photo width to a text element's width
// Profile photo was removed; no client-side layout adjustments required.
