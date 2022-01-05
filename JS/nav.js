const creatNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `<div class="navbar">
    <div class="nav">
      <img src="/Public/img/dark-logo.png" class="brand-logo" alt="" />
      <div class="nav-items">
        <div class="search">
          <input type="text" class="search-box" placeholder="search brand" />
          <button class="search-btn">Search</button>
        </div>
        <a href="#"> <img src="/Public/img/user.png" alt="" /></a>
        <a href="#"> <img src="/Public/img/cart.png" alt="" /></a>
      </div>
    </div>
  </div>
  <ul class="links-container">
    <li class="link-item"><a href="#" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">women</a></li>
    <li class="link-item"><a href="#" class="link">men</a></li>
    <li class="link-item"><a href="#" class="link">kids</a></li>
    <li class="link-item"><a href="#" class="link">accessories</a></li>
  </ul>`;
};

creatNav();
