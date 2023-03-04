import React from "react";
import { Container,Text} from "native-base";

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