import { h } from 'preact';

const Footer = ({ children }) =>
<footer class="footer block block-bg block--bg-dark">
{<div className="wrap">
<div className="footer-container">
    <div className="row">
        <div className="col xs-12 md-8">
            <div className="footer-image"><img src="src\img\ECA-logo-grey-01.png" alt="Edinburgh University logo" /></div>
                </div>
                <div className="col xs-12 md-4">
                    <div className="footer-nav">
                        <ul>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Website Accessibility</a>
                            </li>
                            <li>
                                <a href="">Freedom and Information</a>
                            </li>
                            <li>
                                <a href="">Terms and Conditions</a>
                            </li>
                            <li>
                                <a href="">Privacy and Cookies</a>
                            </li>
                        </ul>
                        <div className="gradient" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col xs-12 md-8">
                    <p className="footer-info">The University of Edinburgh is a charitable body, registered in Scotland, with registration number SC0005336, VAT Registration Number GB 5929507, and is acknowledged by the UK authorities as a "Recognised Body" which has been granted degree awarding powers. </p>
                </div>
                <div className="gradient" />
                <div className="col xs-12 md-4">
                    <p className="footer-copyright">2022 Edinburgh College of Art. <br />All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div> }</footer>;

export default Footer;