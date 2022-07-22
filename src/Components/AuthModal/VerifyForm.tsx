import * as React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

import { TextField } from 'Components/Form'
import { VerificationFields } from 'Types'

type Props = {
  setState: React.Dispatch<React.SetStateAction<VerificationFields | undefined>>
}

const VerificationForm: React.FC<Props> = ({ setState }) => {
  const { handleSubmit, control } = useForm<VerificationFields>()
  const onSubmit: SubmitHandler<VerificationFields> = data => setState(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField fieldName='code' label='Code' control={control}  />
      <input type='submit' />
    </form>
  )
}

export default VerificationForm
