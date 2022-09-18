import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo/Logo'
import toastService from '@/services/toast.service'
import * as S from './styles'
import { useZustand } from '@/store/useZustand'
import { Minus, Plus, ReturnCircled } from '@/components/atoms/Icons'

export const HomePage = () => {
  const { count, increment, decrement, reset } = useZustand()

  const handleReset = () => {
    toastService.success('Store Count reseted')
    reset()
  }

  return (
    <S.Wrapper>
      <Logo />
      <h1>NextJS Boilerplate</h1>

      <S.State>
        <Button icon={<Minus width={20} height={20} />} onClick={decrement} />

        <span>{count}</span>

        <Button icon={<Plus width={20} height={20} />} onClick={increment} />
      </S.State>

      <Button
        icon={<ReturnCircled width={20} height={20} />}
        onClick={handleReset}
      >
        Reset
      </Button>
    </S.Wrapper>
  )
}
