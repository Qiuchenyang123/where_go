import {useEffect, useState} from 'React';

export default function () {
    const [width, setWidth] = useState(document.documentElement.clientWidth);
    const [height, setHeight] = useState(document.documentElement.clientHeight);
    const cb = () => {
        setWidth(document.documentElement.clientWidth);
        setHeight(document.documentElement.clientHeight);
    };
    useEffect(() => {
        window.addEventListener(
            'onresize',
            cb,
            false
        );
        return () => {
            window.removeEventListener(
                'onresize',
                cb,
                false
            );
        }
    }, []);
    return {
        width,
        height
    }
}