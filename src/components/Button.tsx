import React from "react";
import { Button, Toast, HStack } from "native-base";

interface ButtonProps{
    title: string;
}

export function MainButton({title} : ButtonProps){
    return(
        <HStack>
            <Button  
            variant="subtle" 
            justifyContent={'center'}
            textAlign={'center'} 
            color={'white'}
            colorScheme="secondary" 
            py={2}
            px={6}
            my={4}
            onPress={() => Toast.show({
            description: "Pop-up do Eduardo"
            })}> 
                {title}
            </Button>
        </HStack>
    )
}