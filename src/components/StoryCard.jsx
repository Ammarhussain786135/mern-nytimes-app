import React from 'react'
import { Card, Button } from 'react-bootstrap';
const StoryCard = ({story}) => {
    const shortNessPara = (para, ln) => {
        const paragraph = para;
        const charLimit = ln;
        if (paragraph.length > charLimit) {
            const shortenedParagraph = paragraph.slice(0, charLimit) + '...';
            return shortenedParagraph;
        } else {
            return paragraph;
        }
    }
    return (
        <Card style={{ minHeight: "450px" }} className='mb-4'>
            <Card.Img style={{ height: "236px" }} variant="top" src={story.multimedia[0].url} alt={story.title} />
            <Card.Body>
                <Card.Title>{shortNessPara(story.title, 50)}</Card.Title>
                <Card.Text>{shortNessPara(story.abstract, 100)}</Card.Text>
                <Button variant="primary" href={story.url} target="_blank" rel="noopener noreferrer">
                    Read More
                </Button>
            </Card.Body>
        </Card>
    )
}

export default StoryCard