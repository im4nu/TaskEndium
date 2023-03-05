import React from "react";
import { HStack, Button } from "native-base";

export function ClickButton() {
    return (
        <HStack>
            <Button
            justifyContent={'center'}
            textAlign={'center'} 
            color={'white'}
            onPress={() => console.log("hello world")}>
                Botão null
            </Button>
        </HStack>
    );
}