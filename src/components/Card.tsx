import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IPost } from '../type';
import { Button, CardActions } from '@mui/material';

export default function ActionAreaCard({ title, body }: IPost) {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: "100%" }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" lineHeight={1.3} component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {body.split(' ').slice(0, 7).join(' ')}...
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ mt: 'auto' }}>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}
