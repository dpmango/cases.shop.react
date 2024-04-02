export interface IEmptyStateProps {
  title?: string
  children: any
}

export const EmptyState: React.FC<IEmptyStateProps> = ({ title, children }) => {
  return (
    <div className="empty">
      <p className="text-info">{children}</p>
    </div>
  )
}
