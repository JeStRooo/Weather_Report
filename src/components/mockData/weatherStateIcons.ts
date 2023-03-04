import Sun from "../assets/Sun.svg";
import Rain from "../assets/Rain.svg";
import Rainbow from "../assets/Rainbow.svg";
import Clouds from "../assets/Clouds.svg";
import Snow from "../assets/Snow.svg";

interface WeatherStateType {
    [key: string]: string
}

export const weatherStateIcons: WeatherStateType = {
    Clear: Sun,
    Rain: Rain,
    Clouds: Clouds,
    Snow: Snow,
    Rainbow: Rainbow
}
