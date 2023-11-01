import './writePage.css'

export default function WritePage() {
    return (
        <div className='writePage'>
            {/* <img className='writeImg'
                src=''
                alt=''
            /> */}
            <form className='writePageForm'>
                <div className="writePageFormGroup">
                    <div>
                        <label htmlFor='writePageFile'>
                        {/* <i class="fa-solid fa-camera"></i> */}
                            <i className="writePageIcon fa-solid fa-camera"></i>
                        </label>
                        <input type='file' id='writePageFile' style={{ display: 'none' }} />
                    </div>
                    <input type='text' placeholder='Title' id='writePageTitle' className='writePageText' autoFocus={true} />
                </div>
                <div className="writePageFormGroup">
                    <textarea type='text' placeholder='Tell me your story......' id='writePageDesp' className='writePageText'></textarea>
                </div>
                <button className='writePageSubmitBtn'>Publish</button>
            </form>


        </div>
    )
}
