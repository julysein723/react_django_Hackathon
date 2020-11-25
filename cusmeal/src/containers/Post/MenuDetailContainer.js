import MenuDetailComponent from '../../components/Post/MenuDetailComponent';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

const MenuDetailContainer = () => {
    return(
        <>
            <MenuDetailComponent />
        </>
    )
}

export default MenuDetailContainer;