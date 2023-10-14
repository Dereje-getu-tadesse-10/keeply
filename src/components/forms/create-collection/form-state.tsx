'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
export const ButtonState = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Creating collection...' : 'Create collection'}
    </button>
  )
}
