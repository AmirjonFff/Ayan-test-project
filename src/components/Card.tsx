import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IPost } from '../type';
import CustomizedDialogs from './Modal';
import { useState } from 'react';

const capitalizeFirstLetter = (text: string): string =>
    text.charAt(0).toUpperCase() + text.slice(1);

export default function ActionAreaCard({ title, body, imageUrl }: IPost & { imageUrl?: string }) {
    const [imgSrc, setImgSrc] = useState<string>(imageUrl || "https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg");

    const handleImageError = () => {
        setImgSrc("https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg");
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: "100%" }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imgSrc}
                    alt="green iguana"
                    onError={handleImageError}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" lineHeight={1.3} component="div">
                        {capitalizeFirstLetter(title)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {body.split(' ').slice(0, 7).join(' ')}...
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ mt: 'auto' }}>
                <CustomizedDialogs title={title} body={body} imageUrl={imgSrc} />
            </CardActions>
        </Card>
    );
}
