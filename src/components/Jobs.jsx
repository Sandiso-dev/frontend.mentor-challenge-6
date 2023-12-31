import React,{useState} from 'react'
import Data from '../data/data.json'


const Jobs = () => {
    const [data, setData] = useState(Data)

  return (
    <div className="jobs">
        {data.map(item => (
            <div className="job" key={item.id}>
            <img src={item.logo} alt={item.company} />

            <div className="description">
            <span>{item.company}</span> <span className={item.new ? 'second' : ''}>{item.new ? "New" : ''}</span> <span className={item.new ? 'third' : ''}>{item.new ? "Featured" : ''}</span>
            <h4>{item.position}</h4>
            <h4>{item.role}</h4>
            <p>{item.postedAt}  
               {item.contract}  
               {item.location}
            </p>
            <hr />
            </div>

            <div className={item.tool && item.languages ? "toolsTwo" : ''}>
                <span>{item.tools}</span>
                <span>{item.languages}</span>
            </div>

            <div className="tools">
                <span>{item.tools}</span>
                <span>{item.languages}</span>
            </div>

            

        </div>
        ) )}

    </div>
  )
}

export default Jobs