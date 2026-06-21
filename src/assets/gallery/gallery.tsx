import Oryn from "./Oryn.jpeg";
import Animo from "./Animo.jpeg";
import Shot from "./21Shot.jpeg";
import Wallpaper from "./3DWallpaper.jpeg";
import H2R from "./H2Rmusic.jpeg";
import Monk from "./Monk.jpeg";
import Mrchef from "./MrChef.jpeg";
import Nitra from "./NitaraJewels.jpeg";
import Vanguard from "./Vanguard.jpeg";
import Wallpaper2D from "./wallpaper.jpeg";
import Swadeshi from "./swadeshi.jpeg";
import FitFusion from "./FitFushion.jpeg";
import DevOpticals from "./devOpticals.jpeg";
import Shipping from "./shipping.jpeg";
import CashForGold from "./CashForGold.jpeg";
import BarbequeNation from "./BarbequeNation.jpeg";

interface ImagesProps {
    route: string;
    imgSrc: string;
    alt: string
}

export const Images: ImagesProps[] = [
    {
        route: "/Oryn.jpeg?url",
        imgSrc: Oryn,
        alt: "Oryn"
    },
    {
        route: "/Animo.jpeg?url",
        imgSrc: Animo,
        alt: "Animo"
    },
    {
        route: "/21Shot.jpeg?url",
        imgSrc: Shot,
        alt: "21Shot"
    },
    {
        route: "/BarbequeNation.jpeg?url",
        imgSrc: BarbequeNation,
        alt: "Barbeque Nation"
    },
    {
        route: "/CashForGold.jpeg?url",
        imgSrc: CashForGold,
        alt: "Cash For Cold"
    },
    {
        route: "/shipping.jpeg?url",
        imgSrc: Shipping,
        alt: "Shipping Company"
    },
    {
        route: "/devOpticals.jpeg?url",
        imgSrc: DevOpticals,
        alt: "Dev Opticals"
    },
    {
        route: "/FitFushion.jpeg?url",
        imgSrc: FitFusion,
        alt: "Fit Fusion Gym"
    },
    {
        route: "/swadeshi.jpeg?url",
        imgSrc: Swadeshi,
        alt: "Swadeshi"
    },
    {
        route: "/3DWallpaper.jpeg?url",
        imgSrc: Wallpaper,
        alt: "3D Wallpaper"
    },
    {
        route: "/Vanguard.jpeg?url",
        imgSrc: Vanguard,
        alt: "Vanguard Diagnostics"
    },
    {
        route: "/wallpaper.jpeg?url",
        imgSrc: Wallpaper2D,
        alt: "2D Wallpaper"
    },
    {
        route: "/NitaraJewels.jpeg?url",
        imgSrc: Nitra,
        alt: "Nitara Jewels"
    },
    {
        route: "/MrChef.jpeg?url",
        imgSrc: Mrchef,
        alt: "Mr Chef"
    },
    {
        route: "/Monk.jpeg?url",
        imgSrc: Monk,
        alt: "Monk"
    },
    {
        route: "/H2Rmusic.jpeg?url",
        imgSrc: H2R,
        alt: "H2R Music"
    },
]