
export const DesignLi = ({values, setFindData, setSearch}) => {
    
    const handleChange = () => {
        setFindData()
        setFindData(values)
       
      
    }

  return (
    <li>
        <button onClick={handleChange}>
        {values}
        </button>
       
    </li>
  )
}
