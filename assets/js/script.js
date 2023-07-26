window.onscroll = () => {
    toggleTopButton();
  }
  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-top').style.display = 'flex';
    } else {
      document.getElementById('back-to-top').style.display = 'none';
    }
  }