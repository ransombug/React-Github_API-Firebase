import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {ListGroup, ListGroupItem} from 'reactstrap'

export default function Repos({repos_url}) {

    const [repos, setRepos] = useState( [] )

    const fetchrepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect( () => {fetchrepos() } , [repos_url])

    return (                                               
            <ListGroup> <h3><strong>Repository Details</strong></h3>
            {repos.map (repo => (
                <ListGroupItem  key={repo.id}>
                              Name : <nobr className="text-primary"> {repo.name}                                              </nobr> <br></br>
                          Language : <nobr className="text-primary"> {repo.language ? (repo.language): 'Not Present'}         </nobr> <br></br>
                       Description : <nobr className="text-primary"> {repo.description ? (repo.description): 'Not Present'}   </nobr> <br></br>
                    Create Details : <nobr className="text-primary"> {repo.created_at ? (repo.created_at): 'Not Present'}     </nobr> <br></br>
                        Repository : <nobr className="text-primary"> {repo.private ? 'Private ': 'Public' }                   </nobr>
                </ListGroupItem>
            ))}
            </ListGroup>
         );
}
