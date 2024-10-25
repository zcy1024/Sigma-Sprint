import clsx, { ClassValue } from 'clsx'

//组件公共样式
export function Container({ className, ...props }: { className: ClassValue, props: {[x: string]: string} }) {
  return (
    <div
      className={clsx('mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}