import { useEffect } from 'react';
import styles from './styles.module.css';

interface OverlayProps {
  onClick: () => void;
}

export const Overlay = ({ onClick }: OverlayProps) => {
  useEffect(() => {
    const onEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        onClick();
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClick]);

  return <div className={styles.root} onClick={onClick}></div>;
};
