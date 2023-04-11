import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'

import { fetchAuth, getProfile } from '@/core/api/session.api'
import { IProfileDto, ITelegramAuthDto } from '~/src/core/interface/Initialization'

export interface IUseTelegramAuth {
  shopId: string
}

export const useTelegramAuth = ({ shopId }: IUseTelegramAuth) => {
  const dispatch = useDispatch()

  const onAuthSuccess = async (req: ITelegramAuthDto) => {
    const { data } = await fetchAuth({ shopId, telegram: req })

    if (data) {
      Cookies.set('access_token', data.access_token)
      Cookies.set('refresh_token', data.refresh_token)

      dispatch(getProfileThunk())
    }
  }

  return {
    onAuthSuccess,
  }
}
