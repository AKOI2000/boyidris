import { useNavigate } from "react-router-dom"

function AdminExperienceCard({experience}) {
    const navigate = useNavigate();

    function formatDate(dateString) {
      const date = new Date(dateString);
    
      const options = {
        // day: '2-digit',
        month: 'long', 
        year: 'numeric',
        timeZone: 'UTC'
      };
      const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    
      return formattedDate
      }


    return (
        <li>
            <div className="text-box">
              <h4>{experience.companyname}</h4>
              <h5>{experience.role}</h5>
              <p>{experience.datestart ? formatDate(experience.datestart) : ""} - {experience.dateend ? formatDate(experience.dateend) : "Present"}</p>
            </div>

            <div className="button-box">
              <button className="edit" onClick={()=> navigate(`/admin/experience/edit/${experience.id}`)}>Edit</button>
              <button className="delete" onClick={()=> navigate(`/admin/experience/delete/${experience.id}`)}>Delete</button>
            </div>
          </li>
    )
}

export default AdminExperienceCard
