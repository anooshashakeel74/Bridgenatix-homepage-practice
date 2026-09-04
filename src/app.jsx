import {useState} from "react";
import {NavLink} from "react-router-dom";
import {LucideMonitor, Headphones, NotebookText, AtomIcon, Cloud,LucideRectangleHorizontal,Quote,LucidePhone,MapPinIcon,LucideMail} from "lucide-react";
import {FaLinkedin,FaInstagram,FaFacebook,FaYoutube} from 'react-icons/fa6';
import CountUp from "react-countup"
import "./style.css";


function Header()
{
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="headerclass">
             <div className="logo-wrapper">
                 <NavLink to="/" className="logo-link">
                   <img src="logo.png" alt="BridgeNatix" className="logo-img"></img>
                 </NavLink>
             </div>

             <nav className={`nav-link-group ${menuOpen ?"open":""}`}>
                 <NavLink to="/" onClick={()=>setMenuOpen(false)}>Home</NavLink>
                 <NavLink to="/services" onClick={()=>setMenuOpen(false)}>Services</NavLink>
                 <NavLink to="/about" onClick={()=>setMenuOpen(false)}>About</NavLink>
                 <NavLink to="/whychooseus" onCLick={()=>setMenuOpen(false)}>Why Choose Us</NavLink>
                 <NavLink to="/careers" onClick={()=>setMenuOpen(false)}>Careers</NavLink>
                 <NavLink to="/blog" onClick={()=>setMenuOpen(false)}>Blog</NavLink>
                 <NavLink to="/Contact" onClick={()=>setMenuOpen(false)}>Contact</NavLink>
             </nav>
            <button className="menu-toggle" aria-label="Menu" onClick={()=>setMenuOpen(!menuOpen)}>
                <span></span><span></span><span></span>
            </button>
        </div>

    );
}
function Homepage(){
    const tickeritems = [
        {text: "Digital Marketing & Growth Strategy Services",path:"/services/marketingservices"},
        {text:"Customer Support Solutions",path:"/services/customersupport"},
        {text:"Cloud & DevOps Solutions",path:"/services/clouddevops"},
        {text:"AI & Data Solutions",path:"/services/aianddata"},
        {text:"Enterprise Software Development Services",path:"/services/enterprisesolutions"},
        {text:"CyberSecurity & Compliance",path:"/services/cybersecurity"},
        {text:"UI/UX Design & Product Strategy",path:"/services/uianduxdeisgns"},
        {text:"Mobile App Development",path:"/services/mobileappdevelopment"},
        {text:"QA & Testing Services",path:"/services/qaandtesting"}
    ];
    const combinedtickerdata = [...tickeritems, ...tickeritems];

    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
    const[description,setdescription]=useState("");

    const [showPopup, setShowPopup] = useState(false);

    function addclient(e){
        e.preventDefault();

        if (firstname === "" || lastname === "" || email === "" || phone === "") {
        console.log("Validation Failed: Empty required fields detected.");
        return;
        }

        const finalizedQuoteData = {
            clientFirstName: firstname,
            clientLastName: lastname,
            clientEmail: email,
            clientPhone: phone,
            clientDescription: description
        };

        console.log("Captured Qoute Request Data Model:",finalizedQuoteData);
        setShowPopup(true);

        setfirstname("");
        setlastname("");
        setemail("");
        setphone("");
        setdescription("");
    }

    function handleSendAnother() {
        setfirstname("");
        setlastname("");
        setemail("");
        setphone("");
        setdescription("");

        setShowPopup(false);
    }

    return(
        <div className="page-wrapper">
            <Header/>
            <main className="home-container">
                <div className="left-content">
                    <div className="badge-container">
                        <span className="badge-dot"></span>
                         Full-Service Digital Agency
                    </div>

                    <h1 className="title">
                        Digital Transformation<br/>
                        Partner for <span>Growing Businesses</span>
                        </h1>
                    <p className="description">
                        BridgeNatix builds, launches, and grows technology<br/>
                        products for businesses at every stage. We combine<br/>
                        software development, AI automation, data analytics, and<br/>
                        digital marketing into a single working partnership.
                    </p>

                    <div className="buttons-row">
                        <NavLink to="/services" className="button-outline">
                            Our Services
                        </NavLink>
                        <NavLink to="/customersupport" className="button-filled">
                            Get Free Consultation
                        </NavLink>
                    </div>
                </div>
            </main>
            <div className="ticker-wrapper" >
                <div className="ticker-track">
                    {
                        combinedtickerdata.map((item,index)=>(
                            <NavLink key={index} to={item.path} className="ticker-item">
                                {item.text}
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <section className="about-container">
                <div className="about-left">
                    <div className="badge-container">
                        <span className="badge-dot"></span>
                            About Us
                    </div>
                    <h1 className="about-title">
                        BridgeNatix <br/> Build <span>Future</span>
                    </h1>
                    <div className="about-feature-box">
                        <div className="feature-icon-box">
                            <span className="feature-icon" style={{ fontWeight: "500" }}>⚛</span>
                        </div>
                        <div className="feature-text">
                            <h3 >
                                Embedded Extension of Your Team
                            </h3>
                            <p className={"description-title"}>
                                We operate from Lahore, Pakistan, serving clients internationally<br/>
                                (with depth in the UK). We work as an embedded extension of your<br/>
                                operations — not an outsourced supplier who disappears after <br/>
                                delivery.
                            </p>
                        </div>
                    </div>
                    <div className="about-feature-box">
                        <div className="feature-icon-box">
                            <span className="feature-icon">☀</span>
                        </div>
                        <div className="feature-text">
                            <h3 >Outcome-Driven Model</h3>
                            <p className="description-title">
                                Our engagement model is designed around measurable business<br/>
                                outcomes: leads generated, systems shipped, and revenue<br/>
                                increased. Work with one team instead of four vendors.
                            </p>
                        </div>
                    </div>
                    <NavLink to ="/about" className="about-btn">
                        Learn More About Us  ➔
                    </NavLink>
                </div>
                <div className="about-right">
                    <div className="img-left">
                        <img src="about-img1.jpg" alt="laptop" loading={"lazy"}/>
                    </div>
                    <div className="img-right">
                        <img src="about-img2.jpg" alt="team" loading={"lazy"}/>
                    </div>
                    <div className="floating-badge">
                        <h2>21+</h2>
                        <span>Years of experience</span>
                    </div>
                </div>
            </section>
            <section className="service-section">
                <div className="badge-container">
                    <span className="badge-dot"></span>
                        What We Build
                </div>
                <h1 className="about-title">
                    Services
                </h1>
                <div className="services-flex-card">
                <div className="services-box1">
                    <div className="services-icon-box">
                        <span className="services-icon">
                               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                   <path d="M3 21h18M3 21V10l5 3 5-8 3 3 5-4v17H3" strokeLinecap="round" strokeLinejoin="round"></path>
                                   <path d="M7 17.5v.01M12 15v.01M17 13.5v.01" strokeLinecap="round"></path>
                               </svg>
                        </span>
                    </div>
                    <div className="service-text">
                        <h3 className="service-title">
                            Digital Marketing & Growth Strategy Services
                        </h3>
                        <p className="service-description">
                            <ul className="points">
                                <li>SEO & Content Strategy</li>
                                <li>PPC & Paid Media Campaigns</li>
                                <li>Email Marketing & CRM Automation</li>
                                <li>Conversion Rate Optimisation</li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/marketingservices" className="service-box-btn">
                        View All ➔
                    </NavLink>
                </div>
                <div className="services-box2">
                    <div className="services-icon-box">
                        <span className="services-icon">
                               <LucideMonitor size={"24"}/>
                        </span>
                    </div>
                    <div className="service-text">
                        <h3 className="service-title">
                            Enterprise Software Development Services
                        </h3>
                        <p className="service-description">
                            <ul className="points">
                                <li>Custom ERP & CRM Architecture</li>
                                <li>SaaS Platform Development</li>
                                <li>Phased Discovery & Spec Mapping</li>
                                <li>Legacy System Migration & Refactoring</li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/enterprisesolutions" className="service-box-btn">
                        View All ➔
                    </NavLink>
                </div>

                <div className="services-box3">
                    <div className="services-icon-box">
                        <span className="services-icon">
                               <NotebookText size={"24"}/>
                        </span>
                    </div>
                    <div className="service-text">
                        <h3 className="service-title">
                            Finance & Accounting Solutions and Services
                        </h3>
                        <p className="service-description">
                            <ul className="points">
                                <li>Bookkeeping & General Ledger Management</li>
                                <li>Accounts Payable & Accounts Receivable</li>
                                <li>Bank Reconciliation & Financial Reporting</li>
                                <li>Budgeting, Forecasting & Compliance Support</li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/financeandaccounting" className="service-box-btn">
                        View All ➔
                    </NavLink>
                </div>
                <div className="services-box4">
                    <div className="services-icon-box">
                        <span className="services-icon">
                               <AtomIcon size={"24"}/>
                        </span>
                    </div>
                    <div className="service-text">
                        <h3 className="service-title">
                            AI and Data Solutions Services
                        </h3>
                        <p className="service-description">
                            <ul className="points">
                                <li>Automated Document Processing</li>
                                <li>Machine Learning Models in Production</li>
                                <li>Data Warehousing & ETL Pipelines</li>
                                <li>Business Intelligence Dashboards</li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/aianddata" className="service-box-btn">
                        View All ➔
                    </NavLink>
                </div>
                <div className="services-box5">
                    <div className="services-icon-box">
                        <span className="services-icon">
                               <Headphones size={"24"}/>
                        </span>
                    </div>
                    <div className="service-text">
                        <h3 className="service-title">
                            Customer Support Solutions
                        </h3>
                        <p className="service-description">
                            <ul className="points">
                                <li>Omnichannel Ticketing Systems</li>
                                <li>Ticket Routing & Escalation Logic</li>
                                <li>Trained External Agent Teams</li>
                                <li>CSAT & Resolution Analytics</li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/customersupport" className="service-box-btn">
                        View All ➔
                    </NavLink>
                </div>
                <div className="services-box6">
                    <div className="services-icon-box">
                        <span className="services-icon">
                               <Cloud size={"24"}/>
                        </span>
                    </div>
                    <div className="service-text">
                        <h3 className="service-title">
                            Cloud & DevOps Solutions
                        </h3>
                        <p >
                            <ul className="points">
                                <li>AWS & Azure Cloud Migration</li>
                                <li>Automated CI/CD Pipelines</li>
                                <li>Infrastructure as Code (IaC)</li>
                                <li>24/7 Server Monitoring</li>
                            </ul>
                        </p>
                    </div>
                    <NavLink to="/services/clouddevops" className="service-box-btn">
                        View All ➔
                    </NavLink>
                </div>
                </div>
                <NavLink to="customersupport" className="service-btn">
                    Get Consultation
                </NavLink>
            </section>
            <section className="work-section">
                <div className="work-left">
                    <div className="badge-container">
                        <span className="badge-dot"></span>
                        How We Work
                    </div>
                    <h1 className="about-title">
                        Who We Work With
                    </h1>
                    <p className="description">
                        From early startups to established SMEs, we partner with
                        businesses looking to scale, automate, and dominate their
                        digital presence.
                    </p>
                    <NavLink href="#contact" className="about-btn">
                        Start a Conversation
                    </NavLink>
                    <div className="about-feature-box">
                        <div className="services-icon-box">
                            <div className="services-icon">
                                <LucideRectangleHorizontal size={"24"}/>
                            </div>
                        </div>
                        <div className="feature-text">
                        <h3>
                            Tailored Solutions for Every Stage
                        </h3>
                        <p className="description-title">
                            We build outcome-driven partnerships with shared timelines and accountability.
                            <ul className="points" >
                                <li><b style={{color:"#1f1f24"}}>Startups:</b> Moving fast from initial prototype to successful launch.</li>
                                <li><b style={{color:"#1f1f24"}}>SMEs:</b> Replacing outgrown systems with custom software & marketing.</li>
                                <li><b style={{color:"#1f1f24"}}>Established Brands:</b> Automating workflows without in-house tech bloat.</li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="work-right">
                    <div className="img-work">
                        <div className="image-mask">
                        <img src="team-work.jpg" alt="Team-work" loading={"lazy"}/>
                        </div>
                    </div>
                </div>
                <div className="line-divider"></div>
                <div className="metric-grid">
                    <div className="grid-item">
                        <h2>
                            <CountUp start={19} end={48} duration={1.5} enableScrollSpy ScrollSpyOnce>
                            {({countUpRef})=>{
                                return(
                                    <>
                                        <span ref={countUpRef} className="count-up-number"></span>
                                        <span className="count-up-symbol" >%</span>
                                    </>
                                );
                            }}
                            </CountUp>
                        </h2>
                        <p className="description-title">Faster Processing</p>
                    </div>
                    <div className="grid-item">
                        <h2>
                            <CountUp start={0} end={12} duration={1.5} enableScrollSpy ScrollSpyOnce>
                            {({countUpRef})=>{
                                return(
                                    <>
                                        <span ref={countUpRef} className="count-up-number"></span>
                                        <span className="count-up-symbol">%</span>
                                    </>
                                );
                            }}
                            </CountUp>
                        </h2>
                        <p className="description-title">Operational Cost Drop</p>
                    </div>
                    <div className="grid-item">
                        <h2>
                            <CountUp start={0} end={6} duration={1.5} enableScrollSpy ScrollSpyOnce>
                            {({countUpRef})=>{
                                return(
                                    <>
                                        <span className="count-up-symbol">$</span>
                                        <span ref={countUpRef} className="count-up-number"></span>
                                        <span className="count-up-symbol">M</span>
                                    </>
                                );
                            }}
                            </CountUp>
                        </h2>
                        <p className="description-title">Yearly Savings</p>
                    </div>
                    <div className="grid-item">
                        <h2>
                            {}
                            <CountUp start={70.00} end={99.99} duration={1.5} decimals={2} seperator=""
                                     enableScrollSpy ScrollSpyOnce suffix='</span><span class="count-up-symbol">%</span>'/>
                        </h2>
                        <p className="description-title">System Uptime</p>
                    </div>
                </div>
            </section>
            <section className="testimonial-section">
                <div className="badge-container">
                    <span className="badge-dot"></span>
                    Our Clients
                </div>
                <h1 className="about-title">
                    Testimonial
                </h1>
                <p className="description-title">
                    See how we helped a Fortune 500 financial services company modernize their payment<br/>
                    infrastructure and streamline operations.
                </p>
                <div className="testimonial-cards">
                    <div className="test-card1">
                        <div className="test-text">
                            <Quote className="qoute-icon" size={"24"}/>
                            <p className="description">
                                Bridgenatix transformed our payment
                                infrastructure with measurable precision
                                and execution. The results exceeded our
                                expectations and their team became a
                                true extension of our digital
                                transformation journey.
                            </p>
                        </div>
                        <div className="Person-info">
                            <div className="person-img-container">
                                <img src="person-1.jpg" alt="Michael Chen" loading="lazy"/>
                            </div>
                            <h3 className="person-name">
                                Michael Chen
                            </h3>
                            <p className="designation">
                                Chief Operations Officer
                            </p>
                            <div className="stars">
                                ★★★★★
                            </div>
                        </div>
                    </div>
                    <div className="test-card2">
                        <div className="test-text">
                            <Quote className="qoute-icon" size={"24"}/>
                            <p className="description">
                                From discovery to delivery, everything
                                was transparent and on schedule. Our
                                cloud costs dropped while reliability went
                                up — the engineering quality speaks for
                                itself.
                            </p>
                        </div>
                        <div className="person-img-container">
                            <img src="person-2.jpg" alt="Sarah Mitchell" loading="lazy"/>
                        </div>
                        <h3 className="person-name">
                            Sarah Mitchell
                        </h3>
                        <p className="designation">
                            VP of Engineering
                        </p>
                        <div className="stars">
                            ★★★★★
                        </div>
                    </div>
                    <div className="test-card3">
                        <div className="test-text">
                            <Quote className="qoute-icon" size={"24"}/>
                            <p className="description">
                                They didn't just build software — they
                                helped us rethink our entire operating
                                model. The automation suite they
                                shipped now saves our teams hundreds
                                of hours monthly.
                            </p>
                        </div>
                        <div className="person-img-container">
                            <img src="person-3.jpg" alt="David Osei" loading="lazy"/>
                        </div>
                        <h3 className="person-name">
                            David Osei
                        </h3>
                        <p className="designation">
                            Chief Technology Officer
                        </p>
                        <div className="stars">
                            ★★★★★
                        </div>
                    </div>
                </div>
            </section>
            <section className="blogs">
                <div className="badge-container">
                    <span className="badge-dot"></span>
                    Latest News
                </div>
                <h1 className="about-title">
                    Our Blog
                </h1>
                <p className="description-title">
                    Insights, engineering deep-dives and playbooks from the teams shipping enterprise<br/>
                    transformation every day.
                </p>
                <div className="blog-card-box">
                    <div className="blog-card">
                        <p className="heading">
                            STRATEGY
                            <span className="number-style">01</span>
                        </p>
                        <h3 className="service-title">
                            Modernizing Payments<br/>at Enterprise Scale
                        </h3>
                        <div className="blog-img">
                            <img src="blog-img1.jpg" alt="Blog No 1" loading="lazy"/>
                        </div>
                        <p className="description">
                            How a Fortune 500 provider re-platformed
                            its settlement pipeline without a single day
                            of downtime.
                        </p>
                        <NavLink to="/blog/modernizing-payments-at-enterprise-scale" className="blog-btn">
                            Read Article ➔
                        </NavLink>
                    </div>
                    <div className="blog-card">
                        <p className="heading">
                            AI & AUTOMATION
                            <span className="number-style">02</span>
                        </p>
                        <h2 className="service-title">
                            Generative AI in<br/> Regulated Industries
                        </h2>
                        <div className="blog-img">
                            <img src="blog-img2.jpg"  alt="Blog No 2" loading="lazy"/>
                        </div>
                        <p className="description">
                            A practical framework for shipping LLM-
                            powered features while keeping compliance teams
                            happy.
                        </p>
                        <NavLink to="/blog/generative-ai-in-regulated-industries" className="blog-btn">
                            Read Article ➔
                        </NavLink>
                    </div>
                    <div className="blog-card">
                        <p className="heading">
                            CLOUD & DEVOPS
                            <span className="number-style">03</span>
                        </p>
                        <h2 className="service-title">
                            Cutting Cloud Spend<br/> Without Cutting Speed
                        </h2>
                        <div className="blog-img">
                            <img src="blog-img3.jpg" alt="Blog No 3" loading="lazy"/>
                        </div>
                        <p className="description">
                            The FinOps playbook we use to reclaim
                            six-figure budgets while accelerating
                            release cadence.
                        </p>
                        <NavLink to="/blogs/cutting-cloud-spend-without-cutting-speed" className="blog-btn">
                            Read Article ➔
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="qoute">
                <div className="qoute-left">
                    <div className="badge-container">
                        <span className="badge-dot"></span>
                        Get Started
                    </div>
                    <h1 className="about-title">
                        Your Next Starts Right Here
                    </h1>
                    <p className="description-title">
                        Ready to accelerate your digital transformation?let's
                        discuss how we can help you achieve measurable
                        outcomes.
                    </p>
                    <div className="available-block">
                        <div className="services-icon-box">
                            <LucidePhone size={22} className="icon"/>
                        </div>
                        <span>
                            <p className="description">
                                <span>Service Available</span><br/>
                                Mon - Sat, 9:00 - 18:00
                            </p>
                        </span>
                    </div>
                    <div className="location">
                        <span >
                            <MapPinIcon size={18}/>
                        </span>
                             Main LDA Avenue 1, Lahore — visit us or drop a line anytime.
                    </div>
                </div>
                <div className="qoute-right">
                    <form className="qoute-form-element" onSubmit={addclient}>
                        <h2 className="form-title">Request a Qoute</h2>
                        <div className="form-row">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstname}
                                onChange={(e)=>setfirstname(e.target.value)}
                                className="form-input"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastname}
                                onChange={(e)=>setlastname(e.target.value)}
                                className="form-input"
                                required
                            />
                        </div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e)=>setemail(e.target.value)}
                                className="fullwidth-input-box"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone no."
                                value={phone}
                                onChange={(e)=>setphone(e.target.value)}
                                className="fullwidth-input-box"
                                required
                            />
                            <textarea
                                placeholder="Description"
                                value={description}
                                onChange={(e)=>setdescription(e.target.value)}
                                className="form-textarea"
                                rows="4"
                            />
                            <button type={"submit"} className="button-filled">
                                SEND US A MESSAGE
                            </button>
                    </form>
                </div>
                 {showPopup && (
                  <div className="form-popup-backdrop">
                      <div className="form-popup-box">
                          <div className="popup-icon-circle">✓</div>
                          <h3 className="popup-message-title">Message Sent!</h3>
                          <p className="popup-message-body">
                              Thank you.
                          </p>
                          <button className="popup-action-btn" onClick={handleSendAnother}>
                              Send Another
                          </button>
                      </div>
                  </div>
                 )}
            </section>
            <div className="blank"></div>
            <footer className="contact-us">
                <div className="contact-above">
                    <div className="contact-left">
                        <div className="logo-wrapper">
                            <img src="logo2.jpg" alt="BridgeNatix Logo" loading="lazy" className="logo-img" />
                        </div>
                        <p className="description-title">
                            Transformation enterprise technology solutions that
                            convert strategy into measurable outcomes for
                            modern businesses.
                        </p>
                        <div className="footer-grid">
                            <div className="footer-grid-item">
                                <h2 className="heading">
                                    100
                                    <span className="count-up-symbol">
                                        +
                                    </span>
                                </h2>
                                <p className="description">
                                    Projects
                                </p>
                            </div>
                            <div className="footer-grid-item">
                                <h2 className="heading">
                                    25
                                    <span className="count-up-symbol">
                                        +
                                    </span>
                                </h2>
                                <p className="description">
                                    Countries
                                </p>
                            </div>
                            <div className="footer-grid-item">
                                <h2 className="heading">
                                    100
                                    <span className="count-up-symbol">
                                        +
                                    </span>
                                </h2>
                                <p className="description">
                                    Clients
                                </p>
                            </div>
                            <div className="footer-grid-item">
                                <h2 className="heading">
                                    95
                                    <span className="count-up-symbol">
                                        +
                                    </span>
                                </h2>
                                <p className="description">
                                    NPS
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-center">
                        <h3 >
                            Recent Post
                        </h3>
                        <div className="article-link-block">
                            <NavLink to="blog/cutting-cloud-spend-without-cutting-speed" className="article-title">
                                Cutting Cloud Spend Without Cutting Speed
                            </NavLink>
                            <p className="article-date">
                                08/07/2026
                            </p>
                        </div>
                        <div className="article-link-block">
                            <NavLink to="blog/generative-ai-in-regulated-industries" className="article-title">
                                Generative AI in Regulated Industries
                            </NavLink>
                            <p className="article-date">
                                24/06/2026
                            </p>
                        </div>
                        <div className="article-link-block">
                            <NavLink to="blog/modernizing-payments-at-enterprise-scale" className="article-title">
                                Modernizing Payments at Enterprise Scale
                            </NavLink>
                            <p className="article-date">
                                10/06/2026
                            </p>
                        </div>
                    </div>
                    <div className="contact-right">
                        <h3>
                            Get in Touch
                        </h3>
                        <div className="social-media-block">
                            <LucideMail  size={17} className="icon"/>
                            <span className="description">
                                info@bridgenatix.com
                            </span>
                        </div>
                        <div className="social-media-block">
                            <LucidePhone size={19} className="icon-1"/>
                            <span className="description">
                                +92-42-32190581
                            </span>
                        </div>
                        <div className="social-media-block">
                            <MapPinIcon size={19} className="icon-1"/>
                            <span className="description">
                                Main LDA Avenue 1, Lahore
                            </span>
                        </div>
                        <div className="social-icon-block">
                            <a href="https://www.linkedin.com/company/https-www.linkedin.com-company-bridgenatix-/" className="social-icon">
                                <FaLinkedin size={18} className="icon"/>
                            </a>
                            <a href="https://www.facebook.com/BridgeNatix/" className="social-icon">
                                <FaFacebook size={20} className="icon"/>
                            </a>
                            <a href="https://www.youtube.com/@bridgenatix" className="social-icon">
                                <FaYoutube size={20} className="icon"/>
                            </a>
                            <a href="https://www.instagram.com/bridgenatix" className="social-icon">
                                <FaInstagram size={20} className="icon"/>
                            </a>
                            <a href="https://www.google.com/maps/place/BridgeNatix/@31.4187483,74.2052379,561m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3918ff00062162d7:0x3116a090b5927b98!8m2!3d31.4187483!4d74.2052379!16s%2Fg%2F11nbqcnzk7?entry=ttu&g_ep=EgoyMDI2MDgzMC4wIKXMDSoASAFQAw%3D%3D" className="social-icon">
                                <MapPinIcon size={20} className="icon-1"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-below">
                    <p className="description">
                        © Copyright 2026. All Rights Reserved. Bridgenatix.
                    </p>
                </div>
            </footer>
        </div>
    );
}
function App()
{
    return(
        <div>
            <Homepage/>
        </div>
    );
}

export default App;