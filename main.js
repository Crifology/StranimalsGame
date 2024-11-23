import { kaboom, setBackground, scene, go } from 'kaboom';
import { loadAssets } from './assetLoader';

kaboom ({
    width: 1280,
    height: 720,
    scale: 0.7
})

setBackground(Color.fromHex('#36A6E0'));

loadAssets();

scene("world", (worldState) => setWorld(worldState));
scene("battle", (worldState) => setBattle(worldState));

go("world");
