import { useState, useEffect, type RefObject } from 'react';

interface ParentSize {
  width: number;
  height: number;
}

export const useParentSize = (parentRef: RefObject<HTMLElement>): ParentSize => {
  const [parentSize, setParentSize] = useState<ParentSize>({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const width = parentRef.current?.offsetWidth ?? 0;
      const height = parentRef.current?.offsetHeight ?? 0;
      setParentSize({ width, height });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [parentRef]);

  return parentSize;
};
