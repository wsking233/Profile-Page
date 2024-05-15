// Purpose: This file contains the image loader for the projects.
// import ArcadeShooter project images

//import 404 image
import notFound from '../assets/images/404.jpg';

const ImageNotFound = notFound;

const Freejoas = 'freejoas';
const ArcadeShooter = 'spacewar';
const Flatties = 'flatties';

function importImages(floder){
    const images = require.context(`../assets/images/${floder}`, true, /\.(png|jpe?g|svg)$/);
    return images.keys().map((item, index) => {
        return {
            id: index + 1,
            src: images(item),
            image: images(item).default,
        };
    });
}

const ImageArcadeShooter = importImages(ArcadeShooter);
const ImageFreejoas = importImages(Freejoas);
const ImageFlatties = importImages(Flatties);



export { ImageArcadeShooter, ImageFreejoas, ImageFlatties, ImageNotFound };
