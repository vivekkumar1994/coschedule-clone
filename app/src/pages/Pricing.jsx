
import "./pricing.css"

const Pricing = () => {
  return (
    <>
    <div className="firstheading">
        Stop managing work in spreadsheets. Take back control of your marketing with content calendar software from CoSchedule. <a href="signup.html"><button onclick="signup.html" id="free">Start A Free Trail</button></a> <button id="close">❌</button>
    </div>
      <div className="main_page">
        <div ClassName="logo_div">
            <img className="img_logo" src="https://coschedule.com/img/cos-logo-full-color.svg" alt='img'/>
        </div>
        <div>
            <h2 className="animate_animated_animate_bounce">Organize Your Marketing with CoSchedule</h2>
            <p className="organigedp">Try it free for 14 days. No credit card required.</p>
        </div>
    
        </div>
        <div className="bill_bar">
       <div className="bill_monthly">Billed Monthly</div>
       <div className="toggle">
        <label className="switch">
            <input type="checkbox" className="box" checked/>
            <span class="sliderround"></span>
          </label>
       </div>
       <div className="bill_annually">Billed Annully <p>save 20%</p></div>
        </div>
          
        <div id="Marketing">
             <div className="calender">
                 <div classname="calender_img">
                   <img className="animate__animated animate__fadeInDown"   src="https://coschedule.com/img/product/marketing-calendar-product-icon.png" />
                </div>
                <div className="mar_cal">
                <h2>Marketing Calendar</h2>
                <p>A calendar that helps you see, schedule, and share your marketing.</p>
                <div id="price"><h1>$39</h1><p>Billed Annually

                </p></div>
                <h4>per user / month</h4>
               <a href="signup.html"> <button className="button">Get Started Now</button></a>

               </div>
                </div>
                </div>

          

    
    </>
  )
}

export default Pricing
