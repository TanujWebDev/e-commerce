

const Title = ({text1, text2}) => {
  return (
    <div className="inline-flex gap-2 items-center mb-4">
      <p className="text-zinc-500 font-light tracking-widest uppercase">{text1} <span className="text-zinc-900 font-medium">{text2}</span></p>
      <p className="w-8 sm:w-12 h-[1px] bg-zinc-300"></p>
    </div>
  )
}

export default Title
