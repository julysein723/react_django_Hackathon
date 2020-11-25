import style from 'styled-components';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clickMinus, clickPlus} from '../../modules/CustomBtnClick';

const Wrap = style.div`
    width: 100vw;
    height: 15vw;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BtnWrap = style.div`
    width: 22vw;
    height: 9vw;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    background-color: rgba(48, 119, 86, 1);
    border-radius: 2vw;
    margin-left: 6vw;
`;

const Btn = style.button`
    width: 7vw;
    height: 7vw;
    border-radius: 1.5vw;
    background-color: rgba(248, 246, 250, 1);
    color: rgba(210, 210, 210, 1);
    font-size: 0.8rem;
    font-weight: 900;
    outline: none;
    border: none;
    padding: 0;
    text-align: 0.8rem;
`;

const BtnText = style.div`
    color: rgba(248, 246, 250, 1);
    font-size: 1rem;
    font-weight: 900;
    margin: 0 1.5vw;
    font-family: 'Noto Sans KR';
`;

const MenuWrap = style.div`
    position: absolute;
    right: 7%;
    display: flex;
    flex-direction: row;
    font-family: 'Noto Sans KR';
    align-items: center;
    justify-content: center;
`;

const MenuName = style.div`
    color: black;
    font-size: 1rem;
    font-weight: 900;
    margin-right: 4vw;
`;

const MenuDetail = style.div`
    color: black;
    font-size: 0.7rem;
    font-weight: 700;
`;



const CustomComponent = ({material}) => {
    const [value, setValue] = useState(1);
    const {cost} = useSelector(state => ({
        cost: state.CustomBtnClick.value,
    }))
    const dispath = useDispatch();

    const onClickMinus = () => {
        if(value > 1){
            setValue(value-1);
            const res = cost - material.price;
            dispath(clickMinus(res));
        }
    }

    const onClickPlus = () => {
        setValue(value+1);
        console.log(cost);
        const res = cost + material.price;
        dispath(clickPlus(res));
    }
    
    return(
        <>
            <Wrap>
                <BtnWrap>
                    <Btn onClick={onClickMinus}>-</Btn>
                    <BtnText>{value}</BtnText>
                    <Btn onClick={onClickPlus}>+</Btn>
                </BtnWrap>
                <MenuWrap>
                    <MenuName>{material.name}</MenuName>
                    <MenuDetail>{material.gram}g/{material.price}원</MenuDetail>
                </MenuWrap>
            </Wrap>
        </>
    )
}

export default CustomComponent;