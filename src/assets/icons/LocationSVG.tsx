
interface IProps{
    fill?: string;
}
export default function LocationSVG(props: IProps)
{

    const { fill: fillRaw } = props;

    const fill = fillRaw ?? "#06140C";

    return (
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.7928 1.66602H7.2072C10.4065 1.66602 13 4.25954 13 7.45881C13 8.86275 12.3996 10.1997 11.3503 11.1324L8.32264 13.8237C7.56834 14.4942 6.43166 14.4942 5.67736 13.8237L2.64969 11.1324C1.60037 10.1997 1 8.86275 1 7.45881C1 4.25954 3.59352 1.66602 6.7928 1.66602Z" stroke={ fill } strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M6.7928 1.66602H7.2072C10.4065 1.66602 13 4.25954 13 7.45881C13 8.86275 12.3996 10.1997 11.3503 11.1324L8.32264 13.8237C7.56834 14.4942 6.43166 14.4942 5.67736 13.8237L2.64969 11.1324C1.60037 10.1997 1 8.86275 1 7.45881C1 4.25954 3.59352 1.66602 6.7928 1.66602Z" stroke={ fill } strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="6.99967" cy="7.44303" r="1.66667" stroke={ fill } strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="6.99967" cy="7.44303" r="1.66667" stroke={ fill } strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    )
}

