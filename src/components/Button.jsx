function Button({ handleButton, classes, content }) {

  return (
    <div>
      <button className={`flex justify-center items-center mx-auto text-center px-2 py-1 bg-gray-100  rounded-lg shadow-lg ${classes} 
       hover:scale-[0.96] transition-all ease-in-out duration-300`}
        onClick={(ev) => handleButton(ev)}>
        {content}
      </button>
    </div>
  )
}

export default Button;