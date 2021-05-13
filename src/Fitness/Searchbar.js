import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Search.css'


class Searchbar extends React.Component {
  state = {
    Abs: 'Top Abs workout',
    Body: 'Top full body workout',
    Shoulder: 'Top Shoulders workout',
    eyes: 'Eye Exercises',
    Meditation: 'meditation music',
  };
  
  handleSubmit = value => {
    this.props.handleFormSubmit(value);
  };

  render() {
    return (
      <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div>
        <Card className="container">
          <span>
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Abs)}>
              <CardMedia
                className="media"
                image="/abs.png"
                title="FULL BODY WORKOUT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  FULL BODY WORKOUT
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>


          <span>
            <CardActionArea className="root">
              <CardMedia
                className="media"
                image="/logo192.png"
                title="FULL BODY WORKOUT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  FULL BODY WORKOUT
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea className="root">
              <CardMedia
                className="media"
                image="/logo192.png"
                title="ABS WORKOUT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ABS WORKOUT
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea className="root">
              <CardMedia
                className="media"
                image="/logo192.png"
                title=" ARMS WORKOUT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ARMS WORKOUT
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea className="root">
              <CardMedia
                className="media"
                image="/logo192.png"
                title=" LEGS WORKOUT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  LEGS WORKOUT
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea className="root">
              <CardMedia
                className="media"
                image="/logo192.png"
                title=" HIIT WORKOUT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  HIIT WORKOUT
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea >
              <CardMedia
                className="media"
                image="/logo192.png"
                title="STUDY MUSIC"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  STUDY MUSIC
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea>
              <CardMedia
                className="media"
                image="/logo192.png"
                title="MEDITATION MUSIC"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  MEDITATION MUSIC
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>
          
        </Card>
      </div>
      <br />
      <br />
      </div>
    );
  }
}
export default Searchbar;
