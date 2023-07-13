import { Fragment, h } from 'preact';
import Skip from '@components/skip';
import Header from '@components/header';
import Main from '@components/main';
import Footer from '@components/footer';

const Default = ({ children }) => <Fragment>
    <Header>
        <Skip />
    </Header>
    <nav class="primary-nav">
        <div class="wrap">
            <ul class="primary-nav__list">
                <div className="left-nav">
                <li class="primary-nav__item"><a class="primary-nav__link js-scroll-spy" href="#menu">Menu</a></li>
                <li class="primary-nav__item">
                    <img src="src\img\ECA-logo-grey-01.svg" alt="University of Edinburgh logo" />
                </li>
                </div>
                <div className="right-nav">
                <li class="primary-nav__item"><img src="src\img\icons8-search.svg" alt="search logo" /></li>
                </div>
            </ul>
        </div>
    </nav>
    <Main>
    
    <div className="block-list">
        <div className="block block--bg block--bg-dark">
           <div class="wrap">
            <div className="row">
                <div className="col xs-12 md-8">
                <div className="section-intro" type="intro">
                <h1 className="section-intro-title">Welcome to Edinburgh College of Art</h1>
                <p className="section-intro-p">A LEADING INTERNATIONAL ART COLLEGE<span className="grey-area"> WITHIN THE<br /> UNIVERSITY OF EDINBURGH</span></p>
                <p className="section-intro-content">Study one of 80 ground-breaking programmes in a <br />global top 50 institution, situated in one of the world's <br />greatest cultural cities.</p>
                </div>
            </div>
            </div>
        </div>
   
    <div className="hero">
            <div className="homepage-hero">
                <div className="row">
                    <div className="col xs-12 md-3"><h1 className="homepage-hero__title">Find a course</h1></div>
                    <div className="col xs-12 md-7">
                        <div class="wrap">
                            <form class="search__form" action="/search-results/" method="get" autocomplete="off" novalidate="">
                                <label class="search__label" for="q-search">Your search</label>
                                    <input class="search__input" type="search" placeholder="" pattern="[a-zA-Z0-9\s]+" id="q-search" name="q" />
                                        <button class="search__submit">
                                            <span class="visuallyhidden">Search</span>
                                            <svg class="search__submit-icon" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24"
                                                width="36px" fill="#333333"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                                        </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

        <div className="wrap">
            <div className="hero-title">Our schools</div>
                <ul className="hero-list">
                    <li className="hero-list__item">
                        <h2 className="hero-list__subtitle">ARCHITECTURE AND LANDSCAPE ARCHITECTURE</h2>
                        <a href=""><img src="src\img\Path 10249.svg" /></a>
                    </li>
                    <li className="hero-list__item">
                        <h2 className="hero-list__subtitle">ART</h2>
                        <a href=""><img src="src\img\Path 10249.svg" /></a>
                    </li>
                    <li className="hero-list__item">
                        <h2 className="hero-list__subtitle">DESIGN</h2>
                        <a href=""><img src="src\img\Path 10249.svg" /></a>
                    </li>
                    <li className="hero-list__item">
                        <h2 className="hero-list__subtitle">HISTORY OF ART</h2>
                        <a href=""><img src="src\img\Path 10249.svg" /></a>
                    </li>
                     <li className="hero-list__item">
                        <h2 className="hero-list__subtitle">MUSIC</h2>
                        <a href=""><img src="src\img\Path 10249.svg" /></a>
                    </li>
        </ul>
    </div>
    
    </div>
    <div className="block block--bg block--bg-light">
    <div className="wrap">
        <div className="slider-title"><h1>Featured Work</h1></div>
        <div className="row">
            <div className="col xs-12 md-4 art-card">
                <img src="src\img\Image 51.png" />
                    <h2 className="author">Laura Espin</h2>
                    <p className="image-name">Carbon Work & GEO-ACT</p>
                    <p className="image-description">Landscape Architecture-MLA</p>
                </div>
            <div className="col xs-12 md-4 art-card">
                <img src="src\img\Image 45.png" />
                <h2 className="author">Aiman Bin Azman</h2>
                    <p className="image-name">A Self-Building Community//Living and working in Granton</p>
                    <p className="image-description">Architecture-MA(Hons)</p>
            </div>
            <div className="col xs-12 md-4 art-card"><img src="src\img\Image 52.png" />
            <h2 className="author">Mena Shah</h2>
            <p className="image-name">The Northcoast Wayfarers Trail: Recording a Contested Landscape</p>
            <p className="image-description">Landscape Architecture-MLA</p></div>
        </div>
        </div>
    </div>

