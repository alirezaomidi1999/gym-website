import Logo from "@/assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
            natus quibusdam! Quibusdam debitis, aliquid non asperiores commodi
            iste quia quasi quidem deserunt, officia at. Corporis dolorem libero
            omnis nesciunt?
          </p>
          <p>Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus Metus mattis risus volutpai</p>
          <p>{333} 425-6825</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
