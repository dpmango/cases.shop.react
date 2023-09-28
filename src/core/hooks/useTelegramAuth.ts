import Cookies from 'js-cookie'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { fetchAuth } from '@/core/api/session.api'
import { ITelegramAuthDto } from '@/core/interface/Initialization'
import { useAppDispatch } from '@/core/store'
import { getProfileThunk } from '@/core/store/session.store'
export interface IUseTelegramAuth {
  shopId: string
}

export const useTelegramAuth = ({ shopId }: IUseTelegramAuth) => {
  const dispatch = useAppDispatch()

  const onAuthSuccess = async (req: ITelegramAuthDto) => {
    // const reqq = {
    //   auth_date: 1681211101,
    //   first_name: 'Sergey',
    //   hash: '47c9bc72a891b6f9585d872b1dca065a14cb9fa6ee96e1a30a7e00112c1bf38b',
    //   id: 6073227777,
    // }
    const { data } = await fetchAuth({ shopId, telegram: req })

    try {
      if (data) {
        Cookies.set('access_token', data.access_token)
        Cookies.set('refresh_token', data.refresh_token)

        const { payload } = await dispatch(getProfileThunk())
        console.log({ payload })
        if (!payload) throw new Error()
      }
    } catch (err) {
      toast.error('Что то пошло не так. Обратитьс к администратору')
    }
  }

  return {
    onAuthSuccess,
  }
}
