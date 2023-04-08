import './_accordeon.scss'

import cns from 'classnames'

import type { IFAQDto } from '@/core/interface/Initialization'

interface IPanelProps {
  faqitem: IFAQDto
  isActive: boolean
  handleToggle: () => void
}

const AccardeonPanel: React.FC<IPanelProps> = ({ faqitem, isActive, handleToggle }) => {
  return (
    <li className="accordeon__item">
      <div
        className={cns('accordeon__toggle', isActive ? 'active' : 'closed')}
        onClick={handleToggle}
      >
        {faqitem[0]}
      </div>
      <ul className={cns('accordeon__panel', isActive && '_active')}>
        <li className="accordeon__text">{faqitem[1]}</li>
      </ul>
    </li>
  )
}

export default AccardeonPanel
