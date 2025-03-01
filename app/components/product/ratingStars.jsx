import Image from "next/image";

import Star from '@media/star.svg'
import StarHalf from '@media/star-half.svg'
import StarFill from '@media/star-fill.svg'

export default function RatingStars({rating}) {
    const fullStars = Math.floor(rating / 10);
    const halfStar = rating % 10 >= 5 ? 1 : 0;

    let array = [];
    const images = {
        star: <Image alt="StarFill" src={StarFill} width={"auto"} height={"auto"} />,
        half: <Image alt="StarHalf" src={StarHalf} width={"auto"} height={"auto"} />,
        void: <Image alt="Star" src={Star} width={"auto"} height={"auto"} />
    };
    for (let i = 0; i < fullStars; i++) {
        array.push('star');
    }
    if (halfStar) {
        array.push('half');
    }
    for (let i = array.length; i < 5; i++) {
        array.push('void');
    }

    return (
        <div className="flex gap-x-[2px]">
            {array.map((child, index) => {
                return <div className="flex" key={index}>{images[child]}</div>;
            })}
        </div>
    );
}