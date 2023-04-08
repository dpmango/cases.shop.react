import { AccardeonPanel } from '@c/Atom'
import { FaqInstruction } from '@c/Content'
import { PageDecoration } from '@c/Layout'
import { ClientOnly } from '@c/Ui'
export const documentProps = {
  title: 'FAQ',
  description: 'Описание страницы',
}

import '@c/Content/Faq/_faq.scss'
import '@c/Content/Faq/_faq.scss'

export const Page = () => {
  const { faq } = useAppSelector((state) => state.sessionState)
  const [activeAccardeon, setActiveAccardeon] = useState<number | null>(null)

  return (
    <PageDecoration sectionClassName="faq">
      <div className="container">
        <p className="faq__title">КАК ЭТО РАБОТАЕТ?</p>
        <div className="faq__wrapper">
          <FaqInstruction />

          <p className="faq__name">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>
          <ClientOnly>
            <ul className="accordeon">
              {faq &&
                faq.map((faqitem, idx) => (
                  <AccardeonPanel
                    key={idx}
                    faqitem={faqitem}
                    isActive={activeAccardeon === idx}
                    handleToggle={() => setActiveAccardeon(idx)}
                  />
                ))}
            </ul>
          </ClientOnly>
        </div>
      </div>
    </PageDecoration>
  )
}
