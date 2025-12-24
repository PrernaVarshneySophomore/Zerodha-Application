import React from 'react';

function Footer() {
    return ( 
        <div className='container-fluid bg-light border-top'>
            <div className='container mt-5'>
                <div className='row p-5'>
                    <div className='col'>
                        <img src='media/images/logo.svg' style={{width: "50%"}} />
                        <p className='text-muted mt-3'>
                            &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
                        </p>
                        <p className='text-muted footer-link fs-5'>
                            <a href=''><i class="fa-brands fa-twitter"></i></a>
                            <a href=''><i class="fa-brands fa-square-facebook"></i></a>
                            <a href=''><i class="fa-brands fa-instagram"></i></a>
                            <a href=''><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href=''><i class="fa-brands fa-telegram"></i></a>
                        </p>
                    </div>
                    <div className='col footer-style'>
                        <p>Company</p>
                        <ul className='footer-style list-unstyled'>
                            <li><a href="">About</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Referral programme</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Zerodha.tech</a></li>
                            <li><a href="">Press & media</a></li>
                            <li><a href="">Zerodha cares (CSR)</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <p>Support</p>
                        <ul className='footer-style list-unstyled'>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Support portal</a></li>
                            <li><a href="">Z-Connect blog</a></li>
                            <li><a href="">List of charges</a></li>
                            <li><a href="">Downloads & resources</a></li>
                        </ul>
                    </div>
                    <div className='col footer-style'>
                        <p>Account</p>
                        <ul className='footer-style list-unstyled'>
                            <li><a href="">Open an account</a></li>
                            <li><a href="">Fund transfer</a></li>
                            <li><a href="">60 day challenge</a></li>
                        </ul>
                    </div>
                </div>
                <div className="fs-6 fw-light text-muted p-4">
                    <p>
                        Zerodha Broking Ltd.: Member of NSE​ &amp;​ BSE – SEBI Registration no.:
                        INZ000031633 CDSL: Depository services through Zerodha Securities
                        Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                        through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                        no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                        complaints pertaining to securities broking please write to
                        complaints@zerodha.com, for DP related to dp@zerodha.com. Please
                        ensure you carefully read the Risk Disclosure Document as prescribed
                        by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES
                        portal. Mandatory details for filing complaints on SCORES: Name,
                        PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                        Communication, Speedy redressal of the grievances
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read
                        all the related documents carefully before investing.
                    </p>

                    <p>
                        "Prevent unauthorised transactions in your account. Update your
                        mobile numbers/email IDs with your stock brokers. Receive
                        information of your transactions directly from Exchange on your
                        mobile/email at the end of the day. Issued in the interest of
                        investors. KYC is one time exercise while dealing in securities
                        markets - once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the same
                        process again when you approach another intermediary." Dear
                        Investor, if you are subscribing to an IPO, there is no need to
                        issue a cheque. Please write the Bank account number and sign the
                        IPO application form to authorize your bank to make payment in case
                        of allotment. In case of non allotment the funds will remain in your
                        bank account. As a business we don't give stock tips, and have not
                        authorized anyone to trade on behalf of others. If you find anyone
                        claiming to be part of Zerodha and offering such services, please
                        create a ticket here.
                    </p>
                </div>
                <div className="footer-addition-link text-center mb-3">
                    <a href=''>NSE</a>
                    <a href=''>BSE</a>
                    <a href=''>MCX</a>
                    <a href=''>Terms &amp; conditions</a>
                    <a href=''>Policies &amp; procedures</a>
                    <a href=''>Privacy policy</a>
                    <a href=''>Disclosure</a>
                </div>
            </div>
        </div>
     );
}

export default Footer;