interface IProps{
    fill?: string;
}
export default function SpeedSVG(props: IProps) {

    const {fill: fillRaw} = props;

    const fill = fillRaw ?? "#06140C";

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8.77734" y="9.5" width="4.44444" height="4" rx="2" stroke={ fill } strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="8.77734" y="9.5" width="4.44444" height="4" rx="2" stroke={ fill } strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.667 9.5L19.3337 3" stroke={ fill } strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M12.667 9.5L19.3337 3" stroke={ fill } strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path
                d="M4.71407 21C2.44852 19.35 1 16.8273 1 14V10C1 5.02944 5.47715 1 11 1C12.9645 1 14.7966 1.5098 16.342 2.39043M17.2859 21C19.5515 19.35 21 16.8273 21 14V10C21 8.59867 20.6441 7.27215 20.0093 6.08962"
                stroke={ fill } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M4.71407 21C2.44852 19.35 1 16.8273 1 14V10C1 5.02944 5.47715 1 11 1C12.9645 1 14.7966 1.5098 16.342 2.39043M17.2859 21C19.5515 19.35 21 16.8273 21 14V10C21 8.59867 20.6441 7.27215 20.0093 6.08962"
                stroke={ fill } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
