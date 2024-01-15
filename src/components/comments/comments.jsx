import './comments.css'
const rander = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
]
const Comments = () => {
  return (
    <div>
      <h1 className="text-2xl font-[500] ">Mijozlarimizning fikri</h1>
      {rander.map(item => (
        <div key={item.id}>
          <div className="client mt-[20px]">
            <p className="text-base comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, similique? Nobis, illo eum eius hic necessitatibus sequi ad rerum. Perferendis explicabo tempore odit, ab porro pariatur deleniti odio accusantium exercitationem.</p>
            <h1 className="text-xl font-bold p-[20px]">User Name</h1>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Comments