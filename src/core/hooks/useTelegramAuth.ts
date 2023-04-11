import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { fetchAuth } from '@/core/api/session.api'
import { ITelegramAuthDto } from '~/src/core/interface/Initialization'

export interface IUseTelegramAuth {
  shopId: string
}

export const useTelegramAuth = ({ shopId }: IUseTelegramAuth) => {
  const dispatch = useAppDispatch()

  const onAuthSuccess = async (req: ITelegramAuthDto) => {
    const { data } = await fetchAuth({ shopId, telegram: req })
    // const data = {
    //   access_token: '1',
    //   refresh_token: '2',
    // }

    console.log({ data })
    try {
      if (data) {
        Cookies.set('access_token', data.access_token)
        Cookies.set('refresh_token', data.refresh_token)

        console.log('start profile thunnk')
        const { payload } = await dispatch(getProfileThunk())
        if (!payload) throw new Error()
      }
    } catch (err) {
      console.log(err)
      toast.error('Что то пошло не так. Обратитьс к администратору')
    }
  }

  return {
    onAuthSuccess,
  }
}
