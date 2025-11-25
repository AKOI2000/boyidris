import axios from "axios"
import { useEffect, useState } from "react"

function PostView() {
    const [works, setWorks] = useState([])
    useEffect(()=> {
        async function getWorks () {
            const response = await axios.get("https://boyidrisbe.onrender.com/boy-admin/view");
            const result = await response.data;
            console.log(result);
            setWorks(result)
        }

        getWorks()
    }, [])

    return (
        <div>
           {works.map(work => (
            <div>
                <p>{work.title}</p>
                <p>{work.description}</p>
                {work.images.map(image=> <img src={image} />)}
            </div>
           ))}
        </div>
    )
}

export default PostView
