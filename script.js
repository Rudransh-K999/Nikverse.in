/**
 * ==========================================================================
 * NIKVERSE OFFICIAL CREATOR PORTFOLIO SCRIPT
 * Pure Vanilla JavaScript - Zero external JS framework dependencies
 * ==========================================================================
 */

// 1. YouTube Real Creator Media Data
const VIDEOS_DATA = [
  {
    videoId: 'Qd8Ms1ngKLI',
    title: "I Played Minecraft in an ACID Only World for 100 Days: Here's What Happened",
    thumbnail: 'https://i.ytimg.com/vi/Qd8Ms1ngKLI/maxresdefault.jpg',
    channelTitle: 'Nik'
  },
  {
    videoId: 'aTp7dh9Uxrs',
    title: 'Moja mila kya? | ft @Voice.gaming',
    thumbnail: 'https://i.ytimg.com/vi/aTp7dh9Uxrs/maxresdefault.jpg',
    channelTitle: 'NikVerse'
  },
  {
    videoId: '1ZIydufVQbQ',
    title: 'GTA VI Graphics Leaks? Next Gen Unreal Engine Showcase',
    thumbnail: 'https://i.ytimg.com/vi/1ZIydufVQbQ/hqdefault.jpg',
    channelTitle: 'LiveNik'
  },
  {
    videoId: '2S248C5ql3w',
    title: 'Surviving 100 Days on a One-Block Floating Sky Fortress',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'Nik'
  },
  {
    videoId: 'dQw4w9WgXcQ',
    title: 'The Secret Room Under VoidMC Spawn (Nobody Found This!)',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'NikVerse'
  },
  {
    videoId: 'k85mRPqvMbE',
    title: 'Best GTA Online Heists with Subs! Hilarious Moments & Fails',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'LiveNik'
  },
  {
    videoId: '3JZ_D3ELwOQ',
    title: 'Building a Megabase in VoidMC Season 2 Survival (Timelapse)',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'Nik'
  },
  {
    videoId: '9bZkp7q19f0',
    title: 'Trapped 100 Players in an Escaping Lava Box Tournament',
    thumbnail: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'NikVerse'
  },
  {
    videoId: 'x8f7s9d123k',
    title: 'I Beat Minecraft Nether Only in Hardcore (No Overworld)',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'Nik'
  }
];

