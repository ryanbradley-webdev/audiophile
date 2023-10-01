import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import styles from './Checkout.module.css'

export default function Checkout() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main
      className={styles.main}
    >
      
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >

        <h1>
          CHECKOUT
        </h1>

        <div
          className={styles.fieldset_container}
        >

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

        <div>

          <Button
            variant='solid'
            color='beige'
          >
            CHECKOUT
          </Button>

        </div>

      </form>

    </main>
  )
}