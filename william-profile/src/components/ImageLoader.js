// Purpose: This file contains the image loader for the projects.
// import ArcadeShooter project images

//import 404 image
import notFound from '../assets/images/404.jpg';

const ImageNotFound = notFound;

const Freejoas = require.context(`../assets/images/freejoas`, true, /\.(png|jpe?g|svg)$/);
const ArcadeShooter = require.context(`../assets/images/spacewar`, true, /\.(png|jpe?g|svg)$/);;
const Flatties = require.context(`../assets/images/flatties`, true, /\.(png|jpe?g|svg)$/);;

function importImages(images){
    return images.keys().map((item, index) => {
        return {
            id: index + 1,
            src: images(item),
        };
    });
}


const ImageArcadeShooter = importImages(ArcadeShooter);
const ImageFreejoas = importImages(Freejoas);
const ImageFlatties = importImages(Flatties);


export { ImageArcadeShooter, ImageFreejoas, ImageFlatties, ImageNotFound };
