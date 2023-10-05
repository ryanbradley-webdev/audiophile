import { useContext, useReducer, useState } from 'react'
import BackLink from '../../components/BackLink/BackLink'
import Button from '../../components/Button/Button'
import CheckoutCosts from '../../components/CheckoutCosts/CheckoutCosts'
import Input from '../../components/Input/Input'
import { CartContext } from '../../contexts/CartContext'
import styles from './Checkout.module.css'
import { calculateCartTotal } from '../../util/calculateCartTotal'
import CartItem from '../../components/CartItem/CartItem'
import { checkoutReducer, initialCheckout } from './util/checkoutReducer'
import CashOnDeliveryIcon from '../../assets/CashOnDeliveryIcon'
import Modal from '../../components/Modal/Modal'
import CheckIcon from '../../assets/CheckIcon'
import { formatCurrency } from '../../util/formatCurrency'

export default function Checkout() {
  const {
    cart
  } = useContext(CartContext)

  const [checkoutData, dispatch] = useReducer(checkoutReducer, initialCheckout)

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(true)

  const handleNumberChange = (value: string, type: 'updateZip' | 'updatePin' | 'updateEMoneyNumber') => {
    if (value && (value.match(/[0-9]/g)?.length !== value.length)) return

    if (
      type === 'updateZip' && value.length > 5 ||
      type === 'updateEMoneyNumber' && value.length > 9 ||
      type === 'updatePin' && value.length > 4
    ) return

    // TODO add logic to format phone number input

    dispatch({ type, payload: value })
  }

  const handleNavigateHome = () => {
    setSuccess(false)
  }

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
              value={checkoutData.name}
              placeholder='Alexei Ward'
              onChange={(arg) => dispatch({ type: 'updateName', payload: arg })}
            />

            <Input
              type='email'
              label='Email Address'
              htmlFor='email'
              value={checkoutData.email}
              placeholder='alexei@mail.com'
              onChange={(arg) => dispatch({ type: 'updateEmail', payload: arg })}
            />

            <Input
              type='tel'
              label='Phone Number'
              htmlFor='phone'
              value={checkoutData.phone}
              placeholder='+1 202-555-0136'
              onChange={(arg) => dispatch({ type: 'updatePhone', payload: arg })}
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
              value={checkoutData.address}
              placeholder='1137 Williams Avenue'
              onChange={(arg) => dispatch({ type: 'updateAddress', payload: arg })}
            />

            <Input
              type='text'
              label='ZIP Code'
              htmlFor='zip'
              value={checkoutData.zip}
              placeholder='10001'
              onChange={value => handleNumberChange(value, 'updateZip')}
            />

            <Input
              type='text'
              label='City'
              htmlFor='city'
              value={checkoutData.city}
              placeholder='New York'
              onChange={(arg) => dispatch({ type: 'updateCity', payload: arg })}
            />

            <Input
              type='text'
              label='Country'
              htmlFor='country'
              value={checkoutData.country}
              placeholder='United States'
              onChange={(arg) => dispatch({ type: 'updateCountry', payload: arg })}
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
              value={checkoutData.payment_method}
              options={['e-Money', 'Cash on Delivery']}
              onChange={arg => dispatch({ type: 'updatePaymentMethod', payload: arg })}
            />
            
            {checkoutData.payment_method === 'e-Money' ? (
              <>
              
                <Input
                  type='text'
                  label='e-Money Number'
                  htmlFor='emoney'
                  value={checkoutData.e_money_number}
                  placeholder='238521993'
                  onChange={value => handleNumberChange(value, 'updateEMoneyNumber')}
                />

                <Input
                  type='text'
                  label='e-Money PIN'
                  htmlFor='pin'
                  value={checkoutData.pin}
                  placeholder='6891'
                  onChange={value => handleNumberChange(value, 'updatePin')}
                />
              
              </>
            ) : (
              <div
                className={styles.cash_option}
              >

                <CashOnDeliveryIcon />

                <p>
                  The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                </p>

              </div>
            )}

          </fieldset>

        </div>

        <div
          className={styles.summary}
        >

          <h6>
            SUMMARY
          </h6>

          <div>

            {
              cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={undefined}
                />
              ))
            }

          </div>

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

      {success && (
        <Modal
          toggleModal={handleNavigateHome}
        >

          <CheckIcon />

          <h3>
            THANK YOU FOR YOUR ORDER
          </h3>
          
          <p>
            You will receive an email confirmation shortly.
          </p>

          <div>

            <CartItem
              item={cart[0]}
            />

            {cart.length > 0 && (
              <p>
                and {cart.length - 1} other item{cart.length - 1 !== 1 && 's'}
              </p>
            )}

          <div>

            <p>
              GRAND TOTAL
            </p>

            <strong>
              {formatCurrency(calculateCartTotal(cart))}
            </strong>

          </div>

          </div>

          <Button
            variant='solid'
            color='beige'
            onClick={handleNavigateHome}
          >

            BACK TO HOME

          </Button>

        </Modal>
      )}

    </main>
  )
}