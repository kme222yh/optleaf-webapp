// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useLayoutEffect, useState, useRef } from 'react';

type ElementSizeType = {
    width: number;
    height: number;
    ref: React.MutableRefObject<null>;
    forceUpdate: () => void;
};

export const useElementSize = (): ElementSizeType => {
    const [size, setSize] = useState([0, 0]);
    const elm = useRef(null);
    const updateSize = (): void => {
        if (elm.current) {
            const boundingClientRect = elm.current.getBoundingClientRect();
            setSize([boundingClientRect.width, boundingClientRect.height]);
        } else {
            setSize([0, 0]);
        }
    };
    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();

        const initialUpdate = (count: number = 0) => {
            if (count > 5) return;
            updateSize();
            window.setTimeout(() => {
                initialUpdate(count + 1);
            }, 50 * count);
        };
        initialUpdate();

        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const forceUpdate = () => {
        updateSize();
    };
    return { width: size[0], height: size[1], ref: elm, forceUpdate };
};
