import { MdOutlineCalendarToday } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import Slider from "react-slick";
import "./about.css";
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: null, 
    prevArrow: null, 
  };
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-[500]">Bizning jamoamiz</h1>
      <div className="pt-5">
        <Slider {...settings} >
          <div className="flex justify-center">
            <img
              className="sliderImg mx-auto"
              src="https://s3-alpha-sig.figma.com/img/cc67/4e4f/411b4ed36cfb3b816029eb73a5d22458?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMmVH6XhxJhUvjqYKEIKXi9hRQcL50ZpgyWknqPLdtWMhoUEkqjwYVM5jrPjtElVF4LJsmim0ULxllbzThBt8mblWLj3ryNV4lOgFI-Snn7QQlokbjpYKgwzuZJio0bp1v~PCVMXVHGnwfMPCNio5NNvsZyt8MUcK0N8PJUMHFZ7v2KojLZGKGRl5CeaMfkeiiOf4HRalZ3LZpPRedJJ9rPFrccSexTBNBGfSta7sg~fD3iSrf32ZdA3968-OlsTNI~A56oA0II2SQakkpkfyyeQt-Xa4~XPMoJpncYbIo9hO32YJdcZufYNmeQWeje6xdwrkhdu4ylXxtLsUWmfvw__"
              alt="sadfaf"
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold pt-3">Brooklyn Simmons</h1>
              <p className="text-sm opacity-[0.7] py-1">Bosh oshpaz</p>
            </div>
          </div>
          <div className="flex justify-center ">
            <img
              className="sliderImg mx-auto"
              src="https://s3-alpha-sig.figma.com/img/aa25/997c/30188cf66ad04370a0261d646eb25ced?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=faFliL9uphQX8QwXF1vN7rPXj2oNl52AYDofUSVyLLisnnGstd4WveIJIcIV3MauSIeS7sKjbHJZetSu5q233hU-97~pHMaHnb-dWhHqTKz-N8OLCjFIwJlISZfg3uojUBCI-GPUxNa0ckPpkHebONbhM8BkdpMwt0-6jzQq9kHig5iil6wqo2iBz61B8poh1oySVrnJm7Xs8j~aFiNox4zfZyKKrQXNyMI-jyPl81HyqAYCTpLBVBK~Jxi-G0MVOgJBcy-1DJpw0GEPG4EyXKgCJmQ1GEzsnUTVEp~2GfyUQg~h4LohDcpZk5B2WuzbCLLbJNzyS4OuYJhhqQoG9A__"
              alt="sadfaf"
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold pt-3">Brooklyn Simmons</h1>
              <p className="text-sm opacity-[0.7] py-1">Bosh oshpaz</p>
            </div>
          </div>
          <div className="flex justify-center ">
            <img
              className="sliderImg mx-auto"
              src="https://s3-alpha-sig.figma.com/img/64df/41da/74c39fab6529c5f5cd1471d8b7b6e6d2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YqPNFA04LuGgHsatYB6ZXgw6bt49nCAwNX2Kb6KjvoiW9CjbP4xB36MyE-CpkYdI6QbxcgEaj6lkm0P5204hnkeb8DD2xqLfTuwCROXAhl6U8H3s~zDRHmHhL5T04JpWb8amHUM5PfS0X5~4ADYULjV-K0d9nruvSU7Kl91M7TIBe-IfsGJTtjsUqkCp5W2FIg2ky7E24NYbw2u9CbVdcwpHd~BuDUZwIf44rwVI1daoDFNsKhS710Mp~CG5NRgmLGA3xLEjPck47f3gUSvVhntSitDcjEwmcELmaBmJYEzJpUsAQmjIVxPgU9iNqbv8RehTpjVjohtHNuOlQ-xw8A__"
              alt="sadfaf"
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold pt-3">Brooklyn Simmons</h1>
              <p className="text-sm opacity-[0.7] py-1">Bosh oshpaz</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flex flex-col pt-5 gap-3">
        <h1 className="text-xl font-bold">Ish vaqtlari</h1>
        <div className="day flex items-center ">
          <MdOutlineCalendarToday className="text-base mr-[10px]" />
          <p className="text-base">Dushanba - Yakshanba</p>
        </div>
        <div className="time flex items-center ">
          <MdAccessTime className="text-base mr-[10px]" />
          <p className="text-base"> 10:00 - 23:00</p>
        </div>
      </div>
    </div>
  );
};

export default About;
