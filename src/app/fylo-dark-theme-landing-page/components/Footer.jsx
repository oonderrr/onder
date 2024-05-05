import Image from "next/image";
import logo from "/src/app/fylo-dark-theme-landing-page/ui/images/logo.svg";
import locationIcon from "/src/app/fylo-dark-theme-landing-page/ui/images/icon-location.svg";
import phoneIcon from "/src/app/fylo-dark-theme-landing-page/ui/images/icon-phone.svg";
import mailIcon from "/src/app/fylo-dark-theme-landing-page/ui/images/icon-email.svg";

function Footer() {
  return (
    <>
      <div className="my-32 w-4/5 h-96 lg:h-auto">
        <Image
          className="mb-10"
          src={logo}
          alt={"logo"}
        />
        <div className="w-full h-full flex flex-col lg:flex-row justify-between">
          <div className="flex gap-4 items-start">
            <Image
              src={locationIcon}
              alt={"locationIcon"}
            />
            <p className="w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div>
            <div className="flex gap-4">
              <Image
                src={phoneIcon}
                alt={"phoneIcon"}
              />
              <p>+1-543-123-4567</p>
            </div>
            <div className="flex gap-4">
              <Image
                src={mailIcon}
                alt={"mailIcon"}
              />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div>
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div className="">
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
