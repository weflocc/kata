import React from 'react'
import image from '../../assets/logo.svg'
import styles from 'part:@sanity/default-layout/branding-style'
import config from 'config:sanity'
const projectName = (config.project && config.project.name) || ''

const Logo = () => (
  <div>
      <img src={image} width='46' height='16' alt='flocc' />
  <h1 className={styles.projectName}>
                {projectName}
              </h1>
  </div>

)

export default Logo
