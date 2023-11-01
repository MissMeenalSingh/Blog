import Sidebar from '../../sidebar/sidebar'
import './settings.css'

export default function Settings() {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className="settingsTitle">
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>

                <form className='settingsForm'>
                    <label className='settingsLabel'>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src='https://w0.peakpx.com/wallpaper/745/728/HD-wallpaper-sunset-serenade-view-houses-ocean-pier-sunset-sky-clouds-lights-sea-splendor-ocean-view-nature-evening-reflection.jpg'
                            alt='' />

                        <label className='settingsLabel' htmlFor='settingsFileInput'>
                            <i className="settingsFileIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input type='file' id='settingsFileInput'  style={{display:'none'}}></input>
                    </div>
                    <label className='settingsLabel'>
                        Username
                    </label>
                    <input type='text' placeholder='Meenal'></input>
                    <label className='settingsLabel'>
                        Email
                    </label>
                    <input type='email' placeholder='meenalsingh223@gmail.com'></input>
                    <label className='settingsLabel'>
                        Password
                    </label>
                    <input  className='settingsInput' type='password'></input>
                    <button className='settingsUpdateBtn'>Update</button>


                </form>

            </div>
            <Sidebar />
        </div>
    )
}
