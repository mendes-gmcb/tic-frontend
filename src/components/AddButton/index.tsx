import React from 'react';
import { Link } from 'react-router-dom';

import { Add } from './styles';

interface AddButtonProps {
    url: string;
}

export const AddButton: React.FC<AddButtonProps> = (url) => {
    return (
    <Add>
      <Link to={`/${url}/add`}> + </Link>
    </Add>
    )
}