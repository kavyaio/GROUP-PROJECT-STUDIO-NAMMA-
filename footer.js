// ==========================================================================
// FOOTER COMPONENT INJECTION SCRIPT (footer.js)
// Complete Studio Namma Footer: Top Logos Bar -> LET'S WORK TOGETHER -> Cards -> Info
// ==========================================================================

(function () {
  // SVG Logos provided by User
  const logoQonto = `<svg class="client_logo is-qonto" viewBox="0 0 128 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_qonto" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="128" height="38">
      <path d="M127.75 0.785156H0.25V37.2138H127.75V0.785156Z" fill="#fff"></path>
    </mask>
    <g mask="url(#mask0_qonto)">
      <path d="M65.804 35.2H70.596V21.633C70.596 18.366 72.93 15.815 75.948 15.815C78.966 15.815 81.58 18.242 81.58 21.633V35.2H86.777V21.385C86.777 15.566 81.985 11.0849 76.757 11.0849C74.828 11.0849 72.37 11.7694 70.596 14.1966V11.6139H65.804V35.2ZM114.907 11.0849C107.905 11.0849 102.428 16.655 102.428 23.563C102.428 30.595 107.781 35.761 114.907 35.761C122.032 35.761 127.509 30.626 127.509 23.563C127.509 16.655 122.157 11.0849 114.907 11.0849ZM114.907 30.875C110.923 30.875 107.781 27.608 107.781 23.563C107.781 19.237 111.079 16.095 114.907 16.095C119.014 16.095 122.312 19.206 122.312 23.563C122.312 27.608 119.139 30.875 114.907 30.875ZM101.588 35.2V30.191C98.01 31.964 94.587 30.595 94.587 26.674V16.375H101.028V11.645H94.618V5.54595H89.546V25.865C89.546 34.267 95.303 37.099 101.588 35.2ZM50.4634 11.0849C43.462 11.0849 37.9855 16.655 37.9855 23.563C37.9855 30.595 43.3376 35.761 50.4634 35.761C57.5891 35.761 63.066 30.626 63.066 23.563C63.066 16.655 57.7136 11.0849 50.4634 11.0849ZM50.4634 30.875C46.4804 30.875 43.3376 27.608 43.3376 23.563C43.3376 19.237 46.4804 16.095 50.4634 16.095C54.5709 16.095 57.8692 19.206 57.8692 23.563C57.8692 27.608 54.5709 30.875 50.4634 30.875ZM18.2262 0.785156C8.36218 0.785156 0.800781 8.25316 0.800781 18.397C0.800781 28.168 8.33108 35.885 18.2262 35.885C28.3704 35.885 35.9318 28.168 35.9318 18.553C35.9007 8.25316 28.3704 0.785156 18.2262 0.785156ZM18.2262 30.595C11.3805 30.595 6.30848 25.461 6.30848 18.397C6.30848 11.0849 11.3805 5.67046 18.2262 5.67046C25.2276 5.67046 30.2996 11.0849 30.2996 18.273C30.2996 25.461 25.2276 30.595 18.2262 30.595Z" fill="currentColor"></path>
      <path d="M35.0922 36.5706C25.2281 35.4816 18.9114 30.5956 15.7686 21.3856L20.7161 19.7676C23.1744 27.0796 27.8419 30.7516 35.6523 31.5606L35.0922 36.5706Z" fill="currentColor"></path>
    </g>
  </svg>`;

  const logoMatera = `<svg class="client_logo is-matera" viewBox="0 0 162 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_matera" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="162" height="28">
      <path d="M162 0.5H0V27.5H162V0.5Z" fill="white"></path>
    </mask>
    <g mask="url(#mask0_matera)">
      <path d="M64.949 5.11719C61.6631 5.11719 59.1631 6.99089 57.8584 10.411C57.7282 7.58939 56.814 5.11719 52.2682 5.11719C48.8708 5.11719 46.3013 7.09689 45.0039 10.702L44.6093 5.52268H40.0327V27.094H45.1956V15.963C45.1956 14.018 45.7598 12.206 46.7854 10.86C47.7503 9.59299 49.0437 8.86698 50.3344 8.86698C52.1139 8.86698 52.7142 9.72598 52.7142 12.269V27.094H57.8771V16.045C57.8771 14.089 58.4366 12.262 59.4522 10.9C60.4158 9.60899 61.7145 8.86798 63.0152 8.86798C64.7947 8.86798 65.395 9.72598 65.395 12.27V27.095H70.5579V11.255C70.5579 8.21998 69.8915 5.11719 64.9503 5.11719H64.949Z" fill="currentColor"></path>
      <path d="M91.118 23.976L91.108 23.97C90.451 23.606 90.145 22.958 90.145 21.931V11.823C90.145 7.37338 87.455 5.11719 82.15 5.11719C79.792 5.11719 77.872 5.67608 76.444 6.77888C74.9059 7.96598 73.9838 9.75299 73.7027 12.093L73.6873 12.22L77.895 12.781L77.915 12.657C78.424 9.64898 79.579 8.42198 81.902 8.42198C84.004 8.42198 84.982 9.51498 84.982 11.864V13.277C84.339 13.522 83.52 13.813 82.654 14.121C81.516 14.526 80.226 14.984 79.054 15.438C76.197 16.556 72.9595 17.824 72.9595 21.85C72.9595 25.283 75.387 27.501 79.143 27.501C82.142 27.501 84.263 26.163 85.446 23.523H85.57C85.861 26.163 87.507 27.501 90.465 27.501C91.385 27.501 92.722 27.298 93.368 26.958L93.437 26.921V24.4H93.306C92.575 24.4 91.666 24.352 91.116 23.976H91.118ZM84.983 16.274V19.983C84.983 22.527 83.332 24.237 80.874 24.237C79.021 24.237 78 23.23 78 21.403C78 19.31 79.382 18.545 81.051 17.828C82.494 17.196 83.524 16.815 84.433 16.478C84.622 16.408 84.804 16.341 84.983 16.274Z" fill="currentColor"></path>
      <path d="M116.894 5.11719C113.881 5.11719 111.308 6.31148 109.453 8.56998C107.768 10.622 106.84 13.363 106.84 16.289C106.84 19.639 107.786 22.448 109.576 24.414C111.415 26.433 114.102 27.501 117.347 27.501C123.38 27.501 125.65 23.629 126.49 20.381L126.519 20.269L122.812 18.877L122.776 19.019C122.363 20.672 121.854 21.814 121.172 22.615C120.312 23.625 119.155 24.116 117.634 24.116C114.156 24.116 112.457 21.837 112.294 16.947H126.659V16.817C126.659 13.332 125.816 10.42 124.223 8.39498C122.535 6.25088 120.001 5.11778 116.893 5.11778L116.894 5.11719ZM121.245 14.17H112.384C112.705 10.277 114.153 8.46198 116.935 8.46198C119.717 8.46198 121.095 10.224 121.245 14.17Z" fill="currentColor"></path>
      <path d="M139.287 5.11594C136.885 5.11594 135.045 7.10684 133.946 10.882L133.563 5.52154H128.945V27.093H134.108V17.139C134.108 12.919 136.189 10.084 139.287 10.084C139.829 10.084 140.312 10.157 140.854 10.322L141.025 10.374V5.57944L140.963 5.54124C140.705 5.38254 140.144 5.11594 139.287 5.11594Z" fill="currentColor"></path>
      <path d="M161.868 24.4C161.138 24.4 160.229 24.352 159.679 23.976L159.668 23.97C159.012 23.606 158.706 22.958 158.706 21.931V11.823C158.706 7.37338 156.016 5.11719 150.711 5.11719C148.352 5.11719 146.433 5.67608 145.004 6.77888C143.467 7.96598 142.544 9.75299 142.263 12.093L142.248 12.22L146.455 12.781L146.476 12.657C146.985 9.64898 148.14 8.42198 150.463 8.42198C152.564 8.42198 153.543 9.51498 153.543 11.864V13.277C152.9 13.522 152.08 13.814 151.214 14.121C150.076 14.525 148.787 14.984 147.615 15.437C144.759 16.556 141.521 17.823 141.521 21.85C141.521 25.283 143.949 27.501 147.705 27.501C150.704 27.501 152.825 26.162 154.008 23.522H154.132C154.423 26.162 156.069 27.501 159.027 27.501C159.947 27.501 161.284 27.297 161.93 26.957L161.999 26.921V24.399L161.868 24.4ZM153.543 16.274V19.983C153.543 22.527 151.892 24.237 149.434 24.237C147.581 24.237 146.56 23.23 146.56 21.403C146.56 19.31 147.942 18.545 149.611 17.828C151.053 17.196 152.084 16.815 152.992 16.478C153.181 16.408 153.364 16.341 153.543 16.274Z" fill="currentColor"></path>
      <path d="M104.073 23.5461C103.209 23.5461 102.551 23.4551 102.062 23.2701C101.12 22.9131 100.952 22.1411 100.952 20.1441V9.15105H106.14V5.52195H100.952V1.15625H95.7899V5.52195H91.7959V9.15105H95.7899V20.3871C95.7899 24.2511 96.2189 25.6911 98.7569 26.5981C99.6219 26.9311 100.984 27.0941 102.921 27.0941H106.593V23.5461H104.074H104.073Z" fill="currentColor"></path>
      <path d="M27.8851 6.30604C27.4651 4.89054 26.1797 -0.0472643 22.8398 0.549836C19.8136 1.07334 19.2387 5.80704 18.4955 9.89304C18.2692 11.4 16.8937 11.352 16.5391 9.95404C15.5375 7.03224 14.5079 -0.0999583 10.5349 0.547242C6.94122 1.13254 7.10742 9.18204 6.64072 13.593C6.57392 14.221 5.99172 14.674 5.35132 14.673L2.28712 14.669C0.893621 14.667 -0.178779 15.887 0.0255205 17.247C0.38412 19.632 1.20272 24.421 1.55732 26.525C1.61812 26.885 1.92192 27.148 2.27782 27.147L7.53612 27.142C7.97882 27.146 8.32342 26.745 8.26462 26.293C7.41932 19.747 6.69612 13.029 9.05322 12.595C11.4069 12.161 12.4733 19.441 13.6652 26.513C13.726 26.873 14.0298 27.136 14.3857 27.135L19.6106 27.13C20.0433 27.134 20.3812 26.751 20.3418 26.311C20.3418 26.308 20.3418 26.304 20.3411 26.301C20.3405 26.294 20.3411 26.288 20.3398 26.281C19.4965 19.753 18.8347 13.112 21.0783 12.613C23.432 12.181 24.5792 19.46 25.7711 26.531C25.8319 26.891 26.1357 27.153 26.4916 27.153L31.804 27.14C32.2661 27.139 32.61 26.703 32.5165 26.236C32.1512 24.43 31.5863 21.776 30.9633 18.946C30.4445 16.589 28.2657 7.58524 27.8865 6.30604H27.8851Z" fill="currentColor"></path>
    </g>
  </svg>`;


  
  const logoAlan = `<svg class="client_logo is-alan" viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5 13.5C22.5 16.8 19.8 19.5 16.5 19.5C13.2 19.5 10.5 16.8 10.5 13.5C10.5 10.2 13.2 7.5 16.5 7.5C19.8 7.5 22.5 10.2 22.5 13.5Z" fill="currentColor"></path>
    <path d="M43.5 13.5C43.5 16.8 40.8 19.5 37.5 19.5C34.2 19.5 31.5 16.8 31.5 13.5C31.5 10.2 34.2 7.5 37.5 7.5C40.8 7.5 43.5 10.2 43.5 13.5Z" fill="currentColor"></path>
    <path d="M27 18C24.5 18 22.5 20 22.5 22.5C22.5 25 24.5 27 27 27C29.5 27 31.5 25 31.5 22.5C31.5 20 29.5 18 27 18Z" fill="currentColor"></path>
    <path d="M19 28C21.5 31 24.5 32 27 32C29.5 32 32.5 31 35 28C36 27 37 27.5 36.5 28.5C33.5 33 29.5 34.5 27 34.5C24.5 34.5 20.5 33 17.5 28.5C17 27.5 18 27 19 28Z" fill="currentColor"></path>
    <path d="M72.5 24.5C72.5 20.5 69.5 17.5 65 17.5C60.5 17.5 57.5 20.5 57.5 24.5C57.5 28.5 60.5 31.5 65 31.5C69.5 31.5 72.5 28.5 72.5 24.5ZM77.5 12V31H72.5V29C71 31 68.5 32 65 32C58 32 52.5 28 52.5 21.5C52.5 15 58 11 65 11C68.5 11 71 12 72.5 14V12H77.5Z" fill="currentColor"></path>
    <path d="M82.5 5V31H87.5V5H82.5Z" fill="currentColor"></path>
    <path d="M112.5 24.5C112.5 20.5 109.5 17.5 105 17.5C100.5 17.5 97.5 20.5 97.5 24.5C97.5 28.5 100.5 31.5 105 31.5C109.5 31.5 112.5 28.5 112.5 24.5ZM117.5 12V31H112.5V29C111 31 108.5 32 105 32C98 32 92.5 28 92.5 21.5C92.5 15 98 11 105 11C108.5 11 111 12 112.5 14V12H117.5Z" fill="currentColor"></path>
    <path d="M122.5 12H127.5V14.5C129 12.5 131.5 11 135.5 11C142 11 146 15 146 22V31H141V22.5C141 18 138.5 15.5 134.5 15.5C130.5 15.5 127.5 18 127.5 22.5V31H122.5V12Z" fill="currentColor"></path>
  </svg>`;

     const logoChance = `<svg class="client_logo is-chance" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%);">
<mask id="mask0_2019_1788" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="160" height="28">
<path d="M159.5 0.5H0.5V27.5H159.5V0.5Z" fill="white"></path>
</mask>
<g mask="url(#mask0_2019_1788)">
<path d="M13.8048 0.5C18.1291 0.5 22.1873 2.6488 24.682 6.2263L20.2469 9.905C18.872 7.6325 16.4327 6.2375 13.8048 6.2263C9.66909 6.2713 6.3538 9.702 6.3981 13.899C6.3981 13.932 6.3981 13.966 6.3981 14C6.2983 18.196 9.5693 21.672 13.705 21.774C13.7383 21.774 13.7716 21.774 13.8048 21.774C16.4327 21.774 18.872 20.368 20.2469 18.095L24.682 21.774C20.4465 27.871 12.1527 29.334 6.1431 25.036C0.133496 20.739 -1.3079 12.324 2.9276 6.2263C5.4224 2.6375 9.48059 0.5 13.8048 0.5Z" fill="currentColor"></path>
<path d="M29.8721 0.792969H35.7376V11.143H46.1491V0.792969H52.0145V27.208H46.1491V16.869H35.7376V27.208H29.8721V0.792969Z" fill="currentColor"></path>
<path d="M56.1064 27.207H62.2602L64.1673 23.113H73.6918L75.566 27.207H81.719L68.9129 0.5L56.1064 27.207ZM66.4071 18.275L68.9129 12.807L71.452 18.275H66.4071Z" fill="currentColor"></path>
<path d="M108.131 0.5V27.207H102.265V13.404L85.8438 27.5V0.792503H91.7097V14.596L108.131 0.5Z" fill="currentColor"></path>
<path d="M127.299 0.5C131.624 0.5 135.682 2.6375 138.188 6.2263L133.752 9.905C132.377 7.6212 129.938 6.2375 127.299 6.2263C123.163 6.2825 119.859 9.725 119.915 13.921C119.915 13.944 119.915 13.978 119.915 14C119.815 18.196 123.086 21.672 127.222 21.774C127.255 21.774 127.277 21.774 127.31 21.774C129.949 21.774 132.389 20.379 133.763 18.095L138.199 21.774C133.963 27.871 125.669 29.334 119.66 25.036C113.65 20.739 112.209 12.324 116.444 6.2263C118.928 2.6375 122.986 0.5 127.299 0.5Z" fill="currentColor"></path>
<path d="M143.377 0.792969H159.499V6.67667H149.243V11.177H157.304V16.903H149.243V21.403H159.499V27.287H143.377V0.792969Z" fill="currentColor"></path>
</g>
</svg>`;

  const logoSilvrBox = `<svg class="client_logo is-silvr-pill" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="1.5" width="137" height="35" rx="17.5" stroke="currentColor" stroke-width="3"/>
    <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="'GT Pressura Mono Regular Regular', monospace, sans-serif" font-size="19" font-weight="900" letter-spacing="3" fill="currentColor">SILVR</text>
  </svg>`;

  function initFooter() {
    if (document.getElementById("main-footer")) return;

    // Create footer container element
    const footer = document.createElement("footer");
    footer.setAttribute("id", "main-footer");

    footer.innerHTML = `
      <!-- 1. Client Logos Bar (Row 1) -->
      <div class="footer-logos-row">
        <div class="footer-logo-item">${logoQonto}</div>
        <div class="footer-logo-item">${logoMatera}</div>
        <div class="footer-logo-item">${logoChance}</div>
        <div class="footer-logo-item">${logoSilvrBox}</div>
        <div class="footer-logo-item">${logoAlan}</div>
      </div>

      <!-- 2. Main Hero CTA Block (Row 2): LET'S WORK TOGETHER + Statement -->
      <div class="footer-hero-cta">
        <div class="footer-cta-left">
          <h1 class="animate saira-extra-condensed-black footer-work-title">LET'S WORK</h1>
          <div class="footer-together-line">
            <div class="footer-photo-badge">
              <img src="https://cdn.prod.website-files.com/67aca0c732855fc2a1f2c4fc/68beb68ead192a24f9ad4372_silvr%20case%20cover%20(1).webp" alt="Studio Namma Team">
            </div>
            <h1 class="animate saira-extra-condensed-black footer-together-title">TOGETHER</h1>
          </div>
        </div>

        <div class="footer-cta-right">
          <p class="footer-cta-statement">Work with us if average isn’t your thing.<br>Drop it, we’ll build it!</p>
          <a class="footer-say-hello" href="mailto:hello@studionamma.com">SAY HELLO →</a>
        </div>
      </div>

      <!-- 3. Client Showcase Cards Row (Row 3): Video Cards -->
      <div class="footer-cards-grid">
        <div class="footer-card">
          <video autoplay loop muted playsinline src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa249c8ad1d2624abf3d5_Footer-Service-designV2-transcode.mp4"></video>
        </div>
        <div class="footer-card">
          <video autoplay loop muted playsinline src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa1926bb2adbd4315d488_Zefir%20footerV2-transcode.mp4"></video>
        </div>
        <div class="footer-card">
          <video autoplay loop muted playsinline src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa0feb2681e0616dc3b3a_Footer-supercomics-transcode.mp4"></video>
        </div>
        <div class="footer-card">
          <video autoplay loop muted playsinline src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa20fc54b7796aaa5edf6_SILVR-Video%201%20footersV3-transcode.mp4"></video>
        </div>
        <div class="footer-card">
          <video autoplay loop muted playsinline src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa0feb2681e0616dc3b3a_Footer-supercomics-transcode.mp4"></video>
        </div>
        <div class="footer-card">
          <video autoplay loop muted playsinline src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa22f852959114b6c7b56_OSOL-COVER-footer-V2-transcode.mp4"></video>
        </div>
      </div>

      <!-- 4. Navigation Links & Company Info (Row 4) -->
      <div class="footer-info-grid">
        <div class="footer-nav-columns">
          <div class="footer-links-group">
            <a class="footer-link" href="index.html">HOME</a>
            <a class="footer-link" href="javascript:void(0)">WORK</a>
            <a class="footer-link" href="javascript:void(0)">SERVICES</a>
            <a class="footer-link" href="javascript:void(0)">STUDIO</a>
            <a class="footer-link" href="javascript:void(0)">PLANS</a>
            <a class="footer-link" href="approach.html">APPROACH</a>
            <a class="footer-link" href="javascript:void(0)">NEWS</a>
          </div>
          <div class="footer-links-group">
            <a class="footer-link" href="javascript:void(0)" target="_blank">YOUTUBE</a>
            <a class="footer-link" href="javascript:void(0)" target="_blank">LINKEDIN</a>
            <a class="footer-link" href="javascript:void(0)" target="_blank">INSTAGRAM</a>
            <a class="footer-link" href="javascript:void(0)">LEGAL</a>
            <a class="footer-link" href="javascript:void(0)">SITE EN FRANÇAIS</a>
          </div>
        </div>

        <div class="footer-details-group">
          <p>WE ARE A CREATIVE STUDIO BASED IN PARIS, BARCELONA & LONDON.</p>
          <p>BIG PROJECT? CRAZY THOUGHT? OR JUST FEEL LIKE CHATTING?</p>
          <p>LET'S TALK!<br><a class="footer-contact-link" href="mailto:hello@studionamma.com">HELLO@STUDIONAMMA.COM</a></p>
          <p>COPYRIGHT 2025<br>STUDIO NAMMA</p>
        </div>
      </div>

      <!-- 5. Giant NAMMA Brand Banner -->
      <div class="footer-namma-wrapper">
        <h1 class="footer-giant-namma animate" id="footerGiantNamma">NAMMA</h1>
      </div>
    `;

    // Inject into document body
    document.body.appendChild(footer);

    // Fit NAMMA text to fill the footer container width precisely via binary search
    const giantNamma = document.getElementById("footerGiantNamma");
    function fitNammaText() {
      if (!giantNamma || !giantNamma.parentElement) return;
      const containerWidth = giantNamma.parentElement.offsetWidth;
      if (containerWidth === 0) return;
      let lo = 40, hi = 2000;
      for (let i = 0; i < 20; i++) {
        const mid = (lo + hi) / 2;
        giantNamma.style.fontSize = mid + "px";
        if (giantNamma.scrollWidth <= containerWidth) lo = mid;
        else hi = mid;
      }
      giantNamma.style.fontSize = Math.floor(lo) + "px";
    }
    requestAnimationFrame(() => fitNammaText());
    window.addEventListener("resize", fitNammaText, { passive: true });

    // Observer for LET'S WORK & TOGETHER headings - ONE-WAY (stay shown once revealed)
    const animHeadings = footer.querySelectorAll(".animate:not(#footerGiantNamma)");
    if (animHeadings.length && typeof IntersectionObserver !== "undefined") {
      const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
          // no remove - they stay shown
        });
      }, { threshold: 0.1 });

      animHeadings.forEach((h) => footerObserver.observe(h));
    }

    // Observer for NAMMA only - TWO-WAY (hides again on back scroll)
    if (giantNamma && typeof IntersectionObserver !== "undefined") {
      const nammaObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            giantNamma.classList.add("show");
          } else {
            giantNamma.classList.remove("show");
          }
        });
      }, { threshold: 0.05 });

      nammaObserver.observe(giantNamma);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFooter);
  } else {
    initFooter();
  }
})();
