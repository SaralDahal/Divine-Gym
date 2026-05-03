import MarqueeItem from "../layout/MarqueeItem";
import img01 from "../../assets/imageMarquee/1.jpeg";
import img02 from "../../assets/imageMarquee/2.avif";
import img03 from "../../assets/imageMarquee/3.avif";
import img04 from "../../assets/imageMarquee/4.jpeg";
import img05 from "../../assets/imageMarquee/5.jpeg";
import img06 from "../../assets/imageMarquee/6.jpeg";
import img07 from "../../assets/imageMarquee/7.jpeg";
import img08 from "../../assets/imageMarquee/8.jpeg";
import img09 from "../../assets/imageMarquee/9.jpeg";
import img10 from "../../assets/imageMarquee/10.jpeg";

const ImageMarquee = () => {
    const upperMarquee = [
        img01, img02, img03, img04, img05,
        img06, img07, img08, img09, img10,
    ];

    const lowerMarquee = [
        img06, img07, img08, img09, img10,
        img01, img02, img03, img04, img05,
    ];

    return (
        <div id="gallery" className="overflow-x-hidden">
            <MarqueeItem images={upperMarquee} from={0} to="-100%" />
            <MarqueeItem images={lowerMarquee} from="-100%" to={0} />
        </div>
    );
};

export default ImageMarquee;