import React from 'react';

interface Props {
    name : string
}

export const MyFunction : React.FC<Props> = ({name}) => {
    return (
        <h1> {name} </h1>
    );
}