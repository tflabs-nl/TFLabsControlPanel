interface IProps{
    fill?: string;
}
export default function TransferSpeedSVG(props: IProps)
{
    const { fill: fillRaw } = props;
    const fill = fillRaw ?? "#06140C";

    return (
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7.71143C12 10.6938 9.53757 13.1114 6.5 13.1114C3.46243 13.1114 1 10.6938 1 7.71143" stroke={ fill } strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 7.71143C12 10.6938 9.53757 13.1114 6.5 13.1114C3.46243 13.1114 1 10.6938 1 7.71143" stroke={ fill } strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6.5 1.11133V9.51133M6.5 9.51133L3.75 6.81133M6.5 9.51133L9.25 6.81133" stroke={ fill } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.5 1.11133V9.51133M6.5 9.51133L3.75 6.81133M6.5 9.51133L9.25 6.81133" stroke={ fill } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
