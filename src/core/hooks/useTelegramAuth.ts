import Cookies from 'js-cookie'

import { fetchAuth, getProfile } from '@/core/api/session.api'
import { IProfileDto, ITelegramAuthDto } from '~/src/core/interface/Initialization'

export interface IUseTelegramAuth {
  shopId: string
  cb: (x: IProfileDto) => void
}

export const useTelegramAuth = ({ shopId, cb }: IUseTelegramAuth) => {
  const onAuthSuccess = async (req: ITelegramAuthDto) => {
    const { data } = await fetchAuth({ shopId, telegram: req })

    if (data) {
      Cookies.set('access_token', data.access_token)
      Cookies.set('refresh_token', data.refresh_token)

      const { data: userData } = await getProfile()
      if (userData) cb(userData)
    }
  }

  return {
    onAuthSuccess,
  }
}
