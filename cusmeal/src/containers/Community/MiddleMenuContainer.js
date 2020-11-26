import MiddleMenuComponent from '../../components/Community/MiddleMenuComponent';
import {useDispatch,useSelector} from 'react-redux';
import {community, contest} from '../../modules/CommunityMenuSelect';

const MiddleMenuContainer = () => {
    const dispatch = useDispatch();
    const {value} = useSelector(state => ({
        value: state.CommunityMenuSelect.value,
    }));

    const onHandleCommunityClick = (e) => {
        e.preventDefault();
        dispatch(community(value));
    }
    const onHandleContestClick = (e) => {
        e.preventDefault();
        dispatch(contest(value));
    }
    return(
        <>
            <MiddleMenuComponent 
                value={value}
                HandleCommunity={onHandleCommunityClick}
                HandleContest={onHandleContestClick}
            />
        </>
    )
}

export default MiddleMenuContainer;