import { h } from 'preact';

const Alumni = ({ children }) => 
<div class="alumni">
<div className="wrap">
    
<div className="alumni-content">
<div className="gradient"></div>
    <div className="left-side"><h1 className="alumni-content-title">ALUMNI</h1></div>
    <div className="right-side"><p className="alumni-content-content">Together out alumni form a uniquely divrese and talented community of over 24,000 creatives across the globe. The ECA alumni community included graduates from all five subject areas: architecture and landscape architecture; art;history of art;design;and music.</p>
    <a href="">View all profiles</a>
    </div>
    <div className="alumni-description">
        <div className="description-left">
        <h2>2004<br></br>KATIE PATERSON</h2>
        <h3>Tapestry - BA(Hons) - now<br></br>Intermedia-BA(Hons)</h3>
        <p>Working at the intersection between art and science is renowned artist, and 2044 Tapestry graduate, Katie Paterson, who found the programme's lack of boundaties allowed her to develpe a corss-disciplinary apprach.</p>
        <svg src="src\img\Path 10249.svg"></svg>
        </div>
        <div className="desfription-right">
            <img src="src\img\katieP.png" alt="Hollow-Katie Paterson"></img>
        </div>
    </div>
</div>
</div>
</div>;

export default Alumni;