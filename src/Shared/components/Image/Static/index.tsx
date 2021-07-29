import { FunctionComponent } from 'react'

import Image from 'next/image'
import {
    ImageContainerStyled
} from './styles'

interface ImageLinkInterface {
    localeName:string,
    imageExtension?: string,
    width?:number,
    height?:number,
    basePath?:string,
}

 const ImageLink: FunctionComponent<ImageLinkInterface> = ({
    localeName,
    imageExtension='svg',
    width=30,
    height=30,
    basePath='/img/components/flags'
}) => {

    return(
        <ImageContainerStyled>
            <Image 
                alt={localeName}
                src={`${basePath}/${localeName}.${imageExtension}`}
                width={width}
                height={height}
                layout='fixed'
            />
        </ImageContainerStyled>
    )
}

export default ImageLink