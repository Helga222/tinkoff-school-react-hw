import React from 'react';
import cn from 'classnames';
import Money from '../Money/Money';

import styles from './BoardItem.module.css';

const BoardItem: React.FC<any> = (props) => {
	return (
		<div className={styles.item}>
			<div className={cn(styles.logo, styles[`logo_${props.type}`])} />
			<div className={styles.title}>{props.customTitle || props.title}</div>
			{props.type!=='external' && <Money value={props.amount} currency={props.currency}/>}
		</div>
	);
};

export default BoardItem;
