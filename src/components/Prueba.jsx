/* eslint-disable react/prop-types */
import useCount from "../hooks/useCount.js";
import HeaderA from "./HeaderA.jsx";
import Button from "./Button.jsx";


function Prueba({ title, subtitle }) {
  const { count, addCount, restartCount, resetCount } = useCount();

  return (
    <div className="container-fluid mx-auto m-0 p-0 bg-slate-100">
      <HeaderA
        title={"Probe"}
        subtitle={"Count with useCount"}
        colorText={"slate"}
      />

      <p className="text-center text-lg text-slate-400 font-bold p-1 mb-4">Count: <span className="text-2xl ms-2">{count}</span></p>

      <div className="grid grid-cols-2 w-[16rem] mx-auto gap-4">
        <div className="grid grid-cols-2 mx-auto gap-1">
          <Button
            handlebutton={addCount}
            classes={"border-4 border-red-700 hover:border-red-900 hover:text-red-400 rounded-full "}
            content={'+'}
          />
          <Button
            handlebutton={restartCount}
            classes={"border-4 border-red-700 hover:border-red-900 hover:text-red-400 rounded-full me-4 "}
            content={'-'}
          />
        </div>
        <Button
          handlebutton={resetCount}
          classes={"border-4 border-red-700 hover:border-red-900 hover:text-red-400 "}
          content={'Reset'}
        />
      </div>
    </div>
  )
}

export default Prueba;