<div class="block block-bg block--bg-white">
    <div className="wrap">
        <div className="slider-middle-container">
    <div className="slider-title"><h1>News and Events</h1></div>
    <ul className="slider-tabs">
        <li><a href="">All</a></li>
        <li><a href="">Comments and Critisms</a></li>
        <li><a href="">Dispatches</a></li>
        <li><a href="">Stories</a></li>
        </ul>
        <div className="row">
            <div className="col xs-12 md-6 art-card">
                <img src="src\img\Rectangle granton.png" />
                <h2 className="author">Architecture</h2>
                    <p className="image-name">ESALA students awarded honoroubale mention in interantional architecture competition.</p>
                    <p className="image-description">Example</p>
            </div>
            <div className="col xs-12 md-6">
                <img src="src\img\rectangle people.png" />
                <h2 className="author">Design</h2>
                    <p className="image-name">ECA celebrates world-leading research impact case studies. </p>
                    <p className="image-description">Example</p></div>
        </div>
        </div>
    </div>
    </div>

    <div className="block block-bg block--bg-white">
    <div className="wrap">
    <div className="slider-card-middle-container">
        <div className="row">
            <div className="col xs-12 md-4 art-card">
                <img src="src\img\image - singers.png" />
                    <h2 className="author">History of Art</h2>
                    <p className="image-name">From Cartography to Queer Cabaret: how alumni are helping student-led projects come to life</p>
                    <p className="image-description">Example optional tertiary information</p>
                </div>
            <div className="col xs-12 md-4 art-card">
                <img src="src\img\blue painting.png" />
                <h2 className="author">Art</h2>
                    <p className="image-name">Creative AI Artist Residency Sept 2022-April 2023</p>
                    <p className="image-description">Example optional tertiary information</p>
            </div>
            <div className="col xs-12 md-4 art-card">
                <img src="src\img\Path 10099.png" />
            <h2 className="author" />
            <p className="image-name" />
            <p className="image-description" /></div>
        </div>
        </div>
    </div>
    </div>
    
    <div className="block">
    <div className="wrap">
    <div className="middle-content">
        <div className="left-side">
            <h1 className="middle-content-title">RESEARCH IN EDINBURGH COLLEGE OF ART</h1></div>
        <div className="right-side">
            <p className="middle-content-content">We are committed to driving research excellence and innovation across arts, humanities and social sciences through inquiry, collaboration and pushing boundaries of knowledge</p>
        <a href="">More about research</a>
        </div>
    </div>
    <div className="card-container">
        <div className="row">
            <div className="col xs12 md 3 card-item">
                <h2>THE ANDREW CARNEGIE LECTURE SERIES</h2>
                <p>bla bla bla </p>
            </div>
            <div className="col xs12 md 3 card-item">
                <h2>DESIGN INFORMATICS RESEARCH SEMINAR SERIES</h2>
                <p />
            </div>
            <div className="col xs12 md 3 card-item">
                <h2>ESALA PUBLIC LECTURE SERIES</h2>
                <p />
            </div>
            <div className="col xs12 md 3 card-item">
                <h2>FILM SCREENING AND CONVERSATIONS</h2>
                <p />
            </div>
        </div>
    </div>
    </div>
    </div>
    
    <div className="block block-bg block-bg-light">
    <div className="wrap">
        <div className="explore-area">
            <div className="explore-top">
                <h1 className="explore-top-title">Explore ECA</h1>
                <p className="explore-top-para">To study at Edinburgh College of Art(ECA) is to immerse yourself in the life of one of the world's great cultural cities. Edinburgh is consititend voted on of the most livable citiies, and is known around the world for its annual arts festivals, rich history, and seasonal celebrations.</p>
                <a href="">Start exploring</a>
            </div>
            <div className="explore-bottom">
                <div className="row">
                    <div className="col xs-12 md-4">
                        <img src="src\img\Screenshot 2022-10-19 at 16.26.20.png" />
                        <h2>IN WORDS</h2>
                        <p>We want to be known globally for excellence in our subject areas and the opportunities we give our students to collaborate and innovate acorss them, and with the wider University of Edinburgh community, of which we are proud to be a part</p>
                    </div>
                    <div className="col xs-12 md-4">
                        <img src="src\img\Screenshot 2022-10-19 at 16.26.35.png" />
                        <h2>IN PICTURES</h2>
                        <p>Discover a vibrant, bustling city with stoireson every corner, students walk and bike to their destinations, landing in labs, seminars and studios, always stopping along the way to take notice of each other and their wide-open surroundings</p>
                    </div>
                    <div className="col xs-12 md-4">
                        <img src="src\img\Screenshot 2022-10-19 at 16.27.42.png" />
                        <h2>IN NUMBERS</h2>
                        <p>From every region of the country and corner of the globe to better understand our place in the world, we are truly international place of creativity.</p>
                    </div>
            </div>
        </div>
    </div>
    </div>
    </div>

