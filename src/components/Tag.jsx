function Tag({ content = 'New', classNames = '' }) {
  return (
    <div
      className={`rounded-full text-white px-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 ${classNames}`}
    >
      {' '}
      {content}
    </div>
  )
}

export default Tag
