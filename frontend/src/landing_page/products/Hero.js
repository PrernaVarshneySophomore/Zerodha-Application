import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center p-5 border-bottom'>
                <h1 className='fw-normal mb-4'>Technology</h1>
                <p className='text-muted fs-6'>Sleek,modern and intuitive trading platforms</p>
                <p className='fw-light'>
                    Check out our <a href=''style={{ textDecoration: "none" }}>
                        investment offerings <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}

export default Hero;