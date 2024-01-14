import styles from '/app/styles/page.module.css'

export const calcClass = (p) => {
    let flexDirection = styles.flexRow;
    let flexGrow = styles.flexGrow0;
    let gap = styles.gap0;
    let cardBg = '';
    let bg = ''
    let padding = styles.padding1;
 
    p.flexGrow == 1 ? flexGrow = styles.flexGrow1 : p.flexGrow == 0 ? flexGrow = styles.flexGrow0 : flexGrow = styles.flexGrow0
    p.flexDirection == "column" ? flexDirection = styles.flexColumn : p.flexDirection=="row" ? flexDirection = styles.flexRow : flexDirection = styles.flexRow
    p.gap == 1 ? gap = styles.gap1 : p.gap == 0 ? gap = styles.gap0 : gap = styles.gap0
    p.cardBg == 0 ? cardBg = styles.cardBg0 : p.cardBg == 1 ? cardBg = styles.cardBg1 : ''
    p.padding == 0 ? padding = styles.padding0 : p.padding == 1 ? padding = styles.padding1 : styles.padding1
    p.bg == "red" ? bg = styles.bgRed : p.bg == "green" ? bg = styles.bgGreen : ''

    return `${flexGrow} ${flexDirection} ${gap} ${cardBg} ${padding} ${bg}`
  }