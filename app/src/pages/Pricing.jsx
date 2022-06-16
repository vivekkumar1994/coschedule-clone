
import "./pricing.css"

const Pricing = () => {
  return (
    <>
    <div class="home-heading">
            <h1 class="heding-h1">Organize Your Marketing with CoSchedule </h1>
            <p class="para-heading">Try it free for 14 days. No credit card required.</p>
            <div class="pricing">
                <p>Billed Monthly</p>
                <label class="pricing-rate">
                    <input type="checkbox" class="aj-pricing-toggle" checked="checked" value="true"/>
                    <span class="slider round"></span>
                </label>
                <p>Billed Annually<br/><span class="discount">Save 20%</span></p>
            </div>
        </div>


    <div class="our-products gray">
        <div class="container">
            <div class="our-p-content">
                <div class="row">
                    <div class="col">
                        <div class="price-upper">
                            <img src="https://coschedule.com/img/product/marketing-calendar-product-icon.png" alt=""/>
                            <div>
                            <h2>Marketing Calendar</h2>
                            <p>A calendar that helps you see, schedule, and share your marketing.</p>
                            </div>
                        </div>
                        <h3> $29</h3>
                        <p>per user / month</p>
                        <p>Billed Annually</p>
                        <a href="../Html/payment.html"><button class="btn btn-default">Explore More</button></a>
                        <div class="price-lower">
                            <ul class="market">
                                <li class="pop-tip">
                                    <span>Real-time marketing calendar</span>
                                    <div class="pop-content">
                                        <p>See all of your marketing projects in a single calendar. Projects include
                                            email marketing, website
                                            content, events, and many&nbsp;more.</p>
                                    </div>
                                </li>
                                <li>Social publishing &amp; automation</li>
                                <li>Save custom views of your calendar</li>
                                <li>Share read-only calendars</li>
                                <li>Easily reschedule projects</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="price-upper">
                            <img src="https://coschedule.com/img/product/coschedule-suite-product-icon.svg" alt=""/>
                            <div>
                            <h2>Marketing Suite</h2>
                            <p>A family of agile marketing products to coordinate your team, projects, and process.</p>
                            </div>
                        </div>
                        <h3 class="let">Let's Talk</h3>
                        <a href="#"><button class="btn btn-default btn-suite">Explore
                                More</button></a>
                                <div class="price-lower">
                                    <ul class="market">
                                        <li>Manage marketing requests</li>
                                        <li>Automate team workflows</li>
                                        <li>Sort your calendar by team</li>
                                        <li>Store assets and files</li>
                                        <li>Track team progress</li>
                                    </ul>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          

    
    </>
  )
}

export default Pricing
