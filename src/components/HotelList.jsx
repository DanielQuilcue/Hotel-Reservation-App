
import { useQuery } from "@tanstack/react-query";
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link } from "wouter";

const fetchHotels = async () => {
  const res = await fetch("http://localhost:3001/hotels");
  if (!res.ok) {
    throw new Error("Network response was not Ok")
  }
  return res.json();
}

function HotelList() {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({ queryKey: ["hotels"], queryFn: fetchHotels });

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error fetching Hotels! {error.message}</div>
  }

  return (
    <>
      <Stack spacing={2} sx={{marginTop: 2}}>
        {hotels.map(hotel => (
          <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
            <Card sx={{ maxWidth: 345, backgroundColor: "#e8e8e8" }}>
              <CardMedia
                sx={{ height: 140 }}
                image={hotel.image}
                title={hotel.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">See details</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Stack>
    </>
  )
}

export default HotelList;