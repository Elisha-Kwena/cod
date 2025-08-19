import { useState, useEffect, useRef, ReactNode } from "react";

interface AnimatedDropdownProps {
    isOpen:boolean;
    children:ReactNode;
    className?:string;
    onClose?:()=>void;
    duration?:number;
}

export const AnimatedDropdown =({
    isOpen,
    children,
    className='',
    onClose,
    duration=300
}:AnimatedDropdownProps)=>{
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<string>('0px');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(()=>{
        if (!dropdownRef.current) return;

        if (isOpen){
            // open animation
            setIsAnimating(true)
            setHeight(`${dropdownRef.current.scrollHeight}px`)

            // when animation completes
            const timer = setTimeout(() =>{
                setHeight('auto')
                setIsAnimating(false)
            }, duration);

            return () => clearTimeout(timer);
        }else{
            // closing animation

            if (height === '0px') return;

            setIsAnimating(true)
            setHeight(`${dropdownRef.current.scrollHeight}px`);

            // start transition to 0 after setting full height
            requestAnimationFrame(() =>{
                setHeight('0px')
            })
        }
    }, [isOpen, duration]);

    return(
        <div
        ref={dropdownRef}
        className={`overflow-hidden transition-all duration-${duration} ease-out ${className} ${
            isAnimating ? 'pointer-events-none':''
        }`}
        style={{height}}
        onTransitionEnd={() => {
            if (!isOpen && onClose){
                onClose()
            }
            setIsAnimating(false)
        }}
        aria-hidden={!isOpen}
        >
            {children}
        </div>
    )

}


