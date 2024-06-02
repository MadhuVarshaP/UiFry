import Image from "next/image";
import logo from "./images/logo.png";
import playbtn from "./images/playbtn.png";
import bg1 from "./images/bg1.svg";
import bg2 from "./images/bg2.svg";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import tag from "./images/tag.png";
import ellipse from "./images/ellipse.svg";
import bell from "./images/bell.png";
import apple from "./images/apple.png";
import star from "./images/Star.png";
import whitestar from "./images/whitestar.png";
import stardesign from "./images/stardesign.png";
import message from "./images/message.png";
import call from "./images/call.png";
import bulletin1 from "./images/bulletin1.png";
import bulletin2 from "./images/bulletin2.png";
import bulletin3 from "./images/bulletin3.png";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <div className="z-10 relative">
        <div className="flex justify-around items-center py-4 px-10">
          <Image src={logo} width={150} height={100} alt="logo" />
          <ul className="flex">
            <li className="ml-10">
              <a href="#" className="hover:font-extrabold hover:text-red-400">
                Home
              </a>
            </li>
            <li className="ml-10">
              <a href="" className="hover:font-extrabold hover:text-[#FF5555]">
                About Us
              </a>
            </li>
            <li className="ml-10">
              <a href="" className="hover:font-extrabold hover:text-[#FF5555]">
                Pricing
              </a>
            </li>
            <li className="ml-10">
              <a href="" className="hover:font-extrabold hover:text-[#FF5555]">
                Features
              </a>
            </li>
          </ul>
          <button className="flex bg-black text-white h-[40px] p-5 rounded-md justify-center items-center">
            Download
          </button>
        </div>

        <div className="flex flex-row items-center justify-center">
          <div className="w-[700px]">
            <p className="text-5xl font-black py-[10px]">
              Make The Best Financial Decisions
            </p>
            <p className="text-gray-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="my-[20px] flex">
              <button class="flex items-center bg-black text-white h-[40px] p-5 rounded-md">
                Get Started →
              </button>
              <div className="flex items-center h-[40px] p-5 rounded-md">
                <Image
                  src={playbtn}
                  width={30}
                  height={30}
                  alt="play"
                  className="mx-[10px]"
                />
                <button>Watch Video</button>
              </div>
            </div>
            <Image src={tag} width={550} height={300} className="m-[20px]" />
          </div>
          <div>
            <Image src={img1} width={700} height={800} alt="image" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image src={img2} width={700} height={800} alt="image" />
          <div className="w-[650px]">
            <p className="text-[#FF5555] text-[23px]">FEATURES</p>
            <p class="text-4xl font-black py-[10px]">Uifry Premium</p>
            <div className="my-[20px]">
              <div className="flex items-center">
                <Image src={bulletin1} height={10} width={25} alt="image" />
                <p className="mx-1 font-bold text-[21px]">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-gray-500 py-2">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="my-[20px]">
              <div className="flex items-center">
                <Image src={bulletin2} height={10} width={30} alt="image" />
                <p className="mx-1 font-bold text-[21x]">Budgeting Intervals</p>
              </div>
              <p className="text-gray-500 py-2">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="my-[20px]">
              <div className="flex items-center">
                <Image src={bulletin3} height={10} width={30} alt="image" />
                <p className="mx-1 font-bold text-[21px]">
                  Budgeting Intervals
                </p>
              </div>
              <p className="text-gray-500 py-2">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="w-[650px]">
            <p className="text-[#FF5555] text-[23px]">ADVANTAGES</p>
            <p class="text-4xl font-black py-[10px]">Why Choose Uifry?</p>
            <div className="my-[20px]">
              <div className="flex items-center">
                <Image src={bell} height={40} width={40} alt="image" />
                <p className="mx-1 font-bold text-[23px]">
                  Clever Notifications
                </p>
              </div>
              <p className="text-gray-500 py-2">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
          <Image src={img3} width={700} height={800} alt="image" />
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image src={img4} width={700} height={800} alt="image" />
          <div className="w-[650px]">
            <div className="my-[20px]">
              <div className="flex items-center">
                <Image src={stardesign} height={40} width={40} alt="image" />
                <p className="mx-1 font-bold text-[23px]">Fully Customizable</p>
              </div>
              <p className="text-gray-500 py-2">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[23px]">TESTIMONIAL</p>
            <p class="text-4xl font-black py-[10px] w-[450px] flex flex-col text-center">
              What Our Users Say About Us?
            </p>
            <div className="flex flex-row items-center justify-center">
              <Image src={img5} width={700} height={800} alt="image" />
              <div className="w-[650px]">
                <div className="my-[20px]">
                  <div className="flex items-center">
                    <p className="mx-1 font-bold text-[23px]">
                      The Best Financial Accounting App Ever!
                    </p>
                  </div>
                  <p className="text-gray-500 py-2">
                    "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris etiam odio.
                    Duis tristique lacus, et blandit viverra nisl velit. Sed
                    mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                    Lectus eget eget ac dolor neque lorem sapien, suspendisse
                    aliquam."
                  </p>
                  <Image
                    src={img6}
                    height={80}
                    width={200}
                    alt="image"
                    className="my-2"
                  />
                  <p className="mx-1 font-bold text-[21px] py-[10px]">
                    Nick Jonas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-left mx-[400px]">
            <p className="text-[#FF5555] text-[23px]">FAQ</p>
            <p class="text-4xl font-black py-[10px]">
              Frequently Asked Questions
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-rows-3 grid-flow-col gap-4 my-[40px]">
              <div className="bg-[#FF5555] text-white w-[530px] p-5 rounded-md">
                <p className="font-bold text-xl">
                  The Best Financial Accounting App Ever!
                </p>
                <p>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris."
                </p>
              </div>
              <div className="w-[530px] p-5 rounded-md">
                <p className="font-bold text-xl">
                  The Best Financial Accounting App Ever!
                </p>
                <p className="text-gray-500">
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris."
                </p>
              </div>
              <div className="bg-[#FF5555] text-white w-[530px] p-5 rounded-md">
                <p className="font-bold text-xl">
                  The Best Financial Accounting App Ever!
                </p>
                <p>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris."
                </p>
              </div>
              <div className="w-[530px] p-5 rounded-md">
                <p className="font-bold text-xl">
                  The Best Financial Accounting App Ever!
                </p>
                <p>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris."
                </p>
              </div>
              <div className="bg-[#FF5555] text-white w-[530px] p-5 rounded-md">
                <p className="font-bold text-xl">
                  The Best Financial Accounting App Ever!
                </p>
                <p>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris."
                </p>
              </div>
              <div className="w-[530px] p-5 rounded-md">
                <p className="font-bold text-xl">
                  The Best Financial Accounting App Ever!
                </p>
                <p>
                  “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-black mx-auto w-[1100px] rounded-md mt-[60px]">
          <div className="w-[1100px] text-white flex">
            <div className="flex flex-col justify-center p-[40px]">
              <p className="text-4xl font-black py-[10px]">
                Ready To Get Started?
              </p>
              <p>
                Risus habitant leo egestas mauris diam eget morbi tempus
                vulputate.
              </p>
              <div className="flex justify-center items-center px-[20px] py-[8px] my-[20px] rounded-md bg-white text-black w-[230px]">
                <Image
                  src={ellipse}
                  height={600}
                  width={550}
                  className="absolute top-[4950px] left-[200px]"
                />
                <button>Download App</button>
                <Image
                  src={apple}
                  width={30}
                  height={30}
                  alt="apple"
                  className="mx-[10px]"
                />
                <Image
                  src={whitestar}
                  height={65}
                  width={65}
                  className="absolute top-[4700px] left-[820px]"
                />
              </div>
            </div>
            <Image
              src={whitestar}
              height={52}
              width={52}
              className="absolute top-[5040px] left-[700px] -rotate-45"
            />
            <Image
              src={bg1}
              height={400}
              width={500}
              className="absolute top-[4700px] left-[850px]"
            />
            <Image
              src={img7}
              width={700}
              height={800}
              alt="image"
              className="z-20"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-10 py-[100px] my-[100px]">
          <div className="flex flex-col space-y-2 cursor-pointer">
            <Image src={logo} width={120} height={50} alt="logo" />
            <div className="flex space-x-2 hover:text-[#FF5555] hover:font-bold">
              <Image src={message} width={30} height={10} alt="message" />
              <p>Help@Frybix.com</p>
            </div>
            <div className="flex space-x-2 hover:text-[#FF5555] hover:font-bold">
              <Image src={call} width={30} height={10} alt="message" />
              <p>+1234 456 6789</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 space-x-2 cursor-pointer">
            <p className="text-2xl font-bold">Links</p>
            <p className="hover:text-[#FF5555] hover:font-bold">Home</p>
            <p className="hover:text-[#FF5555] hover:font-bold">About Us</p>
            <p className="hover:text-[#FF5555] hover:font-bold">Bookings</p>
            <p className="hover:text-[#FF5555] hover:font-bold">Blog</p>
          </div>
          <div className="flex flex-col space-y-2 space-x-2 cursor-pointer">
            <p className="text-2xl font-bold">Legal</p>
            <p className="hover:text-[#FF5555] hover:font-bold">Terms Of Use</p>
            <p className="hover:text-[#FF5555] hover:font-bold">
              Privacy Policy
            </p>
            <p className="hover:text-[#FF5555] hover:font-bold">
              Cookie Policy
            </p>
          </div>
          <div className="flex flex-col space-y-2 space-x-2 cursor-pointer">
            <p className="text-2xl font-bold">Product</p>
            <p className="hover:text-[#FF5555] hover:font-bold">Take Tour</p>
            <p className="hover:text-[#FF5555] hover:font-bold">Live Chat</p>
            <p className="hover:text-[#FF5555] hover:font-bold">Reviews</p>
          </div>
          <div className="flex flex-col space-y-2 space-x-2 cursor-pointer">
            <p className="text-2xl font-bold">Newsletter</p>
            <p className="hover:text-[#FF5555] hover:font-bold">
              Stay Up To Date
            </p>
            <div className="flex">
              <input
                placeholder="Your Email"
                className="bg-gray-100 px-[20px] rounded-l-md py-[10px] my-[10px]"
              ></input>
              <button className="flex bg-black text-white h-[40px] p-5 rounded-r-md justify-center items-center w-[120px] my-[10px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="border-t-2 border-gray-300 w-[900px] p-[30px]">
            <p className="flex justify-center">
              Copyright 2022 Uifry.com All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={bg1}
          height={400}
          width={500}
          className="absolute top-[5px] left-[190px]"
        />
        <Image
          src={bg2}
          height={500}
          width={500}
          className="absolute top-[190px] left-[1000px]"
        />
        <Image
          src={bg1}
          height={500}
          width={600}
          className="absolute top-[990px] left-[230px]"
        />
        <Image
          src={bg1}
          height={500}
          width={700}
          className="absolute top-[1700px] left-[850px]"
        />
        <Image
          src={bg1}
          height={500}
          width={600}
          className="absolute top-[2500px] left-[240px]"
        />
        <Image
          src={bg1}
          height={600}
          width={600}
          className="absolute top-[3400px] left-[240px]"
        />
        <Image
          src={bg1}
          height={400}
          width={500}
          className="absolute top-[4490px] left-[150px]"
        />
        <Image
          src={star}
          height={50}
          width={50}
          className="absolute top-[100px] left-[30px] rotate-45"
        />
        <Image
          src={star}
          height={65}
          width={65}
          className="absolute top-[50px] right-[50px]"
        />
        <Image
          src={star}
          height={52}
          width={52}
          className="absolute top-[500px] left-[350px] rotate-45"
        />
        <Image
          src={star}
          height={48}
          width={48}
          className="absolute top-[720px] left-[1100px] -rotate-45"
        />
        <Image
          src={star}
          height={50}
          width={50}
          className="absolute top-[1050px] left-[80px] rotate-45"
        />
        <Image
          src={star}
          height={65}
          width={65}
          className="absolute top-[1700px] right-[150px]"
        />
        <Image
          src={star}
          height={50}
          width={50}
          className="absolute top-[2300px] left-[800px] rotate-45"
        />
        <Image
          src={star}
          height={65}
          width={65}
          className="absolute top-[3000px] left-[1400px]"
        />
        <Image
          src={star}
          height={50}
          width={50}
          className="absolute top-[3850px] left-[200px] rotate-45"
        />
        <Image
          src={star}
          height={65}
          width={65}
          className="absolute top-[3900px] left-[1100px]"
        />
        <Image
          src={star}
          height={65}
          width={65}
          className="absolute top-[4600px] right-[200px]"
        />
        <Image
          src={star}
          height={50}
          width={50}
          className="absolute top-[4780px] left-[240px] rotate-45"
        />
      </div>
    </div>
  );
}
