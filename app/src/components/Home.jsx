
import "./home.css"


const Home =()=>{
    return(
       <>
       <div className="home-image-grid">
        <div className="grid-inside">
            <div><img src="https://coschedule.com/img/home/h1.png" alt=""/></div>
            <div><img src="https://coschedule.com/img/home/h2_1.png" alt=""/>
            <img src="https://coschedule.com/img/home/h2_2.png" alt=""/>
        <img src="https://coschedule.com/img/home/h2_1.png" alt=""/></div>
            <div><img src="https://coschedule.com/img/home/h4_1.png" alt=""/>
            <img src="https://coschedule.com/img/home/h4_2.png" alt=""/></div>
            <div><img src="https://coschedule.com/img/home/h1.png" alt=""/></div>
            <div><img src="https://coschedule.com/img/home/h5_2.png" alt=""/></div>
        </div>
        <div className="grid-inside col2">
            <div><img src="https://coschedule.com/img/home/h6.png" alt=""/></div>
            <div><img src="https://coschedule.com/img/home/h7_1.png" alt=""/>
            <img src="https://coschedule.com/img/home/h7_2.png" alt=""/></div>
            <div><img src="https://coschedule.com/img/home/h7_2.png" alt=""/>
            <img src="https://coschedule.com/img/home/h8_2.png" alt=""/></div>
            <div><img src="https://coschedule.com/img/home/h9.png" alt=""/></div>
            <div><img src="https://coschedule.com/img/home/h10.png" alt=""/></div>
        </div>
    </div>


    <div className="logo-section">
        <div className="logo-title">
            <h2 className="logo-heading">
                30,000 marketers start their day with CoSchedule
            </h2>
        </div>
        <div className="logo-container">
            <div className="container">
                <picture>
                    <img src="https://coschedule.com/img/testimonials/forbes-logo2.png"  width="200"
                        height="70" loading="lazy" alt="img"/>
                </picture>
                <picture>
                    <img src="https://coschedule.com/img/testimonials/yamaha-logo2.png" width="200" alt="img"/>
                </picture>
                <picture>
                    <img src="https://coschedule.com/img/testimonials/unicef-logo2.png" alt="img"/>
                </picture>
                <picture>
                    <img src="https://coschedule.com/img/testimonials/convertkit-logo2.png" alt="img"/>
                </picture>
                <picture>
                    <img src="https://coschedule.com/img/testimonials/walgreens-logo2.png" alt ="img"/>
                </picture>
                <picture>
                    <img src="https://coschedule.com/img/testimonials/dictionary-com-logo2.png" alt="img" />
                </picture>
                <picture>
                    <img src="https://coschedule.com/img/testimonials/p-and-g-logo2.png" width="200" height="70" loading="lazy" alt="img"/>
                </picture>
                <picture>
                    <img src="https://coschedule.com/img/testimonials/schwans-logo2.png" width="200" height="70" loading="lazy"  alt ="img"/>
                </picture>
            </div>
        </div>
    </div>

    <div className="our-products gray">
        <div className="container">
            <div className="our-p-title">
                <h2>Our Products</h2>
            </div>
            <div className="our-p-content">
                <div className="row">
                    <div className="col border-right">
                        <div className="price-upper">
                            <img src="https://coschedule.com/img/product/marketing-calendar-product-icon.png" alt=""/>
                            <h2>Marketing Calendar</h2>
                            <p>A calendar that helps you see, schedule, and share your marketing.</p>
                        </div>
                        <div className="price-lower">
                            <ul class="market">
                                <li className="pop-tip">
                                    <span>Real-time marketing calendar</span>
                                    <div class="pop-content">
                                        <p>See all of your marketing projects in a single calendar. Projects include email marketing, website
                                            content, events, and many&nbsp;more.</p>
                                    </div>
                                </li>
                                <li>Social publishing &amp; automation</li>
                                <li>Save custom views of your calendar</li>
                                <li>Share read-only calendars</li>
                                <li>Easily reschedule projects</li>
                            </ul>
                        </div>
                        <a href="#"><button
                                class="btn btn-default">Explore More</button></a>
                    </div>
                    <div className="col">
                        <div className="price-upper">
                            <img src="https://coschedule.com/img/product/coschedule-suite-product-icon.svg" alt=""/>
                            <h2>Marketing Suite</h2>
                            <p>A family of agile marketing products to coordinate your team, projects, and process.</p>
                        </div>
                        <div className="price-lower">
                            <ul class="market">
                                <li>Manage marketing requests</li>
                                <li>Automate team workflows</li>
                                <li>Sort your calendar by team</li>
                                <li>Store assets and files</li>
                                <li>Track team progress</li>
                            </ul>
                        </div>
                        <a href="#"><button class="btn btn-default btn-suite">Explore
                                More</button> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
       
       </>
    )
}

export default Home;