import React from "react";
import { Container,Text} from "native-base";
import { InterfaceCardProps } from "native-base/lib/typescript/components/composites/Card/types";

interface CardProps{
  title:string;
}

export function MainCard ({title}:CardProps ){
  return(

 <Container
 backgroundColor={'blue.400'}
 padding={'5'} 
 borderColor={'black'}
 borderRadius={'full'}
 >
  <Text>
    {title}
  </Text>
 </Container>


  )
}