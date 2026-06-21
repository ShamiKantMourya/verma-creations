import Img1 from "../../assets/Signageboard.jpeg";
import Img2 from "../../assets/pexels-san-engineer-1935370.jpg";
import Img3 from "../../assets/wallpaper.jpg";
import Img4 from "../../assets/repair1.jpg";
import Img5 from "../../assets/repairwork.jpg";
import Img6 from "../../assets/wallpaper1.jpeg";

export interface ImageSliderProps {
  id: number;
  alt: string;
  title: string;
  description: string;
  urls: string;
};
interface ContentProps {
  title: string;
  description: string;
  content: JSX.Element;
}

// export interface GalleryProps {
//   id: number;
//   content: JSX.Element | React.ReactNode | string;
//   className: string;
//   thumbnail: string;
// }

export const images = [
  Img1,
  Img2,
  Img6,
  Img4
];

export const image = {
  img1: Img1,
  img2: Img2,
  img3: Img3,
  img4: Img4
}

export const sliderData: ImageSliderProps[] = [
  {
    id: 0,
    alt: 'Signage Board',
    title: "Signage Works",
    description: "Contact us for signage board works",
    urls: Img1,
  },
  {
    id: 1,
    alt: "Neon lights",
    title: "Neon Works",
    description: "Contact us for making neon symbols and texts",
    urls: Img2,
  },
  {
    id: 2,
    alt: 'Wallpaper',
    title: "Wallpaper Works",
    description: "Contact us for customised 2D and 3D wallpapers",
    urls: Img6,
  },
  {
    id: 3,
    alt: "Repair Work",
    title: "Repair Works",
    description: "Contact us if you have repair works for your signage boards",
    urls: Img5,
  },
];


export const content: (ContentProps & { imageUrl?: string })[] = [
  {
    title: "Signage Board Manufacturer",
    description:
      "From eye-catching boards to towering hoardings, we specialize in transforming your brand's vision into stunning visual displays. With a dedication to quality craftsmanship and innovative design, we ensure your message stands out amidst crowd. Let us amplify your presence and leave a lasting impression on your audience.",
    imageUrl: image.img1,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src={image.img1} alt='signage' loading='lazy' className='h-full w-full' />
      </div>
    )
  },
  {
    title: "Neon Texts",
    description:
      "We specialize in crafting vibrant neon texts and symbols that illuminate your brand's identity. Our team combines creativity and precision to bring your vision to life, making your business shine bright in any setting. We tailor each neon creation to suit your unique style and message. Let us light up your brand's presence today! ",
    imageUrl: image.img2,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src={image.img2} alt='Neon texts' loading='lazy' className='h-full w-full' />
      </div>
    )
  },
  {
    title: "Customize Wallpapers",
    description:
      "We specialize in crafting personalized 2D and 3D wallpapers tailored to your unique style and vision. Whether you're looking for vibrant patterns to immersive textures or to make a bold statement, our team helps your imaginations to meet reality. Discover the perfect blend of design and destination with our personalized wallpaper solutions.",
    imageUrl: image.img3,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src={image.img3} alt='Customize Wallpaper' loading='lazy' className='h-full w-full' />
      </div>
    )
  },
  {
    title: "Repair Works",
    description:
      "We specialize in fixing and upgrading signage boardsand hoardings to keep your business shining bright. Our dedicated team ensures quick, reliable repairs, maximizing visiblity for your brand. With our expertise, your signage will always make a powerful impression, attracting more customers to your doorstep. Trust us to illuminate your business success!",
    imageUrl: image.img4,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img src={image.img4} alt='Repair Works' loading='lazy' className='h-full w-full' />
      </div>
    )
  },
  {
    title: "Contact Us",
    description:
      "Contact us if you want us to build such amazing signage boards, customize wallpapers and hoardings and signage repair works for your company.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Thank Your Visting our Company Site...
      </div>
    )
  },
];