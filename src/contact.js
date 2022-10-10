const renderContactPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML = `
      <div class="hero">
      <h1>Contact us</h1>
    </div>
    <div class="contact-container">
      <div class="info">
        <div class="contact-form">
          <form onsubmit="return false">
            <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
            <div class="input-box">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div class="input-box">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div class="input-box">
              <textarea required></textarea>
              <span>Type your request...</span>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
        <div class="location">
          <p>9999 Street Love<br />
              Alexandria, VA 9999 
            </p>
            <p><span>Mon-Thurs:</span>10am-7pm<br/><span>Fri-Sun:</span> 
              11am-5pm
            </p>
            <p><i class="fi-xnsrxl-phone-solid"></i>(999) 999- 9999</p>
        </div>   
      </div>
    </div>`;
  
    contentContainer.appendChild(contact);
  })();
  
  export { renderContactPage };