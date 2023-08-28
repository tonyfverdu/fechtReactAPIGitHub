
export const fechtParams = async (parURL_BASE, parSearch, parSetFunction) => {
  console.log({parURL_BASE, parSearch, parSetFunction})
  try {
    const response = await fetch(`${parURL_BASE}/${parSearch}`);
    const data = await response.json();

    parSetFunction(data);
  } catch (error) {
    console.error(`Error in the fecth API with parURL_BASE: ${parURL_BASE}: `, error.message)
  }
    // finally {

  // }
}