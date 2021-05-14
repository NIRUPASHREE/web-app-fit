import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Search.css'


class Searchbar extends React.Component {
  state = {
    Body: 'Top full body workout',
    Abs: 'Top Abs workout',
    Arms: 'Top Shoulders and arms workout',
    Legs: 'Top leg workouts',
    Hiit: 'HIIT Exercises',
    Pilates: 'Full body Pilates',
    Yoga: 'Top Yoga Exercise',
    Meditation: 'Best meditation music',
    Study: 'Best study music',
  };
  
  handleSubmit = value => {
    this.props.handleFormSubmit(value);
  };

  render() {
    return (
      <div>
      <br /> <br /> <br />
      <br /> <br /> <br />
      
      <div>
        <Card className="container">
        <span>
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Body)}>
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
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Abs)}>
              <CardMedia
                className="media"
                image="/images/abs.png"
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
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Arms)}>
              <CardMedia
                className="media"
                image="/images/shoulder.png"
                title="ARMS WORKOUT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ARMS WORKOUT
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Legs)}>
              <CardMedia
                className="media"
                image="/.png"
                title="LEGS WORKOUT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  LEGS WORKOUT
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>


          <span>
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Hiit)}>
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
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Pilates)}> 
              <CardMedia
                className="media"
                image="/images/pilates.png"
                title=" PILATES WORKOUT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                PILATES WORKOUT
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Yoga)}>
              <CardMedia
                className="media"
                image="/logo192.png"
                title="YOGA"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  YOGA
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Meditation)}>
              <CardMedia
                className="media"
                image="/images/Meditation.png"
                title="MEDITATION MUSIC"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  MEDITATION MUSIC
            </Typography>
              </CardContent>
            </CardActionArea>
          </span>

          <span>
            <CardActionArea className="root" onClick={() => this.handleSubmit(this.state.Study)}> 
              <CardMedia
                className="media"
                image="/images/study.png"
                title="STUDY MUSIC"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  STUDY MUSIC
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
