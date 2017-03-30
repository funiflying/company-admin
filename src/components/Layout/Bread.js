import React from 'react';
import styles from './main.less';
import {Breadcrumb} from 'antd'
function Bread({routes,location}) {
  return (
        <Breadcrumb className={styles.bread} routes={routes}/>
  );
}

export default Bread;
