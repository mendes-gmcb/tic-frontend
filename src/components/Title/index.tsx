import React from 'react';

import { TitleStyle } from './styles';

interface AddButtonProps {
    text: string;
}

export const Title: React.FC<AddButtonProps> = ({text}) => {
    return (
    <TitleStyle>
      {text}
    </TitleStyle>
    )
}