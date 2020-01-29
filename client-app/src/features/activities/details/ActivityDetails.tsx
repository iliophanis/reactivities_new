import React from 'react'
import { Card, Icon,Image, Button } from 'semantic-ui-react';

const ActivityDetails = () => {
    return (
    <Card fluid>
        <Image src='/assets/placeholder.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Title</Card.Header>
          <Card.Meta>
            <span >Date</span>
          </Card.Meta>
          <Card.Description>
            Description
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group>
                <Button basic color='blue' content='Edit'/>
                <Button basic color='red' content='Cancel'/>
            </Button.Group> 
        </Card.Content>
    </Card>
    )
}

export default ActivityDetails;