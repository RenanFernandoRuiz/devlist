import styles from './Title.module.css'

const Title = ({text,iconName}) => {
const imgUrl = new URL(`/src/assets/icon-${iconName}.svg`,import.meta.url).href
  return (
    <div>
       <img src={imgUrl} alt="" />
    </div>
  )
}

export default Title