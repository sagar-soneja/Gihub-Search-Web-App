import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import './repos.css'

const Repos = ({repos_url}) => {

    const [repos, setRepos] = useState([])

    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect(() => {
        fetchRepos()
    },[repos_url])

    return (
        <ListGroup>
            {repos.map(repo => (
        //         <ListGroupItem className="border border-info" key={repo.id}>
        //             <div className="text-primary" >
        //             <i className="fa fa-book pr-1" />
        //             <a
        //   href={`https://github.com/${repo.full_name}`}
        //   target="_blank"
        //   rel="noopener norefferer"
        // ><span>{repo.name}</span>
        //      </a>
        //               </div>
        //             <div className="text-secondary" >{repo.language}</div>
        //             <div className="text-info" >{repo.description}</div>
        //         </ListGroupItem>
        <div className="repo">
    <div>
      <div className="title">
        <i className="fa fa-book pr-1" />
        <a
          href={`https://github.com/${repo.full_name}`}
          target="_blank"
          rel="noopener norefferer"
        >
          <span>{repo.name}</span>
        </a>
      </div>
      <span className="description">{repo.description}</span>
    </div>
    <div className="d-flex">
      <div className="subitem">
        <i className="fa fa-code pr-1" />
        <span>{repo.language}</span>
      </div>
      <div className="subitem">
        <i className="fa fa-star pr-1" />
        <span>{repo.stargazers_count}</span>
      </div>
      <div className="subitem">
        <i className="fa fa-code-fork pr-1" />
        <span>{repo.forks_count}</span>
      </div>
    </div>
  </div>
            ))}
        </ListGroup>
    )
}

export default Repos
