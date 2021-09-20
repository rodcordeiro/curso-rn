import React from 'react';
import { Text } from 'react-native';

import Styles from './estilo';

export default function Comp(){
    return (
        <>
         <Comp1/>
         <Comp2/>
        </>
    )
}
export function Comp1(){
    return (
        <Text style={Styles.Title}>Comp #001</Text>
    )
}
export function Comp2(){
    return (
        <Text style={Styles.Subtitle}>Comp #002</Text>
    )
}

// export {
//     Comp1,
//     Comp2
// }
// export default Comp;