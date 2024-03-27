import React from 'react'
import MyNavbar from '../inc/MyNavbar'
import MyCards from '../inc/MyCards'
import '../styles/HomePage.css'
import SignFiled from '../inc/SignFiled'

export default function HomePage() {
    return (
        <div className='container'>
            <MyNavbar />
            {/* <div className='card-container'>

                <MyCards img="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" title="Hello Everyone" description="Hello i'm here in homepage" btnTitle="Flower info" />
                <MyCards img="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg" title="Hello" description="Hi, i'm here" btnTitle="More info" />
                <MyCards img="https://hips.hearstapps.com/hmg-prod/images/balloon-flower-royalty-free-image-1703107813.jpg" title="Hello" description="Hi, i'm here" btnTitle="More info"/>
            </div> */}

        </div>
    )
}
