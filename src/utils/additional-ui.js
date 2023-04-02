import { Box, Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarsIcon from '@mui/icons-material/Stars';
import { Button, CardActionArea, CardActions } from '@mui/material';

export function Roundcard({ title, imgUrl, id }) {
    return (
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} key={id}>
            <img src={imgUrl} width="180px" height="180px" style={{
                borderRadius: "50%",
                margin: "10px"

            }} />
            <Typography variant="h6" component="h6" sx={{
                margin: "5px",
                alignSelf: "center"
            }}>
                {title}
            </Typography>
        </Box>
    )
}

export function Customcard({ title, imgUrl, food_category, restaurant, ratings, id, wd }) {
    return (
        <Card sx={{ maxWidth: 345, margin: "10px", minWidth: wd ? wd : '300px' }} key={id} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200px"
                    image={imgUrl}
                    alt="green iguana"
                    sx={{ borderRadius: "15px" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Box display="flex" alignItems={'center'} >

                        <StarsIcon style={{
                            color: 'green'
                        }} /> {ratings}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {food_category} <br />
                        {restaurant}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

