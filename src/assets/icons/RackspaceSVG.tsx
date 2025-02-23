
interface IProps{
    fill?: string;
}
export default function RackspaceSVG(props: IProps) {

    const {fill: fillRaw} = props;

    const fill = fillRaw ?? "#06140C";

    return (
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1.11035" width="12" height="5.99999" rx="3" stroke="#103722" strokeWidth="1.2"
                  strokeLinejoin="round"/>
            <rect x="1" y="1.11035" width="12" height="5.99999" rx="3" stroke="#103722" strokeWidth="1.2"
                  strokeLinejoin="round"/>
            <rect x="3.17578" y="10.3428" width="3.192" height="1.9233" rx="0.961652" fill={ fill }/>
            <rect x="3.17578" y="10.3428" width="3.192" height="1.9233" rx="0.961652" fill={ fill }/>
            <rect x="3.17578" y="3.29004" width="3.192" height="1.9233" rx="0.961652" fill={ fill }/>
            <rect x="3.17578" y="3.29004" width="3.192" height="1.9233" rx="0.961652" fill={ fill }/>
            <rect x="1" y="8.44336" width="12" height="5.99999" rx="3" stroke="#103722" strokeWidth="1.2"
                  strokeLinejoin="round"/>
            <rect x="1" y="8.44336" width="12" height="5.99999" rx="3" stroke="#103722" strokeWidth="1.2"
                  strokeLinejoin="round"/>
        </svg>
    );
}
