
import {Effect} from '../../assets/js/script'
export default function LoadJs({ next, router }){
    Effect();
    return next();
}