import {EnthusiasmAction} from '../actions/index';
import {demo} from '../../types';
import {INCREMENT_ENTHUSIASM,DECREMENT_ENTHUSIASM} from '../constants';
import initState from '../store/initState';

export function enthusiasm(state:demo=initState.demo,action:EnthusiasmAction):demo{
    switch (action.type){
        case INCREMENT_ENTHUSIASM:
            return {...state,enthusiasmLevel:state.enthusiasmLevel+1};
        case DECREMENT_ENTHUSIASM:
            return {...state,enthusiasmLevel:Math.max(1,state.enthusiasmLevel-1)};
    }
    return state;
}