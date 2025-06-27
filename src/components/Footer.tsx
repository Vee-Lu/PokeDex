import React from 'react';
import '../styles.css'

function Banner({ children }: { children: React.ReactNode }) {

    return(
        <div className='footer'>
            <div>
                {children}   
            </div>
        </div>
    )
}

export default Banner;