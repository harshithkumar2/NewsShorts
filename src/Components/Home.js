import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Card className={classes.root} className="cards">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="data:image/png;base64,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"
                title="Health"
              />
              <CardContent>
                <Typography
                  className="typo"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  HEALTH
                </Typography>
                <Typography
                  className="typo"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/news/Health">
                <Button size="small" color="primary">
                  View News
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className={classes.root} className="cards">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="data:image/jpeg;base64,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"
                title="sports"
              />
              <CardContent>
                <Typography
                  className="typo"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  SPORTS
                </Typography>
                <Typography
                  className="typo"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/news/Sports">
                <Button size="small" color="primary">
                  View News
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className={classes.root} className="cards">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://3.imimg.com/data3/MA/NF/MY-14063158/bussiness-services-500x500.png"
                title=" bussiness"
              />
              <CardContent>
                <Typography
                  className="typo"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  BUSSINESS
                </Typography>
                <Typography
                  className="typo"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/news/Business">
                <Button size="small" color="primary">
                  View News
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={4}>
          <Card className={classes.root} className="cards">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="data:image/jpeg;base64,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"
                title="Climate"
              />
              <CardContent>
                <Typography
                  className="typo"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  TECHNOLOGY
                </Typography>
                <Typography
                  className="typo"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/news/Technology">
                <Button size="small" color="primary">
                  View News
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className={classes.root} className="cards">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.pwc.com/gx/en/entertainment-media/outlook-2020/gemo-static-hero-2020.png"
                title="education"
              />
              <CardContent>
                <Typography
                  className="typo"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  ENTERTAINMENT
                </Typography>
                <Typography
                  className="typo"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/news/entertainment">
                <Button size="small" color="primary">
                  View News
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className={classes.root} className="cards">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://previews.123rf.com/images/artinspiring/artinspiring1805/artinspiring180500364/101214558-politics-concept-illustration-idea-of-political-institution-.jpg"
                title="politics"
              />
              <CardContent>
                <Typography
                  className="typo"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  POLITICS
                </Typography>
                <Typography
                  className="typo"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/news/politics">
                <Button size="small" color="primary">
                  View News
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={4}>
          <Card className={classes.root} className="cards">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="data:image/jpeg;base64,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"
                title="Climate"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className="typo"
                >
                  SCIENCE
                </Typography>
                <Typography
                  className="typo"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/news/science">
                <Button size="small" color="primary">
                  View News
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
