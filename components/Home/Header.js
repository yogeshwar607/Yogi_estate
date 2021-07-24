import React from "react";
import {navbarData, Header_ADITYA_HEIGHTS} from "../../constants/constant";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [openMenu, setMenu] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="w-full bg-white header_main relative">
      <div className="md:max-w-5xl 2xl:max-w-7xl mx-auto">
        <div className="flex-wrap items-center">
          <div className="Navbar flex justify-between">
            <div>
              <h1 className="font-semibold text-xl text-primary bg-whitecolor  md:ml-10 py-8 px-10">
                LOGO
              </h1>
            </div>
            <div className="desktopmenu">
              <ul className="flex justify-end items-center flex-wrap mt-6 mb-8">
                {navbarData.map((data, index) => {
                  return (
                    <li className="mr-6" key={index}>
                      <a
                        href={`#${data.title}`}
                        className="text-whitecolor capitalize font-normal"
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
                <a
                  href="#contact"
                  className="mr-24 border border-white-600 text-whitecolor font-normal px-3 py-1.5 hover:text-secondary hover:bg-white hover:duration-500 "
                >
                  Contact us
                </a>
              </ul>
            </div>
            <div
              className="hamburger justify-end mr-10"
              onClick={handleMenu}
            >
              <img src="/images/hamburger.svg" />
            </div>
          </div>
          {/* Mobile Menu */}
          <Dialog
            maxWidth="sm"
            onClose={closeMenu}
            aria-labelledby="customized-dialog-menu"
            open={openMenu}
          >
            <div className="bg-primary px-14 py-10">
              <a
                onClick={closeMenu}
                className="absolute right-5 cursor-pointer top-5"
              >
                <img src="/images/closewhite.svg" alt="close" />
              </a>
              <ul>
                {navbarData.map((data, index) => {
                  return (
                    <li key={index} className="mb-4 text-center">
                      <a href={`#${data.title}`} className="text-whitecolor font-normal">
                        {data.title}
                      </a>
                    </li>
                  );
                })}
                <li className="mb-4 text-center">
                  <a
                    onClick={handleClickOpen}
                    className="text-whitecolor font-normal"
                    href="#"
                  >
                    Schedule Visit
                  </a>
                </li>
                <li className="mb-4 text-center">
                  <a className="text-whitecolor font-normal" href="#">
                    Call - +91999999999
                  </a>
                </li>
              </ul>
            </div>
          </Dialog>

          <div className="flex flex-col  md:flex-row relative justify-center justify-items-center px-8 md:px-0 md:w-6xl md:pl-8">
            <div className="max-w-6xl mb-6 header_Image">
              <img src="images/hero_image.png" alt="" className="md:-mb-12 " />
            </div>
            <div className="header-card relative md:absolute  md:-left-20 md:bottom-24  mb-2 items-center border border-white-600 px-3 md:px-7 py-5  md:py-8 bg-whitecolor">
              <h1 className="text-primary mb-3 font-montserrat font-medium text-base md:text-xl">
                {Header_ADITYA_HEIGHTS.title}
              </h1>
              <p className="text-secondary mb-5   font-roboto font-light text-sm md:text-base">
                {Header_ADITYA_HEIGHTS.description}
              </p>
              <h1 className="text-secondary mb-6 pb-1 font-montserrat font-medium text-sm md:text-lg">
                1 BHK . 2 BHK . 3 BHK
              </h1>
              <div className='btn-wrapper'>
                <a
                  className="text-primary learnMore mr-4 text-center  font-montserrat font-medium text-base md:text-xl border border-primary py-2 px-4 hover:bg-primary hover:text-white hover:duration-500"
                  href="#"
                >
                  {Header_ADITYA_HEIGHTS.learnMore}
                </a>
                <a
                  className="text-whitecolor contact text-center font-montserrat font-medium text-base md:text-xl border border-primary bg-primary py-2 px-4 hover:bg-white hover:text-primary hover:duration-500"
                  href="#"
                >
                  {Header_ADITYA_HEIGHTS.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <a className="bg-primary border border-primary rounded-r-md text-white px-2 cursor-pointer rotate-180 absolute top-40 right-0 header-contact number hover:text-primary hover:bg-white hover:duration-500">
            CALL - +91999999999
          </a>
          <a
            onClick={handleClickOpen}
            className="bg-white border border-white rounded-r-md  px-2 rotate-180 absolute md:bottom-36 2xl:bottom-56 cursor-pointer right-0 header-contact schedule"
          >
            SCHEDULE VISIT
          </a>
        </div>
        <Dialog
          maxWidth="md"
          fullScreen={fullScreen}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div className="bg-white py-10 px-4 md:px-12 max-w-6xl mx-auto shadow-xl">
            <div className="py-2.5 px-2 md:px-6 border-4 border-primary shadow-md">
              <h1 className="font-medium text-xl md:text-4xl font-montserrat mt-4 text-primary ">
                Contact
              </h1>
              <a
                onClick={handleClose}
                className="absolute right-10 md:right-16 cursor-pointer top-16 md:top-14"
              >
                <img src="/images/cross.svg" alt="close" />
              </a>
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="NAME"
                  className="text-input name"
                />
                <TextField
                  id="standard-basic"
                  label="PHONE NUMBER"
                  className="text-input"
                />
                <TextField
                  id="standard-basic"
                  label="Email Id"
                  className="text-input email"
                />
                <TextField
                  className="text-input"
                  id="date"
                  label="DATE FOR VISIT"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </form>
              <div className="flex justify-between">
                <img className="mt-8" src="images/logo.svg" alt="" />
                <div className="mt-20">
                  <a
                    className=" py-2 px-4 border-2 border-primary bg-primary text-white font-montserrat text-xl items-center hover:bg-white hover:text-primary transition-all hover:duration-500"
                    href="#"
                  >
                    Send message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
