const global = {
  currentPage: window.location.pathname,
};

// Init App
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html': 
      console.log('Home');
      break;
    case '/shows.html':
    console.log('Shows');
    break;
    case ' /movie-details.html':
    console.log('Movie Detaails');
    break;
    case ' /tv-details.html':
    console.log('Tv Detaails');
    break;
    case ' /search.html':
    console.log('Search');
    break;
  }
}

document.addEventListener("DOMContentLoaded", init);
