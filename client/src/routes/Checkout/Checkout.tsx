import Input from '../../components/Input/Input'
import styles from './Checkout.module.css'

export default function Checkout() {
  return (
    <main
      className={styles.main}
    >
      
      <Input
        type='text'
        label='hello'
        htmlFor='hello'
        value=''
        placeholder='world'
        onChange={(arg) => console.log(arg)}
      />

    </main>
  )
}