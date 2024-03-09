// Purpose: This file contains the image loader for the projects.
// import ArcadeShooter project images
import image1 from '../assets/images/spacewar/Picture1.png';
import image2 from '../assets/images/spacewar/Picture2.png';
import image3 from '../assets/images/spacewar/Picture3.png';
import image4 from '../assets/images/spacewar/Picture4.png';

// import Freejoas project images
import freejoas1 from '../assets/images/freejoas/freejoas1.png';
import freejoas2 from '../assets/images/freejoas/freejoas2.png';
import freejoas3 from '../assets/images/freejoas/freejoas3.png';
import freejoas4 from '../assets/images/freejoas/freejoas4.png';

//import Flatties project images
import flatties1 from '../assets/images/flatties/flatties1.png';
import flatties2 from '../assets/images/flatties/flatties2.png';
import flatties3 from '../assets/images/flatties/flatties3.png';
import flatties4 from '../assets/images/flatties/flatties4.png';

//import 404 image
import notFound from '../assets/images/404.jpg';

const ImageNotFound = notFound;


const ImageArcadeShooter = [
    {
        id: 1,
        image: image1,
    },
    {
        id: 2,
        image: image2,

    },
    {
        id: 3,
        image: image3,

    },
    {
        id: 4,
        image: image4,

    },
];

const ImageFreejoas = [
    {
        id: 1,
        image: freejoas1,
    },
    {
        id: 2,
        image: freejoas2,

    },
    {
        id: 3,
        image: freejoas3,

    },
    {
        id: 4,
        image: freejoas4,

    },
];

const ImageFlatties = [
    {
        id: 1,
        image: flatties1,
    },
    {
        id: 2,
        image: flatties2,

    },
    {
        id: 3,
        image: flatties3,

    },
    {
        id: 4,
        image: flatties4,

    },
];

export { ImageArcadeShooter, ImageFreejoas, ImageFlatties, ImageNotFound };
