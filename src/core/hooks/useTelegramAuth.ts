import { fetchAuth, getProfile } from '@/core/api/session.api'
import { IProfileDto, ITelegramAuthDto } from '~/src/core/interface/Initialization'

export interface IUseTelegramAuth {
  shopId: number
  cb: (x: IProfileDto) => void
}

export const useTelegramAuth = ({ shopId, cb }: IUseTelegramAuth) => {
  const onAuthSuccess = async (req: ITelegramAuthDto) => {
    const { data } = await fetchAuth({ shopId, telegram: req })

    if (data) {
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('refresh_token', data.refresh_token)

      const fetchData = async () => {
        const { data } = await getProfile()
        if (data) cb(data)
        return data
      }

      fetchData()
    }
  }

  return {
    onAuthSuccess,
  }
}
