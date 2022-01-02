import { Center, Text } from "native-base";
import { ApolloError } from "@apollo/client";

export default function InitialError({ error }: { error: ApolloError }) {
    return (
        <Center flex={1}>
            <Text>Lo sentimos, ha habido un problema al cargar la aplicación.</Text>
            <Text>Intentelo de nuevo o le recordamos que puede también estamos en:</Text>
            <Text>· Llamando al 858 69 33 02</Text>
        </Center>
    );
}
