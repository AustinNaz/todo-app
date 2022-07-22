import * as React from 'react'

import VerificationForm from './VerifyForm'
import SignUpForm from './SignUpForm'
// import { useCognito } from 'Hooks'
import { SignUpFields, VerificationFields } from 'Types'

type Props = {
  setClose: () => void
}

type State = 'SignUp' | 'Verify'

const SignUp: React.FC<Props> = ({ setClose }) => {
  const [state, setState] = React.useState<State>('SignUp')
  const [formState, setFormState] = React.useState<SignUpFields>()
  const [veriState, setVeriState] = React.useState<VerificationFields>()
  // const { Pool, verifyUser, signIn } = useCognito()

  const verifyAndSignIn = async (email: string, password: string, code: string) => {
    try {
      // const res = await verifyUser(email, password, code)
      // console.log({ res })
      // if (res !== 'SUCCESS') throw new Error('Could not verify user')

      // const session = await signIn(email, password)
      // console.log({ session })
      setClose()
    } catch (err) {
      console.log(err)
    }
  }

  // React.useEffect(() => {
  //   console.log({ formState })
  //   if (!formState || !Pool) return
  //   if (formState.password !== formState.secondPassword) return

  //   Pool.signUp(formState.email, formState.password, [], [], (err, res) => {
  //     if (err) console.log(err)
  //     console.log(res)
  //     setState('Verify')
  //   })
  // }, [formState])

  // React.useEffect(() => {
  //   if (!veriState || !formState) return

  //   verifyAndSignIn(formState.email, formState.password, veriState.code)
  // }, [veriState])

  return state === 'SignUp' ? (
    <SignUpForm setState={setFormState} />
  ) : (
    <VerificationForm setState={setVeriState} />
  )
}

export default SignUp
