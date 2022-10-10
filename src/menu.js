const renderMenuPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.innerHTML = `
    <div class="hero">
    <h1>Our Served Sweets </h1>
    <img src="./images/pic1.jpg" alt="" width="50" height="50" />
  </div>
  <div class="menu-container">
    <div class="menu-item">
      <img src="./images/pic2.jpg" alt="" />
      <div class="item-content">
        <h4>Mixed Cookies: <span>$15.99/lb</span></h4>
        <br>
        <p>
        Cookies Try For the Morning!! This treasure is stuffed with mixed nutes paste along with a touch of orange blossom 
        water.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./images/pic2.jpg" alt="" />
      <div class="item-content">
        <h4>Almond Mixed: <span>$22.99/lb</span></h4>
        <br>
        <p>True...cookie connoisseurs should search for corne de gazelle covered in toasted almond slices or 
        stuffed with sweet, ground sesame with even more sesame seeds sprinkled on top.</p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./images/pic2.jpg" alt="" />
      <div class="item-content">
        <h4>HA Almond Cookies: <span>$31.49/lb</span></h4>
        <br>
        <p>Sweets are drizzled with honey, argan oil, and stuffed with almond paste.</p>
      </div>
    </div>
  </div>`;
  
    contentContainer.appendChild(menu);
  })();
  
  export { renderMenuPage };