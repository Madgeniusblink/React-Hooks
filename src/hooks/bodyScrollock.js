import { useLayoutEffect } from 'react'

const useBodyScrolLock = () => {
    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [])
}

export default useBodyScrolLock
