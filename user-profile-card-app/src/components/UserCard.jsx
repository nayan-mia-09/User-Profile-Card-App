

const UserCard = ({name, img, age ,profession, onGreet}) => {
  return (
    <div className="flex border border-orange-400 h-60 w-50 bg-cyan-400 rounded-xl">
        <div className="ms-3 my-1">
      <img src={img} alt={name} height={100} width={100} className="w-24 h-24 rounded-full block mx-auto mb-4 "/>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h3>{profession}</h3>
      <button onClick={() => onGreet(name)} className=" my-0.5 p-2  rounded text-sm bg-blue-600 hover:bg-blue-700  hover:text-blue-50 cursor-pointer">Say Hello</button>

    </div>
    </div>
    
  )
}

export default UserCard
