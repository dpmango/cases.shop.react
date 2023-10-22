import cns from 'classnames'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
// import ReactQuill from 'react-quill'
import { toast } from 'react-toastify'

import { AttachSvg, CloseIcon, SendSvg } from '@/components/Ui/Icons'
import { createTicket, ICreateTicket, postMessage } from '@/core/api/chat.api'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { getChatListService, getChatMessagesService, setCreateMode } from '@/core/store/chat.store'
import { blobToData, bytesToMegaBytes } from '@/core/utils'

import { UiSelect } from '../Ui'
import { ISelectOption } from '../Ui/Select'
const FILE_MAX_IMAGE_MB = 5
const FILE_MAX_VIDEO_MB = 50
const FILE_ALLOWED_MIME = ['image', 'video']
interface IUpload {
  file: File | null
  encodedImage: string | ArrayBuffer | null
  name: string | null
  error: string | null
}

interface IChatCreateMessage {
  onSuccessCallback: () => void
}

export const ChatCreateMessage: React.FC<IChatCreateMessage> = ({ onSuccessCallback }) => {
  const [value, setValue] = useState('')
  const [dropActive, setDropActive] = useState(false)
  const [upload, setUpload] = useState<IUpload | null>(null)
  const [activeTheme, setActiveTheme] = useState<ISelectOption | null>(null)

  const { activeDialog, themes, createMode } = useAppSelector((store) => store.chatStore)
  const { modal } = useAppSelector((store) => store.uiState)

  const createMessageBox = useRef<HTMLDivElement | null>(null)
  const dispatch = useAppDispatch()

  const sendMessage = useCallback(async () => {
    let sendValue = value

    if ((activeDialog?.id || createMode) && (value || upload)) {
      const removeLastLine = value ? value.split('<p><br></p>') : []
      if (removeLastLine.length >= 2) {
        sendValue = removeLastLine[0]
      }

      await handleMessageSend(sendValue)
    }
  }, [activeDialog, createMode, value, upload])

  const handleKeydown = useCallback(
    // @ts-ignore
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      // && (e.ctrlKey || e.shiftKey)
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

      if (!isMobile && e.key === 'Enter' && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault()
        sendMessage()
      }
    },
    [sendMessage],
  )

  const handleFileSelect = async (e: any, fileDrop?: File) => {
    const file = fileDrop ? fileDrop : (e.target.files[0] as File)

    // limits
    const mimeType = file.type.split('/')[0]
    const sizeInMb = bytesToMegaBytes(file.size)

    const resultFile = {
      file: file,
      type: mimeType,
      name: file.name,
      encodedImage: null,
      error: null,
    } as IUpload

    if (mimeType && !FILE_ALLOWED_MIME.includes(mimeType)) {
      resultFile.error = 'Неверный формат файла'
    }

    if (mimeType.includes('video')) {
      if (sizeInMb && sizeInMb > FILE_MAX_VIDEO_MB) {
        resultFile.error = `Размер видео превышает ${FILE_MAX_VIDEO_MB}Мб`
      }
    } else {
      if (sizeInMb && sizeInMb > FILE_MAX_IMAGE_MB) {
        resultFile.error = `Размер изображения превышает ${FILE_MAX_IMAGE_MB}Мб`
      }
    }

    if (!resultFile.error) {
      const resData = await blobToData(file)

      resultFile.encodedImage = resData
    }

    setUpload(resultFile)

    // await handleMessageSend(value, file)
  }

  const handleMessageSend = useCallback(
    async (sendValue: string) => {
      setValue('')
      setUpload(null)

      if (createMode) {
        const newTicketObj = { name: sendValue } as ICreateTicket
        if (activeTheme) {
          newTicketObj.theme = activeTheme.value
        }

        const { data, error } = await createTicket(newTicketObj)
        if (error) {
          toast.error(error.message || 'Ошибка! У вас уже есть открытый диалог')
        }

        dispatch(setCreateMode(false))
        onSuccessCallback && onSuccessCallback()
        await dispatch(getChatListService())
        return
      }

      if (activeDialog?.id) {
        const { data, error } = await postMessage(activeDialog?.id, sendValue, upload?.file)
        if (error) toast.error(error.message || 'Ошибка при отправке сообщения')

        await dispatch(getChatMessagesService(activeDialog?.id))
        onSuccessCallback && onSuccessCallback()
        await dispatch(getChatListService())
      }
    },
    [value, activeDialog, upload, createMode],
  )

  const onDropEnter = useCallback((e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDropActive(true)
  }, [])

  const onDropLeave = useCallback((e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDropActive(false)
  }, [])

  const handleFileDrop = useCallback(
    (e: DragEvent) => {
      const files = e.dataTransfer?.files

      e.preventDefault()
      e.stopPropagation()

      setDropActive(false)

      if (files && files[0]) {
        handleFileSelect(null, files[0])
      }
    },
    [handleFileSelect, activeDialog],
  )

  const handleFilePaste = useCallback(
    (e: ClipboardEvent) => {
      const data = e.clipboardData
      const file = data && data.files && data.files[0]

      if (file) {
        e.preventDefault()
        e.stopPropagation()

        handleFileSelect(null, file)
      }
    },
    [handleFileSelect],
  )

  useEffect(() => {
    if (createMode || modal !== 'support') return
    const targetListener = window

    targetListener.addEventListener('dragenter', onDropEnter, false)
    targetListener.addEventListener('dragover', onDropEnter, false)
    targetListener.addEventListener('dragleave', onDropLeave, false)
    targetListener.addEventListener('drop', handleFileDrop, false)

    document.addEventListener('paste', handleFilePaste, false)

    return () => {
      targetListener.removeEventListener('dragenter', onDropEnter, false)
      targetListener.removeEventListener('dragover', onDropEnter, false)
      targetListener.removeEventListener('dragleave', onDropLeave, false)
      targetListener.removeEventListener('drop', handleFileDrop, false)

      document.removeEventListener('paste', handleFilePaste, false)
    }
  }, [createMode, modal])

  if (activeDialog?.status === 1) return null

  return (
    <div className="chat__acts chat-acts" ref={createMessageBox}>
      <div className={cns('dropindication', dropActive && '_active')} />

      {!createMode && (
        <label className="chat-acts__file">
          <input className="chat-acts__file-inp" type="file" onChange={handleFileSelect} />
          <AttachSvg />
        </label>
      )}

      <div className="block-window__input">
        {createMode && (
          <UiSelect
            placeholder="Выберите тему"
            position="top"
            value={activeTheme?.value}
            options={themes}
            onSelect={(v) => setActiveTheme(v)}
          />
        )}

        <TextareaAutosize
          className="chat-acts__inp"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          onKeyDown={handleKeydown}
          placeholder={
            !createMode ? 'Напишите сообщение' : 'Напишите тему нового обращения в поддержку'
          }
          maxRows={5}
          minRows={1}
        />

        {upload && (
          <div className="preview">
            {upload.error && <div className="preview__error">{upload.error}</div>}
            {upload.encodedImage && (
              <div className="preview__image">
                <img src={upload.encodedImage as any} alt={upload.name || ''} />
              </div>
            )}
            <div className="preview__title">{upload.name}</div>
            <div className="preview__remove" onClick={() => setUpload(null)}>
              <CloseIcon />
            </div>
          </div>
        )}
      </div>

      <button className="chat-acts__send" onClick={sendMessage}>
        <SendSvg />
      </button>
    </div>
  )
}
