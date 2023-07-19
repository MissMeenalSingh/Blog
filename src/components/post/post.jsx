import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg'
                src='https://w0.peakpx.com/wallpaper/745/728/HD-wallpaper-sunset-serenade-view-houses-ocean-pier-sunset-sky-clouds-lights-sea-splendor-ocean-view-nature-evening-reflection.jpg'
                alt=''
            />
            <div className="postInfo">
                <div className="postCats">
                    <div className="postCat">Music</div>
                    <div className="postCat">Life</div>
                </div>
                <span className="postTitle">"Sunset Serenade" - A breathtaking sunset.</span>
                <hr />
                <p className='postDesp'>
                    "Sunset Serenade" is a captivating scene that beautifully captures the magical moment of a setting sun painting the sky with warm and vibrant hues. As the day draws to a close, the sky becomes an enchanting canvas, blending shades of crimson, amber, and golden orange. The sun, now a fiery orb, starts its descent towards the horizon, casting long shadows and infusing the surroundings with a soft, golden glow.</p>
                <span className='postDate'>1 hour ago</span>
            </div>
        </div>
    )
}
