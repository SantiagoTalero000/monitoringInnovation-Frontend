import ImagoLogoMotion from "../Components/Icons/ImagoLogo_Motion";
import TextBorder from "../Components/Partials/TextBorder";
import TelefonoImage from "/Telefono-01.png";

function Home() {
  return (
    <>
      <div className="slide" />
      <div className="relative flex items-center justify-center h-screen">
        <ImagoLogoMotion className="absolute top-10 left-14" />
        <div className="relative">
          <TextBorder
            text={"Bienvenido a Monitoring Innovation"}
            classNames={"text-md block md:hidden text-center"}
          />
          <div className="absolute inset-0 items-center justify-center hidden md:flex bottom-20 text-7xl -z-10">
            <TextBorder text={"Bienvenido a"} classNames={"text-8xl"} />
          </div>
          <img
            src={TelefonoImage}
            alt="Descripción"
            className="z-10 w-[100%] h-auto"
          />
          <div className="absolute inset-0 z-20 items-center justify-center hidden md:flex top-20">
            <TextBorder
              text={"Monitoring Innovation"}
              classNames={"text-6xl"}
            />
          </div>
        </div>
        <div className="absolute flex flex-col text-center md:gap-24 md:flex-row bottom-28 md:bottom-32">
          <a
            className="text-[#01BEDB] font-medium"
            href="https://monitoringinnovation.com/"
            target="_blank"
          >
            MONITORINGINNOVATION
          </a>
          <a
            className="text-[#01BEDB] font-medium"
            href="https://gpscontrol.co/"
            target="_blank"
          >
            GPS CONTROL
          </a>
          <a
            className="text-[#01BEDB] font-medium"
            href="https://github.com/SantiagoTalero000/monitoringInnovation-Frontend"
            target="_blank"
          >
            Link repo front
          </a>
          <a
            className="text-[#01BEDB] font-medium"
            href="https://github.com/SantiagoTalero000/monitoringInnovation-Backend"
            target="_blank"
          >
            Link repo back
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
