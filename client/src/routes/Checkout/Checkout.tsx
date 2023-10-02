import { useContext } from 'react'
import BackLink from '../../components/BackLink/BackLink'
import Button from '../../components/Button/Button'
import CheckoutCosts from '../../components/CheckoutCosts/CheckoutCosts'
import Input from '../../components/Input/Input'
import { CartContext } from '../../contexts/CartContext'
import styles from './Checkout.module.css'
import { calculateCartTotal } from '../../util/calculateCartTotal'

export default function Checkout() {
  const {
    cart
  } = useContext(CartContext)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main
      className={styles.main}
    >

      <BackLink />
      
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >

        <div
          className={styles.fieldset_container}
        >

          <h1>
            CHECKOUT
          </h1>

          <fieldset
            className={styles.fieldset}
          >

            <h4>
              BILLING DETAILS
            </h4>

            <Input
              type='text'
              label='Name'
              htmlFor='name'
              value=''
              placeholder='Alexei Ward'
              onChange={(arg) => console.log(arg)}
            />

            <Input
              type='email'
              label='Email Address'
              htmlFor='email'
              value=''
              placeholder='alexei@mail.com'
              onChange={(arg) => console.log(arg)}
            />

            <Input
              type='tel'
              label='Phone Number'
              htmlFor='phone'
              value=''
              placeholder='+1 202-555-0136'
              onChange={(arg) => console.log(arg)}
            />

          </fieldset>

          <fieldset
            className={styles.fieldset}
          >

            <h4>
              SHIPPING INFO
            </h4>

            <Input
              type='text'
              label='Your Address'
              htmlFor='address'
              value=''
              placeholder='1137 Williams Avenue'
              onChange={(arg) => console.log(arg)}
            />

            <Input
              type='number'
              label='ZIP Code'
              htmlFor='zip'
              value=''
              placeholder='10001'
              onChange={(arg) => console.log(arg)}
            />

            <Input
              type='text'
              label='City'
              htmlFor='city'
              value=''
              placeholder='New York'
              onChange={(arg) => console.log(arg)}
            />

            <Input
              type='text'
              label='Country'
              htmlFor='country'
              value=''
              placeholder='United States'
              onChange={(arg) => console.log(arg)}
            />

          </fieldset>

          <fieldset
            className={styles.fieldset}
          >

            <h4>
              PAYMENT DETAILS
            </h4>

            <Input
              type='radio'
              label='Payment Method'
              value=''
              options={['e-Money', 'Cash on Delivery']}
              onChange={arg => console.log(arg)}
            />
            
            <Input
              type='number'
              label='e-Money Number'
              htmlFor='emoney'
              value=''
              placeholder='238521993'
              onChange={(arg) => console.log(arg)}
            />

            <Input
              type='number'
              label='e-Money PIN'
              htmlFor='pin'
              value=''
              placeholder='6891'
              onChange={(arg) => console.log(arg)}
            />

          </fieldset>

        </div>

        <div
          className={styles.summary}
        >

          <h6>
            SUMMARY
          </h6>

          <CheckoutCosts
            total={calculateCartTotal(cart)}
            vat={Math.floor(calculateCartTotal(cart) * 0.2)}
          />

          <Button
            variant='solid'
            color='beige'
          >
            CONTINUE & PAY
          </Button>

        </div>

      </form>

    </main>
  )
}