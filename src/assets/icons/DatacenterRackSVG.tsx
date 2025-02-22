interface IProps{
    fill?: string;
}
export default function DatacenterRackSVG(props: IProps)
{
    const { fill: fillRaw } = props;
    const fill = fillRaw ?? "#06140C";

    return (
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2.71484C13 3.75038 10.3137 4.58984 7 4.58984C3.68629 4.58984 1 3.75038 1 2.71484M13 2.71484C13 1.67931 10.3137 0.839844 7 0.839844C3.68629 0.839844 1 1.67931 1 2.71484M13 2.71484V12.5065M1 2.71484V12.356" stroke={ fill } stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M13 7.50586C13 8.54139 10.3137 9.38086 7 9.38086C3.68629 9.38086 1 8.54139 1 7.50586" stroke={ fill } strokeWidth="1.2" strokeLinejoin="round"/>
            <path d="M13 12.1738C13 13.2094 10.3137 14.0488 7 14.0488C3.68629 14.0488 1 13.2094 1 12.1738" stroke={ fill } strokeWidth="1.2" strokeLinejoin="round"/>
            <ellipse cx="10" cy="6.50684" rx="1" ry="1" fill={ fill }/>
            <ellipse cx="10" cy="11.1729" rx="1" ry="1" fill={ fill }/>
        </svg>
    );
}
