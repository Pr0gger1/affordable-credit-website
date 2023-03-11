import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

const AnimationContainer = ({ children, duration }) => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setShowText(true);
    }, [])

    return (
        <Transition
            in={showText}
            timeout={duration}
        >
            {
                state => (
                    <div style={{
                        opacity: state === 'entered' ? 1 : 0,
                        transition: 'opacity .5s ease-in-out'
                    }}>
                        {children}
                    </div>
                )}
            {/*{ children }*/}
        </Transition>
    );
};

export default AnimationContainer;