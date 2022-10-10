const renderHomePage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const home = document.createElement("div");
    home.classList.add("tab-content")
    home.innerHTML = `<div id="home" class="active" data-tab-content>
    <div class="hero">
      <h1>What Do We Offer?Just the finest quality products</h1>
      <p>When you head out shopping for sweets, seek out the neighborhood bakery and pasty shop.</p>
      <div class="btn-container">
        <a data-tab-target="#menu" class="order-now">Order Now</a>
      </div>
    </div>
    <div class="info">
      <div class="address">
        <span><i class="fi-xnsuxl-map-marker-solid"></i></span>
        <p>9999 Street Love <br/>Alexandria, VA 99999</p>
      </div>
      <div class="hours">
        <span><i class="fi-cnsuhl-clock-solid"></i></span>
        <p>
          <span>Mon-Thurs:</span>10am-7pm<br /><span>Fri-Sun:</span
          >11am-5pm
        </p>
      </div>
    </div>
  </div>`;
  
    contentContainer.appendChild(home);
  })();
  
  export { renderHomePage };