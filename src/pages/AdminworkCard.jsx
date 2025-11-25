import { useNavigate } from "react-router-dom"

function AdminworkCard({work}) {
    const navigate = useNavigate();
    const substringWords = work?.description?.substring(0, 100) + "...."
    return (
        <li>
        <div className="img-box">
          {work && <img src={work?.images[0]} alt="" />}
        </div>
        <div className="text-box">
          <h5>{work.title}</h5>
          <p>
            {substringWords}
          </p>
          <div className="button-box">
          <button className="edit" onClick={()=> navigate(`/admin/work/edit/${work.slug}`)}>Edit</button>
          <button className="delete" onClick={()=> navigate(`/admin/work/delete/${work.slug}`)}>Delete</button>
        </div>
        </div>
       
      </li>
    )
}

export default AdminworkCard
