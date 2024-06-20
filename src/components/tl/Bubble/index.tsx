import styles from "./Bubble.module.scss";
import type { ReactNode } from "react";

function Bubble({ children, character, name, hidden, unknown }: { children: ReactNode, character: string, name?: string, hidden?: boolean, unknown?: boolean }) {
    return (
        <div
            className={`${styles.bubble}${hidden ? ` ${styles.hidden}` : ""}${
                unknown ? ` ${styles.unknown}` : ""
            }`}
            data-character={character}
        >
            <div className={styles.icon__wrapper}>
                <div className={styles.icon__box}>
                    <div className={styles.icon__base} />
                </div>
            </div>
            <div className={styles.lines}>
                <div className={styles.name}>
                    <b>{unknown ? "???" : name || character}</b>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Bubble;
