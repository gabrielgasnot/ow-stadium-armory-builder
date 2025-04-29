import { compressString, decompressString } from '../helpers/compression.js';

const exportBuild = (hero, powers, items) => {
    const heroId = hero.id;
    const perkIds = [...powers.map(power => power.id), ...items.map(item => item.id)];
    const buildIds = `${heroId}-${perkIds.join('-')}`;

    return compressString(buildIds);
}

export default exportBuild;
