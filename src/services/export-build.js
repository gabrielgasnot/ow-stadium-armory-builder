import pako from 'pako';

const exportBuild = (hero, powers, items) => {
    const heroId = hero.id;
    const perkIds = [...powers.map(power => power.id), ...items.map(item => item.id)];
    const buildIds = `${heroId}-${perkIds.join('-')}`;

    const compressedBuildIds = pako.deflate(buildIds);
    return btoa(String.fromCharCode.apply(null, compressedBuildIds));
}

export default exportBuild;
