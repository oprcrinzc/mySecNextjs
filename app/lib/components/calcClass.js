import styles from '/app/styles/page.module.css'

export const calcClass = (p) => {
    let flexDirection = styles.flexRow
    let flexGrow = styles.flexGrow0;
    let gap = styles.gap0;

    if (p.flexGrow==1){
      flexGrow = styles.flexGrow1
    } else if (p.flexGrow==0){
        flexGrow = styles.flexGrow0
    } else flexGrow = styles.flexGrow0

    if (p.flexDirection=="column"){
      flexDirection = styles.flexColumn
    } else if (p.flexDirection=="row"){
        flexDirection = styles.flexRow
    } else flexDirection = styles.flexRow

    if (p.gap==1){
      gap = styles.gap1
    } else if (p.gap==0){
        gap = styles.gap0
    } else gap = styles.gap0

    return `${flexGrow} ${flexDirection} ${gap}`
  }