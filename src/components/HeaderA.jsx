function HeaderA({ title, subtitle, colorBG, colorTextTitle, colorTextSubtitle, fontSizeTitle, fontSizeSubtitle }) {
  return (
    <header className={`w-full grid grid-rows-2 gap-[0.1rem] md:gap-2 py-[0.1rem] md:py-2 ${colorBG}`}>
      <h1 className={`${fontSizeTitle} text-center font-extrabold ${colorTextTitle} p-[0.2rem] dark:bg-gray-900`}>
        {title}
      </h1>
      <h5 className={`${fontSizeSubtitle} text-center ${colorTextSubtitle} font-bold p-[0.2rem] dark:bg-gray-900`}>
        {subtitle}
      </h5>
    </header>
  )
}

export default HeaderA;