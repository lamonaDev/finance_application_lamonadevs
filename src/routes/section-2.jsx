import MagicBento from "../components/reactBits/MagicBento";
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
                glowColor="200,200,200"
            />
    )
}
