import { View, HStack, VStack, Text, Image} from "native-base"
import { google } from "../../utils/google";

interface ExploreProps {
    titulo:string;
    info:string;
    textbutton:string;
}

export function CardExplore ({titulo, info, textbutton}:ExploreProps) {
    return(
        <View width={'100%'}>
            <HStack>

                <VStack>
                    <Text>{titulo}</Text>
                    <Text>{info}</Text>
                    <View borderColor={"black"} borderWidth= {4} alignItems= {"center"} justifyContent= {"center"}><Text>{textbutton} </Text></View>
                </VStack>

                <VStack>
                    <Image source={google}/>
                </VStack>

            </HStack>
        </View>
    )
}