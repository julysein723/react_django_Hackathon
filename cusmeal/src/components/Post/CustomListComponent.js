import style from 'styled-components';
import CustomContainer from '../../containers/Post/CustomContainer';
import {useDispatch,useSelector} from 'react-redux';
import {clickMinus, clickPlus} from '../../modules/CustomBtnClick';

const Wrap = style.div`
    position:absolute;
    top: 63vw;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(248, 246, 250, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextWrap = style.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 11%;
`;

const Text = style.div`
    color: black;
    font-size: 1rem;
    font-weight: 900;
    margin-right: 4vw;
`;

const TextPrice = style.div`
    color: rgba(48, 119, 86, 1);
    font-size: 1rem;
    font-weight: 900;
    font-family: 'Noto Sans KR';
`;

const PriceWrap = style.div`
    width: 100vw;
    height: 10vw;
    margin-top: 10vw;
`;

const ListWrap = style.div`
    width: 100vw;
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-items: center;
    margin-top: 5vw;
`;

const Space = style.div`
    width: 100vw;  
    height: 5vw; 
`;

const CustomListComponent = ({price, materials}) => {
    const {post, value} = useSelector(state => ({
        post: state.PostChange.post,
        value: state.CustomBtnClick.value,
    }))
    
    return(
        <>
        <Wrap>
            <PriceWrap>
                <TextWrap>
                    <Text>기본</Text>
                    <TextPrice>{price}원</TextPrice>
                </TextWrap>
            </PriceWrap>
            <ListWrap>
                {materials.map((material, i)=>{
                    if(material.mealkit == post.id){
                        return(
                            <CustomContainer key={i} material={material}/>
                        )
                    }
                })}
                <Space />
            </ListWrap>
        </Wrap>
        
        </>
    )
}

export default CustomListComponent;