const STREAMS_DATA = [
  {
    videoId: 'xDhgotoGFcM',
    title: 'Join VoidMC 24x7 live server | NikVerse #live #shorts #minecraft',
    thumbnail: 'https://i.ytimg.com/vi/xDhgotoGFcM/maxresdefault.jpg',
    channelTitle: 'NikVerse'
  },
  {
    videoId: '4FuuLBcFFG0',
    title: 'GTA 5 live | Gangster shots in LOS SANTOS #gaming #gta #shorts',
    thumbnail: 'https://i.ytimg.com/vi/4FuuLBcFFG0/hqdefault.jpg',
    channelTitle: 'LiveNik'
  },
  {
    videoId: '6MqpY8qE23A',
    title: 'VoidMC SMP Weekend War & Boss Raids with Viewers!',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'NikVerse'
  },
  {
    videoId: '7NxuB5wQ94C',
    title: 'Chill Minecraft Building & Late Night Discord Voice Chat',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'Nik'
  },
  {
    videoId: '8YziV6eT31D',
    title: 'Los Santos Roleplay: High Speed Police Chases & Drifting',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'LiveNik'
  },
  {
    videoId: '9KlmC2vR15E',
    title: 'Minecraft Hardcore No Death Run - Day 1 to 50 Live Marathon',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'Nik'
  },
  {
    videoId: '0PqrT7bS89F',
    title: 'VoidMC Special Event: Elytra Race Championship 2026',
    thumbnail: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=640&auto=format&fit=crop',
    channelTitle: 'NikVerse'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // DOM References
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const pageLoader = document.getElementById('pageLoader');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  const viewHome = document.getElementById('view-home');
  const viewSocials = document.getElementById('view-socials');
  const viewContact = document.getElementById('view-contact');

  const videosGrid = document.getElementById('videosGrid');
  const streamsGrid = document.getElementById('streamsGrid');
  const btnToggleVideos = document.getElementById('btnToggleVideos');
  const btnToggleStreams = document.getElementById('btnToggleStreams');
  const btnSeeTheWork = document.getElementById('btnSeeTheWork');

  const emailCopyCard = document.getElementById('emailCopyCard');
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  const copyBtnText = document.getElementById('copyBtnText');
  const businessEmailText = document.getElementById('businessEmailText').textContent.trim();

  const devModal = document.getElementById('devModal');
  const btnModalClose = document.getElementById('btnModalClose');
  const btnModalCloseSecondary = document.getElementById('btnModalCloseSecondary');

  // State
  let showAllVideos = false;
  let showAllStreams = false;
  let footerClickCount = 0;
  let footerClickTimer = null;

  // Initial Loader Fadeout
  setTimeout(() => {
    if (pageLoader) {
      pageLoader.classList.remove('active');
    }
  }, 500);

  // --------------------------------------------------------------------------
  // 2. Custom Crosshair Cursor with Smooth Lerp
  // --------------------------------------------------------------------------
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover effect on links and buttons for cursor
  document.querySelectorAll('a, button, [data-nav], .media-card, .email-copy-card').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      if (cursorRing) {
        cursorRing.style.width = '48px';
        cursorRing.style.height = '48px';
        cursorRing.style.borderColor = 'rgba(250, 204, 21, 0.9)';
      }
    });
    el.addEventListener('mouseleave', () => {
      if (cursorRing) {
        cursorRing.style.width = '32px';
        cursorRing.style.height = '32px';
        cursorRing.style.borderColor = 'rgba(245, 158, 11, 0.7)';
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. Theme Toggle & LocalStorage Persistence
  // --------------------------------------------------------------------------
  const savedTheme = localStorage.getItem('nikverse_theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('nikverse_theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // --------------------------------------------------------------------------
  // 4. Mobile Menu Drawer Toggle
  // --------------------------------------------------------------------------
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.classList.toggle('open', isOpen);
    });
  }

  // --------------------------------------------------------------------------
  // 5. Render Video and Stream Cards
  // --------------------------------------------------------------------------
  function renderVideos() {
    if (!videosGrid) return;
    const limit = showAllVideos ? VIDEOS_DATA.length : 6;
    const items = VIDEOS_DATA.slice(0, limit);

    videosGrid.innerHTML = items.map((item) => `
      <a href="https://www.youtube.com/watch?v=${item.videoId}" target="_blank" rel="noopener noreferrer" class="media-card">
        <div class="media-thumb-wrap">
          <img src="${item.thumbnail}" alt="${escapeHtml(item.title)}" class="media-thumb-img" loading="lazy" />
          <div class="media-thumb-overlay"></div>
          <div class="media-play-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <span class="media-channel-tag">${item.channelTitle}</span>
        </div>
        <div class="media-title-wrap">
          <h4 class="media-card-title">${escapeHtml(item.title)}</h4>
        </div>
      </a>
    `).join('');

    if (btnToggleVideos) {
      const label = btnToggleVideos.querySelector('.btn-text-label');
      if (showAllVideos) {
        label.textContent = 'Show Less';
        btnToggleVideos.classList.add('expanded');
      } else {
        label.textContent = `View More Videos (${VIDEOS_DATA.length - 6} more)`;
        btnToggleVideos.classList.remove('expanded');
      }
    }
  }

  function renderStreams() {
    if (!streamsGrid) return;
    const limit = showAllStreams ? STREAMS_DATA.length : 6;
    const items = STREAMS_DATA.slice(0, limit);

    streamsGrid.innerHTML = items.map((item) => `
      <a href="https://www.youtube.com/watch?v=${item.videoId}" target="_blank" rel="noopener noreferrer" class="media-card">
        <div class="media-thumb-wrap">
          <img src="${item.thumbnail}" alt="${escapeHtml(item.title)}" class="media-thumb-img" loading="lazy" />
          <div class="media-thumb-overlay"></div>
          <div class="media-play-icon stream-play-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <span class="media-channel-tag stream-tag">
            <span class="stream-dot"></span>
            <span>${item.channelTitle}</span>
          </span>
        </div>
        <div class="media-title-wrap">
          <h4 class="media-card-title">${escapeHtml(item.title)}</h4>
        </div>
      </a>
    `).join('');

    if (btnToggleStreams) {
      const label = btnToggleStreams.querySelector('.btn-text-label');
      if (showAllStreams) {
        label.textContent = 'Show Less';
        btnToggleStreams.classList.add('expanded');
      } else {
        label.textContent = `View More Streams (${STREAMS_DATA.length - 6} more)`;
        btnToggleStreams.classList.remove('expanded');
      }
    }
  }

  renderVideos();
  renderStreams();

  if (btnToggleVideos) {
    btnToggleVideos.addEventListener('click', () => {
      showAllVideos = !showAllVideos;
      renderVideos();
    });
  }

  if (btnToggleStreams) {
    btnToggleStreams.addEventListener('click', () => {
      showAllStreams = !showAllStreams;
      renderStreams();
    });
  }

  if (btnSeeTheWork) {
    btnSeeTheWork.addEventListener('click', () => {
      const el = document.getElementById('sceneUploads');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 6. SPA Routing & Staged Scene Transitions
  // --------------------------------------------------------------------------
  function navigateTo(target, scrollTargetId = null) {
    // Hide mobile drawer if open
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileMenuBtn) mobileMenuBtn.classList.remove('open');

    // Switch View
    if (target === 'home' || target === 'about' || target === 'uploads') {
      viewHome.classList.add('active');
      viewSocials.classList.remove('active');
      viewContact.classList.remove('active');

      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (target === 'about') {
        const el = document.getElementById('sceneAbout');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (target === 'uploads') {
        const el = document.getElementById('sceneUploads');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (target === 'socials') {
      viewHome.classList.remove('active');
      viewSocials.classList.add('active');
      viewContact.classList.remove('active');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (target === 'contact') {
      viewHome.classList.remove('active');
      viewSocials.classList.remove('active');
      viewContact.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Update active nav button state
    document.querySelectorAll('[data-nav]').forEach((btn) => {
      const navTarget = btn.getAttribute('data-nav');
      if (navTarget === target) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update hash
    if (window.location.hash !== `#${target}`) {
      history.pushState(null, '', `#${target}`);
    }
  }

  // Handle click on any nav button
  document.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-nav');
      if (target) navigateTo(target);
    });
  });

  // Handle URL hash on load
  const initialHash = window.location.hash.replace('#', '');
  if (['socials', 'contact', 'about', 'uploads'].includes(initialHash)) {
    navigateTo(initialHash);
  }

  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash);
  });

  // --------------------------------------------------------------------------
  // 7. Email Copy Handler
  // --------------------------------------------------------------------------
  function copyEmail() {
    navigator.clipboard.writeText(businessEmailText).then(() => {
      if (btnCopyEmail && copyBtnText) {
        btnCopyEmail.classList.add('copied');
        copyBtnText.textContent = 'COPIED!';
        setTimeout(() => {
          btnCopyEmail.classList.remove('copied');
          copyBtnText.textContent = 'COPY';
        }, 2200);
      }
    }).catch((err) => {
      console.error('Failed to copy email:', err);
    });
  }

  if (emailCopyCard) emailCopyCard.addEventListener('click', copyEmail);
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', (e) => {
      e.stopPropagation();
      copyEmail();
    });
  }

  // --------------------------------------------------------------------------
  // 8. Easter Egg: 4 Clicks on Footer Logo opens Developer Credits Modal
  // --------------------------------------------------------------------------
  function handleFooterLogoClick() {
    footerClickCount++;
    if (footerClickTimer) clearTimeout(footerClickTimer);

    if (footerClickCount >= 4) {
      footerClickCount = 0;
      openDevModal();
    } else {
      footerClickTimer = setTimeout(() => {
        footerClickCount = 0;
      }, 1500);
    }
  }

  const footerLogoHome = document.getElementById('footerLogoBtnHome');
  const footerLogoSocials = document.getElementById('footerLogoBtnSocials');
  const footerLogoContact = document.getElementById('footerLogoBtnContact');

  if (footerLogoHome) footerLogoHome.addEventListener('click', handleFooterLogoClick);
  if (footerLogoSocials) footerLogoSocials.addEventListener('click', handleFooterLogoClick);
  if (footerLogoContact) footerLogoContact.addEventListener('click', handleFooterLogoClick);

  function openDevModal() {
    if (devModal) devModal.classList.add('open');
  }

  function closeDevModal() {
    if (devModal) devModal.classList.remove('open');
  }

  if (btnModalClose) btnModalClose.addEventListener('click', closeDevModal);
  if (btnModalCloseSecondary) btnModalCloseSecondary.addEventListener('click', closeDevModal);
  if (devModal) {
    devModal.addEventListener('click', (e) => {
      if (e.target === devModal) closeDevModal();
    });
  }

  // Helper escape function
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Developer attribution in console
  console.log('%c⚡ Developed and Managed By rudra01.is-a.dev', 'color: #facc15; font-size: 14px; font-weight: 800; background: #09090b; padding: 8px 16px; border: 2px solid #facc15; border-radius: 6px; font-family: monospace;');
});
