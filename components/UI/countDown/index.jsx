import { useRemainingTime } from "@/hooks/useRemainingTime";
import styles from "./countdown.module.css";

export const Countdown = ({ targetDate }) => {
  const { days, hours, minutes, seconds, countdownEnded } =
    useRemainingTime(targetDate);
  const time = [
    { label: "Días", value: days },
    { label: "Horas", value: hours },
    { label: "Minutos", value: minutes },
    { label: "Segundos", value: seconds },
  ];
  return (
    <>
      <div className={styles.mb_2 + ' ' + styles.font_bold}>
        {!countdownEnded ? "¡Ya falta muy poco!" : "Empieza la #miduConf 🎊"}
      </div>
      <section className={styles.flex}>
        {time.map(({ label, value }) => (
          <div className={styles.flex_col + ' ' + styles.w_24}>
            <div className={styles.text_5xl + ' ' + styles.font_bold + ' ' + styles.text_transparent + ' ' + styles.bg_clip_text + ' ' + styles.bg_gradient_to_r + ' ' + styles.from_cyan_600 + ' ' + styles.to_blue_700 }>
              {value}
            </div>
            <span className={styles.text_blue_700}>{label}</span>
          </div>
        ))}
      </section>
    </>
  );
};
