import React from 'react'
import TextField from '@material-ui/core/TextField';



const Contact = () => {

    return (
        <div className="contact_main flex justify-center px-10 md:mt-48 ">
            <div className="bg-white mx-6 md:mx-0 my-10 md:my-20 py-6 md:py-10 px-6  md:px-12 contact-form-wrapper   shadow-xl">
                <div className="py-2.5 px-6 border-4 border-primary shadow-md contact-form">
                    <h1 className="font-medium text-xl md:text-4xl font-montserrat mt-4 text-primary ">Contact</h1>
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="NAME" className='text-input name' />
                        <TextField id="standard-basic" label="PHONE NUMBER" className='text-input' />
                        <TextField id="standard-basic" label="MESSAGE" className='message-input' />
                    </form>
                    <div className="flex flex-col md:flex-row justify-between">
                        <img className="mt-8 w-24 md:w-48" src="images/logo.svg" alt="" />
                        <div className="mt-5 md:mt-28 mb-10 md:mb-0 flex md:block justify-center">
                            <a className=" py-2 px-4 border-2 border-primary bg-primary text-white font-montserrat text-base md:text-xl items-center hover:bg-white hover:text-primary transition-all send-message-contact" href="#">Send message</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact
