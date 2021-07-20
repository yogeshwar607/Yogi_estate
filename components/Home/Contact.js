import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '52ch',
        },
    },
}));
const Contact = () => {
    const classes = useStyles();
    return (
        <div className="contact_main  flex justify-center mt-48">
            <div className="bg-white my-20 py-10 mb-20 px-12 shadow-xl">
                <div className="py-2.5 px-6 border-4 border-primary shadow-md">
                    <h1 className="font-medium text-4xl font-montserrat mt-4 text-primary ">Contact</h1>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="NAME" />
                        <TextField id="standard-basic" label="PHONE NUMBER" />
                        <br />
                        <TextField id="standard-basic" label="MESSAGE" className='message-input'/>
                    </form>
                    <div className="flex justify-between">
                        <img className="mt-8" src="images/logo.svg" alt="" />
                        <div className="mt-20">
                            <a className=" py-2 px-4 border-2 border-primary bg-primary text-white font-montserrat text-xl items-center hover:bg-white hover:text-primary transition-all" href="#">Send message</a>
                        </div>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default Contact
