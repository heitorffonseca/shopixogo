import React from "react";

type Params = {
    id: string,
    name: string,
    description?: string | null,
}

const Card: React.FC<Params> = ({ id, name, description = null }: Params) => {
    return (
        <div>
            <p>{name}</p>
            {description && (<p>{description}</p>)}

            <a href={`/${id}`} className='btn btn-sm btn-primary'>visitar</a>
        </div>
    );
}

export default Card;