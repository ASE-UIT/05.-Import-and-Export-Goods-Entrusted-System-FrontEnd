import Image from "next/image";

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#FCFCFC]">
        <Image className="p-[10px] absolute inset-0 object-cover z-0" fill={true} width={0} height={0} quality={100} src="/images/forgot-password-bg.svg" alt="Page Background"></Image>
        <div className="z-10 box-border flex flex-col px-[60px] py-[80px] gap-[30px] w-[657px] items-center rounded-[10px] bg-[#ffffffcc] ">
            <Image src={"/images/logo.png"} width={207} height={170.506} quality={100} alt="Main Icon"></Image>
            <h1 className=" text-[#153060] text-[45px] font-[400] leading-[52px] self-stretch">Forgot password</h1>

        </div>    
    </div>
  );
}