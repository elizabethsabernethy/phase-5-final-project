function Home() {
    
    return (
     <div className="parent-container">
        <div className="header">
           <h1>Welcome to Ruby Spa</h1> 
        </div>
        <div>
            <img alt="spa towels with red background" src="https://www.thelandingtahoe.com/content/uploads/2021/05/spa-towels-1920x1169.jpg"
        width="700px"
        height="400px"></img>
        </div>
        <div className="blurb-container">
            <h2>About</h2>
            <p>Ruby Spa was founded in 2023 to help bring clients the most luxurious retreat they could ever experience. We offer a varity of services to allow our clients the opportunity for a full day of spa relaxtion, or indivudal services if thats all you want! Each spa provider has numerous years of experience, which you can read more about in their profiles for each department. The Spa offers appointments for hair, nails, facials, and massages. You can veiw specific services for each department through their respective page on our site. Please feel free to explore, and when you're ready, book an appointment with one or many of our amazing providers!</p>
        </div>
        <div>
        <img alt="spa employees" src="https://elevationmedspa.com/wp-content/uploads/2018/08/Hero-22.jpg"
        width="700px"
        height="400px"></img>
        </div>
        <div className="blurb-container">
            <h2>Contact</h2>
            <p>If you have any questions regarding our services or providers, please feel free to contact us at anytime!
            </p>
            <h3>Phone</h3>
            <h4>1-800-782-9772</h4>
            <h3>Email</h3>
            <h4>front_desk@ruby_spa.com</h4>
            <h3>Location</h3>
            <h4>123 Gem St, Ruby Falls, TN 12345</h4>
            <div>
                <img alt="spa exterior" src="https://www.insidersguidetospas.com/wp-content/uploads/2018/01/Loma-de-Vida-Spa-Exterior-1.jpg"
                 width="700px"
                height="400px"></img>
            </div>
            <h3>Hours of Operation:</h3>
            <div id="hours">
                <p>Monday: Closed</p>
                <p>Tuesday: 9 AM - 5 PM</p>
                <p>Wednesday: 9 AM - 5 PM</p>
                <p>Thursday: 9 AM - 5 PM</p>
                <p>Friday: 8 AM - 7 PM</p>
                <p>Saturday: 8 AM - 7 PM</p>
                <p>Sunday: 10 AM - 3 PM</p>
            </div>
        </div>
        <div className="footer">
            <h4>Check us out on social media</h4>
            <div className="social-media">
                <img alt="instagram logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                 width="50px"
                height="50px"
                onClick={()=> alert("Thanks for checking out our Instagram")}></img>
                <img alt="facebook logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                 width="50px"
                height="50px"
                onClick={()=> alert("Thanks for checking out our Facebook")}></img>
                <img alt="twitter logo" src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                 width="50px"
                height="50px"
                onClick={()=> alert("Thanks for checking out our Twitter")}></img>
                <img alt="youtube logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
                 width="60px"
                height="50px"
                onClick={()=> alert("Thanks for checking out our Youtube")}></img>
            </div>

        </div>
     </div>
    );
  }
  
  export default Home;