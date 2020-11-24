import style from 'styled-components';
//import logo from ''
import {useEffect, useState} from 'react';

const Wrap = style.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(48, 119, 86, 1);
    display: ${props => props.isFlex ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    opacity: 0;

    animation: fadeout 3s;
    -moz-animation: fadeout 3s; /* Firefox */
    -webkit-animation: fadeout 3s; /* Safari and Chrome */
    -o-animation: fadeout 2s; /* Opera */
    @keyframes fadeout {
        from {
            opacity:1;
        }
        to {
            opacity:0;
        }
    }
    @-moz-keyframes fadeout { /* Firefox */
        from {
            opacity:1;
        }
        to {
            opacity:0;
        }
    }
    @-webkit-keyframes fadeout { /* Safari and Chrome */
        from {
            opacity:1;
        }
        to {
            opacity:0;
        }
    }
    @-o-keyframes fadeout { /* Opera */
        from {
            opacity:1;
        }
        to {
            opacity:0;
        }
    }
`;

const LogoWrap = style.div`

`;

const LogoImg = style.img`
    width: 30vw;
    height: 30vw;
`;

const LogoText = style.div`
    color: rgba(248, 246, 250, 1);
    font-size: 1.2rem;
    font-weight: 900;
`;


const LoadingComponent = () => {
    const [isFlex, setIsFlex] = useState(true);
    
     useEffect(() => {
         setInterval(() => {
             setIsFlex(false);
         }, 3000);
     }, [])

    
    return( 
        <>
            <Wrap>
                <LogoWrap>
                    <LogoImg color={red} isFlex={isFlex}/>
                    <LogoText>커스밀</LogoText>
                </LogoWrap>
            </Wrap>
        </>
    )
}

export default LoadingComponent;