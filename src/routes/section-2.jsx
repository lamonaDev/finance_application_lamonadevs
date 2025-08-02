import MagicBento from "../components/reactBits/MagicBento/MagicBento";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SectionTwo(properties) {
    return (
        <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="0, 225, 175"
            />
    )
}
