import { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import './foods.css';
//eslint-disable-next-line
export const FoodsImage = ({ src }) => {
    const [imgLoading, setImageLoading] = useState(false);
    const baseUrl = 'https://media.istockphoto.com/id/1367855191/fr/vectoriel/galerie-dimages-ic%C3%B4ne-solide.jpg?s=612x612&w=0&k=20&c=6YcYJhK-H6i2wto10SJvSa-Y06TvzpM6aVOvBgUSWdo=';

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoading(true);
        };
        img.src = src;
    }, [src]);

    return (
        <div>
            <div  >
                <Blurhash
                    style=
                    {{
                        display:imgLoading ? 'none' : 'block',
                        height: '150px', width: '100%',
                        objectFit: 'cover'
                    }}
                className='imgMenu rounded-[20px]'

                    hash='LEHV6nWB2yk8pyo0adR*.7kCMdnj'
                    width={200}
                    height={200}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            <img
                style={{ display: imgLoading ? 'block' : 'none' }}
                className='imgMenu rounded-[20px]'
                src={src ? src : baseUrl}
                alt={'foods'}
            />
        </div>
    );
};
