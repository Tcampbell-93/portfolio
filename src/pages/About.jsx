import Tyler from '../images/Tyler.jpg'

// simple about me page with a open introduction
export default function About() {
    return (
      <div className="container">
        <h1>About Me</h1>
        <p>
          Hi, my name is Tyler Campbell. I am an aspiriing full stack software engineer. 
          I am currently enrolled in UC Davis's software engineering bootcamp and hoping
          to graduate in early June. A little bit about me, I love hiking, fishing, 
          camping and anything outdoors. I like to play sports and go disk golfing in 
          my off time. My favorite sport is Hockey. I began my journey of becoming a 
          full stack software engineer about a year ago when I began looking into 
          bootcamps. I am very excited to show you what I have learned in the preceeding
          months. Please take a look at my portfolio and resume. 
          Thank you for visiting my page.
          
          - Tyler Campbell
        </p>
        {/* adding an image of me for the page */}
        <img src={Tyler} alt='Tyler' className='profile-pic' />
      </div>
    );
  }