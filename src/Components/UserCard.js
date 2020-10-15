import React from 'react'
import {Card, CardBody} from 'reactstrap'

export default function UserCard( { user } ) {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={ user.avatar_url } className="img-thumbnail"></img>
            <CardBody>
                               Name : <nobr className="text-primary"> {user.name ? (user.name): 'Not Present'}            </nobr> <br></br>
                                Bio : <nobr className="text-primary"> {user.bio ? (user.bio): 'Not Present' }             </nobr> <br></br>
                              Email : <nobr className="text-primary"> {user.email ? (user.email): 'Not Present' }         </nobr> <br></br> 
                           Location : <nobr className="text-primary"> {user.location ? (user.location): 'Not Present' }   </nobr> <br></br>
                            Company : <nobr className="text-primary"> {user.company ? (user.company): 'Not Present' }     </nobr> <br></br>
                     My Profile URL : <nobr className="text-primary"> {user.html_url ? (user.html_url): 'Not Present' }   </nobr> <br></br>
                My Reposotories URL : <nobr className="text-primary"> {user.repos_url ? (user.repos_url): 'Not Present' } </nobr> <br></br>
                          Followers : <nobr className="text-primary"> {user.followers ? (user.followers): 'Not Present' } </nobr> <br></br>
                          Following : <nobr className="text-primary"> {user.following ? (user.following): 'Not Present' } </nobr> <br></br>
            </CardBody>
        </Card>
    )
}