<div className="block block--bg block--bg-dark">
    <div className="wrap">
        <div className="scholarship-section-container">
            <div className="scholarship-intro">
                <h1 className="scholarship-title">SCHOLARSHIPS AND BURSARIES</h1>
                <p className="scholarship-paragraph">Are you eligible for funding to help you in your studies?<br />Have a look at whats currently available.</p>
                <button className="scholarship-button">All scholarships and bursaries</button>
            </div>
        </div>
        </div>
        <div className="block block--bg block--bg-white">
            <div className="scholarship-main">
                <div className="scholarship-main-left">
                    <ul>
                        <li>
                            <a href="">Student stories</a>
                        </li>
                        <li>
                            <a href="">Staff</a>
                        </li>
                    </ul>
                        <p className="scholarship-main-paragraph">Series of interviews with our<br />students.<span>Learn about the inspiration, ideas and methods<br /> behind their work</span></p>
                            <button className="scholarship-button">Learn more</button>
                </div>
            <div className="scholarship-main-right">
            <img src="src\img\Repeat Grid 172.png" alt="student photos" />
        </div>
        </div>
        </div>
    </div>
    
    
    <div className="block block--bg block--bg-dark">
    <div class="wrap">
<div className="alumni">
<div className="alumni-content">
        <div className="alumni-top">
            <div className="alumni-left-side">
                <h1 className="alumni-content-title">ALUMNI</h1>
            </div>
            <div className="alumni--right-side">
                <p className="alumni-content-content">Together out alumni form a uniquely divrese and talented community of over 24,000 creatives across the globe. The ECA alumni community included graduates from all five subject areas: architecture and landscape architecture; art;history of art;design;and music.</p>
                <a href="">View all profiles</a>
            </div>
            </div>
            <div className="alumni-bottom">
                <div className="alumni-description">
                    <div className="description-left">
                        <h2>2004<br />KATIE PATERSON</h2>
                        <h3>Tapestry - BA(Hons) - now<br />Intermedia-BA(Hons)</h3>
                        <p>Working at the intersection between art and science is renowned artist, and 2044 Tapestry graduate, Katie Paterson, who found the programme's lack of boundaties allowed her to develpe a corss-disciplinary apprach.</p>
                        <svg src="src\img\Path 10249.svg" />
                    </div>
                    <div className="description-right">
                        <img src="src\img\katieP.png" alt="Hollow-Katie Paterson" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div className="block block-bg block--bg-peach ">
    <div className="wrap">
    <div className="hero-footer-sections">
        <div className="hero-footer__title">Take the next step</div>
        <ul>
            <li className="hero-footer__subtitle">
                <h2>REQUEST MORE INFORMATION</h2>
                <a href=""><img src="src\img\Path 10252.png" /></a>
            </li>
            <li className="hero-footer__subtitle">
                <h2>VISIT THE COLLEGE</h2>
                <a href=""><img src="src\img\Path 10252.png" /></a>
            </li>
            <li className="hero-footer__subtitle">
                <h2>APPLY TODAY</h2>
                <a href=""><img src="src\img\Path 10252.png" /></a>
            </li>
        </ul>
    </div>
    </div>
    </div>
    </div>
    
</Main>
<Footer />
</Fragment>;

export default Default;