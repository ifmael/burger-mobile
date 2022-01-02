import { Dimensions, Linking } from "react-native";
import { Center, Heading, Image } from "native-base";

// @ts-ignore
import logo from "../../../../assets/umami.png";

const windowWidth = Dimensions.get("window").width;

const widthRatioAspect = 0.54;
const heightRatioAspect = 0.77;
const imageWidth = widthRatioAspect * windowWidth;
const imageHeight = widthRatioAspect * windowWidth * heightRatioAspect;
// const phoneNumber = 858693302;

// const call = () => {
//     Linking.openURL(`tel:${phoneNumber}`);
// };

// const goToInstagram = () => {
//     Linking.openURL(`instagram://user?username=umamisantafe`);
// };

export default function Home() {
    // const { loading, error, data } = useQuery(FETCH_BURGERS, { fetchPolicy: "no-cache" });
    // console.log(data);
    return (
        <Center flex={1} bg="white">
            <Image source={logo} w={imageWidth} h={imageHeight} resizeMode="cover" />
            <Heading size="sm" color="yellow.500">
                Hamburguesería gourmet
            </Heading>
        </Center>
    );
}
