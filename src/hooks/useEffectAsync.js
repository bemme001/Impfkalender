import { useEffect } from 'react';

export default function useEffectAsync(fn, dependency) {
    useEffect(() => {
        fn();
    }, dependency);
};