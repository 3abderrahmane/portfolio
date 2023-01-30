const renderContactPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.setAttribute("id", "colsntact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML = `
    <section class="contact-me" id="contact-me">
      <h1>Contact Me</h1>
      <div class="row1">
        <div class="col">
          <i class="fa-solid fa-location-crosshairs"></i>
          <h3>Location:</h3>
          <h3 class="secondary-text">Alexandria, Virginia, USA</h3>
        </div>
        <div class="col">
          <i class="fa-solid fa-phone"></i>
          <h3>Phone Number:</h3>
          <h3 class="secondary-text">+571-290-8056</h3>
        </div>
        <div class="col">
          <i class="fa-regular fa-envelope"></i>
          <h3>Email Address</h3>
          <h3 class="secondary-text">Technologva@gmail.com</h3>
        </div>
      </div>
      <div class="row2">
        <div class="col1 formdata">
          <form>
            <input type="text" placeholder="Name" id="name" required="">
            <input type="text" placeholder="Email" id="email" required=""><br>
            <input type="text" placeholder="Subject" id="subject" required=""><br>
            <textarea rows="6" cols="60" placeholder="Message" id="message" required=""></textarea>
          </form>
          <button id="submit">Submit</button>
        </div>
        <div class="col1" id="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.366503730401!2d-77.13387728515728!3d38.82406645886941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3b0a616b145%3A0xbb6d75be40796dd6!2s5555%20N%20Morgan%20St%2C%20Alexandria%2C%20VA%2022312!5e0!3m2!1sen!2sus!4v1674710299339!5m2!1sen!2sus"
            width="100%" height="400" style="border:0" 
            allowfullscreen="" 
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      
  </section>
  <footer>
         <span id="copyrightyear">hhh</span>
  </footer>`;
  
    contentContainer.appendChild(contact);
  })();
  
  export { renderContactPage };