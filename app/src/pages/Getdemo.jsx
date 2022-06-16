import "./getdemo.css"

const Getdemo = () => {
  return (
    <>

     <div className="box1">
        <img src="https://coschedule.com/img/cos-logo-full-color.svg" alt=""/>
    </div>
    <h1 className="heading1"> See CoSchedule In Action </h1>
    <p className="p1"> See how you can organize everything in one place with CoSchedule.</p>
    

    <div className="box2">
        <form>
            <p className="box2p1">Full Name</p>
            <input className="p1input" type="text" placeholder="Full name"/>
            <p className="box2p2">Email Address</p>
            <input className="p2input" type="email" placeholder="Work email address" />
            <p className="box2p3">Compony</p>
            <input className="p3input" type="text" placeholder="Company Name"/>
            <p className="box2p4">Website URL</p>
            <input className="p4input" type="text" placeholder="Company website URL"/>
            <br/>
            <br/>
            <input className="button" type="submit" value = "Next"/> 
        
        </form>
      
       <p className="box2p5">By signing up, you agree to CoSchedules <u>terms of service, end user agreement,<br/> and privacy policy</u>; you are 16 years or older; and you will receive information <br/> from CoSchedule from which you can opt out at any time.</p>
    </div>
    <p className="last">© Copyright 2022, all rights reserved. See our Terms & Policies.</p>
    
    </>

    
    
  )
}

export default Getdemo
